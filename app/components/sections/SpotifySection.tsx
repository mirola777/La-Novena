"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";
import { useRef } from "react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function SpotifySection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-black relative overflow-hidden flex items-center justify-center"
    >
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <ScrollReveal direction="up">
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <Music className="w-10 h-10 md:w-12 md:h-12 text-green-400" />
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-abolition font-black text-white">
                PLAY<span className="text-green-400">LIST</span>
              </h2>
            </motion.div>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              La musica que va a sonar en La Novena-1
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-400/20 border-2 border-green-400/30 bg-black/50 backdrop-blur-sm p-4 md:p-6">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/20LX4TsCwrBVBiEDUnhBJC?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full"
              />
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
