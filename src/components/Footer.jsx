import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import footerBg from "../assets/Footerbanner.png";
import pooriLogo from "../assets/poori-art-logo.jpg";

// Add support, policy, and social links only after their pages/accounts exist.
const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Custom Order", to: "/custom-order" },
  { label: "Cart", to: "/cart" },
];

const categories = [
  "Paintings",
  "Drawings",
  "Digital Art",
  "Posters",
  "Sketchbooks",
  "Art Prints",
  "Merchandise",
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="relative isolate overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${footerBg})` }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/80 sm:bg-black/75 lg:bg-black/65" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_1.7fr_1fr] lg:gap-8 xl:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              aria-label="Poori Arts — Home"
              className="inline-block rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              
            </Link>
            
            
            
          </div>

          <div className="grid grid-cols-1 gap-8 min-[380px]:grid-cols-2 sm:col-span-2 sm:grid-cols-3 lg:col-span-1 lg:gap-5">
            <nav aria-label="Footer quick links">
              <h2 className="font-heading text-xl italic">Quick Links</h2>
              <span aria-hidden="true" className="mb-4 mt-1 block w-16 border-t-2 border-red-500" />
              <ul className="space-y-1 text-sm text-gray-200">
                {quickLinks.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="inline-flex min-h-9 items-center hover:text-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer shop categories">
              <h2 className="font-heading text-xl italic">Shop by Category</h2>
              <span aria-hidden="true" className="mb-4 mt-1 block w-16 border-t-2 border-yellow-400" />
              <ul className="space-y-1 text-sm text-gray-200">
                {categories.map((category) => (
                  <li key={category}>
                    <Link to="/shop" className="inline-flex min-h-9 items-center hover:text-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                      {category}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/custom-order" className="inline-flex min-h-9 items-center hover:text-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Custom Orders
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="min-[380px]:col-span-2 sm:col-span-1">
              <h2 className="font-heading text-xl italic">Customer Support</h2>
              <span aria-hidden="true" className="mb-4 mt-1 block w-16 border-t-2 border-sky-400" />
              <p className="max-w-xs text-sm leading-relaxed text-gray-200">
                Need help or want a personalized artwork? Tell us about it through our custom order page.
              </p>
              <Link to="/custom-order" className="mt-2 inline-flex min-h-10 items-center text-sm font-semibold text-sky-300 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Request custom art →
              </Link>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 lg:border-l lg:border-white/25 lg:pl-8 xl:pl-10">
            <h2 className="font-heading text-xl italic">Stay Connected</h2>
            <span aria-hidden="true" className="mb-4 mt-1 block w-16 border-t-2 border-purple-400" />
            <p className="max-w-sm text-sm leading-relaxed text-gray-200">
              Follow Poori Arts for new creations and behind-the-scenes updates.
            </p>
            <p className="mt-6 font-heading text-lg italic">
              Follow for More Art <FaHeart aria-hidden="true" className="inline text-sm text-red-500" />
            </p>
            <span aria-hidden="true" className="mt-1 block w-16 border-t-2 border-red-500" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-gray-300 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Poori Arts. All rights reserved.</p>
          <p className="font-heading text-base italic text-white">
            Thank you for being here <FaHeart aria-hidden="true" className="inline text-xs text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
} 