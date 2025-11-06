"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";

export function GallerySection() {
  const galleryItems = [
    { title: "Asado Místico 2024", description: "La magia de la parrilla" },
    { title: "808 Fest Highlights", description: "Los beats del underground" },
    { title: "Underground Vibes", description: "La esencia del movimiento" },
    { title: "Community Spirit", description: "La familia que construimos" },
  ];

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-orbitron font-black text-white mb-6 tracking-tight">
              GALE<span className="text-green-400">RÍA</span>
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Los momentos que marcaron historia
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center py-12"
              >
                <div className="w-full aspect-video bg-gray-900 border border-gray-700 rounded-none mb-6 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">
                    FOTO PLACEHOLDER
                  </span>
                </div>
                <h3 className="text-xl font-orbitron font-light text-white mb-2 tracking-widest">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-light">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <div className="text-center mt-20">
            <div className="text-3xl font-orbitron font-light text-green-400 mb-4">
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
