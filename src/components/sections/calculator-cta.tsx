"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function CalculatorCta() {
  return (
    <section className="px-8 pb-24 pt-8 md:pb-32">
      <FadeIn>
        <div className="mx-auto max-w-4xl rounded-xl border border-border bg-surface shadow-card">
          <div className="px-8 py-14 text-center md:px-16">
            <h2 className="font-heading text-2xl font-bold text-heading md:text-3xl">
              Get a Custom Quote
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Our team will build a detailed financial model tailored to your
              location, scale, and plastic supply chain.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-200 animate-pulse-glow hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-card-hover"
              >
                Talk to Sales
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
