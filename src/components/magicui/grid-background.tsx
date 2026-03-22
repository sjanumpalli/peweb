"use client";

import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  gridSize?: number;
  gridColor?: string;
  fadeFrom?: "top" | "bottom" | "both" | "edges";
}

export function GridBackground({
  className,
  gridSize = 40,
  gridColor = "rgba(34, 197, 94, 0.06)",
  fadeFrom = "edges",
}: GridBackgroundProps) {
  const maskMap = {
    top: "linear-gradient(to bottom, transparent 0%, black 40%)",
    bottom: "linear-gradient(to top, transparent 0%, black 40%)",
    both: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
    edges:
      "radial-gradient(ellipse at center, black 30%, transparent 70%)",
  } as const;

  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(${gridColor} 1px, transparent 1px),
          linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
        `,
        backgroundSize: `${gridSize}px ${gridSize}px`,
        WebkitMaskImage: maskMap[fadeFrom],
        maskImage: maskMap[fadeFrom],
      }}
    />
  );
}
