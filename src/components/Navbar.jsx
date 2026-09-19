import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useCart } from "../context/CartContext.jsx";

/* ============================================================
   ⚠️ LOGO IMAGE SETUP INSTRUCTIONS
   ============================================================
   Mee logo file "Poori-Art.jpg" ni:
   1. src/assets/ folder lo save cheyandi (exact name: poori-art-logo.jpg
      ani rename cheyandi, leda kింద import line lo mee exact
      filename tho update cheyandi).
   2. Kింద unna "PLACEHOLDER" text-logo block ni DELETE cheyandi.
   3. "REAL LOGO" block ni UNCOMMENT cheyandi.
   ============================================================ */

// ---------- REAL LOGO (uncomment after adding file to src/assets/) ----------
import pooriLogo from "../assets/poori-art-logo.jpg";

export default function Navbar() {
  const { cartCount } = useCart();

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold pb-1 border-b-2 transition ${
      isActive
        ? "text-red-500 border-red-500"
        : "text-white border-transparent hover:text-red-400"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 gap-6">
        {/* LOGO */}
        <Link to="/" className="flex items-center shrink-0">
          {/* ---------- REAL LOGO (uncomment once image is added) ---------- */}
          { <img src={pooriLogo} alt="Poori Arts Logo" className="h-14 w-auto object-contain" /> }

          {/* ---------- PLACEHOLDER LOGO (delete once real image is added) ---------- */}
          
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* SEARCH BAR */}
        <div className="hidden lg:flex items-center bg-neutral-900 border border-neutral-700 rounded-full px-4 py-2 w-64">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search artworks..."
            className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-500"
          />
        </div>

        {/* ICONS + SOCIAL */}
        <div className="flex items-center gap-5">
          <Link to="/account" className="text-white hover:text-red-400">
            <FiUser size={20} />
          </Link>

          <Link to="/cart" className="relative text-white hover:text-red-400">
            <FiShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

          <span className="hidden md:block w-px h-6 bg-neutral-700" />

          <div className="hidden md:flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs hover:opacity-80">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center text-white text-xs hover:opacity-80">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white text-xs hover:opacity-80">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="w-7 h-7 rounded-md bg-red-600 flex items-center justify-center text-white text-xs hover:opacity-80">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* TAGLINE */}
        <div className="hidden xl:block text-right shrink-0">
          <p className="italic font-heading text-white text-sm leading-tight">Create</p>
          <p className="italic font-heading text-white text-sm leading-tight">Imagine</p>
          <p className="italic font-heading text-red-500 text-sm leading-tight underline decoration-red-500">Inspire</p>
        </div>
      </div>
    </header>
  );
}