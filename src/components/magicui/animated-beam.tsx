"use client";

import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  className?: string;
  direction?: "horizontal" | "vertical";
  colorFrom?: string;
  colorTo?: string;
  duration?: number;
}

export function AnimatedBeam({
  className,
  direction = "horizontal",
  colorFrom = "#22C55E",
  colorTo = "#1B4332",
  duration = 3,
}: AnimatedBeamProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isHorizontal ? "h-[2px] w-full" : "h-full w-[2px]",
        className,
      )}
      aria-hidden="true"
    >
      {/* Base track */}
      <div className="absolute inset-0 bg-brand/10" />

      {/* Animated beam */}
      <div
        className={cn(
          "absolute animate-beam",
          isHorizontal
            ? "left-0 top-0 h-full w-1/3"
            : "left-0 top-0 h-1/3 w-full",
        )}
        style={{
          background: isHorizontal
            ? `linear-gradient(90deg, transparent, ${colorFrom}, ${colorTo}, transparent)`
            : `linear-gradient(180deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
          animationDuration: `${duration}s`,
        }}
      />
    </div>
  );
}
