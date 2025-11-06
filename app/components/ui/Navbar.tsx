"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = useTransform(
    scrollY,
    [window.innerHeight * 0.8, window.innerHeight],
    [0, 1]
  );

  if (!isVisible) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-green-400/30"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <Image
              src="/assets/AM.png"
              alt="Asado Místico"
              width={50}
              height={50}
              className="w-10 h-10 md:w-12 md:h-12 object-contain no-select"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/assets/lanovena.png"
              alt="La Novena-1"
              width={150}
              height={40}
              className="w-auto h-8 md:h-10 object-contain no-select"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 flex justify-end"
          >
            <Image
              src="/assets/808.png"
              alt="808 Fest"
              width={50}
              height={50}
              className="w-10 h-10 md:w-12 md:h-12 object-contain no-select"
            />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
