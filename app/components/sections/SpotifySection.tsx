"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function SpotifySection() {
  return (
    <section className="bg-linear-to-b from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Music className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-abolition font-black text-white">
                PLAYLIST
              </h2>
              <Music className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
            </motion.div>
            <p className="text-lg md:text-xl text-gray-400 font-light">
              La música que va a sonar en La Novena-1
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
