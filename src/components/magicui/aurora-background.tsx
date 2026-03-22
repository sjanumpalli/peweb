"use client";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Aurora layers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -inset-[10px] opacity-50">
          <div
            className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 animate-aurora-1 rounded-full blur-[120px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(34,197,94,0.25) 0%, rgba(27,67,50,0.1) 50%, transparent 70%)",
            }}
          />
          <div
            className="absolute left-1/3 top-1/4 h-[500px] w-[800px] animate-aurora-2 rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(27,67,50,0.2) 0%, rgba(34,197,94,0.08) 50%, transparent 70%)",
            }}
          />
          <div
            className="absolute right-1/4 top-1/3 h-[400px] w-[600px] animate-aurora-3 rounded-full blur-[80px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(34,197,94,0.15) 0%, rgba(27,67,50,0.08) 50%, transparent 70%)",
            }}
          />
        </div>
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
