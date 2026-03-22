"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlobeProps {
  className?: string;
  size?: number;
}

const Globe: React.FC<GlobeProps> = ({ className, size = 300 }) => {
  return (
    <motion.div
      className={cn("flex items-center justify-center aspect-square", className)}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
    >
      <style>{`
        @keyframes earthRotate {
          0%   { background-position: 0 0; }
          100% { background-position: 400px 0; }
        }
        @keyframes twinkle-a { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
        @keyframes twinkle-b { 0%,100% { opacity:0.1; } 50% { opacity:0.8; } }
        @keyframes twinkle-c { 0%,100% { opacity:0.1; } 50% { opacity:0.9; } }
      `}</style>

      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          backgroundImage:
            "url('https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/globe.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "left",
          animation: "earthRotate 30s linear infinite",
          boxShadow:
            "0 0 20px rgba(255,255,255,0.15), " +
            "-5px 0 8px #c3f4ff inset, " +
            "15px 2px 25px #000 inset, " +
            "-24px -2px 34px #c3f4ff99 inset, " +
            `${size}px 0 44px #00000066 inset, ` +
            `${size * 0.6}px 0 38px #000000aa inset`,
        }}
      >
        {/* Twinkling star particles */}
        <div className="absolute left-[-20px] top-[20px] h-1 w-1 rounded-full bg-white" style={{ animation: "twinkle-a 3s infinite" }} />
        <div className="absolute left-[-40px] top-[60px] h-1 w-1 rounded-full bg-white" style={{ animation: "twinkle-b 2s infinite" }} />
        <div className="absolute left-[70px] top-[10px] h-0.5 w-0.5 rounded-full bg-white" style={{ animation: "twinkle-c 4s infinite" }} />
        <div className="absolute bottom-[-20px] left-[60px] h-1 w-1 rounded-full bg-white" style={{ animation: "twinkle-a 3s infinite 1s" }} />
        <div className="absolute bottom-[-10px] right-[40px] h-0.5 w-0.5 rounded-full bg-white" style={{ animation: "twinkle-b 1.5s infinite" }} />
        <div className="absolute right-[-30px] top-[-10px] h-1 w-1 rounded-full bg-white" style={{ animation: "twinkle-c 4s infinite 0.5s" }} />
        <div className="absolute right-[-20px] top-[80px] h-0.5 w-0.5 rounded-full bg-white" style={{ animation: "twinkle-b 2s infinite 1.5s" }} />
      </div>
    </motion.div>
  );
};

export default Globe;
