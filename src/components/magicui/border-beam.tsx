"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  delay = 0,
  colorFrom = "#22C55E",
  colorTo = "#1B4332",
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className,
      )}
      style={{
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "1px",
      }}
    >
      <div
        className="absolute inset-0 animate-border-beam rounded-[inherit]"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
          backgroundSize: `${size}% ${size}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    </div>
  );
}
