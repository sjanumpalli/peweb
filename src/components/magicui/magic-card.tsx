"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
  gradientSize?: number;
}

export function MagicCard({
  children,
  className,
  gradientColor = "rgba(34, 197, 94, 0.15)",
  gradientSize = 250,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [],
  );

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-black/[0.03] bg-white/45 shadow-glass backdrop-blur-xl transition-shadow duration-300 hover:shadow-glass-hover",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${gradientSize}px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 65%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
