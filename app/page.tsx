"use client";

import { ArtistsSection } from "./components/sections/ArtistsSection";
import { FooterSection } from "./components/sections/FooterSection";
import { HeroSection } from "./components/sections/HeroSection";
import { LocationSection } from "./components/sections/LocationSection";
import { OrganizersSection } from "./components/sections/OrganizersSection";
import { SpotifySection } from "./components/sections/SpotifySection";
import { AudioPlayer } from "./components/ui/AudioPlayer";
import { Navbar } from "./components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <AudioPlayer />
      <main className="relative">
        <HeroSection />
        <div className="py-20 md:py-28 lg:py-32">
          <ArtistsSection />
        </div>
        <div className="py-20 md:py-28 lg:py-32">
          <SpotifySection />
        </div>
        {/* <div className="py-20 md:py-28 lg:py-32">
          <PricingSection />
        </div> */}
        <div className="py-20 md:py-28 lg:py-32">
          <LocationSection />
        </div>
        <div className="py-20 md:py-28 lg:py-32">
          <OrganizersSection />
        </div>
        <FooterSection />
      </main>
    </>
  );
}
