"use client";

import { motion } from "framer-motion";
import { Camera, Image, Play } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function GallerySection() {
  const galleryItems = [
    {
      type: "image",
      title: "Asado Místico 2024",
      description: "La magia de la parrilla nocturna",
    },
    {
      type: "video",
      title: "808 Fest Highlights",
      description: "Los beats que movieron la ciudad",
    },
    {
      type: "image",
      title: "Underground Vibes",
      description: "La esencia del movimiento",
    },
    {
      type: "image",
      title: "Community Spirit",
      description: "La familia que construimos",
    },
    {
      type: "video",
      title: "Behind the Scenes",
      description: "Así se hace la historia",
    },
    {
      type: "image",
      title: "Street Culture",
      description: "Arte urbano en cada rincón",
    },
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="down">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Camera className="w-12 h-12 text-purple-400" />
              <h2 className="text-5xl md:text-7xl font-orbitron font-black gradient-text">
                GALERÍA
              </h2>
              <Image className="w-12 h-12 text-pink-400" />
            </div>
            <p className="text-xl text-gray-400">
              Revive los momentos que marcaron historia
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative group cursor-pointer bg-linear-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
              >
                <div className="aspect-video relative bg-linear-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-center">
                    {item.type === "video" ? (
                      <Play className="w-16 h-16 text-pink-400 mb-4" />
                    ) : (
                      <Image className="w-16 h-16 text-purple-400 mb-4" />
                    )}
                    <div className="text-gray-400 text-sm">
                      {item.type === "video" ? "Video" : "Foto"}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold mb-2">
                        Ver {item.type === "video" ? "Video" : "Imagen"}
                      </div>
                      <div className="text-sm">Click para expandir</div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-orbitron font-bold text-purple-400 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>

                <div className="absolute top-2 right-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      item.type === "video" ? "bg-pink-400" : "bg-purple-400"
                    } animate-pulse`}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block p-6 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30"
            >
              <h3 className="text-2xl font-orbitron font-bold text-purple-400 mb-3">
                📸 Comparte tu Experiencia
              </h3>
              <p className="text-gray-300 mb-4">
                Usa el hashtag oficial y forma parte de la historia visual
              </p>
              <div className="text-3xl font-orbitron font-black text-pink-400">
                #LaNovena1
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-linear-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-400/30"
            >
              <h4 className="text-xl font-orbitron font-bold text-orange-400 mb-3">
                Archivo Asado Místico
              </h4>
              <p className="text-gray-300 text-sm">
                Años de parrillas, granizados y momentos únicos que construyeron
                la leyenda de este evento gastronómico underground.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-linear-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-400/30"
            >
              <h4 className="text-xl font-orbitron font-bold text-purple-400 mb-3">
                Colección 808 Fest
              </h4>
              <p className="text-gray-300 text-sm">
                Los sets más impactantes, las reacciones más épicas y la energía
                que solo el underground electrónico puede generar.
              </p>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
