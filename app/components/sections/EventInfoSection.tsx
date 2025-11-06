"use client";

import { motion } from "framer-motion";
import { Calendar, Flame, Music, Users } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function EventInfoSection() {
  const asadoMisticoFeatures = [
    "🔥 Parrilla al carbón con los mejores cortes",
    "🍧 Granizados artesanales únicos",
    "🎵 Ambiente underground auténtico",
    "👥 Comunidad apasionada por la buena música",
  ];

  const fest808Features = [
    "🎛️ Sets electrónicos de primer nivel",
    "💫 Experiencias audiovisuales inmersivas",
    "🌃 Cultura urbana en estado puro",
    "⚡ Energía que no para hasta el amanecer",
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-b from-purple-900/10 via-black to-pink-900/10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="down">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-center mb-4 gradient-text">
            LA FUSIÓN
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            Cuando dos mundos se unen, nace algo épico
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ScrollReveal direction="left">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-linear-to-br from-orange-500/20 to-red-500/20 p-8 rounded-lg border border-orange-400/30 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Flame className="w-8 h-8 text-orange-400" />
              </div>

              <h3 className="text-3xl font-orbitron font-black text-orange-400 mb-4">
                ASADO MÍSTICO
              </h3>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Desde 2019, hemos estado creando experiencias gastronómicas que
                van más allá de la comida. Somos el punto de encuentro donde la
                parrilla se vuelve ritual y cada granizado cuenta una historia.
              </p>

              <div className="space-y-3">
                {asadoMisticoFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-linear-to-br from-purple-500/20 to-blue-500/20 p-8 rounded-lg border border-purple-400/30 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Music className="w-8 h-8 text-purple-400" />
              </div>

              <h3 className="text-3xl font-orbitron font-black text-purple-400 mb-4">
                808 FEST
              </h3>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                La fuerza del underground electrónico hecho realidad. Desde
                beats que rompen esquemas hasta experiencias sonoras que
                trascienden los límites de lo convencional.
              </p>

              <div className="space-y-3">
                {fest808Features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="text-center p-8 bg-linear-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-lg border border-pink-400/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-pink-500/5 via-transparent to-cyan-500/5" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Users className="w-12 h-12 text-pink-400" />
                <div className="text-4xl md:text-6xl font-orbitron font-black gradient-text">
                  LA NOVENA-1
                </div>
                <Calendar className="w-12 h-12 text-cyan-400" />
              </div>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Por primera vez en la historia, estos dos universos se fusionan
                para crear
                <span className="text-pink-400 font-bold"> La Novena-1</span>:
                una experiencia que redefine lo que significa el underground en
                Medellín.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-orbitron font-black text-orange-400 mb-2">
                    6+ AÑOS
                  </div>
                  <div className="text-gray-400">De experiencia combinada</div>
                </div>
                <div>
                  <div className="text-3xl font-orbitron font-black text-purple-400 mb-2">
                    11+ ARTISTAS
                  </div>
                  <div className="text-gray-400">En una sola noche</div>
                </div>
                <div>
                  <div className="text-3xl font-orbitron font-black text-cyan-400 mb-2">
                    1 NOCHE
                  </div>
                  <div className="text-gray-400">Que hará historia</div>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
