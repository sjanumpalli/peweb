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
      {/* Ocean Breeze base canvas */}
      <div className="absolute inset-0 bg-[#f0f8ff]" />

      {/* Green energy blobs — brand identity */}
      <div className="absolute -left-[10%] -top-[15%] h-[900px] w-[900px] animate-drift-1 rounded-full bg-[radial-gradient(circle,_rgba(34,197,94,0.07)_0%,_transparent_65%)] blur-[160px]" />
      <div className="absolute -bottom-[10%] right-[5%] h-[700px] w-[700px] animate-drift-2 rounded-full bg-[radial-gradient(circle,_rgba(34,197,94,0.05)_0%,_transparent_65%)] blur-[160px]" />
      <div className="absolute left-[35%] top-[30%] h-[600px] w-[600px] animate-drift-3 rounded-full bg-[radial-gradient(circle,_rgba(224,242,254,0.6)_0%,_transparent_70%)] blur-[180px]" />
      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, #374151 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
    </div>
  );
}
