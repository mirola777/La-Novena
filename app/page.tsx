"use client";

import { ArtistsSection } from "./components/sections/ArtistsSection";
import { FooterSection } from "./components/sections/FooterSection";
import { GallerySection } from "./components/sections/GallerySection";
import { HeroSection } from "./components/sections/HeroSection";
import { LocationSection } from "./components/sections/LocationSection";
import { PricingSection } from "./components/sections/PricingSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ArtistsSection />
      <PricingSection />
      <LocationSection />
      <GallerySection />
      <FooterSection />
    </main>
  );
}
