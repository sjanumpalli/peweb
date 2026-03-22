"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/theme-provider";

interface PageBackgroundProps {
  className?: string;
}

export function PageBackground({ className }: PageBackgroundProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}
      aria-hidden="true"
    >
      {isDark ? (
        <>
          {/* Deep space base */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(160deg, #080e1f 0%, #060c1a 50%, #050a16 100%)" }}
          />
          {/* Top-left green energy bloom */}
          <div
            className="absolute -left-[15%] -top-[20%] h-[900px] w-[900px] animate-drift-1 rounded-full blur-[200px]"
            style={{ background: "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 65%)" }}
          />
          {/* Bottom-right anchor */}
          <div
            className="absolute -bottom-[15%] right-[0%] h-[700px] w-[700px] animate-drift-2 rounded-full blur-[180px]"
            style={{ background: "radial-gradient(circle, rgba(22,163,74,0.05) 0%, transparent 65%)" }}
          />
          {/* Mid — subtle blue-navy diffusion */}
          <div
            className="absolute left-[25%] top-[30%] h-[600px] w-[600px] animate-drift-3 rounded-full blur-[220px]"
            style={{ background: "radial-gradient(circle, rgba(30,58,138,0.12) 0%, transparent 70%)" }}
          />
          {/* Top-right — cool navy highlight */}
          <div
            className="absolute -right-[10%] top-[0%] h-[500px] w-[500px] animate-drift-1-reverse rounded-full blur-[160px]"
            style={{ background: "radial-gradient(circle, rgba(15,32,68,0.5) 0%, transparent 70%)" }}
          />
        </>
      ) : (
        <>
          {/* Pure white base */}
          <div className="absolute inset-0 bg-white" />
          {/* Subtle warm green bloom — top left */}
          <div
            className="absolute -left-[15%] -top-[20%] h-[900px] w-[900px] animate-drift-1 rounded-full blur-[250px]"
            style={{ background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 65%)" }}
          />
          {/* Subtle warm glow — bottom right */}
          <div
            className="absolute -bottom-[15%] right-[0%] h-[700px] w-[700px] animate-drift-2 rounded-full blur-[220px]"
            style={{ background: "radial-gradient(circle, rgba(22,163,74,0.04) 0%, transparent 65%)" }}
          />
        </>
      )}
    </div>
  );
}
