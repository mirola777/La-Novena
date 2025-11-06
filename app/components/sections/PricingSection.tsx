"use client";

import { motion } from "framer-motion";
import { PRICING } from "../../constants/data";
import { ScrollReveal } from "../ui/ScrollReveal";

export function PricingSection() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-orbitron font-black text-white mb-6 tracking-tight">
              PRE<span className="text-green-400">CIOS</span>
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Granizados y carne del underground
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PRICING.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center py-12 border-b border-gray-800 last:border-b-0"
              >
                <h3 className="text-2xl font-orbitron font-light text-white mb-4 tracking-widest">
                  {item.item}
                </h3>
                <div className="text-4xl md:text-5xl font-orbitron font-black text-green-400 mb-4">
                  {item.price}
                </div>
                {item.description && (
                  <p className="text-gray-400 font-light">{item.description}</p>
                )}
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
