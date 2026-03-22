"use client";

import { Box, Cpu, Recycle, ArrowRight, ArrowDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    icon: Box,
    step: 1,
    title: "Compact System",
    description: "Fits in 200 sq ft. Deploy anywhere — urban or rural.",
  },
  {
    icon: Cpu,
    step: 2,
    title: "Smart Sorting",
    description: "AI-powered classification for maximum material recovery.",
  },
  {
    icon: Recycle,
    step: 3,
    title: "Circular Output",
    description: "Market-ready recycled materials generating real revenue.",
  },
] as const;

export function SolutionFlow() {
  return (
    <section className="px-8 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            label="Our Solution"
            title="Compact. Smart. Circular."
          />
        </FadeIn>

        <div className="flex flex-col items-center gap-0 md:flex-row md:items-stretch md:justify-center">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={0.15 * i}>
              <div className="flex flex-col items-center md:flex-row md:items-center">
                {/* Step card */}
                <div className="w-72 rounded-2xl border border-border bg-surface p-8 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/25 hover:bg-surface-hover hover:shadow-card-hover">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10 font-mono text-xs font-bold text-brand">
                      {step.step}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-brand/10">
                    <step.icon className="h-6 w-6 text-brand" />
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <>
                    {/* Desktop: horizontal arrow */}
                    <div className="hidden items-center px-4 md:flex">
                      <div className="flex items-center gap-1">
                        <div className="h-px w-8 bg-brand/30" />
                        <div className="h-2 w-2 rounded-full bg-brand" />
                        <div className="h-px w-8 bg-brand/30" />
                        <ArrowRight className="h-4 w-4 text-brand" />
                      </div>
                    </div>
                    {/* Mobile: vertical arrow */}
                    <div className="flex flex-col items-center py-3 md:hidden">
                      <div className="h-6 w-px bg-brand/30" />
                      <div className="my-1 h-2 w-2 rounded-full bg-brand" />
                      <ArrowDown className="h-4 w-4 text-brand" />
                    </div>
                  </>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="mx-auto mt-14 max-w-xl text-center text-base leading-relaxed text-body">
            Our micro-recycling units fit in a 200 sq ft space, process
            500kg/day, and produce market-ready recycled materials — all while
            generating revenue for local operators.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
