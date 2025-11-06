"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { PRICING } from "../../constants/data";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ParallaxSection } from "../ui/ParallaxSection";

export function PricingSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-black relative overflow-hidden">
      <ParallaxSection speed={0.4} className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/assets/background.png"
          alt=""
          fill
          className="object-cover object-center no-select"
        />
      </ParallaxSection>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-teko font-black text-white mb-4 md:mb-6 tracking-tight">
              PRE<span className="text-green-400">CIOS</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light">
              Granizados, carnita y música decembrina
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {PRICING.map((item, index) => (
            <PricingCard key={index} item={item} index={index} />
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="text-center mt-12 md:mt-16 p-6 border border-green-400/30 rounded-lg bg-green-400/5">
            <p className="text-base md:text-lg text-green-400 font-bold">
              💳 Aceptamos efectivo y transferencias
            </p>
          </div>
        </ScrollReveal>
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

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        ref={ref}
        style={{ opacity, y }}
        whileHover={{ scale: 1.05 }}
        className="relative group"
      >
        <div className="text-center py-8 md:py-12 px-6 border border-gray-800 hover:border-green-400/50 transition-all duration-300 rounded-lg bg-black/50">
          <h3 className="text-xl md:text-2xl font-teko font-bold text-white mb-4 tracking-wide">
            {item.item}
          </h3>
          <div className="text-4xl md:text-5xl lg:text-6xl font-teko font-black text-green-400 mb-4">
            {item.price}
          </div>
          {item.description && (
            <p className="text-sm md:text-base text-gray-400 font-light">
              {item.description}
            </p>
          )}
        </div>
        <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
      </motion.div>
    </ScrollReveal>
  );
}
