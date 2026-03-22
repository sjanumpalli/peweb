"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { BookOpen, Briefcase, FlaskConical, Landmark } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Advisor {
  name: string;
  title: string;
  organization: string;
  tags: string[];
  icon: LucideIcon;
}

const advisors: Advisor[] = [
  {
    name: "Dr. Meera Nair",
    title: "Environmental Policy",
    organization: "TERI",
    tags: ["Regulation", "Policy", "Compliance"],
    icon: Landmark,
  },
  {
    name: "Vikram Singh",
    title: "Venture Capital",
    organization: "Climate Fund",
    tags: ["Carbon Credits", "ESG", "Finance"],
    icon: Briefcase,
  },
  {
    name: "Dr. Anand Rao",
    title: "Chemical Engineering",
    organization: "IIT Bombay",
    tags: ["Polymer Chemistry", "R&D", "Materials"],
    icon: FlaskConical,
  },
  {
    name: "Sarah Chen",
    title: "Impact Investing",
    organization: "Circulate Capital",
    tags: ["Operations", "Scale-up", "Strategy"],
    icon: BookOpen,
  },
];

export function AdvisorGrid() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <FadeIn>
        <SectionHeader
          label="Advisors"
          title="Our Advisory Board"
          align="left"
        />
      </FadeIn>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {advisors.map((advisor, i) => {
          const Icon = advisor.icon;
          return (
            <FadeIn key={advisor.name} delay={i * 0.08}>
              <div className="group rounded-xl border border-border bg-white p-8 text-center shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card-hover">
                <div className="mx-auto mb-4 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-border bg-bg-cream transition-all duration-200 group-hover:border-brand/20 group-hover:bg-brand/5">
                  <Icon className="h-7 w-7 stroke-heading" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-base font-semibold text-heading">
                  {advisor.name}
                </h3>
                <p className="mt-1 text-[13px] leading-snug text-muted">
                  {advisor.title}, {advisor.organization}
                </p>
                <div className="mt-0 flex max-h-0 flex-wrap justify-center gap-1.5 overflow-hidden opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:mt-3.5 group-hover:max-h-20 group-hover:opacity-100">
                  {advisor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg-warm px-3 py-1 text-[11px] font-medium text-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
