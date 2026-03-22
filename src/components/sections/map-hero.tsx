"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { TextGenerateEffect } from "@/components/magicui/text-generate-effect";

export function MapHero() {
  return (
    <section className="relative px-6 pb-12 pt-32 md:pb-16 md:pt-40">
      {/* Subtle grid overlay for "mission control" feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn delay={0.1}>
          <Badge className="border-white/10 bg-white/5 text-white/80">
            <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
            Live Data
          </Badge>
        </FadeIn>

        <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
          <TextGenerateEffect
            words="India Plastic Data Explorer"
            highlightWords={["Data", "Explorer"]}
            highlightClassName="text-accent"
            duration={0.5}
          />
        </h1>

        <FadeIn delay={0.6}>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            Track plastic waste generation, recycling rates, and Polymer Energy
            machine deployments across major Indian cities in real time.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
