"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ParallaxSection } from "../ui/ParallaxSection";
import { ScrollReveal } from "../ui/ScrollReveal";

export function GallerySection() {
  const galleryItems = [
    { title: "Asado Místico 2024", description: "La magia de la parrilla" },
    { title: "808 Fest Highlights", description: "Los beats del underground" },
    { title: "Underground Vibes", description: "La esencia del movimiento" },
    { title: "Community Spirit", description: "La familia que construimos" },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-black relative overflow-hidden">
      <ParallaxSection
        speed={0.3}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
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
              GALE<span className="text-green-400">RÍA</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light">
              Los momentos que marcaron historia
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} item={item} index={index} />
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <div className="text-center mt-16 md:mt-20">
            <div className="text-2xl md:text-3xl font-teko font-bold text-green-400 mb-4">
              #LaNovena1
            </div>
            <p className="text-gray-400 font-light">
              Comparte tu experiencia y forma parte de la historia
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

interface GalleryItem {
  title: string;
  description: string;
}

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.5]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div ref={ref} style={{ opacity, scale }} className="group">
        <motion.div
          style={{ y }}
          className="relative overflow-hidden rounded-lg"
        >
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src="/assets/background.png"
              alt={item.title}
              fill
              className="object-cover object-center no-select transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 border border-green-400/30 group-hover:border-green-400/60 transition-colors duration-300" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl md:text-2xl font-teko font-bold text-white mb-2 tracking-wide">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-gray-300 font-light">
              {item.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  );
}
