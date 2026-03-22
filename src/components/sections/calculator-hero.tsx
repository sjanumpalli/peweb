"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { TextGenerateEffect } from "@/components/magicui/text-generate-effect";

export function CalculatorHero() {
  return (
    <section className="relative px-6 pb-16 pt-40 text-center md:pb-20 md:pt-48">
      <div className="relative z-10 mx-auto max-w-3xl">
        <FadeIn delay={0.1}>
          <Badge>
            <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-brand" />
            ROI Calculator
          </Badge>
        </FadeIn>

        <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-heading md:text-5xl lg:text-6xl">
          <TextGenerateEffect
            words="Recycling ROI Calculator"
            highlightWords={["ROI"]}
            highlightClassName="text-brand"
            duration={0.5}
          />
        </h1>

        <FadeIn delay={0.5}>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Estimate your returns from plastic-to-fuel recycling. Adjust
            parameters to match your setup.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
