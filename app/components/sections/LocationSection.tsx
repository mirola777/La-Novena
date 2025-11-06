"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function LocationSection() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-black to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="down">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-center mb-4 gradient-text">
            UBICACIÓN
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            El punto de encuentro del underground
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-6 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30"
              >
                <MapPin className="w-8 h-8 text-pink-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-pink-400 mb-2">
                    Dirección
                  </h3>
                  <p className="text-lg text-white">Puente de la 4 Sur</p>
                  <p className="text-gray-300">
                    Carrera 50C 1 Sur 43, Medellín
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-6 bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-400/30"
              >
                <Clock className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-2">
                    Horarios
                  </h3>
                  <p className="text-lg text-white">6:00 PM - 2:00 AM</p>
                  <p className="text-gray-300">Viernes 6 de Diciembre, 2025</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-6 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-400/30"
              >
                <Navigation className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-yellow-400 mb-2">
                    Cómo Llegar
                  </h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>🚌 Estación Metro: Aguacatala</li>
                    <li>🚗 Parqueadero disponible en la zona</li>
                    <li>🚶 A 5 min caminando desde la estación</li>
                    <li>📱 Uber/DiDi hasta "Puente 4 Sur"</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-6 bg-linear-to-r from-green-500/20 to-cyan-500/20 rounded-lg border border-green-400/30"
              >
                <Phone className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-green-400 mb-2">
                    Contacto
                  </h3>
                  <p className="text-gray-300">Para información adicional:</p>
                  <p className="text-white font-mono">+57 300 XXX XXXX</p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-linear-to-b from-purple-900/30 to-black p-8 rounded-lg border border-pink-500/30 glow"
              >
                <div className="aspect-video bg-linear-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-600">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg">Mapa Interactivo</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Google Maps disponible próximamente
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-orbitron font-bold text-pink-400 mb-2">
                    El Corazón del Underground
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Un lugar icónico donde la música, la comida y la cultura
                    urbana se encuentran para crear algo legendario. Fácil
                    acceso, ambiente único.
                  </p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
