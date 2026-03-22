"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  fill?: string;
}

export function Spotlight({
  children,
  className,
  fill = "rgba(34, 197, 94, 0.08)",
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [],
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div
        className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${fill}, transparent 40%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
