import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiImage } from "react-icons/fi";
import {
  FaPaintBrush,
  FaPencilAlt,
  FaDesktop,
  FaBookOpen,
  FaImages,
  FaShoppingBag,
  FaMagic,
  FaHeart,
} from "react-icons/fa";

/* ============================================================
   ⚠️ IMAGE FILENAME MAPPING
   ============================================================
   Mee ఇచ్చిన file names ni ee categories తో map chesanu, best-guess prakaram.
   Filename ekkadaina category ki sarigga match kakapote, kింద
   import line lo aa filename ni sరిగ్గా mార్చండి.

   Painting.png      -> Paintings
   Drawing.png       -> Drawings
   Digitalart.png    -> Digital Art
   Poster.png        -> Posters
   Sketch.png        -> Sketchbooks
   Artprint.png      -> Art Prints
   Bloodart.png      -> Merchandise   (mug/product photo) — rename cheyocchu
   Custome.png       -> Custom Orders

   Add cheyandi:
   1. src/assets/ folder lo pai file names తోనే save cheయండి.
   2. Kింద "REAL IMAGES" block uncomment cheయండి.
   3. "PLACEHOLDER IMAGES" block delete cheయండి.
   ============================================================ */

// ---------- REAL IMAGES (uncomment after adding files to src/assets/) ----------
import painting from "../assets/Painting.png";
import drawing from "../assets/Drawing.png";
import digitalArt from "../assets/Digitalart.png";
import poster from "../assets/Poster.png";
import sketch from "../assets/Sketches.png";
import artPrint from "../assets/Artprint.png";
import merchandise from "../assets/Bloodart.png";
import customOrder from "../assets/Custome.png";

// ---------- PLACEHOLDER IMAGES (delete this block once real images are uncommented) ----------


const categories = [
  { id: 1, title: "Paintings", count: "120+ Artworks", image: painting, icon: <FaPaintBrush />, iconBg: "bg-red-500" },
  { id: 2, title: "Drawings", count: "90+ Artworks", image: drawing, icon: <FaPencilAlt />, iconBg: "bg-yellow-400" },
  { id: 3, title: "Digital Art", count: "80+ Artworks", image: digitalArt, icon: <FaDesktop />, iconBg: "bg-sky-400" },
  { id: 4, title: "Posters", count: "70+ Artworks", image: poster, icon: <FiImage />, iconBg: "bg-orange-400" },
  { id: 5, title: "Sketchbooks", count: "50+ Products", image: sketch, icon: <FaBookOpen />, iconBg: "bg-green-500" },
  { id: 6, title: "Art Prints", count: "60+ Products", image: artPrint, icon: <FaImages />, iconBg: "bg-purple-500" },
  { id: 7, title: "Merchandise", count: "40+ Products", image: merchandise, icon: <FaShoppingBag />, iconBg: "bg-pink-500" },
  { id: 8, title: "Custom Orders", count: "Let's Create Together", image: customOrder, icon: <FaMagic />, iconBg: "bg-cyan-400" },
];

export default function CategoryGrid() {
  return (
    <section className="relative bg-black py-16 px-6 overflow-hidden">
      {/* ---------- Decorative corner splash text ---------- */}
      <p className="hidden md:block absolute top-6 left-6 italic text-white text-sm leading-tight z-10">
        Different<br />Art<br />Same Passion
        <span className="block w-14 border-t-2 border-red-500 mt-1" />
      </p>
      <p className="hidden md:block absolute top-6 right-6 italic text-white text-sm leading-tight text-right z-10">
        Art<br />For A Brighter<br />World <FaHeart className="inline text-red-500 text-xs" />
        <span className="block w-14 border-t-2 border-red-500 mt-1 ml-auto" />
      </p>
      <p className="hidden md:block absolute bottom-6 left-6 italic text-white text-sm leading-tight z-10">
        Create<br />Imagine<br />Inspire
        <span className="block w-14 border-t-2 border-red-500 mt-1" />
      </p>
      <p className="hidden md:block absolute bottom-6 right-6 italic text-white text-sm leading-tight text-right z-10">
        Colors<br />Make Life<br />Beautiful
        <span className="block w-14 border-t-2 border-red-500 mt-1 ml-auto" />
      </p>

      {/* ---------- Decorative paint-splash blur corners ---------- */}
      <div className="absolute -top-10 left-16 w-40 h-40 bg-gradient-to-br from-yellow-400 via-red-500 to-blue-400 opacity-40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 right-16 w-40 h-40 bg-gradient-to-tl from-cyan-400 via-blue-400 to-red-500 opacity-40 blur-3xl rounded-full pointer-events-none" />

      {/* ---------- Header ---------- */}
      <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
        <p className="text-gray-400 text-xs tracking-[0.35em] font-semibold flex items-center justify-center gap-4">
          <span className="w-10 border-t border-gray-500" /> EXPLORE OUR CREATIVE WORLD <span className="w-10 border-t border-gray-500" />
        </p>
        <h2 className="font-heading italic text-5xl md:text-6xl font-bold mt-3">
          <span className="text-white">Shop by </span>
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Category</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-4">
          Discover a wide range of artworks that bring creativity, positivity and colors to your space.
        </p>
      </div>

      {/* ---------- Category grid ---------- */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to="/shop"
            className="relative h-56 rounded-2xl overflow-hidden group shadow-lg"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm ${cat.iconBg}`}>
                  {cat.icon}
                </span>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{cat.title}</p>
                  <p className="text-gray-300 text-xs">{cat.count}</p>
                </div>
              </div>
              <span className="w-8 h-8 rounded-full border border-white/70 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition">
                <FiArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* ---------- View All button ---------- */}
      <div className="flex items-center justify-center gap-4 mt-12 relative z-10">
        <span className="hidden sm:block w-24 border-t border-gray-600" />
        <Link
          to="/shop"
          className="bg-white text-black font-medium px-7 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition"
        >
          View All Categories <FiArrowRight />
        </Link>
        <span className="hidden sm:block w-24 border-t border-gray-600" />
      </div>
    </section>
  );
}