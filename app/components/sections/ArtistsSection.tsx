"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Music2 } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { ARTISTS } from "../../constants/data";
import type { Artist } from "../../types";
import { ParallaxSection } from "../ui/ParallaxSection";
import { ScrollReveal } from "../ui/ScrollReveal";

export function ArtistsSection() {
  return (
    <section className="bg-black py-20 flex flex-col items-center justify-center">
      <div className="min-h-screen flex items-center justify-center py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal direction="up">
            <div className="text-center px-4 space-y-6">
              <motion.h2
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl lg:text-7xl font-abolition font-black text-white tracking-tight"
              >
                LINE<span className="text-green-400">UP</span>
              </motion.h2>
              <p className="text-xl md:text-2xl text-gray-400 font-light">
                Los artistas que van a hacer historia
              </p>
            </div>
          </ScrollReveal>
        </div>
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
    [0.7, 1, 1, 0.7]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 relative overflow-hidden py-20 w-screen"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <Image
          src={artist.backgroundImage || "/assets/background.png"}
          alt=""
          fill
          className="object-cover object-center opacity-20 no-select"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
      </motion.div>

      <ParallaxSection
        speed={0.4}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
      </ParallaxSection>

      <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center justify-center">
        <motion.div
          style={{ y, scale, rotate }}
          className="flex flex-col items-center justify-center space-y-8 md:space-y-12"
        >
          <div className="relative mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.08 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-abolition font-black text-green-400 absolute -top-20 md:-top-32 lg:-top-40 left-1/2 transform -translate-x-1/2 pointer-events-none select-none leading-none"
            >
              {(index + 1).toString().padStart(2, "0")}
            </motion.div>

            <div className="flex items-center justify-center gap-6 md:gap-10 mb-6 flex-wrap">
              <motion.h3
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl lg:text-9xl font-abolition font-black text-white tracking-tight"
              >
                {artist.name}
              </motion.h3>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <Image
                  src={
                    artist.event === "AM" ? "/assets/AM.png" : "/assets/808.png"
                  }
                  alt={artist.event}
                  width={80}
                  height={80}
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain no-select"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-3 border-2 border-green-400/50 rounded-full bg-green-400/5 backdrop-blur-sm"
          >
            <span className="text-sm md:text-base lg:text-lg text-green-400 uppercase tracking-[0.3em] font-bold">
              {artist.genre}
            </span>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-6 md:px-8"
          >
            {artist.description}
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 md:gap-8 flex-wrap px-4"
          >
            <motion.a
              href={artist.spotify}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-10 py-5 bg-green-400 text-black rounded-full font-bold hover:bg-green-300 transition-colors duration-300 shadow-lg shadow-green-400/30 text-lg"
            >
              <Music2 className="w-6 h-6 shrink-0" />
              <span className="whitespace-nowrap">Spotify</span>
            </motion.a>
            <motion.a
              href={artist.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-10 py-5 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 shadow-lg shadow-purple-500/30 text-lg"
            >
              <Instagram className="w-6 h-6 shrink-0" />
              <span className="whitespace-nowrap">Instagram</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mt-12 overflow-hidden rounded-2xl group"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={artist.profileImage || "/assets/background.png"}
                alt={artist.name}
                fill
                className="object-cover object-center no-select transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 border-2 border-green-400/30 group-hover:border-green-400/60 transition-colors duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
