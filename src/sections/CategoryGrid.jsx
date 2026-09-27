import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiImage } from "react-icons/fi";
import { FaPaintBrush, FaPencilAlt, FaDesktop, FaBookOpen, FaImages, FaShoppingBag, FaMagic, FaHeart } from "react-icons/fa";

import painting from "../assets/Painting.png";
import drawing from "../assets/Drawing.png";
import digitalArt from "../assets/Digitalart.png";
import poster from "../assets/Poster.png";
import sketch from "../assets/Sketches.png";
import artPrint from "../assets/Artprint.png";
import merchandise from "../assets/Bloodart.png";
import customOrder from "../assets/Custome.png";

const categories = [
  { slug: "paintings", title: "Paintings", count: "120+ Artworks", image: painting, icon: FaPaintBrush, iconBg: "bg-red-500" },
  { slug: "drawings", title: "Drawings", count: "90+ Artworks", image: drawing, icon: FaPencilAlt, iconBg: "bg-yellow-400" },
  { slug: "digital-art", title: "Digital Art", count: "80+ Artworks", image: digitalArt, icon: FaDesktop, iconBg: "bg-sky-400" },
  { slug: "posters", title: "Posters", count: "70+ Artworks", image: poster, icon: FiImage, iconBg: "bg-orange-400" },
  { slug: "sketchbooks", title: "Sketchbooks", count: "50+ Products", image: sketch, icon: FaBookOpen, iconBg: "bg-green-500" },
  { slug: "art-prints", title: "Art Prints", count: "60+ Products", image: artPrint, icon: FaImages, iconBg: "bg-purple-500" },
  { slug: "merchandise", title: "Merchandise", count: "40+ Products", image: merchandise, icon: FaShoppingBag, iconBg: "bg-pink-500" },
  { slug: "custom-orders", title: "Custom Orders", count: "Let's Create Together", image: customOrder, icon: FaMagic, iconBg: "bg-cyan-400", to: "/custom-order" },
];

export default function CategoryGrid() {
  return (
    <section aria-labelledby="categories-heading" className="relative isolate overflow-hidden bg-black px-4 py-14 text-white sm:px-6 sm:py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-24 hidden h-48 w-48 rounded-full bg-gradient-to-br from-yellow-400 via-red-500 to-blue-500 opacity-20 blur-3xl lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-12 hidden h-48 w-48 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-red-500 opacity-20 blur-3xl lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
          <p aria-hidden="true" className="absolute -left-28 top-0 hidden -rotate-6 text-left font-heading text-base italic leading-tight xl:block">Different<br />Art<br />Same Passion<span className="mt-1 block w-14 border-t-2 border-red-500" /></p>
          <p aria-hidden="true" className="absolute -right-28 top-0 hidden rotate-3 text-right font-heading text-base italic leading-tight xl:block">Art<br />For A Brighter<br />World <FaHeart className="inline text-xs text-red-500" /><span className="ml-auto mt-1 block w-14 border-t-2 border-red-500" /></p>
          <p className="flex items-center justify-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-gray-300 sm:gap-4 sm:text-xs sm:tracking-[0.3em]"><span className="hidden w-8 border-t border-gray-500 sm:block" />EXPLORE OUR CREATIVE WORLD<span className="hidden w-8 border-t border-gray-500 sm:block" /></p>
          <h2 id="categories-heading" className="mt-3 font-heading text-4xl font-bold italic leading-tight sm:text-5xl lg:text-6xl">Shop by <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Category</span></h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">Discover a wide range of artworks that bring creativity, positivity and colors to your space.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link key={cat.slug} to={cat.to || `/shop/${cat.slug}`} aria-label={`Explore ${cat.title}`} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 sm:aspect-[3/2] lg:aspect-[4/3]">
                <img src={cat.image} alt={cat.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 sm:bottom-4 sm:left-4 sm:right-4">
                  <span className="flex min-w-0 items-center gap-2 sm:gap-3"><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base text-white shadow-md ${cat.iconBg}`}><Icon /></span><span className="min-w-0"><span className="block text-sm font-semibold leading-tight sm:text-base">{cat.title}</span><span className="block text-xs text-gray-200">{cat.count}</span></span></span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/80 text-white transition-colors group-hover:bg-white group-hover:text-black"><FiArrowRight /></span>
                </span>
              </Link>
            );
          })}
        </div>

        <div className="relative mt-9 flex items-center justify-center gap-4 sm:mt-12"><span className="hidden w-20 border-t border-gray-600 sm:block" /><Link to="/shop" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200 sm:text-base">View All Categories <FiArrowRight /></Link><span className="hidden w-20 border-t border-gray-600 sm:block" /></div>
      </div>
    </section>
  );
}