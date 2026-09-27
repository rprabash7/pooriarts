import React, { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FiChevronRight, FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { fetchProductsFromSheet } from "../services/sheetProducts.js";
import { categories } from "../data/categories.js";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const liked = isWishlisted(product.id);

  return (
    <article className="group relative overflow-hidden rounded-xl bg-neutral-900">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={liked ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80"
        >
          <FiHeart className={liked ? "fill-red-500 text-red-500" : ""} />
        </button>
      </div>

      <div className="px-1 pb-3 pt-2 sm:px-1">
        <h3 className="truncate text-sm font-semibold text-white sm:text-base">{product.title}</h3>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="font-bold text-white">₹{Number(product.price).toLocaleString("en-IN")}</p>
          <button
            type="button"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.title} to cart`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            <FiShoppingCart />
          </button>
        </div>
        <div className="mt-1 flex items-center gap-1 text-xs text-yellow-400">
          <FiStar className="fill-yellow-400" />
          <span>{product.rating || "New"}</span>
          {product.reviews ? <span className="text-gray-400">({product.reviews})</span> : null}
        </div>
      </div>
    </article>
  );
}

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const category = categories.find((item) => item.slug === categorySlug);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");

    fetchProductsFromSheet()
      .then((rows) => {
        if (active) setProducts(rows);
      })
      .catch(() => {
        if (active) setError("Products are temporarily unavailable. Please try again.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => product.category === categorySlug);
    if (sortBy === "price-low") return [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") return [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") return [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [products, categorySlug, sortBy]);

  const countFor = (slug) => products.filter((product) => product.category === slug).length;

  if (!category) return <Navigate to="/shop" replace />;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Category hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-neutral-950 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${category.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold tracking-[0.3em] text-gray-300 sm:text-xs">HANDMADE ARTWORKS</p>
          <h1 className="mt-2 font-heading text-5xl font-bold italic sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">{category.title}</span>
          </h1>
          <p className="mt-3 max-w-lg text-sm text-gray-200 sm:text-base">{category.tagline}</p>
          <div className="mt-7 grid max-w-xl grid-cols-2 gap-4 text-xs text-gray-200 sm:grid-cols-4">
            <span>✦ Original<br />Artworks</span>
            <span>♡ Made with<br />Passion</span>
            <span>♧ Safe & Secure<br />Delivery</span>
            <span>✺ Unique<br />Designs</span>
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-4 text-xs text-gray-400 sm:px-6 sm:text-sm">
        <Link to="/" className="hover:text-white">Home</Link><FiChevronRight className="mx-1 inline" />
        <Link to="/shop" className="hover:text-white">Shop</Link><FiChevronRight className="mx-1 inline" />
        <span className="text-white">{category.title}</span>
      </nav>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[240px_1fr] lg:gap-8">
        <aside className="rounded-xl border border-white/10 bg-neutral-950 p-4 lg:sticky lg:top-24 lg:h-fit">
          <h2 className="mb-3 text-base font-semibold">Categories</h2>
          <ul className="space-y-1 text-sm">
            <li><Link to="/shop" className="flex justify-between rounded-lg px-3 py-2 text-gray-300 hover:bg-white/10"><span>All Categories</span><span>{products.length}</span></Link></li>
            {categories.map((item) => (
              <li key={item.slug}>
                <Link to={`/shop/${item.slug}`} className={`flex justify-between rounded-lg px-3 py-2 ${item.slug === categorySlug ? "bg-red-600 text-white" : "text-gray-300 hover:bg-white/10"}`}>
                  <span>{item.title}</span><span>{countFor(item.slug)}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-white/10 pt-5">
            <h2 className="font-semibold">Price Range</h2>
            <div className="mt-4 h-2 rounded-full bg-red-600" />
            <div className="mt-2 flex justify-between text-xs text-gray-300"><span>₹0</span><span>₹10,000</span></div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <h2 className="font-semibold">Size</h2>
            <div className="mt-3 space-y-2 text-sm text-gray-300"><p>□ Small <span className="float-right">0</span></p><p>□ Medium <span className="float-right">0</span></p><p>□ Large <span className="float-right">0</span></p></div>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-300">{loading ? "Loading products..." : `Showing ${filteredProducts.length} products`}</p>
            <label className="flex items-center gap-2 text-sm text-gray-300">Sort by:
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="rounded-full border border-white/20 bg-neutral-900 px-3 py-2 text-white outline-none">
                <option value="latest">Latest</option><option value="price-low">Price: Low</option><option value="price-high">Price: High</option><option value="rating">Top Rated</option>
              </select>
            </label>
          </div>

          {error && <p className="rounded-xl border border-red-500/40 bg-red-950/40 p-4 text-sm text-red-300">{error}</p>}
          {loading && <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">{Array.from({ length: 8 }).map((_, i) => <div key={i} className="aspect-square animate-pulse rounded-xl bg-neutral-800" />)}</div>}
          {!loading && !error && filteredProducts.length === 0 && <div className="rounded-xl border border-white/10 bg-neutral-900 p-8 text-center text-gray-300">No products added in this category yet.</div>}
          {!loading && !error && filteredProducts.length > 0 && <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>}
        </div>
      </section>
    </main>
  );
}
