"use client";

import { motion } from "framer-motion";
import { Award, Crown } from "lucide-react";
import { ORGANIZERS } from "../../constants/data";
import { ScrollReveal } from "../ui/ScrollReveal";

export function OrganizersSection() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="down">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Crown className="w-12 h-12 text-yellow-400" />
              <h2 className="text-5xl md:text-7xl font-orbitron font-black gradient-text">
                ORGANIZADORES
              </h2>
              <Award className="w-12 h-12 text-yellow-400" />
            </div>
            <p className="text-xl text-gray-400">
              Los visionarios detrás de La Novena-1
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ORGANIZERS.map((organizer, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.2}
            >
              <motion.div
                whileHover={{ scale: 1.03, rotateY: 2 }}
                className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 p-8 rounded-lg border border-yellow-400/30 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                </div>

                <div className="mb-6">
                  <h3 className="text-3xl font-orbitron font-black text-yellow-400 mb-2">
                    {organizer.name}
                  </h3>
                  <div className="text-orange-300 text-lg font-bold uppercase tracking-wider">
                    {organizer.role}
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {organizer.description}
                </p>

                <div className="mt-6 pt-6 border-t border-yellow-500/30">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-bold">
                      Pioneros del Underground
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-12 text-center p-8 bg-linear-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-pink-500/30"
          >
            <h3 className="text-3xl font-orbitron font-bold text-pink-400 mb-4">
              🤝 Colaboración Histórica
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Después de años construyendo sus propias comunidades, estos dos
              colectivos se unen por primera vez para crear algo que nunca antes
              se había visto en Medellín.
              <span className="text-pink-400 font-bold"> La Novena-1 </span>
              es el resultado de una visión compartida: llevar el underground a
              su máximo nivel.
            </p>

            <div className="mt-6 text-lg text-cyan-400">
              <span className="font-bold">
                Unidos por la pasión, separados por nada.
              </span>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
