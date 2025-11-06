"use client";

import { EVENT_DATE } from "@/app/constants/data";
import { useCountdown } from "@/app/hooks/useCountdown";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ParallaxSection } from "../ui/ParallaxSection";

export function HeroSection() {
  const timeLeft = useCountdown(EVENT_DATE);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <section className="relative min-h-[200vh] flex items-start justify-center overflow-hidden">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <motion.div
            style={{ y: backgroundY, scale: backgroundScale }}
            className="absolute inset-0"
          >
            <Image
              src="/assets/background.png"
              alt="La Novena-1"
              fill
              className="object-cover object-center no-select"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </ParallaxSection>

        <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Columna Izquierda - Logo La Novena */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="flex flex-col items-center lg:items-start justify-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="w-full flex justify-center lg:justify-start"
              >
                <Image
                  src="/assets/808xAM.png"
                  alt="808 x Asado Místico"
                  width={250}
                  height={65}
                  className="w-auto h-14 md:h-16 lg:h-18 object-contain no-select opacity-90"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.8, delay: 1, ease: "easeOut" }}
                className="w-full"
              >
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 30px rgba(34, 197, 94, 0.6))",
                      "drop-shadow(0 0 60px rgba(34, 197, 94, 0.9))",
                      "drop-shadow(0 0 30px rgba(34, 197, 94, 0.6))",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex justify-center lg:justify-start"
                >
                  <Image
                    src="/assets/lanovena.png"
                    alt="La Novena-1"
                    width={1000}
                    height={400}
                    className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto object-contain no-select"
                    priority
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Columna Derecha - Countdown */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="mb-8 md:mb-12 text-center lg:text-left"
                >
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-abolition text-white mb-2">
                    CUENTA REGRESIVA
                  </h1>
                  <p className="text-green-400 text-lg md:text-xl font-light">
                    6 de Diciembre, 2025
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="text-center p-6 md:p-8 bg-black/40 backdrop-blur-sm border-2 border-green-400/30 rounded-2xl"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-abolition font-black text-white mb-3"
                    >
                      {timeLeft.days.toString().padStart(2, "0")}
                    </motion.div>
                    <div className="text-sm md:text-base lg:text-lg text-green-400 uppercase tracking-widest font-bold">
                      Días
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="text-center p-6 md:p-8 bg-black/40 backdrop-blur-sm border-2 border-green-400/30 rounded-2xl"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                      className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-abolition font-black text-white mb-3"
                    >
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </motion.div>
                    <div className="text-sm md:text-base lg:text-lg text-green-400 uppercase tracking-widest font-bold">
                      Horas
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="text-center p-6 md:p-8 bg-black/40 backdrop-blur-sm border-2 border-green-400/30 rounded-2xl"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6,
                      }}
                      className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-abolition font-black text-white mb-3"
                    >
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </motion.div>
                    <div className="text-sm md:text-base lg:text-lg text-green-400 uppercase tracking-widest font-bold">
                      Minutos
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.4 }}
                    className="text-center p-6 md:p-8 bg-black/40 backdrop-blur-sm border-2 border-green-400/50 rounded-2xl relative overflow-hidden"
                  >
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-green-400/10"
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-abolition font-black text-green-400 mb-3"
                    >
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </motion.div>
                    <div className="relative text-sm md:text-base lg:text-lg text-green-400 uppercase tracking-widest font-bold">
                      Segundos
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Logos patrocinadores en la parte inferior */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.6 }}
            className="absolute bottom-8 md:bottom-12 left-0 right-0 px-6 md:px-12"
          >
            <div className="flex justify-center">
              <Image
                src="/assets/logos.png"
                alt="Patrocinadores"
                width={800}
                height={100}
                className="w-auto h-10 md:h-12 lg:h-16 object-contain no-select opacity-60"
              />
            </div>
          </motion.div>

          {/* Indicador de scroll */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 3, duration: 0.5 },
              y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
            }}
          >
            <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center opacity-60">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-green-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
