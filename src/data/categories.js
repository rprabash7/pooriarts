// src/data/categories.js
// Keep these slug values identical to the 'category' column in Google Sheets.
import painting from "../assets/Painting.png";
import drawing from "../assets/Drawing.png";
import digitalArt from "../assets/Digitalart.png";
import poster from "../assets/Poster.png";
import sketch from "../assets/Sketches.png";
import artPrint from "../assets/Artprint.png";
import merchandise from "../assets/Bloodart.png";
import customOrder from "../assets/Custome.png";

export const categories = [
  { slug: "paintings", title: "Paintings", tagline: "Original Paintings to Brighten Your Space", image: painting },
  { slug: "drawings", title: "Drawings", tagline: "Hand-drawn sketches that tell a story", image: drawing },
  { slug: "digital-art", title: "Digital Art", tagline: "Modern digital illustrations", image: digitalArt },
  { slug: "posters", title: "Posters", tagline: "Bring color to every wall", image: poster },
  { slug: "sketchbooks", title: "Sketchbooks", tagline: "Preserve every idea on paper", image: sketch },
  { slug: "art-prints", title: "Art Prints", tagline: "High quality prints for your space", image: artPrint },
  { slug: "merchandise", title: "Merchandise", tagline: "Wearable and everyday art", image: merchandise },
  { slug: "custom-orders", title: "Custom Orders", tagline: "Let's create something together", image: customOrder },
];