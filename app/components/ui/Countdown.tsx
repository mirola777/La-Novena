"use client";

import { motion } from "framer-motion";

interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ days, hours, minutes, seconds }: CountdownProps) {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-center space-y-12 md:space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-center space-y-4"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-abolition text-white">
          CUENTA REGRESIVA
        </h1>
        <p className="text-green-400 text-xl md:text-2xl font-light">
          6 de Diciembre, 2025
        </p>
      </motion.div>

      <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-6xl md:text-7xl lg:text-8xl font-abolition font-black text-white"
          >
            {days.toString().padStart(2, "0")}
          </motion.div>
          <div className="text-sm md:text-base text-green-400 uppercase tracking-wider font-bold">
            DÍAS
          </div>
        </motion.div>

        <div className="text-5xl md:text-6xl lg:text-7xl font-abolition text-green-400">
          :
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="text-6xl md:text-7xl lg:text-8xl font-abolition font-black text-white"
          >
            {hours.toString().padStart(2, "0")}
          </motion.div>
          <div className="text-sm md:text-base text-green-400 uppercase tracking-wider font-bold">
            HORAS
          </div>
        </motion.div>

        <div className="text-5xl md:text-6xl lg:text-7xl font-abolition text-green-400">
          :
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="text-6xl md:text-7xl lg:text-8xl font-abolition font-black text-white"
          >
            {minutes.toString().padStart(2, "0")}
          </motion.div>
          <div className="text-sm md:text-base text-green-400 uppercase tracking-wider font-bold">
            MINUTOS
          </div>
        </motion.div>

        <div className="text-5xl md:text-6xl lg:text-7xl font-abolition text-green-400">
          :
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-6xl md:text-7xl lg:text-8xl font-abolition font-black text-green-400"
          >
            {seconds.toString().padStart(2, "0")}
          </motion.div>
          <div className="text-sm md:text-base text-green-400 uppercase tracking-wider font-bold">
            SEGUNDOS
          </div>
        </motion.div>
      </div>
    </div>
  );
}
