"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { ParallaxSection } from "../ui/ParallaxSection";
import { ScrollReveal } from "../ui/ScrollReveal";

export function LocationSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={ref}
      style={{
        paddingTop: "8rem",
        paddingBottom: "8rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
      className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <ParallaxSection speed={0.5} className="absolute inset-0 opacity-20">
          <Image
            src="/assets/background.png"
            alt=""
            fill
            className="object-cover object-center no-select"
          />
        </ParallaxSection>
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center">
        <ScrollReveal direction="up">
          <div style={{ marginBottom: "6rem" }} className="text-center">
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              style={{ marginBottom: "2rem" }}
              className="text-7xl md:text-9xl lg:text-[12rem] font-abolition font-black text-white tracking-tight"
            >
              UBICA<span className="text-green-400">CION</span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-gray-400 font-light"
            >
              El punto de encuentro del underground
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center w-full">
          <motion.div style={{ y }} className="flex flex-col">
            <ScrollReveal direction="left">
              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                style={{
                  padding: "2.5rem",
                  marginBottom: "3rem",
                }}
                className="border-2 border-green-400/30 rounded-2xl bg-black/60 backdrop-blur-sm relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="flex items-start gap-6 relative z-10">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <MapPin className="w-8 h-8 text-green-400 shrink-0 mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-abolition font-bold text-white mb-3 tracking-wide">
                      DIRECCION
                    </h3>
                    <p className="text-xl md:text-2xl text-green-400 font-light mb-3">
                      Puente de la 4 Sur
                    </p>
                    <p className="text-lg text-gray-400 font-light">
                      Carrera 50C 1 Sur 43, Medellin
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                style={{ padding: "2.5rem" }}
                className="border-2 border-green-400/30 rounded-2xl bg-black/60 backdrop-blur-sm relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5,
                  }}
                />
                <div className="flex items-start gap-6 relative z-10">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Clock className="w-8 h-8 text-green-400 shrink-0 mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-abolition font-bold text-white mb-3 tracking-wide">
                      HORARIOS
                    </h3>
                    <p className="text-xl md:text-2xl text-green-400 font-light mb-2">
                      6:00 PM - 2:00 AM
                    </p>
                    <p className="text-lg text-gray-400 font-light">
                      Viernes 6 de Diciembre, 2025
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </motion.div>

          <ScrollReveal direction="right">
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.5 }}
                className="relative w-full aspect-square overflow-hidden rounded-2xl border-2 border-green-400/30 group"
              >
                <motion.div
                  className="absolute -inset-1 bg-linear-to-r from-green-400/40 to-green-600/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Image
                  src="/assets/background.png"
                  alt="Ubicación"
                  fill
                  className="object-cover object-center no-select"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <h3 className="text-3xl md:text-4xl font-abolition font-bold text-green-400 mb-8">
                  El Corazon del Underground
                </h3>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                  Un lugar iconico donde la musica, la comida y la cultura
                  urbana se encuentran para crear algo legendario.
                </p>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
