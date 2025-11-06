"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ParallaxSection } from "../ui/ParallaxSection";
import { MapPin, Clock, Navigation } from "lucide-react";

export function LocationSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 md:px-6 bg-black relative overflow-hidden">
      <ParallaxSection speed={0.5} className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/assets/background.png"
          alt=""
          fill
          className="object-cover object-center no-select"
        />
      </ParallaxSection>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-teko font-black text-white mb-4 md:mb-6 tracking-tight">
              UBICA<span className="text-green-400">CIÓN</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light">
              El punto de encuentro del underground
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div style={{ y }} className="space-y-8 md:space-y-12">
            <ScrollReveal direction="left">
              <div className="p-6 border border-green-400/30 rounded-lg bg-black/50">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-teko font-bold text-white mb-2 tracking-wide">
                      DIRECCIÓN
                    </h3>
                    <p className="text-lg md:text-xl text-green-400 font-light mb-2">
                      Puente de la 4 Sur
                    </p>
                    <p className="text-gray-400 font-light">
                      Carrera 50C 1 Sur 43, Medellín
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="p-6 border border-green-400/30 rounded-lg bg-black/50">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-teko font-bold text-white mb-2 tracking-wide">
                      HORARIOS
                    </h3>
                    <p className="text-lg md:text-xl text-green-400 font-light">
                      6:00 PM - 2:00 AM
                    </p>
                    <p className="text-gray-400 font-light">
                      Viernes 6 de Diciembre, 2025
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <div className="p-6 border border-green-400/30 rounded-lg bg-black/50">
                <div className="flex items-start gap-4">
                  <Navigation className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-teko font-bold text-white mb-2 tracking-wide">
                      TRANSPORTE
                    </h3>
                    <div className="text-gray-400 font-light space-y-1">
                      <p>Metro: Estación Aguacatala</p>
                      <p>Uber/DiDi disponible</p>
                      <p>Parqueadero en la zona</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </motion.div>

          <ScrollReveal direction="right">
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
              className="relative"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-green-400/30">
                <Image
                  src="/assets/background.png"
                  alt="Ubicación"
                  fill
                  className="object-cover object-center no-select"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl md:text-3xl font-teko font-bold text-green-400 mb-4">
                  El Corazón del Underground
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Un lugar icónico donde la música, la comida y la cultura urbana
                  se encuentran para crear algo legendario.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
