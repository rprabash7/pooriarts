import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiTruck, FiShield, FiGift, FiHeadphones } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import promoBg from "../assets/Promo.png";

export default function PromoBanner() {
  return (
    <section
      aria-labelledby="promo-heading"
      className="relative isolate overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24"
    >
      {/* Keep the photo visible on the right on desktop; move focus right on phones. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-[position:65%_center] sm:bg-[position:60%_center] lg:bg-center"
        style={{ backgroundImage: `url(${promoBg})` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40 sm:from-black/95 sm:via-black/75 sm:to-black/25 lg:from-black/90 lg:via-black/65 lg:to-transparent"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/50" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-5 text-[10px] font-semibold leading-relaxed tracking-[0.13em] text-gray-200 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
            ART SUPPLIES <span aria-hidden="true">|</span> PRINTS <span aria-hidden="true">|</span> CUSTOM ART <span aria-hidden="true">|</span> FOR EVERY CREATIVE SOUL
          </p>

          <h2 id="promo-heading" className="mb-5 font-heading text-[clamp(2.7rem,10vw,4rem)] font-bold italic leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-yellow-400">Art Makes</span>
            <br />
            <span>Life </span>
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-cyan-400 bg-clip-text text-transparent">
              Brighter
            </span>{" "}
            <FaHeart aria-hidden="true" className="inline align-middle text-2xl text-red-500 sm:text-3xl" />
          </h2>

          <p className="mb-7 max-w-md text-sm leading-relaxed text-gray-100 sm:mb-8 sm:text-lg">
            Premium Art Products for Your Creative Journey
          </p>

          <Link
            to="/shop"
            className="inline-flex min-h-12 items-center justify-center gap-3 bg-yellow-400 px-8 py-3 text-base font-bold text-black shadow-lg transition-colors hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
            style={{ clipPath: "polygon(2% 10%, 100% 0%, 98% 90%, 0% 100%)" }}
          >
            Shop Now <FiArrowRight aria-hidden="true" />
          </Link>

          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-5 text-xs sm:grid-cols-4 sm:gap-3 sm:text-sm lg:mt-12">
            <div className="flex items-center gap-2"><FiTruck aria-hidden="true" className="shrink-0 text-xl" /><span>Fast<br />Delivery</span></div>
            <div className="flex items-center gap-2 sm:border-l sm:border-white/40 sm:pl-3"><FiShield aria-hidden="true" className="shrink-0 text-xl" /><span>Secure<br />Payments</span></div>
            <div className="flex items-center gap-2 sm:border-l sm:border-white/40 sm:pl-3"><FiGift aria-hidden="true" className="shrink-0 text-xl" /><span>Unique<br />Art Products</span></div>
            <div className="flex items-center gap-2 sm:border-l sm:border-white/40 sm:pl-3"><FiHeadphones aria-hidden="true" className="shrink-0 text-xl" /><span>24/7<br />Support</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}