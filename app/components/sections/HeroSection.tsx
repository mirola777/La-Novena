"use client";

import { EVENT_DATE } from "@/app/constants/data";
import { useCountdown } from "@/app/hooks/useCountdown";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Countdown } from "../ui/Countdown";

export function HeroSection() {
  const timeLeft = useCountdown(EVENT_DATE);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.9]);

  const logo808Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const lanovenaScale = useTransform(scrollYProgress, [0, 0.3], [2, 1]);
  const lanovenaOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const sponsorsOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: backgroundScale }}
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

        <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col items-center justify-between">
          <motion.div
            style={{ opacity: contentOpacity }}
            className="flex-1 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-center w-full"
          >
            <div className="flex flex-col items-center justify-center space-y-10 lg:space-y-12">
              <motion.div
                style={{ opacity: logo808Opacity }}
                className="flex justify-center"
              >
                <Image
                  src="/assets/808xAM.png"
                  alt="808 x Asado Místico"
                  width={280}
                  height={70}
                  className="w-auto h-16 md:h-20 lg:h-24 object-contain no-select opacity-90"
                  priority
                />
              </motion.div>

              <motion.div
                style={{
                  scale: lanovenaScale,
                  opacity: lanovenaOpacity,
                }}
                className="w-full flex justify-center"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 blur-2xl opacity-50"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)",
                    }}
                  />
                  <Image
                    src="/assets/lanovena.png"
                    alt="La Novena-1"
                    width={1000}
                    height={400}
                    className="relative w-full max-w-[500px] md:max-w-[650px] lg:max-w-[800px] h-auto object-contain no-select"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            <div className="flex items-center justify-center w-full lg:w-auto">
              <Countdown
                days={timeLeft.days}
                hours={timeLeft.hours}
                minutes={timeLeft.minutes}
                seconds={timeLeft.seconds}
              />
            </div>
          </motion.div>

          <div
            style={{
              paddingRight: "2rem",
              paddingLeft: "2rem",
              paddingBottom: "1rem",
            }}
            className="pb-8 md:pb-12 flex flex-col items-center gap-8"
          >
            <motion.div
              style={{ opacity: sponsorsOpacity }}
              className="px-8 md:px-16 lg:px-20"
            >
              <Image
                src="/assets/logos.png"
                alt="Patrocinadores"
                width={800}
                height={100}
                className="w-auto h-12 md:h-14 lg:h-16 object-contain no-select opacity-80"
              />
            </motion.div>

            <div className="flex justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
