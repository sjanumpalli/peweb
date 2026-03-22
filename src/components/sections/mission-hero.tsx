"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { TextGenerateEffect } from "@/components/magicui/text-generate-effect";

export function MissionHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 md:pb-36 md:pt-44">
      {/* Warm gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-bg-peach via-bg-peach/60 to-bg-warm"
        aria-hidden="true"
      />

      {/* Subtle radial warmth */}
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand/[0.04] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn delay={0.1}>
          <Badge className="border-brand/20 bg-white/80 text-brand">
            Our Mission
          </Badge>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mx-auto mt-10 max-w-3xl">
            <h1 className="font-heading text-4xl font-normal leading-[1.15] text-heading md:text-5xl lg:text-6xl">
              <TextGenerateEffect
                words="To make plastic recycling the most accessible and profitable clean technology in India."
                highlightWords={["accessible", "profitable", "clean"]}
                duration={0.5}
              />
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={1.4}>
          <div className="mx-auto mt-10 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-brand/30" aria-hidden="true" />
            <div className="h-1.5 w-1.5 rounded-full bg-brand/50" aria-hidden="true" />
            <div className="h-px w-12 bg-brand/30" aria-hidden="true" />
          </div>
        </FadeIn>

        <FadeIn delay={1.6}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-body">
            We believe the future of recycling is decentralized, profitable, and
            community-powered. Our micro-recycling technology brings clean
            processing to every neighbourhood in India.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
