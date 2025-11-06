"use client";

import { motion } from "framer-motion";
import { ParallaxSection } from "../ui/ParallaxSection";
import { ScrollReveal } from "../ui/ScrollReveal";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <ParallaxSection speed={0.2} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000" />
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500" />
      </ParallaxSection>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="flex flex-col items-center gap-6 mb-8"
            >
              <div className="flex items-center gap-6 text-lg md:text-xl text-gray-400 font-light tracking-widest">
                <span>ASADO MÍSTICO</span>
                <span className="text-green-400">×</span>
                <span>808 FEST</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              <h1 className="text-7xl md:text-9xl font-orbitron font-black text-white mb-6 tracking-tight">
                LA NOVENA<span className="text-green-400">-1</span>
              </h1>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={1.2}>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            6 de Diciembre, 2025
            <span className="block mt-2 text-green-400 font-normal">
              Puente de la 4 Sur
            </span>
          </p>
        </ScrollReveal>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 border border-green-400 rounded-full flex justify-center opacity-60">
            <div className="w-0.5 h-2 bg-green-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
