"use client";

import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const navLinks = NAV_LINKS.map((l) => ({ label: l.label.toUpperCase(), href: l.href }));

const socialLinks = [
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
  { icon: Twitter, href: SOCIAL_LINKS.twitter },
];

export function HeroSection() {
  return (
    <MinimalistHero
      logoText="POLYMER ENERGY"
      navLinks={navLinks}
      mainText="Deploy container-sized pyrolysis plants with a 100% buyback guarantee on produced fuel oil — portable, scalable, and built for India."
      readMoreLink="/founders"
      readMoreLabel="Our Story"
      imageSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80"
      imageAlt="Industrial engineer in protective gear working with machinery"
      overlayText={{
        part1: "waste is",
        part2: "energy.",
      }}
      socialLinks={socialLinks}
      locationText="India-Based Operations"
      accentColor="#22C55E"
    />
  );
}
