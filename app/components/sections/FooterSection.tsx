"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function FooterSection() {
  return (
    <footer className="relative py-20 md:py-32 px-4 md:px-6 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/assets/background.png"
          alt=""
          fill
          className="object-cover object-center no-select"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="mb-12"
            >
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-teko font-black text-white mb-4 md:mb-8 tracking-tight">
                6 DE DICIEMBRE
              </h2>
              <div className="text-4xl md:text-5xl lg:text-6xl font-teko font-black text-green-400 mb-4 md:mb-6">
                2025
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light tracking-widest">
                PUENTE DE LA 4 SUR
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block p-6 md:p-8 border border-green-400/50 rounded-lg bg-green-400/5"
            >
              <div className="mb-6">
                <Image
                  src="/assets/lanovena.png"
                  alt="La Novena-1"
                  width={400}
                  height={120}
                  className="w-auto h-20 md:h-24 object-contain mx-auto no-select"
                />
              </div>
              <div className="text-lg md:text-xl text-gray-300 mb-6">
                La fusión que cambiará todo
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base">
                <div className="flex items-center gap-2 text-green-400">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Una noche histórica</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Clock className="w-4 h-4 md:w-5 md:h-5" />
                  <span>6:00 PM - 2:00 AM</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Medellín Underground</span>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center p-6 border border-green-400/30 rounded-lg bg-black/50"
            >
              <Image
                src="/assets/AM.png"
                alt="Asado Místico"
                width={80}
                height={80}
                className="w-16 h-16 object-contain mx-auto mb-4 no-select"
              />
              <h3 className="text-xl md:text-2xl font-teko font-bold text-white mb-3">
                Asado Místico
              </h3>
              <p className="text-gray-400 text-sm">
                Gastronomía underground · Granizados artesanales · Parrilla nocturna
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center p-6 border border-green-400/30 rounded-lg bg-black/50"
            >
              <Image
                src="/assets/808.png"
                alt="808 Fest"
                width={80}
                height={80}
                className="w-16 h-16 object-contain mx-auto mb-4 no-select"
              />
              <h3 className="text-xl md:text-2xl font-teko font-bold text-white mb-3">
                808 Fest
              </h3>
              <p className="text-gray-400 text-sm">
                Música electrónica · Hip hop underground · Cultura urbana
              </p>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-center border-t border-gray-800 pt-8">
            <div className="mb-8">
              <Image
                src="/assets/logos.png"
                alt="Patrocinadores"
                width={600}
                height={80}
                className="w-auto h-12 md:h-16 object-contain mx-auto no-select opacity-60"
              />
            </div>

            <div className="mb-6">
              <div className="text-2xl md:text-3xl font-teko font-black text-green-400 mb-2">
                #LaNovena1
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                Síguenos para actualizaciones y contenido exclusivo
              </p>
            </div>

            <div className="text-gray-500 text-xs md:text-sm">
              <p className="mb-2">
                © 2025 La Novena-1 • Asado Místico × 808 Fest
              </p>
              <p>Medellín, Colombia • Underground Culture</p>
            </div>

            <motion.div
              className="mt-8"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="text-xl md:text-2xl text-green-400 font-bold">
                ¡Nos vemos en la historia!
              </span>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
