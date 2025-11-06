"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import { MERCHANDISE } from "../../constants/data";
import { ScrollReveal } from "../ui/ScrollReveal";

export function MerchandiseSection() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="down">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <ShoppingBag className="w-12 h-12 text-pink-400" />
              <h2 className="text-5xl md:text-7xl font-orbitron font-black gradient-text">
                MERCH
              </h2>
            </div>
            <p className="text-xl text-gray-400">
              Llévate un pedazo de la historia
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MERCHANDISE.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-linear-to-b from-purple-500/20 to-black p-6 rounded-lg border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 relative group"
              >
                <div className="absolute top-2 right-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-orbitron font-bold text-purple-400 mb-2">
                    {item.item}
                  </h3>
                  <div className="text-2xl font-black text-pink-400 text-glow">
                    {item.price}
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{item.description}</p>

                <div className="bg-pink-500/10 border border-pink-500/30 rounded px-3 py-1 text-xs text-pink-300 uppercase tracking-wider">
                  Edición Limitada
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="text-center mt-12 p-6 bg-linear-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-pink-500/30">
            <h3 className="text-2xl font-orbitron font-bold text-cyan-400 mb-3">
              🔥 Disponibles Solo en el Evento
            </h3>
            <p className="text-gray-300">
              No habrá restock. Esta es tu única oportunidad de conseguir el
              merch oficial de La Novena-1.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
