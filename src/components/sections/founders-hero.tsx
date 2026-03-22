"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { TextGenerateEffect } from "@/components/magicui/text-generate-effect";

export function FoundersHero() {
  return (
    <section className="bg-gradient-to-b from-bg-warm to-bg-cream px-6 pb-24 pt-40 md:pt-52">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn delay={0.1}>
          <Badge>Our Story</Badge>
        </FadeIn>

        <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-heading md:text-6xl">
          <TextGenerateEffect
            words="Transforming India's Waste Crisis"
            highlightWords={["Waste", "Crisis"]}
            highlightClassName="text-brand"
            duration={0.5}
          />
        </h1>

        <FadeIn delay={0.8}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Reimagining waste as India&apos;s next energy resource. Every day,
            India generates thousands of tonnes of plastic waste that ends up in
            landfills, oceans, and open dumps. We saw an opportunity where
            others saw a problem.
          </p>
        </FadeIn>

        {/* Pull quote */}
        <FadeIn delay={1.0}>
          <blockquote className="mx-auto mt-12 max-w-2xl rounded-2xl border border-brand/20 bg-brand/5 px-8 py-6">
            <p className="font-heading text-xl font-medium leading-snug text-heading md:text-2xl">
              &ldquo;What if every industrial facility could turn its own waste
              into fuel? That&apos;s the India we&apos;re building.&rdquo;
            </p>
            <footer className="mt-3 text-sm font-semibold text-brand">
              — Polymer Energy Leadership Team
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
