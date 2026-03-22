"use client";

import { Package, Droplets, Zap, BarChart3 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";

const specCards = [
  {
    icon: Package,
    title: "Feedstock",
    specs: [
      { key: "Input Material", value: "Mixed Plastic Waste" },
      { key: "Accepted Types", value: "PE, PP, PS, ABS" },
      { key: "Moisture Content", value: "< 5%" },
    ],
  },
  {
    icon: Droplets,
    title: "Output — Pyrolysis Oil",
    specs: [
      { key: "Yield", value: "60–70% by weight" },
      { key: "Calorific Value", value: "10,000+ kcal/kg" },
      { key: "Applications", value: "Industrial Fuel, Refinement" },
    ],
  },
  {
    icon: Zap,
    title: "Output — Syngas",
    specs: [
      { key: "Yield", value: "15–20% by weight" },
      { key: "Usage", value: "Process Heat, Power Generation" },
      { key: "Composition", value: "H₂, CO, CH₄" },
    ],
  },
  {
    icon: BarChart3,
    title: "Capacity",
    specs: [
      { key: "Processing Rate", value: "5–10 Tonnes/Day" },
      { key: "Unit Size", value: "20ft or 40ft Container" },
      { key: "Operation", value: "24/7 Continuous" },
    ],
  },
] as const;

const additionalStats = [
  { value: "300kg", label: "Carbon Black Output/Tonne" },
  { value: "450°C", label: "Operating Temperature" },
  { value: "90%+", label: "Conversion Efficiency" },
  { value: "2–3", label: "Operators Required" },
] as const;

export function TechSpecs() {
  return (
    <section className="bg-bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label="The Machine"
            title="Technical Specifications"
            description="Comprehensive specifications for our modular pyrolysis systems."
          />
        </FadeIn>

        {/* 2×2 spec card grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {specCards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 + i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-card">
                {/* Card header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-bg-peach p-2.5">
                    <card.icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-heading">
                    {card.title}
                  </h3>
                </div>

                {/* Spec rows */}
                <div className="space-y-0 divide-y divide-border">
                  {card.specs.map((spec) => (
                    <div
                      key={spec.key}
                      className="flex items-center justify-between py-3"
                    >
                      <span className="text-sm text-muted">{spec.key}</span>
                      <span className="text-sm font-semibold text-heading">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Additional Specifications callout */}
        <FadeIn delay={0.5}>
          <div className="mt-8 rounded-2xl border border-brand/20 bg-brand/5 p-8">
            <h3 className="mb-6 font-heading text-xl font-bold text-heading">
              Additional Specifications
            </h3>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {additionalStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-mono text-2xl font-bold text-brand">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
