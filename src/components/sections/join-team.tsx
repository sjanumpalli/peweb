"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function JoinTeam() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <FadeIn>
        <div className="rounded-xl border border-border bg-white shadow-card">
          <div className="flex flex-col items-center gap-8 p-12 text-center md:flex-row md:justify-between md:p-20 md:text-left">
            <div>
              <h2 className="font-heading text-3xl font-bold text-heading md:text-4xl">
                Join Our Mission
              </h2>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-body">
                We&apos;re building the future of decentralized recycling. If
                you&apos;re passionate about sustainability and impact, we want
                to hear from you.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex flex-shrink-0 cursor-pointer items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-card-hover"
            >
              View Open Roles
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
