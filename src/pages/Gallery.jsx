import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiStar,
  FiChevronRight,
  FiRefreshCw,
} from "react-icons/fi";
import { fetchProductsFromSheet } from "../services/sheetProducts.js";
import { useWishlist } from "../context/WishlistContext.jsx";
import { categories } from "../data/categories.js";

const filters = [
  { label: "All", value: "all" },
  { label: "Krishna Paintings", value: "krishna" },
  { label: "Nature", value: "nature" },
  { label: "Portraits", value: "portrait" },
  { label: "Abstract", value: "abstract" },
  { label: "Animals", value: "animals" },
  { label: "Landscapes", value: "landscape" },
];

function GalleryCard({ product }) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wished = isWishlisted(product.id);

  return (
    <article className="group relative overflow-hidden rounded-xl bg-neutral-900">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <button
        type="button"
        onClick={() => toggleWishlist(product)}
        aria-label={
          wished
            ? `Remove ${product.title} from wishlist`
            : `Add ${product.title} to wishlist`
        }
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black"
      >
        <FiHeart className={wished ? "fill-red-500 text-red-500" : ""} />
      </button>

      <div className="p-3">
        <Link
          to={`/product/${product.id}`}
          className="block truncate text-sm font-semibold text-white hover:text-yellow-400"
        >
          {product.title}
        </Link>
        <p className="mt-1 text-xs text-gray-400">
          {product.size || "Custom size"} | Handmade artwork
        </p>
      </div>
    </article>
  );
}

export default function Gallery() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [loading, setLoading] = useState(true);

  const { toggleWishlist, isWishlisted } = useWishlist();

  useEffect(() => {
    let active = true;

    fetchProductsFromSheet()
      .then((rows) => {
        if (active) {
          setProducts(rows.filter((product) => product.gallery === "yes"));
        }
      })
      .catch(() => {
        if (active) setProducts([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      const value = search.toLowerCase();
      result = result.filter((product) =>
        `${product.title} ${product.category} ${product.style}`
          .toLowerCase()
          .includes(value)
      );
    }

    if (activeFilter !== "all") {
      result = result.filter((product) => {
        const data = `${product.title} ${product.category} ${product.style}`.toLowerCase();
        return data.includes(activeFilter);
      });
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, search, activeFilter, sortBy]);

  const categoryCount = (slug) =>
    products.filter((product) => product.category === slug).length;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-4 py-12 sm:px-6 sm:py-16">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1800&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />

        <div className="relative mx-auto max-w-7xl">
          <nav className="text-xs text-gray-400 sm:text-sm">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <FiChevronRight className="mx-1 inline" />
            <span className="text-white">Gallery</span>
          </nav>

          <div className="mt-10 max-w-3xl text-center lg:text-left">
            <p className="text-xs font-semibold tracking-[0.35em] text-gray-300">
              OUR GALLERY
            </p>
            <h1 className="mt-3 font-heading text-5xl font-bold italic leading-tight sm:text-6xl">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent">
                Art Gallery
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-200 sm:text-base">
              A collection of handmade paintings and artworks that bring
              creativity, positivity and colors to life.
            </p>

            <div className="mt-7 grid max-w-xl grid-cols-2 gap-4 text-xs text-gray-200 sm:grid-cols-4">
              <span>✦ Original<br />Artworks</span>
              <span>◇ Unique<br />Designs</span>
              <span>♡ Handmade<br />with Passion</span>
              <span>♧ Art for<br />a Brighter World</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeFilter === filter.value
                    ? "bg-red-600 text-white"
                    : "bg-neutral-900 text-gray-300 hover:bg-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex items-center gap-2 rounded-full border border-white/20 bg-neutral-900 px-4 py-2 text-sm text-gray-300">
              <FiSearch />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search gallery..."
                className="w-full bg-transparent outline-none placeholder:text-gray-500 sm:w-44"
              />
            </label>

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-full border border-white/20 bg-neutral-900 px-4 py-2 text-sm text-white outline-none"
            >
              <option value="latest">Sort by: Latest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="h-fit rounded-xl border border-white/10 bg-neutral-950 p-4 lg:sticky lg:top-24">
            <h2 className="mb-4 text-lg font-semibold">Art Categories</h2>

            <Link
              to="/gallery"
              className="mb-1 flex justify-between rounded-lg bg-white/10 px-3 py-2 text-sm"
            >
              <span>All Artworks</span>
              <span>{products.length}</span>
            </Link>

            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/shop/${category.slug}`}
                className="mb-1 flex justify-between rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
              >
                <span>{category.title}</span>
                <span>{categoryCount(category.slug)}</span>
              </Link>
            ))}
          </aside>

          <div>
            {loading && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square animate-pulse rounded-xl bg-neutral-800"
                  />
                ))}
              </div>
            )}

            {!loading && filteredProducts.length === 0 && (
              <div className="rounded-xl border border-white/10 bg-neutral-900 p-10 text-center text-gray-300">
                No gallery artworks found. In Google Sheet, set the
                <strong className="mx-1 text-white">gallery</strong>
                column to
                <strong className="ml-1 text-white">yes</strong>.
              </div>
            )}

            {!loading && filteredProducts.length > 0 && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
                {filteredProducts.map((product) => (
                  <GalleryCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>

        {!loading && filteredProducts.length > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
            >
              <FiRefreshCw /> Load More Artworks →
            </button>
          </div>
        )}
      </section>
    </main>
  );
}