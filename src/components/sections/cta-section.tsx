"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="px-8 py-32 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="font-heading text-4xl leading-[1.1] text-heading md:text-6xl">
            Turn Your Waste Into
            <br />
            <span className="text-brand">Revenue.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
            See how much you could earn from your waste stream, or speak with our team about bringing modular pyrolysis to your facility.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/calculator">
              <ShimmerButton
                background="#22C55E"
                shimmerColor="rgba(255, 255, 255, 0.4)"
                className="animate-pulse-glow"
              >
                Use Calculator
                <ArrowRight className="h-4 w-4" />
              </ShimmerButton>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="rounded-full">
                <MessageSquare className="h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
