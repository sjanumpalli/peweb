"use client";

import React from "react";
import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import Globe from "@/components/ui/globe";
import { useTheme } from "@/components/providers/theme-provider";

interface MinimalistHeroProps {
  mainText: string;
  readMoreLink: string;
  readMoreLabel?: string;
  overlayText: { part1: string; part2: string };
  socialLinks: { icon: ComponentType<{ className?: string }>; href: string }[];
  accentColor?: string;
  className?: string;
}

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: ComponentType<{ className?: string }> }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer text-heading transition-colors duration-200 hover:text-brand"
  >
    <Icon className="h-4 w-4" />
  </a>
);

export const MinimalistHero = ({
  mainText,
  readMoreLink,
  readMoreLabel = "Learn More",
  overlayText,
  socialLinks,
  accentColor = "#22C55E",
  className,
}: MinimalistHeroProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden",
        "h-[calc(100vh-88px)] md:h-[calc(100vh-100px)]",
        className,
      )}
      style={{
        background: isDark
          ? "radial-gradient(ellipse 80% 60% at 50% 0%, #0d1f3c 0%, #060c1a 50%, #030711 100%)"
          : "radial-gradient(ellipse 80% 60% at 50% 0%, #f0f9ff 0%, #ffffff 50%, #fafafa 100%)",
      }}
    >
      {/* Star field — dark mode only */}
      {isDark && <div className="pointer-events-none absolute inset-0 z-0">
        {[
          [12, 18], [28, 72], [45, 35], [67, 15], [82, 58], [93, 30],
          [8, 85], [55, 90], [75, 5], [38, 50], [20, 42], [60, 78],
          [15, 62], [88, 88], [50, 22], [32, 8], [70, 45], [5, 50],
          [95, 70], [42, 95], [78, 25], [22, 30], [62, 60], [35, 80],
        ].map(([x, y], i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: i % 3 === 0 ? "2px" : "1px",
              height: i % 3 === 0 ? "2px" : "1px",
              opacity: 0.2 + (i % 5) * 0.12,
              animation: `twinkle-a ${2 + (i % 3)}s ease-in-out infinite ${(i * 0.4) % 3}s`,
            }}
          />
        ))}
      </div>}

      {/* Main — 2 col on desktop, stacked on mobile */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-3 px-6 py-2 md:flex-row md:items-center md:gap-0 md:px-12 md:py-0">

        {/* Left — Globe, responsive size */}
        <motion.div
          className="flex items-center justify-center md:flex-1"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <Globe size={420} className="w-[min(52vw,200px)] md:w-[420px] lg:w-[480px]" />
        </motion.div>

        {/* Right — headline + descriptor stacked */}
        <div className="flex flex-1 flex-col items-center gap-4 md:items-start md:pl-8">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-center font-heading text-[2.6rem] font-extrabold leading-[0.88] text-heading md:text-left md:text-[5.5rem] lg:text-[7rem]"
            style={{ letterSpacing: "-0.04em" }}
          >
            {overlayText.part1}
            <br />
            <span style={{ color: accentColor }}>{overlayText.part2}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col items-center gap-3 md:items-start"
          >
            <p className="max-w-[340px] text-center text-xs leading-relaxed text-body md:text-left md:text-base">
              {mainText}
            </p>
            <a
              href={readMoreLink}
              className="text-xs font-semibold uppercase tracking-wider text-heading underline underline-offset-4 transition-colors duration-200 hover:text-brand"
            >
              {readMoreLabel}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, i) => (
              <SocialIcon key={i} href={link.href} icon={link.icon} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
