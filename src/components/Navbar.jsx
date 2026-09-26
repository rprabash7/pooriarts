import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext.jsx";
import pooriLogo from "../assets/poori-art-logo.jpg";

// Add other pages here after their routes exist in App.jsx.
const links = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const navLinkClass = ({ isActive }) =>
    `inline-flex min-h-11 items-center border-b-2 px-1 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
      isActive
        ? "border-red-500 text-red-400"
        : "border-transparent text-white hover:border-red-500 hover:text-red-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between gap-3 px-4 sm:h-[82px] sm:px-6 lg:gap-5 lg:px-8 xl:px-10">
        <Link
          to="/"
          aria-label="Poori Arts — Home"
          className="flex min-w-0 shrink-0 items-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <img
            src={pooriLogo}
            alt="Poori Arts"
            className="h-11 w-auto max-w-[155px] object-contain sm:h-14 sm:max-w-[200px] xl:max-w-[230px]"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-3 lg:flex xl:gap-6">
          {links.map(({ label, to }) => (
            <NavLink key={to} to={to} end={to === "/"} className={navLinkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <Link
            to="/cart"
            aria-label={`Cart, ${cartCount} items`}
            className="relative flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:text-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FiShoppingCart aria-hidden="true" size={23} />
            {cartCount > 0 && (
              <span aria-hidden="true" className="absolute right-0 top-0 flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:text-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          >
            {menuOpen ? <FiX aria-hidden="true" size={25} /> : <FiMenu aria-hidden="true" size={25} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="border-t border-white/10 bg-neutral-950 px-4 pb-5 pt-2 sm:px-6 lg:hidden">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-1">
            {links.map(({ label, to }) => (
              <NavLink key={to} to={to} end={to === "/"} className={navLinkClass}>
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}