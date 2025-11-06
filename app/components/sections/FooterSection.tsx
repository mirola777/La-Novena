"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function FooterSection() {
  return (
    <footer className="relative py-32 px-6 bg-black">
      <div className="relative z-10 max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="mb-12"
            >
              <h2 className="text-8xl md:text-9xl font-orbitron font-black text-white mb-8 tracking-tight">
                6 DE DICIEMBRE
              </h2>
              <div className="text-4xl md:text-6xl font-light text-green-400 mb-6">
                2025
              </div>
              <div className="text-2xl md:text-3xl text-gray-400 font-light tracking-widest">
                PUENTE DE LA 4 SUR
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block p-8 bg-linear-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 rounded-lg border border-pink-400/50 glow"
            >
              <div className="text-4xl md:text-6xl font-orbitron font-black text-white mb-4">
                LA NOVENA-1
              </div>
              <div className="text-xl text-gray-300 mb-4">
                La fusión que cambiará todo
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
                <div className="flex items-center gap-2 text-pink-400">
                  <Calendar className="w-5 h-5" />
                  <span>Una noche histórica</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Clock className="w-5 h-5" />
                  <span>6:00 PM - 2:00 AM</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                  <span>Medellín Underground</span>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center p-6 bg-linear-to-b from-orange-500/20 to-transparent rounded-lg border border-orange-400/30"
            >
              <h3 className="text-xl font-orbitron font-bold text-orange-400 mb-3">
                Asado Místico
              </h3>
              <p className="text-gray-400 text-sm">
                Gastronomía underground
                <br />
                Granizados artesanales
                <br />
                Parrilla nocturna
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center p-6 bg-linear-to-b from-purple-500/20 to-transparent rounded-lg border border-purple-400/30"
            >
              <h3 className="text-xl font-orbitron font-bold text-purple-400 mb-3">
                808 Fest
              </h3>
              <p className="text-gray-400 text-sm">
                Música electrónica
                <br />
                Hip hop underground
                <br />
                Cultura urbana
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center p-6 bg-linear-to-b from-pink-500/20 to-transparent rounded-lg border border-pink-400/30"
            >
              <h3 className="text-xl font-orbitron font-bold text-pink-400 mb-3">
                La Novena-1
              </h3>
              <p className="text-gray-400 text-sm">
                La fusión épica
                <br />
                Experiencia única
                <br />
                Historia en vivo
              </p>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-center border-t border-gray-800 pt-8">
            <div className="mb-6">
              <div className="text-3xl font-orbitron font-black gradient-text mb-2">
                #LaNovena1
              </div>
              <p className="text-gray-400">
                Síguenos para actualizaciones y contenido exclusivo
              </p>
            </div>

            <div className="text-gray-500 text-sm">
              <p className="mb-2">
                © 2025 La Novena-1 • Asado Místico × 808 Fest
              </p>
              <p>Medellín, Colombia • Underground Culture</p>
            </div>

            <motion.div
              className="mt-8"
              animate={{
                textShadow: [
                  "0 0 5px rgba(255,0,150,0.5)",
                  "0 0 20px rgba(255,0,150,0.8)",
                  "0 0 5px rgba(255,0,150,0.5)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="text-2xl text-pink-400 font-bold">
                ¡Nos vemos en la historia!
              </span>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
