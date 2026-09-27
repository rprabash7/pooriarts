import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiMinus,
  FiPlus,
  FiTrash2,
  FiMessageCircle,
  FiPhone,
  FiTruck,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import { fetchProductsFromSheet } from "../services/sheetProducts.js";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

const WHATSAPP_NUMBER = "916300280561";
const BUSINESS_PHONE = "916300280561";

function SuggestedCard({ product }) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const navigate = useNavigate();
  const wished = isWishlisted(product.id);

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
      role="link"
      tabIndex={0}
      onClick={() => navigate(`/product/${product.id}`)}
      onKeyDown={(event) => {
        if (event.key === "Enter") navigate(`/product/${product.id}`);
      }}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label={wished ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black"
        >
          <FiHeart className={wished ? "fill-red-500 text-red-500" : ""} />
        </button>
      </div>
      <div className="p-2 sm:p-3">
        <p className="truncate text-xs font-semibold text-white sm:text-sm">{product.title}</p>
        <p className="mt-1 text-xs font-bold text-yellow-400 sm:text-sm">
          ₹{Number(product.price).toLocaleString("en-IN")}
        </p>
        {product.rating > 0 && (
          <p className="mt-1 flex items-center gap-1 text-[11px] text-yellow-400">
            <FiStar className="fill-yellow-400" /> {product.rating}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Cart() {
  const { cartItems, removeFromCart, updateQty, cartTotal } = useCart();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    let active = true;
    fetchProductsFromSheet()
      .then((products) => {
        if (active) setSuggestions(products.slice(0, 8));
      })
      .catch(() => {
        if (active) setSuggestions([]);
      });
    return () => { active = false; };
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const whatsappText = encodeURIComponent(
    `Hello Poori Arts, I want to order these artworks:\n${cartItems
      .map((item) => `• ${item.title} × ${item.qty} = ₹${Number(item.price * item.qty).toLocaleString("en-IN")}`)
      .join("\n")}\n\nTotal: ₹${Number(cartTotal).toLocaleString("en-IN")}`
  );

  if (cartItems.length === 0) {
    return (
      <main className="min-h-[70vh] bg-black px-4 py-20 text-center text-white sm:px-6">
        <FiShoppingCart className="mx-auto mb-5 text-5xl text-yellow-400" />
        <h1 className="font-heading text-4xl font-bold italic">Your Cart is Empty</h1>
        <p className="mx-auto mt-3 max-w-md text-gray-300">
          Explore our handmade collection and add an artwork you love.
        </p>
        <Link
          to="/shop"
          className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
        >
          <FiArrowLeft /> Explore Artworks
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-neutral-950 px-4 py-10 sm:px-6 sm:py-14">
        <div aria-hidden="true" className="absolute -left-14 top-4 h-44 w-44 rounded-full bg-gradient-to-tr from-red-600 via-yellow-400 to-blue-500 opacity-20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Cart</span>
          </nav>
          <h1 className="mt-4 font-heading text-5xl font-bold italic sm:text-6xl">
            Your <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Cart</span>{" "}
            <FiHeart className="inline text-red-500" />
          </h1>
          <p className="mt-3 max-w-xl text-sm text-gray-300 sm:text-base">
            Your selected artworks are waiting for you. Update quantity or contact us to place your order.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
          <div className="hidden grid-cols-[minmax(260px,1fr)_110px_130px_110px_48px] gap-4 border-b border-white/10 px-6 py-4 text-sm font-semibold text-gray-300 lg:grid">
            <span>Product</span><span>Price</span><span>Quantity</span><span>Subtotal</span><span />
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid gap-4 border-b border-white/10 p-4 sm:grid-cols-[110px_1fr_auto] sm:items-center lg:grid-cols-[110px_minmax(0,1fr)_110px_130px_110px_48px] lg:px-6 lg:py-5"
            >
              <img src={item.image} alt={item.title} className="aspect-square w-full rounded-xl object-cover sm:h-24 sm:w-24" />
              <div className="min-w-0">
                <Link to={`/product/${item.id}`} className="truncate text-base font-semibold hover:text-yellow-400">{item.title}</Link>
                <p className="mt-2 text-xs text-gray-400">Size: {item.size || "Custom size available"}</p>
                <p className="mt-1 text-xs text-gray-400">Style: {item.style || "Handmade artwork"}</p>
              </div>
              <p className="text-base font-bold text-white">₹{Number(item.price).toLocaleString("en-IN")}</p>
              <div className="flex items-center rounded-lg border border-white/20">
                <button type="button" onClick={() => updateQty(item.id, item.qty - 1)} disabled={item.qty <= 1} aria-label={`Decrease quantity for ${item.title}`} className="flex h-10 w-10 items-center justify-center disabled:opacity-40"><FiMinus /></button>
                <span className="flex h-10 w-10 items-center justify-center border-x border-white/20">{item.qty}</span>
                <button type="button" onClick={() => updateQty(item.id, item.qty + 1)} aria-label={`Increase quantity for ${item.title}`} className="flex h-10 w-10 items-center justify-center"><FiPlus /></button>
              </div>
              <p className="font-bold text-white">₹{Number(item.price * item.qty).toLocaleString("en-IN")}</p>
              <button type="button" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.title} from cart`} className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 hover:bg-red-600 hover:text-white"><FiTrash2 /></button>
            </div>
          ))}

          <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <Link to="/shop" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black">
              <FiArrowLeft /> Continue Shopping
            </Link>
            <button
              type="button"
              onClick={() => cartItems.forEach((item) => removeFromCart(item.id))}
              className="inline-flex min-h-11 items-center justify-center gap-2 text-sm text-gray-300 hover:text-red-400"
            >
              <FiTrash2 /> Clear Cart
            </button>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-white/10 bg-neutral-950 p-5 lg:sticky lg:top-24">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="mt-5 flex justify-between border-b border-white/10 pb-4 text-gray-300">
            <span>Items ({totalItems})</span>
            <span>₹{Number(cartTotal).toLocaleString("en-IN")}</span>
          </div>
          <div className="mt-4 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span className="text-yellow-400">₹{Number(cartTotal).toLocaleString("en-IN")}</span>
          </div>
          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
            <h3 className="font-heading text-2xl font-bold italic text-yellow-400">Interested to Order?</h3>
            <p className="mt-2 text-sm text-gray-300">Contact us directly on WhatsApp or call for confirmation and customization.</p>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`} target="_blank" rel="noopener noreferrer" className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3 font-semibold hover:bg-green-600">
              <FiMessageCircle /> Chat on WhatsApp →
            </a>
            <a href={`tel:+${BUSINESS_PHONE}`} className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 font-semibold hover:bg-blue-700">
              <FiPhone /> Call Now →
            </a>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] text-gray-300">
            <span><FiTruck className="mx-auto mb-1 text-yellow-400" />Local Delivery</span>
            <span><FiStar className="mx-auto mb-1 text-yellow-400" />Custom Sizes</span>
            <span><FiHeart className="mx-auto mb-1 text-yellow-400" />Happy Customers</span>
          </div>
        </aside>
      </section>

      {suggestions.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="font-heading text-4xl font-bold italic">You May Also <span className="text-yellow-400">Like</span> <FiHeart className="inline text-red-500" /></h2>
            <Link to="/shop" className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white hover:text-black">View All →</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {suggestions.map((product) => <SuggestedCard key={product.id} product={product} />)}
          </div>
        </section>
      )}
    </main>
  );
}