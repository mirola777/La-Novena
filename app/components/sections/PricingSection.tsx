"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef } from "react";
import { PRICING } from "../../constants/data";
import { ScrollReveal } from "../ui/ScrollReveal";

export function PricingSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: "8rem",
        paddingBottom: "8rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
      className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center"
    >
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
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center">
        <motion.div style={{ scale }}>
          <ScrollReveal direction="up">
            <div style={{ marginBottom: "6rem" }} className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                style={{ marginBottom: "2rem" }}
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

          <div
            style={{ marginBottom: "5rem" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16"
          >
            {PRICING.map((item, index) => (
              <PricingCard key={index} item={item} index={index} />
            ))}
          </div>

          <ScrollReveal delay={0.8}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                marginTop: "6rem",
                padding: "2.5rem",
              }}
              className="text-center border-2 border-green-400/40 rounded-2xl bg-linear-to-br from-green-400/10 via-green-400/5 to-transparent backdrop-blur-sm relative overflow-hidden group"
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

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.5]
  );

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        ref={ref}
        style={{ opacity }}
        className="relative group h-full flex items-center justify-center"
      >
        <div
          style={{ padding: "3.5rem 2.5rem" }}
          className="relative text-center border-2 border-green-400/30 hover:border-green-400 transition-colors duration-300 rounded-2xl bg-black/80 backdrop-blur-sm overflow-hidden h-full flex flex-col justify-center items-center shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]"
        >
          <div>
            <h3
              style={{ marginBottom: "1.5rem" }}
              className="text-2xl md:text-3xl lg:text-4xl font-abolition font-bold text-white tracking-wide"
            >
              {item.item}
            </h3>
            <div
              style={{ marginBottom: "1.5rem" }}
              className="text-5xl md:text-6xl lg:text-7xl font-abolition font-black text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]"
            >
              {item.price}
            </div>
            {item.description && (
              <p className="text-base md:text-lg text-gray-300 font-light">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}
