import React from "react";
import { FiInstagram, FiMessageCircle, FiVideo } from "react-icons/fi";
import { FaHeart, FaComment, FaPaperPlane } from "react-icons/fa";

/* ============================================================
   ⚠️ IMAGE FILENAME MAPPING
   ============================================================
   Mee Explorer లో unna file names (Every, Color, Behind, work,
   Smart, Customes, Arts, Indian, Create, Pet) ni ee 10 captions
   తో map chesanu, screenshot order prakaram.

   Every    -> "Every Stroke Tells a Story"
   Color    -> "Colors Bring Life"
   Behind   -> "Behind the Scenes"
   work     -> "Work In Progress"
   Smart    -> "Small Art Big Happiness"
   Customes -> "Custom Creations"
   Arts     -> "Art Prints For Your Space"
   Indian   -> "Indian Art Heritage"
   Create   -> "Create Imagine Inspire Repeat"
   Pet      -> "Pet Portraits"

   ⚠️ IMPORTANT: Kింద ".jpg" extension pettanu — mee actual files
   ".png" aithe, prathi import line lo ".jpg" ni ".png" tho
   మార్చండి (Explorer Windows lo extension చూపించదు, so check
   right-click > Properties లో అసలు extension ఏమిటో).

   Add cheyడానికి:
   1. src/assets/ folder lo pai file names తోనే (correct extension తో) unnayi.
   2. Kింద "REAL IMAGES" block uncomment cheయండి.
   3. "PLACEHOLDER IMAGES" block delete cheయండి.
   ============================================================ */

// ---------- REAL IMAGES (uncomment after confirming filenames/extensions) ----------
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

// ---------- PLACEHOLDER IMAGES (delete this block once real images are uncommented) ----------


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
    <section className="relative bg-black py-16 px-6 overflow-hidden">
      {/* ---------- Decorative paint splash corners ---------- */}
      <div className="absolute -bottom-14 -left-10 w-56 h-56 bg-gradient-to-tr from-blue-400 via-white to-red-400 opacity-25 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -top-14 -right-10 w-56 h-56 bg-gradient-to-bl from-yellow-400 via-red-500 to-blue-400 opacity-25 blur-3xl rounded-full pointer-events-none" />

      {/* ---------- Corner decorative text ---------- */}
      <p className="hidden md:block absolute top-6 left-6 italic text-white text-sm leading-tight z-10">
        Art<br />Connects<br />People <FaHeart className="inline text-red-500 text-xs" />
        <span className="block w-14 border-t-2 border-red-500 mt-1" />
      </p>
      <p className="hidden md:block absolute top-6 right-6 italic text-white text-sm leading-tight text-right z-10">
        Follow<br />For More<br />Art
        <span className="block w-14 border-t-2 border-red-500 mt-1 ml-auto" />
      </p>
      

      {/* ---------- Header ---------- */}
      <div className="max-w-3xl mx-auto text-center mb-10 relative z-10">
        <p className="text-gray-400 text-xs tracking-[0.35em] font-semibold flex items-center justify-center gap-4">
          <span className="w-10 border-t border-gray-500" /> OUR INSTAGRAM <span className="w-10 border-t border-gray-500" />
        </p>
        <h2 className="font-heading italic text-4xl md:text-5xl font-bold mt-3">
          <span className="text-white">Moments from </span>
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            Poori Arts
          </span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-3">
          Artworks | Behind the Scenes | Happy Customers | Creative Vibes
        </p>
      </div>

      {/* ---------- Instagram grid ---------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
        {posts.map((p) => (
          <div key={p.id} className="relative aspect-square rounded-xl overflow-hidden group">
            <img
              src={p.image}
              alt={p.caption}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <span className="absolute top-2 right-2 w-6 h-6 rounded bg-black/50 flex items-center justify-center text-white text-xs">
              {p.type === "reel" ? <FiVideo /> : <FiMessageCircle />}
            </span>

            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-white text-sm font-medium leading-tight italic">
                {p.caption} {p.heart && <FaHeart className="inline text-red-500 text-xs" />}
              </p>
              {p.underline !== "none" && (
                <span
                  className={`block w-10 border-t-2 mt-1 ${
                    p.underline === "red" ? "border-red-500" : "border-yellow-400"
                  }`}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ---------- Bottom row: icons + follow button ---------- */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mt-12 relative z-10">
        <div className="flex flex-wrap items-center gap-8 text-white text-sm">
          <div className="flex items-center gap-2">
            <FaHeart /> <span>Like<br />Art</span>
          </div>
          <div className="flex items-center gap-2">
            <FaComment /> <span>Share<br />Creativity</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPaperPlane /> <span>Be a Part<br />of Our Journey</span>
          </div>
        </div>

        <a
          href="https://instagram.com/pooriarts"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:opacity-90 transition"
        >
          <FiInstagram size={18} /> Follow Us on Instagram →
        </a>
      </div>

      <div className="flex items-center justify-center gap-4 mt-10 relative z-10">
        <span className="w-16 border-t border-gray-600" />
        <p className="text-gray-400 text-xs tracking-[0.3em]">JOIN OUR CREATIVE COMMUNITY</p>
        <span className="w-16 border-t border-gray-600" />
      </div>
    </section>
  );
}