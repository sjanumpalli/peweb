"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  background?: string;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "rgba(255, 255, 255, 0.3)",
  shimmerSize = "0.1em",
  shimmerDuration = "2.5s",
  background = "#22C55E",
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg",
        "focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
      style={{ background }}
      {...props}
    >
      {/* Shimmer effect */}
      <div
        className="absolute inset-0 overflow-hidden rounded-full"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 -translate-x-full animate-shimmer"
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            animationDuration: shimmerDuration,
          }}
        />
      </div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
