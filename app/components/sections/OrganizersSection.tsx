"use client";

import { motion } from "framer-motion";
import { Instagram, Sparkles } from "lucide-react";
import { useRef } from "react";
import { ORGANIZERS } from "../../constants/data";
import { ScrollReveal } from "../ui/ScrollReveal";

export function OrganizersSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: "8rem",
        paddingBottom: "8rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
      className="relative bg-black overflow-hidden flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center">
        <ScrollReveal direction="up">
          <div
            style={{
              marginBottom: "5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
            className="text-center"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ marginBottom: "2rem" }}
              className="inline-block"
            >
              <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-green-400" />
            </motion.div>
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="text-7xl md:text-9xl lg:text-[12rem] font-abolition font-black text-white tracking-tight"
            >
              ST<span className="text-green-400">AFF</span>
            </motion.h2>
          </div>
        </ScrollReveal>

        <div className="relative w-full">
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
      whileHover={{ scale: 1.02 }}
      className="shrink-0 w-80 md:w-96 relative group"
    >
      <div
        style={{ padding: "2rem" }}
        className="relative w-full overflow-hidden rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-colors duration-300 bg-black/80 backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]"
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <h3
            style={{ marginBottom: "0.5rem" }}
            className="text-2xl md:text-3xl font-abolition font-black text-white"
          >
            {organizer.name}
          </h3>
          <p
            style={{ marginBottom: "0.75rem" }}
            className="text-green-400 font-bold text-sm md:text-base"
          >
            {organizer.role}
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            {organizer.description}
          </p>
        </div>

        {organizer.instagram && (
          <a
            href={organizer.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.75rem 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              background: "linear-gradient(to right, #a855f7, #ec4899)",
              color: "white",
              borderRadius: "9999px",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "all 0.3s",
              boxShadow: "0 10px 15px -3px rgba(168, 85, 247, 0.3)",
            }}
            className="hover:brightness-110"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
