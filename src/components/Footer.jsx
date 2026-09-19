import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiYoutube, FiTwitter, FiFacebook, FiMail, FiTruck, FiShield } from "react-icons/fi";
import { FaPinterestP, FaHeart, FaLeaf } from "react-icons/fa";

/* ============================================================
   ⚠️ FOOTER BACKGROUND IMAGE SETUP INSTRUCTIONS
   ============================================================
   Mee "Footerbanner.jpg" (paint brushes + easel + Poori Arts logo)
   photo ni:
   1. src/assets/ folder lo already "Footerbanner.jpg" ane pేరutho
      save chesi unnaru — filename & extension exact గా చెక్ చేయండి.
   2. Kింద unna "PLACEHOLDER IMAGE" line ni DELETE cheyandi.
   3. "REAL IMAGE" line ni UNCOMMENT cheyandi.
   4. File save చేయండి, browser auto refresh avutundi.
   ============================================================ */

// ---------- REAL IMAGE (uncomment after confirming filename in src/assets/) ----------
import footerBg from "../assets/Footerbanner.png";

// ---------- PLACEHOLDER IMAGE (delete once real image is uncommented) ----------


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* ---------- Main footer content with background image ---------- */}
      <div
        className="relative py-16 px-6"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.5) 100%), url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Decorative corner text */}
        
        

        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_2fr_1.3fr] gap-10 relative z-10">
          {/* ---------- Logo + description ---------- */}
          <div>
            
            
            
          </div>
          

          {/* ---------- Link columns ---------- */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="italic font-heading text-lg mb-1">Quick Links</p>
              <span className="block w-14 border-t-2 border-red-500 mb-4" />
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/" className="hover:text-red-400">Home</Link></li>
                <li><Link to="/shop" className="hover:text-red-400">Shop</Link></li>
                <li><Link to="/about" className="hover:text-red-400">About Us</Link></li>
                <li><Link to="/gallery" className="hover:text-red-400">Gallery</Link></li>
                <li><Link to="/blog" className="hover:text-red-400">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
              </ul>
            </div>

            <div>
              <p className="italic font-heading text-lg mb-1">Shop by Category</p>
              <span className="block w-16 border-t-2 border-yellow-400 mb-4" />
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/shop" className="hover:text-yellow-400">Paintings</Link></li>
                <li><Link to="/shop" className="hover:text-yellow-400">Drawings</Link></li>
                <li><Link to="/shop" className="hover:text-yellow-400">Digital Art</Link></li>
                <li><Link to="/shop" className="hover:text-yellow-400">Posters</Link></li>
                <li><Link to="/shop" className="hover:text-yellow-400">Sketchbooks</Link></li>
                <li><Link to="/shop" className="hover:text-yellow-400">Art Prints</Link></li>
                <li><Link to="/shop" className="hover:text-yellow-400">Merchandise</Link></li>
                <li><Link to="/custom-order" className="hover:text-yellow-400">Custom Orders</Link></li>
              </ul>
            </div>

            <div>
              <p className="italic font-heading text-lg mb-1">Customer Support</p>
              <span className="block w-16 border-t-2 border-sky-400 mb-4" />
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/help" className="hover:text-sky-400">Help Center</Link></li>
                <li><Link to="/track-order" className="hover:text-sky-400">Track Your Order</Link></li>
                <li><Link to="/shipping" className="hover:text-sky-400">Shipping & Delivery</Link></li>
                <li><Link to="/returns" className="hover:text-sky-400">Returns & Refunds</Link></li>
                <li><Link to="/faqs" className="hover:text-sky-400">FAQs</Link></li>
                <li><Link to="/contact" className="hover:text-sky-400">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* ---------- Stay connected ---------- */}
          <div className="md:border-l md:border-gray-700 md:pl-10">
            <p className="italic font-heading text-lg mb-1">Stay Connected</p>
            <span className="block w-16 border-t-2 border-purple-400 mb-4" />
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter and get the latest updates, new artworks and special offers.
            </p>
            <form className="flex items-center gap-2 mb-5">
              <div className="flex items-center bg-transparent border border-gray-500 rounded-full px-4 py-2 flex-1">
                <FiMail className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-500"
                />
              </div>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition"
              >
                Subscribe
              </button>
            </form>

            <div className="flex items-center gap-3 mb-4">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center hover:opacity-80">
                <FiInstagram size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center hover:opacity-80">
                <FiYoutube size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:opacity-80">
                <FiFacebook size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center hover:opacity-80">
                <FiTwitter size={16} />
              </a>
              <a href="#" aria-label="Pinterest" className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center hover:opacity-80">
                <FaPinterestP size={14} />
              </a>
            </div>

            <p className="italic text-sm">
              Follow For More Art <FaHeart className="inline text-red-500 text-xs" />
            </p>
            <span className="block w-16 border-t-2 border-red-500 mt-1" />
          </div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="border-t border-gray-800 bg-black px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Poori Arts. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2"><FaLeaf /> Eco Friendly<br />Packaging</span>
            <span className="flex items-center gap-2"><FiShield /> Secure<br />Payments</span>
            <span className="flex items-center gap-2"><FiTruck /> Worldwide<br />Shipping</span>
            <span className="flex items-center gap-2"><FaHeart /> Supporting<br />Artists</span>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>

          <p className="italic text-white text-sm">
            Thank You<br />For Being Here <FaHeart className="inline text-red-500 text-xs" />
          </p>
        </div>
      </div>
    </footer>
  );
}