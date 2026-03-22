"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  readMoreLabel?: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: { part1: string; part2: string };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  accentColor?: string;
  className?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-xs font-semibold tracking-[0.18em] text-muted uppercase transition-colors duration-200 hover:text-heading"
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer text-muted transition-colors duration-200 hover:text-heading"
  >
    <Icon className="h-4 w-4" />
  </a>
);

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  readMoreLabel = "Learn More",
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  accentColor = "#22C55E",
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        "relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#f0f8ff] px-8 py-8 md:px-12 md:py-10",
        className,
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-[0.2em] text-heading uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {logoText}
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden items-center gap-10 md:flex"
        >
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </motion.nav>

        {/* Mobile hamburger placeholder */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-px w-6 bg-heading" />
          <span className="block h-px w-6 bg-heading" />
          <span className="block h-px w-4 bg-heading" />
        </motion.button>
      </header>

      {/* Main grid */}
      <div className="relative grid w-full max-w-7xl flex-1 grid-cols-1 items-center md:grid-cols-3">
        {/* Left — descriptor text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="z-20 order-2 text-center md:order-1 md:text-left"
        >
          <p className="mx-auto max-w-[220px] text-sm leading-relaxed text-body md:mx-0">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-heading underline underline-offset-4 transition-colors duration-200 hover:text-brand"
          >
            {readMoreLabel}
          </a>
        </motion.div>

        {/* Center — image with circle */}
        <div className="relative order-1 flex h-full items-center justify-center md:order-2">
          {/* Accent circle */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[280px] w-[280px] rounded-full md:h-[400px] md:w-[400px] lg:h-[480px] lg:w-[480px]"
            style={{ backgroundColor: accentColor, opacity: 0.85 }}
          />
          {/* Image */}
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-52 scale-125 object-cover md:w-64 lg:w-72"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              t.onerror = null;
              t.src = `https://placehold.co/400x600/22C55E/ffffff?text=PE`;
            }}
          />
        </div>

        {/* Right — big type */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="z-20 order-3 flex items-center justify-center md:justify-start"
        >
          <h1
            className="text-center font-heading text-6xl font-extrabold leading-[0.9] tracking-tight text-heading md:text-left md:text-7xl lg:text-[7rem]"
            style={{ letterSpacing: "-0.03em" }}
          >
            {overlayText.part1}
            <br />
            <span style={{ color: accentColor }}>{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      {/* Footer row */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
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
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="text-xs font-medium tracking-wider text-muted uppercase"
        >
          {locationText}
        </motion.p>
      </footer>
    </div>
  );
};
