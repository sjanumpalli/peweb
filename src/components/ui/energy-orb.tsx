"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EnergyOrbProps {
  className?: string;
  color?: string;
}

/**
 * EnergyOrb — a pure CSS animated orb with rotating conic gradient layers.
 * Inspired by 21st.dev SiriOrb. No images, no Three.js.
 */
export function EnergyOrb({ className, color = "#22C55E" }: EnergyOrbProps) {
  return (
    <motion.div
      className={cn("relative flex items-center justify-center", className)}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
    >
      {/* Outer ambient glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${color}22 0%, transparent 70%)` }}
      />

      {/* Main rotating conic orb */}
      <div className="orb-shell relative h-56 w-56 md:h-72 md:w-72 lg:h-80 lg:w-80">
        {/* Layer 1 — primary spin */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, ${color}ff, #16A34Acc, #86EFAC88, ${color}ff)`,
            animation: "orb-spin-cw 6s linear infinite",
            filter: "blur(2px)",
          }}
        />
        {/* Layer 2 — counter spin, offset hue */}
        <div
          className="absolute inset-2 rounded-full"
          style={{
            background: `conic-gradient(from 180deg, #16A34Aee, ${color}aa, #A7F3D0cc, #16A34Aee)`,
            animation: "orb-spin-ccw 9s linear infinite",
            filter: "blur(4px)",
          }}
        />
        {/* Layer 3 — slow drift, gives depth */}
        <div
          className="absolute inset-4 rounded-full"
          style={{
            background: `conic-gradient(from 90deg, #86EFAC, ${color}dd, #D1FAE5, #22C55Ecc)`,
            animation: "orb-spin-cw 14s linear infinite",
            filter: "blur(8px)",
          }}
        />
        {/* Inner bright core */}
        <div
          className="absolute inset-[22%] rounded-full"
          style={{
            background: `radial-gradient(circle at 40% 40%, #DCFCE7, ${color}cc 60%, #16A34A 100%)`,
            filter: "blur(1px)",
          }}
        />
        {/* Specular highlight */}
        <div
          className="absolute inset-[30%] rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.7) 0%, transparent 55%)",
          }}
        />
      </div>
    </motion.div>
  );
}
