"use client";

import { EVENT_DATE } from "@/app/constants/data";
import { useCountdown } from "@/app/hooks/useCountdown";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function HeroSection() {
  const timeLeft = useCountdown(EVENT_DATE);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.9]);

  return (
    <section ref={containerRef} className="relative h-[400vh] flex flex-col">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
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
          />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black"
          />
        </motion.div>

        <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col">
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="h-full flex flex-col lg:flex-row gap-12 items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="flex flex-col items-center lg:items-center justify-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="w-fit flex justify-center lg:justify-start"
              >
                <Image
                  src="/assets/808xAM.png"
                  alt="808 x Asado Místico"
                  width={250}
                  height={65}
                  className="w-auto h-14 md:h-16 lg:h-20 object-contain no-select opacity-90"
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

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-3xl flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="mb-12 md:mb-16 text-center"
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-abolition text-white mb-3">
                    CUENTA REGRESIVA
                  </h1>
                  <p className="text-green-400 text-xl md:text-2xl font-light">
                    6 de Diciembre, 2025
                  </p>
                </motion.div>

                <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="flex flex-col items-center gap-3"
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
                      className="text-6xl md:text-7xl lg:text-8xl font-abolition font-black text-white"
                    >
                      {timeLeft.days.toString().padStart(2, "0")}
                    </motion.div>
                    <div className="text-sm md:text-base text-green-400 uppercase tracking-wider font-bold">
                      DÍAS
                    </div>
                  </motion.div>

                  <div className="text-5xl md:text-6xl lg:text-7xl font-abolition text-green-400">
                    :
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="flex flex-col items-center gap-3"
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
                      className="text-6xl md:text-7xl lg:text-8xl font-abolition font-black text-white"
                    >
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </motion.div>
                    <div className="text-sm md:text-base text-green-400 uppercase tracking-wider font-bold">
                      HORAS
                    </div>
                  </motion.div>

                  <div className="text-5xl md:text-6xl lg:text-7xl font-abolition text-green-400">
                    :
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="flex flex-col items-center gap-3"
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
                      className="text-6xl md:text-7xl lg:text-8xl font-abolition font-black text-white"
                    >
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </motion.div>
                    <div className="text-sm md:text-base text-green-400 uppercase tracking-wider font-bold">
                      MINUTOS
                    </div>
                  </motion.div>

                  <div className="text-5xl md:text-6xl lg:text-7xl font-abolition text-green-400">
                    :
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.4 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-6xl md:text-7xl lg:text-8xl font-abolition font-black text-green-400"
                    >
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </motion.div>
                    <div className="text-sm md:text-base text-green-400 uppercase tracking-wider font-bold">
                      SEGUNDOS
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ opacity: contentOpacity }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.6 }}
            className="absolute bottom-8 md:bottom-12 left-0 right-0 px-6 md:px-12 flex justify-center"
          >
            <Image
              src="/assets/logos.png"
              alt="Patrocinadores"
              width={800}
              height={100}
              className="w-auto h-10 md:h-12 lg:h-16 object-contain no-select"
            />
          </motion.div>

          <motion.div
            style={{ opacity: contentOpacity }}
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
