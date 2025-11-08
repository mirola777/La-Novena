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

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col items-center justify-center py-32 md:py-40"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <ParallaxSection speed={0.3} className="absolute inset-0 opacity-20">
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
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-green-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center space-y-20 md:space-y-28">
        <ScrollReveal direction="up">
          <div className="text-center space-y-8 md:space-y-12">
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="text-7xl md:text-9xl lg:text-[12rem] font-abolition font-black text-white tracking-tight"
            >
              GALE<span className="text-green-400">RÍA</span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-gray-400 font-light"
            >
              Los momentos que marcaron historia
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 w-full">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} item={item} index={index} />
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-10 border-2 border-green-400/30 rounded-2xl bg-linear-to-br from-green-400/5 to-transparent backdrop-blur-sm"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl md:text-5xl font-abolition font-bold text-green-400 mb-4"
            >
              #LaNovena1
            </motion.div>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Comparte tu experiencia y forma parte de la historia
            </p>
          </motion.div>
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

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.3]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -3 : 3, 0, index % 2 === 0 ? 3 : -3]
  );

  return (
    <ScrollReveal delay={index * 0.2}>
      <motion.div
        ref={ref}
        style={{ opacity, scale, rotate }}
        className="group"
      >
        <motion.div
          style={{ y }}
          whileHover={{ scale: 1.05, rotate: 0 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <motion.div
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            className="absolute -inset-1 bg-linear-to-r from-green-400/40 to-green-600/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          <div className="relative w-full aspect-video overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/assets/background.png"
                alt={item.title}
                fill
                className="object-cover object-center no-select"
              />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent" />
            <motion.div
              className="absolute inset-0 border-2 border-green-400/20 group-hover:border-green-400/70 transition-colors duration-500"
              whileHover={{
                boxShadow: "0 0 40px rgba(34, 197, 94, 0.3)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-end"
            >
              <div className="p-8 w-full">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-abolition font-bold text-white mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300 font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  );
}
