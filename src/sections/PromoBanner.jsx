import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiTruck, FiShield, FiGift, FiHeadphones } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

/* ============================================================
   ⚠️ PROMO BACKGROUND IMAGE SETUP INSTRUCTIONS
   ============================================================
   Mee "Promo.png" (paint brushes + canvas + Poori Arts products)
   photo ni:
   1. src/assets/ folder lo already "Promo.png" ane pేరutho save
      chesi unnaru ani cheppāru — filename exact గా అలానే undāli
      (capital P, .png extension).
   2. Kింద unna "PLACEHOLDER IMAGE" line ni DELETE cheyandi.
   3. "REAL IMAGE" line ni UNCOMMENT cheyandi.
   4. File save చేయండి, browser auto refresh avutundi.
   ============================================================ */

// ---------- REAL IMAGE (uncomment after confirming file exists in src/assets/) ----------
import promoBg from "../assets/Promo.png";



export default function PromoBanner() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden bg-black"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.15) 100%), url(${promoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ---------- Decorative paint splash corners ---------- */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-yellow-400 via-red-500 to-blue-400 opacity-30 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-16 -left-10 w-56 h-56 bg-gradient-to-tr from-blue-400 via-cyan-300 to-yellow-400 opacity-30 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-14 right-0 w-56 h-56 bg-gradient-to-tl from-pink-400 via-red-400 to-cyan-300 opacity-25 blur-3xl rounded-full pointer-events-none" />

      
      

      

      {/* ---------- Main content ---------- */}
      <div className="relative z-10 max-w-2xl">
        <p className="text-gray-300 text-xs md:text-sm tracking-[0.25em] font-semibold mb-5">
          ART SUPPLIES &nbsp;|&nbsp; PRINTS &nbsp;|&nbsp; CUSTOM ART &nbsp;|&nbsp; FOR EVERY CREATIVE SOUL
        </p>

        <h2 className="font-heading italic text-5xl md:text-6xl font-bold leading-[1.05] mb-5">
          <span className="text-yellow-400">Art Makes</span>
          <br />
          <span className="text-white">Life </span>
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-cyan-400 bg-clip-text text-transparent">
            Brighter
          </span>{" "}
          <FaHeart className="inline text-red-500 text-3xl align-middle" />
        </h2>

        <p className="text-gray-300 text-base md:text-lg mb-8">
          Premium Art Products for Your Creative Journey
        </p>

        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-md shadow-lg transition"
          style={{ clipPath: "polygon(2% 10%, 100% 0%, 98% 90%, 0% 100%)" }}
        >
          Shop Now <FiArrowRight />
        </Link>

        <div className="flex flex-wrap items-center gap-6 md:gap-8 mt-10 text-white text-sm">
          <div className="flex items-center gap-2">
            <FiTruck size={20} />
            <span>Fast<br />Delivery</span>
          </div>
          <span className="hidden sm:block w-px h-8 bg-gray-600" />
          <div className="flex items-center gap-2">
            <FiShield size={20} />
            <span>Secure<br />Payments</span>
          </div>
          <span className="hidden sm:block w-px h-8 bg-gray-600" />
          <div className="flex items-center gap-2">
            <FiGift size={20} />
            <span>Unique<br />Art Products</span>
          </div>
          <span className="hidden sm:block w-px h-8 bg-gray-600" />
          <div className="flex items-center gap-2">
            <FiHeadphones size={20} />
            <span>24/7<br />Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}