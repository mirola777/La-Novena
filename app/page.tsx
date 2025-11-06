"use client";

import { ArtistsSection } from "./components/sections/ArtistsSection";
import { EventInfoSection } from "./components/sections/EventInfoSection";
import { FooterSection } from "./components/sections/FooterSection";
import { GallerySection } from "./components/sections/GallerySection";
import { HeroSection } from "./components/sections/HeroSection";
import { LocationSection } from "./components/sections/LocationSection";
import { MerchandiseSection } from "./components/sections/MerchandiseSection";
import { OrganizersSection } from "./components/sections/OrganizersSection";
import { PricingSection } from "./components/sections/PricingSection";
import { CountdownTimer } from "./components/ui/CountdownTimer";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <CountdownTimer />
      <EventInfoSection />
      <ArtistsSection />
      <PricingSection />
      <MerchandiseSection />
      <LocationSection />
      <GallerySection />
      <OrganizersSection />
      <FooterSection />
    </main>
  );
}
