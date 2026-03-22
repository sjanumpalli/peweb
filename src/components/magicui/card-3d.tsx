"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  rotateIntensity?: number;
  glareEnabled?: boolean;
}

export function Card3D({
  children,
  className,
  rotateIntensity = 10,
  glareEnabled = true,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (y - 0.5) * -rotateIntensity;
      const rotateY = (x - 0.5) * rotateIntensity;
      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      );
      setGlarePosition({ x: x * 100, y: y * 100 });
    },
    [rotateIntensity],
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-black/[0.03] bg-white/45 shadow-glass backdrop-blur-xl transition-[transform,box-shadow] duration-300 ease-out",
        isHovered && "shadow-glass-hover",
        className,
      )}
      style={{ transform, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare overlay */}
      {glareEnabled && (
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.25), transparent 50%)`,
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </div>
  );
}
