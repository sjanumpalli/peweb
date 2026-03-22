"use client";

import { ArrowRight, Calculator } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { TextGenerateEffect } from "@/components/magicui/text-generate-effect";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-32">
      {/* GLSL Hills — Ocean Breeze green energy terrain shader */}
      <GLSLHills
        color={[0.13, 0.77, 0.37]}
        opacity={0.25}
        speed={0.35}
        cameraZ={120}
      />

      {/* Gradient overlay for text readability */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#f0f8ff]/90 via-[#f0f8ff]/40 to-[#f0f8ff]/70"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn delay={0.1}>
          <Badge className="mb-6">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-brand animate-pulse" />
            India&apos;s Plastic-to-Energy Opportunity
          </Badge>
        </FadeIn>

        <h1 className="font-heading text-5xl font-bold leading-[1.08] tracking-tight text-heading md:text-7xl lg:text-8xl">
          <TextGenerateEffect
            words="What if plastic was never waste?"
            highlightWords={["never", "waste?"]}
            highlightClassName="text-brand"
            duration={0.6}
          />
        </h1>

        <FadeIn delay={0.8}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body md:text-xl">
            Polymer Energy deploys compact, community-scale machines that
            transform plastic waste into clean fuel — profitably, locally, and
            sustainably across India.
          </p>
        </FadeIn>

        <FadeIn delay={1.0}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ShimmerButton
              background="#22C55E"
              shimmerColor="rgba(255, 255, 255, 0.4)"
            >
              See How It Works
              <ArrowRight className="h-4 w-4" />
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Calculator className="h-4 w-4" />
              Calculate Your ROI
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
