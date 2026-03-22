"use client";

import { cn } from "@/lib/utils";

interface NeonGradientCardProps {
  children: React.ReactNode;
  className?: string;
  borderSize?: number;
  neonColors?: { from: string; to: string };
}

export function NeonGradientCard({
  children,
  className,
  borderSize = 2,
  neonColors = { from: "#22C55E", to: "#1B4332" },
}: NeonGradientCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl p-[var(--border-size)]",
        className,
      )}
      style={
        {
          "--border-size": `${borderSize}px`,
          "--neon-from": neonColors.from,
          "--neon-to": neonColors.to,
        } as React.CSSProperties
      }
    >
      {/* Animated border gradient */}
      <div
        className="pointer-events-none absolute inset-0 animate-neon-rotate rounded-[inherit]"
        style={{
          background: `conic-gradient(from var(--neon-angle, 0deg), var(--neon-from), var(--neon-to), transparent, var(--neon-from))`,
        }}
        aria-hidden="true"
      />

      {/* Outer glow */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-[inherit] opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: `linear-gradient(135deg, ${neonColors.from}40, ${neonColors.to}40)`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative rounded-[calc(1.5rem-var(--border-size))] bg-white/80 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}
