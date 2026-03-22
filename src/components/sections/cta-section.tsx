"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export function CtaSection() {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="font-heading text-4xl leading-[1.1] text-heading md:text-6xl">
            The machine pays for itself
            <br />
            <span className="text-brand">in 14 months.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
            See what it could do for your community.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10">
            <ShimmerButton
              background="#FF6D2E"
              shimmerColor="rgba(255, 255, 255, 0.3)"
              className="animate-pulse-glow"
            >
              Calculate Your ROI
              <ArrowRight className="h-4 w-4" />
            </ShimmerButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
