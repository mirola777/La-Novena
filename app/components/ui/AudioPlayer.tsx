"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMounted && audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;

      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          const handleFirstInteraction = async () => {
            try {
              await audio.play();
              setIsPlaying(true);
              document.removeEventListener("click", handleFirstInteraction);
              document.removeEventListener(
                "touchstart",
                handleFirstInteraction
              );
            } catch (err) {
              console.log("Autoplay prevented");
            }
          };

          document.addEventListener("click", handleFirstInteraction, {
            once: true,
          });
          document.addEventListener("touchstart", handleFirstInteraction, {
            once: true,
          });
        }
      };

      setTimeout(playAudio, 1000);
    }
  }, [isMounted]);

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
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <motion.div
            animate={{
              scale: isPlaying ? [1, 1.3, 1] : 1,
              opacity: isPlaying ? [0.3, 0.6, 0.3] : 0.2,
            }}
            transition={{
              duration: 2,
              repeat: isPlaying ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-green-400 rounded-full blur-xl -m-2"
          />

          <div className="relative bg-black border-2 border-green-400 rounded-full p-4 md:p-5 hover:bg-green-400/10 transition-all duration-300 shadow-lg shadow-green-400/20">
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="playing"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Volume2 className="w-6 h-6 md:w-7 md:h-7 text-green-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="paused"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <VolumeX className="w-6 h-6 md:w-7 md:h-7 text-green-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.button>
    </>
  );
}
