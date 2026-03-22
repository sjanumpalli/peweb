"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface LampEffectProps {
  children: React.ReactNode;
  className?: string;
}

export function LampEffect({ children, className }: LampEffectProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden",
        className,
      )}
    >
      {/* Lamp source */}
      <div className="relative flex w-full items-center justify-center">
        <motion.div
          initial={{ width: "8rem" }}
          animate={isInView ? { width: "24rem" } : undefined}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 z-30 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent"
        />
        <motion.div
          initial={{ width: "8rem", opacity: 0.2 }}
          animate={isInView ? { width: "36rem", opacity: 0.5 } : undefined}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 h-48 bg-gradient-to-b from-brand/20 to-transparent blur-[60px]"
          style={{
            clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* Glow behind content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : undefined}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute -top-20 h-80 w-80 rounded-full bg-brand/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 pt-16">{children}</div>
    </div>
  );
}
