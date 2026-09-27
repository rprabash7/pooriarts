import React from "react";
import { Link } from "react-router-dom";
import { FaPaintBrush, FaPlay, FaHeart, FaStar } from "react-icons/fa";
import { GiPalette } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
import heroBg from "../assets/hero-bg.png";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-black text-white sm:min-h-[740px] lg:min-h-[min(900px,calc(100svh-76px))]"
    >
      {/* Use one image layer so the crop can change across screen sizes. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-[position:66%_center] sm:bg-[position:60%_center] lg:bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35 sm:from-black/95 sm:via-black/65 sm:to-black/25 lg:from-black/90 lg:via-black/55 lg:to-black/15"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/70 lg:from-black/10 lg:to-black/30" />

      {/* Keep decorative effects out of the text area on small screens. */}
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 hidden h-60 w-60 rounded-full bg-gradient-to-tr from-blue-500 via-yellow-400 to-red-500 opacity-30 blur-3xl lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 hidden h-52 w-52 rounded-full bg-gradient-to-br from-red-500 via-yellow-400 to-cyan-400 opacity-20 blur-3xl lg:block" />

      <div aria-hidden="true" className="absolute right-5 top-16 hidden flex-col gap-2 text-xs font-semibold tracking-[0.18em] xl:flex 2xl:right-12">
        <span>ART</span>
        <span>IDEAS</span>
        <span>PASSION</span>
        <span>CREATIVITY</span>
        <span>FREEDOM</span>
        <span className="mt-1 h-0.5 w-8 bg-red-500" />
      </div>

      <div aria-hidden="true" className="absolute bottom-20 right-5 hidden text-right font-heading text-lg italic xl:block 2xl:right-12">
        <p>More Art</p>
        <p>A Brighter <FaHeart className="inline align-middle text-sm text-red-500" /></p>
        <p>World</p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
        <div className="max-w-[580px] lg:max-w-[620px]">
          <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-gray-200 sm:text-xs sm:tracking-[0.3em]">
            WELCOME TO POORI ARTS
            <span aria-hidden="true" className="w-7 border-t border-gray-400 sm:w-10" />
          </p>

          <h1 id="hero-heading" className="mb-5 font-heading text-[clamp(2.7rem,10vw,4rem)] font-bold italic leading-[1.04] sm:text-6xl lg:text-7xl">
            <span>Art Brings</span>
            <br />
            <span className="text-yellow-400">Colors</span>{" "}
            <span className="text-red-500">to Life</span>
          </h1>

          <p className="mb-7 max-w-md text-sm leading-relaxed text-gray-100 sm:mb-8 sm:text-base">
            Exploring creativity through drawings, paintings and visual stories.
            Join me on a colorful journey of imagination, inspiration and art.
          </p>

          <div className="mb-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mb-9 sm:gap-4">
            <Link
  to="/shop"
  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
>
  <FaPaintBrush aria-hidden="true" className="text-sm" />
  Explore Artworks
  <span aria-hidden="true">→</span>
</Link>
            <Link
              to="/about"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/70 bg-black/25 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
            >
              <FaPlay aria-hidden="true" className="text-xs" /> Watch My Journey
            </Link>
          </div>

          <div className="mb-7 grid max-w-lg grid-cols-3 gap-2 text-[11px] leading-snug sm:mb-8 sm:gap-4 sm:text-sm">
            <div className="flex items-center gap-2">
              <GiPalette aria-hidden="true" className="shrink-0 text-lg sm:text-xl" />
              <span>Unique<br />Artworks</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/40 pl-2 sm:pl-4">
              <FaHeart aria-hidden="true" className="shrink-0 text-base sm:text-lg" />
              <span>Creative<br />Community</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/40 pl-2 sm:pl-4">
              <FaStar aria-hidden="true" className="shrink-0 text-base sm:text-lg" />
              <span>Inspiration<br />Everyday</span>
            </div>
          </div>

          <p className="font-heading text-base italic leading-relaxed sm:text-lg">
            “Art is not just what I do,<br />It’s who I am”
          </p>
          <span aria-hidden="true" className="mt-2 block w-24 border-t-2 border-red-500" />
        </div>
      </div>

      <a
        href="#categories-heading"
        aria-label="Scroll to shop by category"
        className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 whitespace-nowrap text-[10px] tracking-[0.18em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-7"
      >
        <span aria-hidden="true" className="mb-1 flex h-8 w-5 justify-center rounded-full border border-white pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-white motion-safe:animate-bounce" />
        </span>
        SCROLL DOWN
        <FiChevronDown aria-hidden="true" />
      </a>
    </section>
  );
}