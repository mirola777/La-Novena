"use client";

import { EVENT_DATE } from "@/app/constants/data";
import { useCountdown } from "@/app/hooks/useCountdown";

export function CountdownTimer() {
  const timeLeft = useCountdown(EVENT_DATE);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-900/20 to-black">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-12 gradient-text">
          FALTAN
        </h2>

        <div className="grid grid-cols-4 gap-4 md:gap-8 mb-8">
          <div className="bg-gradient-to-b from-pink-500/20 to-purple-900/20 p-6 rounded-lg border border-pink-500/30 glow">
            <div className="text-4xl md:text-6xl font-orbitron font-bold text-glow">
              {timeLeft.days.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-lg uppercase tracking-wider text-pink-300">
              Días
            </div>
          </div>

          <div className="bg-gradient-to-b from-pink-500/20 to-purple-900/20 p-6 rounded-lg border border-pink-500/30 glow">
            <div className="text-4xl md:text-6xl font-orbitron font-bold text-glow">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-lg uppercase tracking-wider text-pink-300">
              Horas
            </div>
          </div>

          <div className="bg-gradient-to-b from-pink-500/20 to-purple-900/20 p-6 rounded-lg border border-pink-500/30 glow">
            <div className="text-4xl md:text-6xl font-orbitron font-bold text-glow">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-lg uppercase tracking-wider text-pink-300">
              Min
            </div>
          </div>

          <div className="bg-gradient-to-b from-pink-500/20 to-purple-900/20 p-6 rounded-lg border border-pink-500/30 glow">
            <div className="text-4xl md:text-6xl font-orbitron font-bold text-glow">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-lg uppercase tracking-wider text-pink-300">
              Seg
            </div>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Para el evento más épico del underground
        </p>
      </div>
    </div>
  );
}
