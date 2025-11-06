"use client";

import { ScrollReveal } from "../ui/ScrollReveal";

export function LocationSection() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-orbitron font-black text-white mb-6 tracking-tight">
              UBICA<span className="text-green-400">CIÓN</span>
            </h2>
            <p className="text-xl text-gray-400 font-light">
              El punto de encuentro del underground
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-12 text-center lg:text-left">
              <div>
                <h3 className="text-2xl font-orbitron font-light text-white mb-4 tracking-widest">
                  DIRECCIÓN
                </h3>
                <p className="text-xl text-green-400 font-light mb-2">
                  Puente de la 4 Sur
                </p>
                <p className="text-gray-400 font-light">
                  Carrera 50C 1 Sur 43, Medellín
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-orbitron font-light text-white mb-4 tracking-widest">
                  HORARIOS
                </h3>
                <p className="text-xl text-green-400 font-light">
                  6:00 PM - 2:00 AM
                </p>
                <p className="text-gray-400 font-light">
                  Viernes 6 de Diciembre, 2025
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-orbitron font-light text-white mb-4 tracking-widest">
                  TRANSPORTE
                </h3>
                <div className="text-gray-400 font-light space-y-2">
                  <p>Metro: Estación Aguacatala</p>
                  <p>Uber/DiDi disponible</p>
                  <p>Parqueadero en la zona</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="text-center lg:text-right">
              <div className="w-full aspect-video bg-gray-900 border border-gray-700 mb-8 flex items-center justify-center">
                <span className="text-gray-600 text-sm">MAPA PLACEHOLDER</span>
              </div>
              <h3 className="text-2xl font-orbitron font-light text-green-400 mb-4">
                El Corazón del Underground
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Un lugar icónico donde la música, la comida y la cultura urbana
                se encuentran para crear algo legendario.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
