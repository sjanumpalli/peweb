"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export function TracingBeam({ children, className }: TracingBeamProps) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, svgHeight]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, svgHeight - 100]);

  return (
    <div ref={ref} className={cn("relative flex gap-10", className)}>
      {/* Beam track */}
      <div className="relative hidden md:block">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="block"
          aria-hidden="true"
        >
          {/* Background line */}
          <path
            d={`M 10 0 V ${svgHeight}`}
            fill="none"
            stroke="rgba(34,197,94,0.1)"
            strokeWidth="1.5"
          />
          {/* Animated beam */}
          <motion.path
            d={`M 10 0 V ${svgHeight}`}
            fill="none"
            stroke="url(#beamGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
            }}
          />
          {/* Glow dot */}
          <motion.circle cx="10" r="5" fill="#22C55E" style={{ cy: y1 }}>
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="2s"
              repeatCount="indefinite"
            />
          </motion.circle>
          <motion.circle
            cx="10"
            r="10"
            fill="rgba(34,197,94,0.2)"
            style={{ cy: y1 }}
          >
            <animate
              attributeName="opacity"
              values="0.2;0.5;0.2"
              dur="2s"
              repeatCount="indefinite"
            />
          </motion.circle>
          <defs>
            <linearGradient id="beamGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#1B4332" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div ref={contentRef} className="flex-1">
        {children}
      </div>
    </div>
  );
}
