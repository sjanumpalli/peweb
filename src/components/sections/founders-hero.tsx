"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { TextGenerateEffect } from "@/components/magicui/text-generate-effect";

export function FoundersHero() {
  return (
    <section className="bg-gradient-to-b from-bg-warm to-bg-cream px-6 pb-20 pt-40 md:pt-48">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn delay={0.1}>
          <Badge>Our Team</Badge>
        </FadeIn>

        <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-heading md:text-6xl">
          <TextGenerateEffect
            words="The People Behind Polymer Energy"
            highlightWords={["Polymer", "Energy"]}
            highlightClassName="text-brand"
            duration={0.5}
          />
        </h1>

        <FadeIn delay={0.8}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Born from frustration with India&apos;s plastic crisis, we quit our
            corporate jobs to build solutions that work.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
