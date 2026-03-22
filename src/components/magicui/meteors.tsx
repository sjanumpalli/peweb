"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const meteors = useMemo(() => {
    return Array.from({ length: number }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`,
      size: Math.random() * 1.5 + 0.5,
    }));
  }, [number]);

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute animate-meteor rounded-full bg-gradient-to-b from-brand/60 to-transparent"
          style={{
            left: meteor.left,
            top: "-5%",
            width: `${meteor.size}px`,
            height: `${meteor.size * 80}px`,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        >
          <span
            className="absolute top-0 h-[1px] w-[1px] rounded-full bg-brand shadow-[0_0_0_1px_rgba(34,197,94,0.3)]"
            style={{
              boxShadow: `0 0 2px 1px rgba(34,197,94,0.3), 0 0 8px 2px rgba(34,197,94,0.2)`,
            }}
          />
        </span>
      ))}
    </div>
  );
}
