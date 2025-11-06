"use client";

import { motion } from "framer-motion";
import { ARTISTS } from "../../constants/data";
import { ScrollReveal } from "../ui/ScrollReveal";

export function ArtistsSection() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="down">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-center mb-4 gradient-text">
            LINEUP
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            Los artistas que van a hacer historia
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTISTS.map((artist, index) => (
            <ScrollReveal key={artist.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-linear-to-b from-purple-900/20 to-black p-6 rounded-lg border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 glow-on-hover"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-orbitron font-bold text-pink-400 mb-2">
                    {artist.name}
                  </h3>
                  <span className="text-sm text-cyan-400 uppercase tracking-wider">
                    {artist.genre}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {artist.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
