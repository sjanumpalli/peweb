"use client";

import { useState } from "react";
import { ArrowRight, Leaf, Recycle, Zap, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const palettes = {
  A: {
    name: "Green + Dark Teal",
    description: "Earthy, grounded, premium",
    primary: "#22C55E",
    secondary: "#1B4332",
    primaryLabel: "Brand Green",
    secondaryLabel: "Dark Teal",
  },
  B: {
    name: "Green + Sky Teal",
    description: "Tech-forward, fresh, energetic",
    primary: "#22C55E",
    secondary: "#0EA5E9",
    primaryLabel: "Brand Green",
    secondaryLabel: "Sky Teal",
  },
  C: {
    name: "Lime + Brand Green",
    description: "Pure green energy, monochromatic",
    primary: "#8CC63F",
    secondary: "#22C55E",
    primaryLabel: "Lime",
    secondaryLabel: "Brand Green",
  },
} as const;

type PaletteKey = keyof typeof palettes;

function PalettePreview({ palette }: { palette: (typeof palettes)[PaletteKey] }) {
  const { primary, secondary } = palette;

  return (
    <div className="space-y-8">
      {/* Color swatches */}
      <div className="flex gap-4">
        <div className="flex-1">
          <div
            className="mb-2 h-20 rounded-2xl shadow-lg"
            style={{ background: primary }}
          />
          <p className="text-xs font-semibold text-heading">{palette.primaryLabel}</p>
          <p className="text-xs text-muted">{primary}</p>
        </div>
        <div className="flex-1">
          <div
            className="mb-2 h-20 rounded-2xl shadow-lg"
            style={{ background: secondary }}
          />
          <p className="text-xs font-semibold text-heading">{palette.secondaryLabel}</p>
          <p className="text-xs text-muted">{secondary}</p>
        </div>
        <div className="flex-1">
          <div
            className="mb-2 h-20 rounded-2xl shadow-lg"
            style={{ background: `linear-gradient(135deg, ${primary}, ${secondary})` }}
          />
          <p className="text-xs font-semibold text-heading">Gradient</p>
          <p className="text-xs text-muted">Combined</p>
        </div>
      </div>

      {/* Hero preview */}
      <div className="relative overflow-hidden rounded-2xl border border-black/[0.03] bg-white/50 p-8 backdrop-blur-sm md:p-12">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-20 blur-[80px]"
          style={{ background: primary }}
        />
        <div
          className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-15 blur-[60px]"
          style={{ background: secondary }}
        />
        <div className="relative z-10">
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{ background: primary }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            Micro-Recycling for India
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-heading md:text-4xl">
            Turning Plastic Waste Into{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${primary}, ${secondary})` }}
            >
              Clean Energy
            </span>
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted">
            Polymer Energy deploys compact, community-scale recycling machines
            that convert plastic waste into fuel.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${primary}, ${secondary})` }}
            >
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              className="rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-colors"
              style={{ borderColor: `${primary}30`, color: secondary }}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { icon: Recycle, value: "26K+", label: "Tons Processed" },
          { icon: Leaf, value: "40%", label: "Carbon Cut" },
          { icon: Zap, value: "850kWh", label: "Energy/Ton" },
          { icon: Users, value: "5,000+", label: "Jobs Created" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-2xl border border-black/[0.03] bg-white/45 p-5 backdrop-blur-sm"
          >
            {/* Border beam accent */}
            <div
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{
                background: i % 2 === 0
                  ? `linear-gradient(90deg, transparent, ${primary}, transparent)`
                  : `linear-gradient(90deg, transparent, ${secondary}, transparent)`,
              }}
            />
            <stat.icon
              className="mb-2 h-5 w-5"
              style={{ color: i % 2 === 0 ? primary : secondary }}
            />
            <p className="font-heading text-2xl font-bold text-heading">{stat.value}</p>
            <p className="text-xs text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Flow / Process cards */}
      <div className="flex items-center gap-2">
        {["Collect", "Process", "Convert"].map((step, i) => (
          <div key={step} className="flex flex-1 items-center gap-2">
            <div
              className="flex-1 rounded-xl border border-black/[0.03] bg-white/45 p-4 text-center backdrop-blur-sm"
            >
              <span
                className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: i % 2 === 0 ? primary : secondary }}
              >
                {i + 1}
              </span>
              <p className="text-sm font-semibold text-heading">{step}</p>
            </div>
            {i < 2 && (
              <div
                className="h-[2px] w-6 flex-shrink-0"
                style={{
                  background: `linear-gradient(90deg, ${primary}, ${secondary})`,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        className="relative overflow-hidden rounded-2xl p-8 text-center text-white md:p-12"
        style={{ background: `linear-gradient(135deg, ${secondary}, ${primary})` }}
      >
        <h3 className="font-heading text-2xl font-bold">
          Ready to Turn Waste Into Profit?
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/70">
          Join the growing network of micro-recycling operators across India.
        </p>
        <button className="mt-6 flex items-center gap-2 mx-auto rounded-full bg-white px-6 py-2.5 text-sm font-semibold shadow-lg transition-transform hover:scale-105"
          style={{ color: secondary }}
        >
          Calculate Your ROI <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Neon card preview */}
      <div className="flex gap-4">
        <div
          className="flex-1 rounded-2xl p-[2px]"
          style={{ background: `conic-gradient(from 0deg, ${primary}, ${secondary}, transparent, ${primary})` }}
        >
          <div className="rounded-[14px] bg-white/90 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold text-heading">Neon Card</p>
            <p className="mt-1 text-xs text-muted">Animated border glow effect</p>
          </div>
        </div>
        <div
          className="flex-1 rounded-2xl border-2 border-black/[0.03] bg-white/45 p-6 backdrop-blur-sm"
          style={{
            boxShadow: `0 0 30px ${primary}15, 0 0 60px ${secondary}10`,
          }}
        >
          <p className="text-sm font-semibold text-heading">Glass Card</p>
          <p className="mt-1 text-xs text-muted">Subtle glow, clean glass</p>
        </div>
      </div>
    </div>
  );
}

export default function PalettePage() {
  const [active, setActive] = useState<PaletteKey>("A");

  return (
    <div className="min-h-screen px-6 pb-24 pt-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-heading text-3xl font-bold text-heading md:text-4xl">
          Two-Tone Palette Comparison
        </h1>
        <p className="mt-2 text-muted">
          Pick a palette direction. All gradients, beams, and accents will use only these two colors.
        </p>

        {/* Palette switcher */}
        <div className="mt-8 flex gap-3">
          {(Object.keys(palettes) as PaletteKey[]).map((key) => {
            const p = palettes[key];
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={cn(
                  "flex flex-1 flex-col items-center gap-2 rounded-2xl border-2 p-4 transition-all duration-200",
                  active === key
                    ? "border-heading bg-white/60 shadow-lg"
                    : "border-transparent bg-white/30 hover:bg-white/40",
                )}
              >
                <div className="flex gap-1">
                  <div
                    className="h-8 w-8 rounded-full shadow-md"
                    style={{ background: p.primary }}
                  />
                  <div
                    className="h-8 w-8 rounded-full shadow-md"
                    style={{ background: p.secondary }}
                  />
                </div>
                <span className="text-sm font-bold text-heading">
                  Option {key}
                </span>
                <span className="text-xs text-muted">{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active palette description */}
        <div className="mt-6 rounded-xl bg-white/40 px-4 py-3 text-center backdrop-blur-sm">
          <span className="text-sm font-semibold text-heading">
            {palettes[active].name}
          </span>
          <span className="mx-2 text-muted">—</span>
          <span className="text-sm text-muted">{palettes[active].description}</span>
        </div>

        {/* Preview */}
        <div className="mt-8">
          <PalettePreview palette={palettes[active]} />
        </div>
      </div>
    </div>
  );
}
