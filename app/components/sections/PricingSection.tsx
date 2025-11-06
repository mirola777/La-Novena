"use client";

import { motion } from "framer-motion";
import { PRICING } from "../../constants/data";
import { ScrollReveal } from "../ui/ScrollReveal";

export function PricingSection() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-purple-900/10 to-black">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="down">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-center mb-4 gradient-text">
            PRECIOS
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            Granizados y carne que te van a volar la mente
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-linear-to-b from-pink-500/20 to-purple-900/20 p-6 rounded-lg border border-cyan-400/30 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-3">
                    {item.item}
                  </h3>
                  <div className="text-3xl font-black text-pink-400 mb-3 text-glow">
                    {item.price}
                  </div>
                  {item.description && (
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center mt-12">
            <p className="text-lg text-yellow-400 font-bold">
              💳 Aceptamos efectivo y transferencias
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
