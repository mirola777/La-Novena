"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";

export function FooterSection() {
  return (
    <footer
      style={{
        paddingTop: "8rem",
        paddingBottom: "8rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
      className="relative bg-black overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/assets/background.png"
          alt=""
          fill
          className="object-cover object-center no-select"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full flex flex-col items-center justify-center">
        <ScrollReveal direction="up">
          <div style={{ marginBottom: "5rem" }} className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h2
                style={{ marginBottom: "1.5rem" }}
                className="text-7xl md:text-8xl lg:text-9xl font-abolition font-black text-white tracking-tight"
              >
                6 DE DICIEMBRE
              </h2>
              <div
                style={{ marginBottom: "1.5rem" }}
                className="text-5xl md:text-6xl lg:text-7xl font-abolition font-black text-green-400"
              >
                2025
              </div>
              <div
                style={{ marginBottom: "4rem" }}
                className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light tracking-widest"
              >
                PUENTE DE LA 4 SUR
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ padding: "2.5rem" }}
              className="inline-block border border-green-400/50 rounded-lg bg-green-400/5 mx-auto"
            >
              <div
                style={{ marginBottom: "2rem" }}
                className="flex justify-center"
              >
                <Image
                  src="/assets/lanovena.png"
                  alt="La Novena-1"
                  width={500}
                  height={140}
                  className="w-auto h-24 md:h-28 object-contain no-select"
                />
              </div>
              <div
                style={{ marginBottom: "2rem" }}
                className="text-xl md:text-2xl text-gray-300"
              >
                La fusion que cambiara todo
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-base md:text-lg">
                <div className="flex items-center gap-2 text-green-400">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                  <span>Puente 4 Sur</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Clock className="w-5 h-5 md:w-6 md:h-6" />
                  <span>7:00 PM - 2:00 AM</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  <span>Medellin</span>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ padding: "2rem" }}
              className="text-center border border-green-400/30 rounded-lg bg-black/50 flex flex-col items-center justify-center"
            >
              <Image
                src="/assets/AM.png"
                alt="Asado Místico"
                width={90}
                height={90}
                style={{ marginBottom: "1.5rem" }}
                className="w-20 h-20 object-contain no-select filter-none"
              />
              <h3
                style={{ marginBottom: "1.5rem" }}
                className="text-2xl md:text-3xl font-abolition font-bold text-white"
              >
                Asado Mistico
              </h3>
              <p className="text-gray-400 text-base md:text-lg">
                Nace en 2018 como un plan tranquilo entre amigos. Con el tiempo,
                evoluciono hasta convertirse en lo que es hoy: un espacio donde
                la buena comida, los granizados artesanales y la parrilla
                nocturna se unen para crear momentos inolvidables.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ padding: "2rem" }}
              className="text-center border border-green-400/30 rounded-lg bg-black/50 flex flex-col items-center justify-center"
            >
              <Image
                src="/assets/808.png"
                alt="808 Fest"
                width={90}
                height={90}
                style={{ marginBottom: "1.5rem" }}
                className="w-20 h-20 object-contain no-select filter-none"
              />
              <h3
                style={{ marginBottom: "1.5rem" }}
                className="text-2xl md:text-3xl font-abolition font-bold text-white"
              >
                808 Fest
              </h3>
              <p className="text-gray-400 text-base md:text-lg">
                Nace en 2022 de la mano de EnMed. Un festival que celebra la
                musica electronica, el hip hop y la cultura urbana, creando un
                espacio unico para los amantes del underground en Medellin.
              </p>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-center border-t border-gray-800 pt-12 md:pt-16 flex flex-col items-center justify-center space-y-12">
            <div className="flex justify-center">
              <Image
                src="/assets/logos.png"
                alt="Patrocinadores"
                width={800}
                height={100}
                className="w-auto h-16 md:h-20 object-contain no-select filter-none opacity-90"
              />
            </div>

            <div className="space-y-4">
              <div className="text-3xl md:text-4xl font-abolition font-black text-green-400">
                #LaNovena1
              </div>
              <p className="text-gray-400 text-lg md:text-xl">
                Siguenos para actualizaciones y contenido exclusivo
              </p>
            </div>

            <div className="text-gray-500 text-sm md:text-base space-y-3">
              <p>© 2025 La Novena-1 • Asado Mistico × 808 Fest</p>
              <p>Medellin, Colombia</p>
            </div>

            <motion.div
              className="mt-12"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="text-2xl md:text-3xl text-green-400 font-bold">
                Nos vemos en la historia!
              </span>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
