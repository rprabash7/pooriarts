import React from "react";
import { FiInstagram, FiMessageCircle, FiVideo } from "react-icons/fi";
import { FaHeart, FaComment, FaPaperPlane } from "react-icons/fa";

// Keep these filenames exactly as they appear in your src/assets folder.
import every from "../assets/Every.png";
import color from "../assets/Color.png";
import behind from "../assets/Behind.png";
import work from "../assets/work.png";
import smart from "../assets/Smart.png";
import customes from "../assets/Customes.png";
import arts from "../assets/Arts.png";
import indian from "../assets/Indian.png";
import create from "../assets/Create.png";
import pet from "../assets/Pet.png";

const posts = [
  { id: 1, image: every, caption: "Every Stroke Tells a Story", heart: true, underline: "red", type: "post" },
  { id: 2, image: color, caption: "Colors Bring Life", heart: false, underline: "yellow", type: "reel" },
  { id: 3, image: behind, caption: "Behind the Scenes", heart: true, underline: "yellow", type: "post" },
  { id: 4, image: work, caption: "Work In Progress", heart: false, underline: "yellow", type: "reel" },
  { id: 5, image: smart, caption: "Small Art Big Happiness", heart: true, underline: "red", type: "post" },
  { id: 6, image: customes, caption: "Custom Creations", heart: false, underline: "yellow", type: "post" },
  { id: 7, image: arts, caption: "Art Prints For Your Space", heart: false, underline: "yellow", type: "post" },
  { id: 8, image: indian, caption: "Indian Art Heritage", heart: false, underline: "yellow", type: "reel" },
  { id: 9, image: create, caption: "Create Imagine Inspire Repeat", heart: true, underline: "red", type: "post" },
  { id: 10, image: pet, caption: "Pet Portraits", heart: false, underline: "none", type: "reel" },
];

export default function InstaFeed() {
  return (
    <section aria-labelledby="instagram-heading" className="relative isolate overflow-hidden bg-black px-4 py-14 text-white sm:px-6 sm:py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-20 hidden h-56 w-56 rounded-full bg-gradient-to-tr from-blue-400 via-white to-red-400 opacity-20 blur-3xl lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-16 hidden h-56 w-56 rounded-full bg-gradient-to-bl from-yellow-400 via-red-500 to-blue-400 opacity-20 blur-3xl lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p aria-hidden="true" className="absolute -left-28 top-0 hidden -rotate-6 text-left font-heading text-base italic leading-tight xl:block">
            Art<br />Connects<br />People <FaHeart className="inline text-xs text-red-500" />
            <span className="mt-1 block w-14 border-t-2 border-red-500" />
          </p>
          <p aria-hidden="true" className="absolute -right-28 top-0 hidden rotate-3 text-right font-heading text-base italic leading-tight xl:block">
            Follow<br />For More<br />Art
            <span className="ml-auto mt-1 block w-14 border-t-2 border-red-500" />
          </p>

          <p className="flex items-center justify-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-gray-300 sm:text-xs sm:tracking-[0.35em]">
            <span aria-hidden="true" className="w-7 border-t border-gray-500 sm:w-10" />
            OUR INSTAGRAM
            <span aria-hidden="true" className="w-7 border-t border-gray-500 sm:w-10" />
          </p>
          <h2 id="instagram-heading" className="mt-3 font-heading text-4xl font-bold italic leading-tight sm:text-5xl lg:text-6xl">
            Moments from{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
              Poori Arts
            </span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
            Artworks | Behind the Scenes | Happy Customers | Creative Vibes
          </p>
        </div>

        {/* One column on narrow phones, two on wider phones, three on tablets, five on desktop. */}
        <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {posts.map((post) => (
            <div key={post.id} className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <span aria-hidden="true" className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded bg-black/60 text-sm">
                {post.type === "reel" ? <FiVideo /> : <FiMessageCircle />}
              </span>
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
                <p className="font-heading text-sm font-semibold italic leading-tight sm:text-base">
                  {post.caption}{" "}
                  {post.heart && <FaHeart aria-hidden="true" className="inline text-xs text-red-500" />}
                </p>
                {post.underline !== "none" && (
                  <span aria-hidden="true" className={`mt-1 block w-10 border-t-2 ${post.underline === "red" ? "border-red-500" : "border-yellow-400"}`} />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-7 lg:mt-12 lg:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 text-xs sm:gap-x-8 sm:text-sm lg:justify-start">
            <div className="flex items-center gap-2"><FaHeart aria-hidden="true" /><span>Like<br />Art</span></div>
            <div className="flex items-center gap-2"><FaComment aria-hidden="true" /><span>Share<br />Creativity</span></div>
            <div className="flex items-center gap-2"><FaPaperPlane aria-hidden="true" /><span>Be a Part<br />of Our Journey</span></div>
          </div>
          {/* Verify this is your actual Instagram handle before publishing. */}
          <a
            href="https://www.instagram.com/poori_arts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 px-6 py-3 text-center text-sm font-semibold shadow-lg transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:text-base"
          >
            <FiInstagram aria-hidden="true" size={18} /> Follow Us on Instagram <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-9 flex items-center justify-center gap-3 text-center sm:gap-4">
          <span aria-hidden="true" className="hidden w-14 border-t border-gray-600 sm:block" />
          <p className="text-[10px] tracking-[0.16em] text-gray-400 sm:text-xs sm:tracking-[0.3em]">JOIN OUR CREATIVE COMMUNITY</p>
          <span aria-hidden="true" className="hidden w-14 border-t border-gray-600 sm:block" />
        </div>
      </div>
    </section>
  );
}