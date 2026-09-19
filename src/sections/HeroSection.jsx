import React from "react";
import { Link } from "react-router-dom";
import { FaPaintBrush, FaPlay, FaHeart, FaStar } from "react-icons/fa";
import { GiPalette } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";

/* ============================================================
   ⚠️ HERO BACKGROUND IMAGE SETUP INSTRUCTIONS
   ============================================================
   Mee "Hero-Image.jpg" (artist painting Jagannath canvas) photo ni:
   1. src/assets/ folder lo "hero-bg.jpg" ane pేరutho save cheyandi.
   2. Kింద unna "PLACEHOLDER IMAGE" line ni DELETE cheyandi.
   3. "REAL IMAGE" line ni UNCOMMENT cheyandi.
   4. File save చేయండి, browser auto refresh avutundi.
   ============================================================ */

// ---------- REAL IMAGE (uncomment after adding photo to src/assets/) ----------
import heroBg from "../assets/hero-bg.png";

// ---------- PLACEHOLDER IMAGE (delete once real photo is added) ----------


export default function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-black"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ---------- Decorative paint-splash corners ---------- */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-red-500 via-yellow-400 to-white opacity-70 blur-2xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-16 -left-6 w-72 h-72 bg-gradient-to-tr from-blue-400 via-yellow-300 to-red-500 opacity-60 blur-2xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-gradient-to-tl from-blue-400 via-cyan-300 to-red-400 opacity-50 blur-2xl rounded-full pointer-events-none" />

      {/* ---------- Vertical side text (right) ---------- */}
      <div className="hidden lg:flex flex-col gap-2 absolute right-10 top-24 text-white text-xs tracking-widest font-semibold z-10">
        <span>ART</span>
        <span>IDEAS</span>
        <span>PASSION</span>
        <span>CREATIVITY</span>
        <span>FREEDOM</span>
        <span className="w-8 h-0.5 bg-red-500 mt-1" />
      </div>

      <div className="hidden lg:block absolute right-10 bottom-14 text-right text-white italic font-heading text-lg z-10">
        <p>More Art</p>
        <p>A Brighter <FaHeart className="inline text-red-500 text-sm align-middle" /></p>
        <p>World</p>
      </div>

      {/* ---------- Main content ---------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="max-w-xl">
          <p className="text-gray-300 text-xs tracking-[0.3em] font-semibold mb-4">
            WELCOME TO POORI ARTS <span className="inline-block w-10 border-t border-gray-400 align-middle ml-2" />
          </p>

          <h1 className="font-heading italic text-5xl md:text-6xl font-bold leading-[1.05] mb-5">
            <span className="text-white">Art Brings</span>
            <br />
            <span className="text-yellow-400">Colors</span>{" "}
            <span className="text-red-500">to Life</span>
          </h1>

          <p className="text-gray-300 text-sm md:text-base mb-8 max-w-md">
            Exploring creativity through drawings, paintings and visual stories.
            Join me on a colorful journey of imagination, inspiration and art.
          </p>

          <div className="flex flex-wrap gap-4 mb-9">
            <Link
              to="/gallery"
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition"
            >
              <FaPaintBrush size={14} /> Explore Artworks →
            </Link>
            <Link
              to="/about"
              className="border border-gray-400 hover:border-white text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition"
            >
              <FaPlay size={12} /> Watch My Journey
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-white text-sm mb-8">
            <div className="flex items-center gap-2">
              <GiPalette className="text-lg" />
              <span>Unique<br />Artworks</span>
            </div>
            <span className="w-px h-8 bg-gray-600" />
            <div className="flex items-center gap-2">
              <FaHeart className="text-lg" />
              <span>Creative<br />Community</span>
            </div>
            <span className="w-px h-8 bg-gray-600" />
            <div className="flex items-center gap-2">
              <FaStar className="text-lg" />
              <span>Inspiration<br />Everyday</span>
            </div>
          </div>

          <p className="italic font-heading text-white text-lg">
            "Art is not just what I do,<br />It's who I am"
          </p>
          <span className="block w-24 border-t-2 border-red-500 mt-2" />
        </div>
      </div>

      {/* ---------- Scroll down indicator ---------- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white text-xs tracking-widest z-10">
        <span className="w-6 h-9 border-2 border-white rounded-full flex items-start justify-center p-1 mb-2">
          <span className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </span>
        SCROLL DOWN
        <FiChevronDown className="mt-1" />
      </div>
    </section>
  );
}