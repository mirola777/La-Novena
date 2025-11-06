"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { ORGANIZERS } from "../../constants/data";
import { ParallaxSection } from "../ui/ParallaxSection";
import { ScrollReveal } from "../ui/ScrollReveal";

export function OrganizersSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-black overflow-hidden"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <ParallaxSection speed={0.4} className="absolute inset-0 opacity-20">
          <Image
            src="/assets/background.png"
            alt=""
            fill
            className="object-cover object-center no-select"
          />
        </ParallaxSection>
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-20 md:mb-28 px-4">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block mb-8"
            >
              <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-green-400" />
            </motion.div>
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="text-7xl md:text-9xl lg:text-[12rem] font-abolition font-black text-white mb-6 tracking-tight"
            >
              ORGANI<span className="text-green-400">ZADORES</span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-gray-400 font-light flex items-center justify-center gap-3 flex-wrap"
            >
              🎄 El equipo que hace la magia decembrina 🎅
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <motion.div
            animate={{
              x: [0, -2000],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 md:gap-12"
          >
            {[...ORGANIZERS, ...ORGANIZERS, ...ORGANIZERS].map(
              (organizer, index) => (
                <OrganizerCard
                  key={`${organizer.name}-${index}`}
                  organizer={organizer}
                />
              )
            )}
          </motion.div>
        </div>

        <ScrollReveal delay={0.6}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-center mt-20 md:mt-28 p-8 md:p-12 border-2 border-green-400/40 rounded-2xl bg-linear-to-br from-green-400/10 via-green-400/5 to-transparent backdrop-blur-sm relative overflow-hidden"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-10 -right-10 text-9xl opacity-10"
            >
              🎄
            </motion.div>
            <motion.div
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-10 -left-10 text-9xl opacity-10"
            >
              🎅
            </motion.div>
            <p className="text-2xl md:text-3xl text-green-400 font-bold mb-4 relative z-10">
              ¡Gracias a todo el equipo!
            </p>
            <p className="text-xl text-gray-300 font-light relative z-10">
              Unidos para crear una Navidad underground inolvidable 🎊✨
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

interface OrganizerCardProps {
  organizer: {
    name: string;
    role: string;
    description: string;
    instagram?: string;
  };
}

function OrganizerCard({ organizer }: OrganizerCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className="shrink-0 w-80 md:w-96 h-[500px] md:h-[550px] relative group"
    >
      <div className="relative w-full h-full overflow-hidden rounded-3xl border-2 border-green-400/40 hover:border-green-400/70 transition-all duration-500 bg-black/80 backdrop-blur-sm">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-1 bg-linear-to-r from-green-400/40 to-green-600/40 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="relative w-full h-2/3 overflow-hidden">
          <Image
            src="/assets/background.png"
            alt={organizer.name}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110 no-select"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-4 right-4 text-4xl"
          >
            🎄
          </motion.div>
        </div>

        <div className="relative p-6 flex flex-col justify-between h-1/3">
          <div>
            <h3 className="text-2xl md:text-3xl font-abolition font-black text-white mb-2">
              {organizer.name}
            </h3>
            <p className="text-green-400 font-bold text-sm md:text-base mb-3">
              {organizer.role}
            </p>
            <p className="text-gray-300 text-sm md:text-base line-clamp-2">
              {organizer.description}
            </p>
          </div>

          {organizer.instagram && (
            <motion.a
              href={organizer.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 shadow-lg shadow-purple-500/30"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
