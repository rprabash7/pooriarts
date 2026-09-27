import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { fetchProductsFromSheet } from "../services/sheetProducts.js";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

// NOTE: Each Sheet row must have: id, title, price, category, image.
// This file does not use the old demo data in services/api.js.
function ShopProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wished = isWishlisted(product.id);

  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900 text-white">
      <div className="relative aspect-square overflow-hidden bg-neutral-800">
        {product.image ? (
          <img src={product.image} alt={product.title} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">Image coming soon</div>
        )}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={wished ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
          aria-pressed={wished}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 hover:bg-black"
        >
          <FiHeart aria-hidden="true" className={wished ? "fill-red-500 text-red-500" : ""} />
        </button>
      </div>
      <div className="p-3 sm:p-4">
        <h2 className="truncate text-sm font-semibold sm:text-base">{product.title}</h2>
        <Link to={`/shop/${product.category}`} className="mt-1 inline-block text-xs capitalize text-gray-400 hover:text-white">
          {product.category.replaceAll("-", " ")}
        </Link>
        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="font-semibold">₹{product.price.toLocaleString("en-IN")}</p>
          <button
            type="button"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.title} to cart`}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 hover:bg-red-700"
          >
            <FiShoppingCart aria-hidden="true" />
          </button>
        </div>
        {product.rating > 0 && (
          <p className="mt-1 flex items-center gap-1 text-xs text-yellow-400">
            <FiStar aria-hidden="true" className="fill-yellow-400" /> {product.rating}
            {product.reviews > 0 && <span className="text-gray-400">({product.reviews})</span>}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    fetchProductsFromSheet()
      .then((rows) => {
        if (active) setProducts(rows);
      })
      .catch(() => {
        if (active) setError("Unable to load products. Please refresh the page later.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, []);

  return (
    <section className="min-h-[60vh] bg-black px-4 py-10 text-white sm:px-6 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.25em] text-gray-400">POORI ARTS COLLECTION</p>
        <h1 className="mb-2 mt-2 font-heading text-4xl font-bold italic sm:text-5xl">
          Shop <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">All Art</span>
        </h1>
        <p className="mb-8 text-sm text-gray-300">
          {loading ? "Loading products..." : `${products.length} product${products.length === 1 ? "" : "s"} available`}
        </p>

        {error && <p role="alert" className="rounded-lg border border-red-500/40 bg-red-950/40 p-4 text-red-200">{error}</p>}
        {loading && <div className="grid grid-cols-1 gap-5 min-[400px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="aspect-square animate-pulse rounded-xl bg-neutral-800" />)}</div>}
        {!loading && !error && products.length === 0 && <p className="rounded-lg border border-white/10 bg-neutral-900 p-6 text-gray-300">No products added yet.</p>}
        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 gap-5 min-[400px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => <ShopProductCard key={product.id} product={product} />)}
          </div>
        )}
      </div>
    </section>
  );
}