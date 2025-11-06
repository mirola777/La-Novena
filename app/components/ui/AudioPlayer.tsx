"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  if (!isMounted) return null;

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/assets/sound.mp3" type="audio/mpeg" />
      </audio>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
      >
        <div className="relative">
          <motion.div
            animate={{
              scale: isPlaying ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: isPlaying ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-green-400/20 rounded-full blur-xl"
          />

          <div className="relative bg-black border-2 border-green-400 rounded-full p-3 md:p-4 hover:bg-green-400/10 transition-all duration-300">
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="playing"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="paused"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.button>
    </>
  );
}
