"use client";

import { Package, Flame, Zap, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";

const features = [
  {
    icon: Package,
    title: "Modular Design",
    description:
      "Container-sized units that can be deployed anywhere, scaled to your needs.",
  },
  {
    icon: Flame,
    title: "Pyrolysis Technology",
    description:
      "Advanced thermal decomposition converting waste plastics into valuable energy.",
  },
  {
    icon: Zap,
    title: "Clean Energy Output",
    description:
      "Generate electricity and fuel oil from waste that would otherwise pollute.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Off-take",
    description:
      "We eliminate market risk by buying back 100% of the intermediary fuel produced by your unit at competitive rates.",
  },
] as const;

export function TechFeatures() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label="How It Works"
            title="Advanced Pyrolysis Technology"
            description="Our modular systems bring industrial-grade waste-to-energy conversion to your location."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={0.1 + i * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="mb-4 inline-flex rounded-xl bg-bg-peach p-2.5">
                  <feature.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-heading">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
