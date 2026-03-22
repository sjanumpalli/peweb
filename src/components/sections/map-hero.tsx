"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Lock } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { TextGenerateEffect } from "@/components/magicui/text-generate-effect";
import { motion, AnimatePresence } from "framer-motion";

const STATES = [
  { name: "Telangana", ulbs: 158, available: true },
  { name: "Andhra Pradesh", ulbs: null, available: false },
  { name: "Maharashtra", ulbs: null, available: false },
  { name: "Karnataka", ulbs: null, available: false },
  { name: "Tamil Nadu", ulbs: null, available: false },
  { name: "Rajasthan", ulbs: null, available: false },
] as const;

export function MapHero() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(STATES[0]);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section className="relative px-6 pb-8 pt-20 md:pb-12 md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn delay={0.1}>
          {/* State selector dropdown */}
          <div ref={ref} className="relative inline-block">
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-heading shadow-sm transition hover:border-brand/40 hover:bg-surface-hover"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
              <span>{selected.name}</span>
              {selected.ulbs !== null && (
                <>
                  <span className="text-muted">·</span>
                  <span className="text-muted">{selected.ulbs} ULBs</span>
                </>
              )}
              <ChevronDown
                className={`ml-1 h-3.5 w-3.5 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-xl border border-border bg-surface shadow-card-hover backdrop-blur-xl"
                >
                  {STATES.map((state) => (
                    <button
                      key={state.name}
                      disabled={!state.available}
                      onClick={() => {
                        if (state.available) {
                          setSelected(state);
                          setOpen(false);
                        }
                      }}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors
                        ${state.available
                          ? "cursor-pointer hover:bg-surface-hover"
                          : "cursor-default opacity-50"
                        }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {state.available ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        ) : (
                          <Lock className="h-3 w-3 text-muted" />
                        )}
                        <span className={state.available ? "text-heading font-medium" : "text-muted"}>
                          {state.name}
                        </span>
                        {state.ulbs !== null && (
                          <span className="text-xs text-muted">{state.ulbs} ULBs</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        {state.available ? (
                          selected.name === state.name && (
                            <Check className="h-3.5 w-3.5 text-brand" />
                          )
                        ) : (
                          <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand">
                            Soon
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>

        <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-heading md:text-5xl">
          <TextGenerateEffect
            words="Plastic Waste Data Explorer"
            highlightWords={["Plastic", "Waste"]}
            highlightClassName="text-brand"
            duration={0.5}
          />
        </h1>

        <FadeIn delay={0.6}>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Explore plastic waste generation across{" "}
            <span className="text-body">{selected.ulbs} Urban Local Bodies</span> in{" "}
            <span className="text-body">{selected.name}</span>. Click any location
            on the map to see detailed stats.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
