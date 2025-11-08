"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const showFrom = 2500; // px where the navbar starts to appear

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      setIsVisible(window.scrollY > showFrom);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      // initialize visibility on mount
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const opacity = useTransform(scrollY, [showFrom, showFrom + 200], [0, 1]);

  if (!isVisible) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ opacity }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-2xl border-b-2 border-green-400/30 shadow-lg shadow-black/50"
    >
      <div className="mx-auto px-6 md:px-10 lg:px-16 py-6 md:py-7 w-full">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              type: "spring",
              stiffness: 200,
            }}
            className="relative"
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
                width={320}
                height={85}
                className="w-auto h-14 md:h-16 lg:h-[75px] object-contain no-select cursor-pointer"
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
