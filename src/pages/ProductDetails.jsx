import React, { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FiChevronRight, FiHeart, FiShoppingCart, FiStar, FiTruck, FiPhone, FiMessageCircle, FiCheckCircle } from "react-icons/fi";
import { fetchProductsFromSheet } from "../services/sheetProducts.js";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

const WHATSAPP_NUMBER = "916300280561"; // Replace with real WhatsApp number: country code + number, no + or spaces.
const BUSINESS_PHONE = "916300280561"; // Replace with real business phone number, no spaces.

function MiniProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden rounded-xl bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
    >
      <div className="aspect-square overflow-hidden bg-neutral-800">
        <img src={product.image} alt={product.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <p className="truncate px-2 py-2 text-xs font-semibold text-white sm:text-sm">{product.title}</p>
    </Link>
  );
}

export default function ProductDetails() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
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
        if (active) setError("We couldn't load this artwork right now. Please try again.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const product = useMemo(() => products.find((item) => item.id === productId), [products, productId]);
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 8);
  }, [products, product]);

  if (!loading && !error && !product) return <Navigate to="/shop" replace />;

  if (loading) {
    return (
      <main className="min-h-screen bg-black px-4 py-12 text-white sm:px-6">
        <div className="mx-auto max-w-7xl animate-pulse">
          <div className="h-5 w-52 rounded bg-neutral-800" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)_320px]">
            <div className="aspect-square rounded-2xl bg-neutral-800" />
            <div className="space-y-4"><div className="h-12 w-3/4 rounded bg-neutral-800" /><div className="h-20 rounded bg-neutral-800" /><div className="h-12 rounded bg-neutral-800" /></div>
            <div className="h-72 rounded-2xl bg-neutral-800" />
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return <main className="min-h-screen bg-black px-4 py-20 text-center text-red-300"><p>{error}</p><Link to="/shop" className="mt-5 inline-block text-white underline">Back to Shop</Link></main>;
  }

  const wished = isWishlisted(product.id);
  const whatsappText = encodeURIComponent(`Hello Poori Arts, I am interested in: ${product.title} (₹${product.price}). Please share more details.`);

  return (
    <main className="min-h-screen bg-black text-white">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-5 text-xs text-gray-400 sm:px-6 sm:text-sm">
        <Link to="/" className="hover:text-white">Home</Link><FiChevronRight className="mx-1 inline" />
        <Link to="/shop" className="hover:text-white">Shop</Link><FiChevronRight className="mx-1 inline" />
        <Link to={`/shop/${product.category}`} className="capitalize hover:text-white">{product.category.replaceAll("-", " ")}</Link><FiChevronRight className="mx-1 inline" />
        <span className="text-white">{product.title}</span>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)_320px] lg:items-start">
        {/* Main product image */}
        <div className="relative overflow-hidden rounded-2xl bg-neutral-900">
          <img src={product.image} alt={product.title} className="aspect-square w-full object-cover" />
          <button
            type="button"
            onClick={() => toggleWishlist(product)}
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
          >
            <FiHeart className={wished ? "fill-red-500 text-red-500" : ""} size={20} />
          </button>
        </div>

        {/* Product information */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-300">
            <FiStar className="fill-yellow-400" /> Original Artwork
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold italic leading-tight sm:text-5xl">{product.title}</h1>
          <p className="mt-4 text-2xl font-bold text-yellow-400">₹{Number(product.price).toLocaleString("en-IN")}</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-yellow-400"><FiStar className="fill-yellow-400" /> {product.rating || "New"} {product.reviews ? <span className="text-gray-400">({product.reviews} reviews)</span> : null}</div>

          <p className="mt-5 leading-relaxed text-gray-300">
            A special handmade artwork created with care. Contact Poori Arts for customization, availability, size options and delivery details.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-200 sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-neutral-900 p-3"><FiCheckCircle className="mb-2 text-yellow-400" />100% Handmade</div>
            <div className="rounded-xl border border-white/10 bg-neutral-900 p-3"><FiStar className="mb-2 text-yellow-400" />Premium Quality</div>
            <div className="rounded-xl border border-white/10 bg-neutral-900 p-3"><FiHeart className="mb-2 text-yellow-400" />Unique Design</div>
            <div className="rounded-xl border border-white/10 bg-neutral-900 p-3"><FiTruck className="mb-2 text-yellow-400" />Delivery Available</div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-neutral-900 p-4 text-sm text-gray-300">
            <p><span className="font-semibold text-white">Category:</span> <span className="capitalize">{product.category.replaceAll("-", " ")}</span></p>
            {product.size && <p className="mt-2"><span className="font-semibold text-white">Size:</span> {product.size}</p>}
            {product.style && <p className="mt-2"><span className="font-semibold text-white">Style:</span> {product.style}</p>}
          </div>

          <button type="button" onClick={() => addToCart(product)} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 sm:w-auto">
            <FiShoppingCart /> Add to Cart
          </button>
        </div>

        {/* Contact card */}
        <aside className="rounded-2xl border border-white/10 bg-neutral-900 p-5 lg:sticky lg:top-24">
          <h2 className="font-heading text-2xl font-bold italic text-yellow-400">Interested in This Artwork? <FiHeart className="inline text-red-500" /></h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">For price, size customization or more details, contact us directly.</p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`} target="_blank" rel="noopener noreferrer" className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3 font-semibold text-white hover:bg-green-600"><FiMessageCircle /> Chat on WhatsApp</a>
          <a href={`tel:+${BUSINESS_PHONE}`} className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"><FiPhone /> Call Now</a>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs text-gray-300">
            <div className="rounded-lg border border-white/10 p-2">Custom<br />Sizes</div><div className="rounded-lg border border-white/10 p-2">Framing<br />Option</div><div className="rounded-lg border border-white/10 p-2">Local<br />Delivery</div>
          </div>
        </aside>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="mb-5 flex items-center justify-between gap-4"><h2 className="font-heading text-3xl font-bold italic">More <span className="text-yellow-400">Artworks</span> You May Like</h2><Link to={`/shop/${product.category}`} className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white hover:text-black">View All →</Link></div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">{relatedProducts.map((item) => <MiniProductCard key={item.id} product={item} />)}</div>
        </section>
      )}
    </main>
  );
}
