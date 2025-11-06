"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      setIsVisible(window.scrollY > window.innerHeight * 0.9);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const clientInnerHeight =
    typeof window !== "undefined" ? window.innerHeight : 1000;

  const opacity = useTransform(
    scrollY,
    [clientInnerHeight * 0.9, clientInnerHeight * 1.1],
    [0, 1]
  );

  if (!isVisible) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ opacity }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-2xl border-b-2 border-green-400/30 shadow-lg shadow-black/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-4 md:py-5">
        <div className="flex items-center justify-between gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-1 flex justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/assets/AM.png"
                alt="Asado Místico"
                width={60}
                height={60}
                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain no-select cursor-pointer"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              type: "spring",
              stiffness: 200,
            }}
            className="shrink-0 relative"
          >
            <motion.div
              animate={{
                filter: [
                  "drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))",
                  "drop-shadow(0 0 25px rgba(34, 197, 94, 0.7))",
                  "drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/assets/lanovena.png"
                alt="La Novena-1"
                width={280}
                height={70}
                className="w-auto h-12 md:h-14 lg:h-16 object-contain no-select cursor-pointer"
                priority
              />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-green-400/20 blur-2xl rounded-full -z-10"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-1 flex justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/assets/808.png"
                alt="808 Fest"
                width={60}
                height={60}
                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain no-select cursor-pointer"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-400 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.nav>
  );
}
