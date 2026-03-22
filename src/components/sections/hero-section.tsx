"use client";

import { Linkedin } from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { SOCIAL_LINKS } from "@/lib/constants";
import { XIcon } from "@/components/ui/x-icon";

const socialLinks = [
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
  { icon: XIcon, href: SOCIAL_LINKS.twitter },
];

export function HeroSection() {
  return (
    <MinimalistHero
      mainText="Deploy container-sized pyrolysis plants with a 100% buyback guarantee on produced fuel oil — portable, scalable, and built for India."
      readMoreLink="/founders"
      readMoreLabel="Our Story"
      overlayText={{
        part1: "waste is",
        part2: "energy.",
      }}
      socialLinks={socialLinks}
      accentColor="#22C55E"
    />
  );
}
