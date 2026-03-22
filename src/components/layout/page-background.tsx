"use client";

import { cn } from "@/lib/utils";

interface PageBackgroundProps {
  className?: string;
}

export function PageBackground({ className }: PageBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* Warm editorial canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-peach via-bg-warm to-bg-sky" />

      {/* Subtle warm blobs — light, barely visible */}
      <div className="absolute -left-[10%] -top-[10%] h-[800px] w-[800px] animate-drift-1 rounded-full bg-[radial-gradient(circle,_rgba(255,109,46,0.04)_0%,_transparent_70%)] blur-[200px]" />
      <div className="absolute -bottom-[5%] -right-[10%] h-[600px] w-[600px] animate-drift-2 rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.03)_0%,_transparent_70%)] blur-[200px]" />
      <div className="absolute left-[40%] top-[50%] h-[500px] w-[500px] animate-drift-3 rounded-full bg-[radial-gradient(circle,_rgba(255,248,243,0.5)_0%,_transparent_70%)] blur-[200px]" />
    </div>
  );
}
