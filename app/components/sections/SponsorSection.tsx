"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function SponsorSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      style={{
        paddingTop: "8rem",
        paddingBottom: "8rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
      className="relative bg-black overflow-hidden flex items-center justify-center min-h-screen"
    >
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/assets/background.png"
          alt=""
          fill
          className="object-cover object-center no-select"
        />
      </div>

      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto w-full"
      >
        <ScrollReveal direction="up">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-abolition font-black text-white tracking-tight"
                style={{ marginBottom: "1rem" }}
              >
                PATROCINADOR <span className="text-green-400">OFICIAL</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-transparent via-green-400 to-transparent mx-auto" />
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <motion.div
            style={{ y }}
            className="relative border-2 border-green-400/40 rounded-3xl bg-linear-to-br from-black via-green-950/10 to-black overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-linear-to-br from-green-400/5 via-transparent to-green-400/5" />

            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-green-400 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-green-400 to-transparent" />

            <div style={{ padding: "4rem 2rem" }} className="relative z-10">
              <div className="flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  style={{ marginBottom: "3rem" }}
                  className="transition-transform duration-500"
                >
                  <Image
                    src="/assets/queparche.png"
                    alt="Que Parche"
                    width={300}
                    height={300}
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain no-select drop-shadow-[0_0_50px_rgba(34,197,94,0.5)]"
                  />
                </motion.div>

                <motion.h3
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl lg:text-7xl font-abolition font-black text-white tracking-tight"
                  style={{ marginBottom: "2rem" }}
                >
                  QUE <span className="text-green-400">PARCHE</span>
                </motion.h3>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl leading-relaxed font-light"
                  style={{ marginBottom: "3rem" }}
                >
                  La aplicacion definitiva para descubrir todos los eventos en
                  el area metropolitana. Desarrollada por{" "}
                  <span className="text-green-400 font-bold">Gundam</span> y{" "}
                  <span className="text-green-400 font-bold">Raven</span>, Que
                  Parche te conecta con la mejor escena cultural y de
                  entretenimiento de la ciudad.
                </motion.p>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-6 flex-wrap"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-green-400 to-emerald-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    <div
                      style={{ padding: "1rem 2.5rem" }}
                      className="relative flex items-center gap-3 bg-black border-2 border-green-400 rounded-2xl text-white font-bold text-lg"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <span className="font-black">MUY PRONTO</span>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-green-400 to-emerald-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    <div
                      style={{ padding: "1rem 2.5rem" }}
                      className="relative flex items-center gap-3 bg-black border-2 border-green-400 rounded-2xl text-white font-bold text-lg"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                      <span className="font-black">MUY PRONTO</span>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.a
                  href="https://www.instagram.com/queparche_app/?__pwa=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ marginTop: "3rem", padding: "1rem 3rem" }}
                  className="inline-flex items-center gap-3 bg-linear-to-r from-green-400 to-emerald-500 text-black rounded-full font-black text-lg shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.8)] transition-all duration-300"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@queparche_app</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </motion.div>
    </section>
  );
}
