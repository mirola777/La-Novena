"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ARTISTS } from "../../constants/data";
import type { Artist } from "../../types";
import { ParallaxSection } from "../ui/ParallaxSection";
import { ScrollReveal } from "../ui/ScrollReveal";

export function ArtistsSection() {
  return (
    <section className="bg-black">
      <div className="min-h-screen flex items-center justify-center py-20">
        <ScrollReveal direction="up">
          <div className="text-center px-4">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-teko font-black text-white mb-6 tracking-tight">
              LINE<span className="text-green-400">UP</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Los artistas que van a hacer historia
            </p>
          </div>
        </ScrollReveal>
      </div>

      {ARTISTS.map((artist, index) => (
        <ArtistCard key={artist.id} artist={artist} index={index} />
      ))}
    </section>
  );
}

function ArtistCard({ artist, index }: { artist: Artist; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center px-4 md:px-6 relative overflow-hidden"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <Image
          src="/assets/background.png"
          alt=""
          fill
          className="object-cover object-center opacity-30 no-select"
          quality={100}
        />
      </motion.div>

      <ParallaxSection
        speed={0.4}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 right-1/4 w-px h-32 bg-linear-to-b from-green-400/40 to-transparent" />
        <div className="absolute bottom-1/3 left-1/5 w-px h-24 bg-linear-to-t from-white/20 to-transparent" />
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      </ParallaxSection>

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        <motion.div style={{ y, scale }} className="space-y-6 md:space-y-8">
          <div className="relative">
            <div className="text-7xl md:text-8xl lg:text-9xl font-teko font-black text-green-400/10 absolute -top-12 md:-top-16 left-1/2 transform -translate-x-1/2 pointer-events-none select-none">
              {(index + 1).toString().padStart(2, "0")}
            </div>

            <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-teko font-black text-white tracking-tight">
                {artist.name}
              </h3>
              <Image
                src={
                  artist.event === "AM" ? "/assets/AM.png" : "/assets/808.png"
                }
                alt={artist.event}
                width={60}
                height={60}
                className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain no-select"
              />
            </div>
          </div>

          <div className="inline-block px-6 py-2 border border-green-400/50 rounded-full">
            <span className="text-sm md:text-base lg:text-lg text-green-400 uppercase tracking-[0.3em] font-bold">
              {artist.genre}
            </span>
          </div>

          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
            {artist.description}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mt-8 overflow-hidden rounded-2xl"
          >
            <Image
              src="/assets/background.png"
              alt={artist.name}
              fill
              className="object-cover object-center no-select"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute left-4 md:left-12 top-1/2 transform -translate-y-1/2 w-px h-32 bg-linear-to-b from-transparent via-green-400/50 to-transparent pointer-events-none" />
      <div className="absolute right-4 md:right-12 top-1/2 transform -translate-y-1/2 w-px h-32 bg-linear-to-b from-transparent via-white/30 to-transparent pointer-events-none" />
    </motion.div>
  );
}
