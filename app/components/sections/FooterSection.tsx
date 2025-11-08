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
                  <span>7:00 PM - ???</span>
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
              <p
                className="text-gray-400 text-base md:text-lg"
                style={{ marginBottom: "2rem" }}
              >
                Nace en 2018 como un plan tranquilo entre amigos. Con el tiempo,
                evoluciono hasta convertirse en lo que es hoy: un espacio donde
                la buena comida, los granizados artesanales y la parrilla
                nocturna se unen para crear momentos inolvidables.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-green-400/20">
                  <Image
                    src="/assets/artists/beleuve1.jpg"
                    alt="Gallery"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-green-400/20">
                  <Image
                    src="/assets/artists/dj1.jpg"
                    alt="Gallery"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-green-400/20">
                  <Image
                    src="/assets/artists/enigma1.jpg"
                    alt="Gallery"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
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
              <p
                className="text-gray-400 text-base md:text-lg"
                style={{ marginBottom: "2rem" }}
              >
                Nace en 2022 de la mano de EnMed. Un festival que celebra la
                musica electronica, el hip hop y la cultura urbana, creando un
                espacio unico para los amantes del underground en Medellin.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-green-400/20">
                  <Image
                    src="/assets/artists/fran1.jpeg"
                    alt="Gallery"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-green-400/20">
                  <Image
                    src="/assets/artists/jacko1.jpeg"
                    alt="Gallery"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-green-400/20">
                  <Image
                    src="/assets/artists/jp1.jpg"
                    alt="Gallery"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.5}>
          <div
            style={{
              paddingTop: "8rem",
              textAlign: "center",
              borderColor: "gray-800",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "3rem", // Equivalent to space-y-12
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="/assets/logos.png"
                alt="Patrocinadores"
                width={800}
                height={100}
                className="w-auto h-16 md:h-20 object-contain no-select filter-none opacity-90"
              />
            </div>

            <div
              style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  fontSize: "1.875rem", // text-3xl
                  fontWeight: "900", // font-black
                  color: "#22c55e", // text-green-400
                }}
              >
                #LaNovena1
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.5rem", // Equivalent to gap-6
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://www.instagram.com/asadomistico/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#9ca3af", // text-gray-400
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#22c55e")
                  } // Hover effect
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#9ca3af")
                  }
                >
                  <svg
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span style={{ fontSize: "1.125rem" }}>@asadomistico</span>
                </a>
                <a
                  href="https://www.instagram.com/808festmde/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#9ca3af", // text-gray-400
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#22c55e")
                  } // Hover effect
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#9ca3af")
                  }
                >
                  <svg
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span style={{ fontSize: "1.125rem" }}>@808festmde</span>
                </a>
              </div>
            </div>

            <div
              style={{
                color: "#6b7280", // text-gray-500
                fontSize: "0.875rem", // text-sm
                gap: "0.75rem", // Equivalent to space-y-3
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p>© 2025 La Novena-1 • Asado Mistico × 808 Fest</p>
              <p>Medellin, Colombia</p>
            </div>

            <motion.div
              style={{ marginTop: "3rem" }}
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span
                style={{
                  fontSize: "1.5rem", // text-2xl
                  color: "#22c55e", // text-green-400
                  fontWeight: "bold",
                }}
              >
                Nos vemos en la historia!
              </span>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
