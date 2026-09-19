import React from "react";
import HeroSection from "../sections/HeroSection.jsx";
import CategoryGrid from "../sections/CategoryGrid.jsx";
import PromoBanner from "../sections/PromoBanner.jsx";
import InstaFeed from "../sections/InstaFeed.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <PromoBanner />
      <InstaFeed />
    </>
  );
}
