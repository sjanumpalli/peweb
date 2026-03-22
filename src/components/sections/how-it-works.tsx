"use client";

import { Truck, Cog, Fuel, BarChart3, Leaf } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    icon: Truck,
    title: "Collect",
    description:
      "Local partners gather plastic waste from communities, ragpickers, and aggregators.",
  },
  {
    icon: Cog,
    title: "Process",
    description:
      "Our compact PE machines use pyrolysis to break down plastic at the molecular level.",
  },
  {
    icon: Fuel,
    title: "Convert",
    description:
      "Waste transforms into clean fuel oil, carbon black, and syngas \u2014 all marketable outputs.",
  },
  {
    icon: BarChart3,
    title: "Profit",
    description:
      "Operators earn revenue from fuel sales while solving the local waste crisis.",
  },
  {
    icon: Leaf,
    title: "Impact",
    description:
      "Every ton processed reduces landfill, cuts emissions, and creates local jobs.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="px-8 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            label="How It Works"
            title="From Waste to Value in 5 Steps"
            description="A simple, scalable process that turns India's plastic crisis into a profitable opportunity."
          />
        </FadeIn>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-[3.25rem] z-0 mx-auto h-px w-[calc(100%-6rem)] bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

            <div className="relative z-10 grid grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <FadeIn key={step.title} delay={0.15 * i}>
                  <div className="flex flex-col items-center text-center">
                    {/* Numbered dot */}
                    <div className="mb-6 flex h-[1.625rem] w-[1.625rem] items-center justify-center rounded-full border-2 border-brand bg-surface shadow-sm">
                      <span className="text-xs font-bold text-brand">
                        {i + 1}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="w-full rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:bg-surface-hover">
                      <div className="mb-4 inline-flex rounded-xl bg-brand/10 p-2.5">
                        <step.icon className="h-5 w-5 text-brand" />
                      </div>
                      <h3 className="mb-2 font-heading text-lg font-bold text-heading">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-brand/30 via-brand/20 to-transparent" />

            <div className="space-y-6">
              {steps.map((step, i) => (
                <FadeIn key={step.title} delay={0.1 * i}>
                  <div className="relative flex gap-5">
                    {/* Dot */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-surface shadow-sm">
                      <span className="text-xs font-bold text-brand">
                        {i + 1}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-2xl border border-border bg-surface p-5 shadow-card hover:bg-surface-hover">
                      <div className="mb-3 inline-flex rounded-xl bg-brand/10 p-2.5">
                        <step.icon className="h-5 w-5 text-brand" />
                      </div>
                      <h3 className="mb-1 font-heading text-lg font-bold text-heading">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
