"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ARTISTS } from "../../constants/data";
import { ParallaxSection } from "../ui/ParallaxSection";
import { ScrollReveal } from "../ui/ScrollReveal";

export function ArtistsSection() {
  return (
    <section className="bg-black">
      {/* Header Section */}
      <div className="h-screen flex items-center justify-center">
        <ScrollReveal direction="up">
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-orbitron font-black text-white mb-6 tracking-tight">
              LINE<span className="text-green-400">UP</span>
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Los artistas que van a hacer historia
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Individual Artist Sections */}
      {ARTISTS.map((artist, index) => (
        <ArtistCard key={artist.id} artist={artist} index={index} />
      ))}
    </section>
  );
}

function ArtistCard({ artist, index }: { artist: any; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-px h-20 bg-green-400/20" />
        <div className="absolute bottom-1/3 left-1/5 w-px h-16 bg-white/10" />
      </ParallaxSection>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div style={{ y }} className="space-y-8">
          {/* Artist Number */}
          <div className="text-8xl md:text-9xl font-orbitron font-black text-green-400/20 absolute -top-20 left-1/2 transform -translate-x-1/2">
            {(index + 1).toString().padStart(2, "0")}
          </div>

          {/* Artist Name */}
          <h3 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-4 tracking-tight">
            {artist.name}
          </h3>

          {/* Genre */}
          <div className="text-lg md:text-xl text-green-400 uppercase tracking-[0.3em] font-light mb-8">
            {artist.genre}
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            {artist.description}
          </p>

          {/* Photo Placeholder */}
          <div className="w-32 h-32 mx-auto mt-12 border border-gray-700 rounded-full flex items-center justify-center text-gray-600">
            <span className="text-xs">FOTO</span>
          </div>
        </motion.div>
      </div>

      {/* Side Elements */}
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 w-px h-24 bg-green-400/30" />
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2 w-px h-24 bg-white/20" />
    </motion.div>
  );
}
