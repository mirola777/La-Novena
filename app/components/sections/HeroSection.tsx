"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCountdown } from "@/app/hooks/useCountdown";
import { EVENT_DATE } from "@/app/constants/data";
import { ParallaxSection } from "../ui/ParallaxSection";

export function HeroSection() {
  const timeLeft = useCountdown(EVENT_DATE);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParallaxSection speed={0.5} className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src="/assets/background.png"
            alt="La Novena-1"
            fill
            className="object-cover object-center no-select"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </ParallaxSection>

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-between py-8 md:py-16 px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-7xl"
        >
          <div className="flex justify-center">
            <Image
              src="/assets/808xAM.png"
              alt="808 x Asado Místico"
              width={400}
              height={100}
              className="w-auto h-16 md:h-24 lg:h-32 object-contain no-select"
              priority
            />
          </div>
        </motion.div>

        <div className="flex-1 flex flex-col items-center justify-center gap-8 md:gap-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-center"
          >
            <Image
              src="/assets/lanovena.png"
              alt="La Novena-1"
              width={800}
              height={300}
              className="w-auto h-32 md:h-48 lg:h-64 object-contain no-select"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="w-full max-w-5xl px-4"
          >
            <div className="grid grid-cols-4 gap-4 md:gap-8 lg:gap-12">
              <div className="text-center">
                <div className="text-4xl md:text-6xl lg:text-8xl font-teko font-black text-white mb-2">
                  {timeLeft.days.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-green-400 uppercase tracking-widest font-bold">
                  Días
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-6xl lg:text-8xl font-teko font-black text-white mb-2">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-green-400 uppercase tracking-widest font-bold">
                  Hrs
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-6xl lg:text-8xl font-teko font-black text-white mb-2">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-green-400 uppercase tracking-widest font-bold">
                  Min
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-6xl lg:text-8xl font-teko font-black text-green-400 mb-2">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-green-400 uppercase tracking-widest font-bold">
                  Seg
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="w-full max-w-7xl"
        >
          <div className="flex justify-center">
            <Image
              src="/assets/logos.png"
              alt="Patrocinadores"
              width={900}
              height={100}
              className="w-auto h-12 md:h-16 lg:h-20 object-contain no-select"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 border-2 border-green-400 rounded-full flex justify-center opacity-60">
            <div className="w-0.5 h-2 bg-green-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
