"use client";

import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const checklistItems = [
  "Deploy in weeks, not years",
  "No massive infrastructure investment needed",
  "100% buyback guarantee eliminates market risk",
  "Transform waste costs into revenue streams",
  "Made in India, for Indian conditions",
  "Scale from one unit to entire fleets",
] as const;

const guaranteeItems = [
  {
    borderColor: "border-brand",
    titleColor: "text-brand",
    title: "100% Buyback",
    description:
      "We purchase all fuel you produce at competitive rates—no market risk.",
  },
  {
    borderColor: "border-blue-400",
    titleColor: "text-blue-400",
    title: "Rapid Deployment",
    description:
      "Container-sized units operational in weeks, not years.",
  },
  {
    borderColor: "border-yellow-400",
    titleColor: "text-yellow-400",
    title: "Made for India",
    description:
      "Engineered for diverse waste streams and local conditions.",
  },
] as const;

export function PolymerGuarantee() {
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <FadeIn direction="left">
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl font-bold text-heading md:text-4xl">
                A Different Approach to Waste-to-Energy
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Traditional plants take years to build and millions to finance.
                We bring the solution to you — in a container, ready to deploy,
                with guaranteed returns on your fuel production.
              </p>

              <ul className="mt-8 space-y-3">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-body text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Right column — guarantee card */}
          <FadeIn direction="right" delay={0.15}>
            <div className="rounded-2xl border border-border bg-surface-hover p-6">
              <h3 className="mb-4 font-heading text-lg font-semibold text-heading">
                The Polymer Guarantee
              </h3>

              <div className="space-y-5">
                {guaranteeItems.map((item) => (
                  <div
                    key={item.title}
                    className={`border-l-2 pl-4 ${item.borderColor}`}
                  >
                    <p className={`font-heading text-base font-bold ${item.titleColor}`}>
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
