"use client";

import { motion } from "framer-motion";
import { ParallaxSection } from "../ui/ParallaxSection";
import { ScrollReveal } from "../ui/ScrollReveal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/30 via-black to-pink-900/30" />

      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-500" />
      </ParallaxSection>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <ScrollReveal direction="down" delay={0.2}>
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center justify-center gap-8 mb-6"
            >
              <div className="text-2xl md:text-4xl font-bold text-pink-400 font-orbitron">
                ASADO MÍSTICO
              </div>
              <div className="text-4xl md:text-6xl text-cyan-400">×</div>
              <div className="text-2xl md:text-4xl font-bold text-purple-400 font-orbitron">
                808 FEST
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <h1 className="text-6xl md:text-9xl font-orbitron font-black gradient-text mb-4">
                LA NOVENA-1
              </h1>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={1}>
          <p className="text-xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            La fusión épica del underground llegó. Dos mundos, una experiencia.
            <span className="block mt-2 text-pink-400 font-bold">
              El evento más esperado del año.
            </span>
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={1.3}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl md:text-4xl font-orbitron font-bold">
            <div className="text-cyan-400">6 DE DICIEMBRE</div>
            <div className="text-pink-400">•</div>
            <div className="text-purple-400">2025</div>
            <div className="text-pink-400">•</div>
            <div className="text-yellow-400">PUENTE 4 SUR</div>
          </div>
        </ScrollReveal>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
