"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { PRICING } from "../../constants/data";
import { ParallaxSection } from "../ui/ParallaxSection";
import { ScrollReveal } from "../ui/ScrollReveal";

export function PricingSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-black relative overflow-hidden flex flex-col items-center justify-center"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <ParallaxSection speed={0.4} className="absolute inset-0 opacity-30">
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
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center">
        <motion.div style={{ scale }}>
          <ScrollReveal direction="up">
            <div className="text-center mb-24 md:mb-32 space-y-8">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative inline-block"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-8 bg-linear-to-r from-green-400/20 via-transparent to-green-400/20 rounded-full blur-xl"
                />
                <h2 className="relative text-7xl md:text-9xl lg:text-[12rem] font-abolition font-black text-white tracking-tight">
                  PRE<span className="text-green-400">CIOS</span>
                </h2>
              </motion.div>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl text-gray-400 font-light flex items-center justify-center gap-3 flex-wrap"
              >
                <Sparkles className="w-6 h-6 text-green-400" />
                Granizados, carnita y música decembrina
                <Sparkles className="w-6 h-6 text-green-400" />
              </motion.p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 mb-20">
            {PRICING.map((item, index) => (
              <PricingCard key={index} item={item} index={index} />
            ))}
          </div>

          <ScrollReveal delay={0.8}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center mt-24 p-10 border-2 border-green-400/40 rounded-2xl bg-linear-to-br from-green-400/10 via-green-400/5 to-transparent backdrop-blur-sm relative overflow-hidden group"
            >
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 left-0 w-20 h-full bg-linear-to-r from-transparent via-green-400/20 to-transparent"
              />
              <p className="text-xl md:text-2xl text-green-400 font-bold flex items-center justify-center gap-3">
                💳 Aceptamos efectivo y transferencias
              </p>
            </motion.div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
}

interface PricingItem {
  item: string;
  price: string;
  description?: string;
}

function PricingCard({ item, index }: { item: PricingItem; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.5]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        ref={ref}
        style={{ opacity, y, scale }}
        whileHover={{ scale: 1.05, y: -10 }}
        className="relative group h-full flex items-center justify-center"
      >
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
          className="absolute -inset-1 bg-linear-to-r from-green-400/50 to-green-600/50 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"
        />

        <div className="relative text-center py-14 md:py-18 px-10 border-2 border-green-400/30 hover:border-green-400/70 transition-all duration-500 rounded-2xl bg-black/80 backdrop-blur-sm overflow-hidden h-full flex flex-col justify-center items-center space-y-6">
          <motion.div
            className="absolute inset-0 bg-linear-to-br from-green-400/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-abolition font-bold text-white mb-6 tracking-wide">
              {item.item}
            </h3>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1 + 0.2,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-abolition font-black text-green-400 mb-6 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]"
            >
              {item.price}
            </motion.div>
            {item.description && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-gray-300 font-light"
              >
                {item.description}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-green-400 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        </div>
      </motion.div>
    </ScrollReveal>
  );
}
