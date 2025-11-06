"use client";

import { EVENT_DATE } from "@/app/constants/data";
import { useCountdown } from "@/app/hooks/useCountdown";

export function CountdownTimer() {
  const timeLeft = useCountdown(EVENT_DATE);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light text-gray-400 mb-16 tracking-[0.2em] uppercase">
          Faltan
        </h2>

        <div className="grid grid-cols-4 gap-8 md:gap-12 mb-16">
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-orbitron font-black text-white mb-4">
              {timeLeft.days.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base text-gray-400 uppercase tracking-widest">
              Días
            </div>
          </div>

          <div className="text-center">
            <div className="text-6xl md:text-8xl font-orbitron font-black text-white mb-4">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base text-gray-400 uppercase tracking-widest">
              Hrs
            </div>
          </div>

          <div className="text-center">
            <div className="text-6xl md:text-8xl font-orbitron font-black text-white mb-4">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base text-gray-400 uppercase tracking-widest">
              Min
            </div>
          </div>

          <div className="text-center">
            <div className="text-6xl md:text-8xl font-orbitron font-black text-green-400 mb-4">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base text-gray-400 uppercase tracking-widest">
              Seg
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-500 font-light">
          Para la fusión del underground
        </p>
      </div>
    </div>
  );
}
