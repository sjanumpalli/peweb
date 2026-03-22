"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface CityData {
  id: string;
  name: string;
  waste: number;
  recyclingRate: number;
  machines: number;
  wasteTypes: string[];
  x: number;
  y: number;
}

const CITIES: CityData[] = [
  { id: "mumbai", name: "Mumbai", waste: 4500, recyclingRate: 38, machines: 12, wasteTypes: ["PET", "HDPE", "LDPE"], x: 27, y: 58 },
  { id: "delhi", name: "Delhi", waste: 3800, recyclingRate: 28, machines: 9, wasteTypes: ["PET", "HDPE", "PP"], x: 38, y: 25 },
  { id: "bengaluru", name: "Bengaluru", waste: 2200, recyclingRate: 45, machines: 7, wasteTypes: ["PET", "LDPE", "PP"], x: 35, y: 78 },
  { id: "chennai", name: "Chennai", waste: 1900, recyclingRate: 42, machines: 6, wasteTypes: ["PET", "HDPE"], x: 45, y: 76 },
  { id: "kolkata", name: "Kolkata", waste: 2800, recyclingRate: 31, machines: 8, wasteTypes: ["HDPE", "LDPE", "PP"], x: 62, y: 42 },
  { id: "hyderabad", name: "Hyderabad", waste: 1600, recyclingRate: 48, machines: 5, wasteTypes: ["PET", "HDPE", "LDPE", "PP"], x: 38, y: 65 },
];

const INDIA_PATH =
  "M220 20C200 18 180 25 165 30C145 38 130 50 120 65C110 78 105 85 95 95C82 108 70 115 60 130C50 148 48 165 50 185C52 200 58 215 60 230C62 248 55 262 52 278C48 298 50 318 55 338C60 355 68 370 78 385C90 402 100 415 108 432C115 448 118 465 125 480C130 492 138 500 148 510C158 518 170 522 180 528C195 535 210 540 228 542C245 543 260 538 275 530C288 522 298 510 308 498C320 482 328 465 335 448C340 435 342 420 345 405C348 388 355 372 360 355C365 340 368 322 372 305C378 285 385 268 390 250C395 232 398 215 400 195C402 178 398 160 392 145C385 128 375 115 362 102C348 88 335 78 320 68C305 58 290 48 272 38C258 30 242 22 220 20Z";

export function MapExplorer() {
  const [selected, setSelected] = useState<string>("mumbai");
  const city = CITIES.find((c) => c.id === selected)!;

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_380px]">
        {/* Map */}
        <div className="relative min-h-[480px] rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 md:min-h-[560px] md:p-8">
          <div className="relative flex h-[420px] items-center justify-center md:h-[500px]">
            <svg
              viewBox="0 0 500 580"
              fill="none"
              className="h-auto w-full max-w-[460px]"
              aria-label="Simplified map of India"
            >
              <path
                d={INDIA_PATH}
                className="fill-white/[0.03] stroke-white/10"
                strokeWidth="1.5"
              />
              <line x1="120" y1="180" x2="380" y2="180" className="stroke-white/[0.06]" strokeWidth="0.8" strokeDasharray="4 4" />
              <line x1="100" y1="280" x2="370" y2="280" className="stroke-white/[0.06]" strokeWidth="0.8" strokeDasharray="4 4" />
              <line x1="130" y1="380" x2="340" y2="380" className="stroke-white/[0.06]" strokeWidth="0.8" strokeDasharray="4 4" />
              <line x1="220" y1="50" x2="220" y2="520" className="stroke-white/[0.06]" strokeWidth="0.8" strokeDasharray="4 4" />
            </svg>

            {/* City data points — glowing dots */}
            {CITIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                aria-label={`${c.name} - ${c.waste.toLocaleString()} tons per day`}
                className={cn(
                  "absolute h-4 w-4 cursor-pointer rounded-full border-2 transition-transform duration-200",
                  "before:absolute before:inset-0 before:animate-ping before:rounded-full",
                  c.id === selected
                    ? "z-10 scale-150 border-accent bg-accent shadow-[0_0_12px_rgba(37,99,235,0.5)] before:bg-accent/30"
                    : "border-brand/60 bg-brand shadow-[0_0_8px_rgba(255,109,46,0.4)] hover:scale-125 before:bg-brand/20",
                )}
                style={{ left: `${c.x}%`, top: `${c.y}%` }}
              />
            ))}
          </div>
        </div>

        {/* Stats panel */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">
                {city.name}
              </h3>
              <p className="font-mono text-sm text-accent">
                {city.waste.toLocaleString()} tons/day
              </p>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3">
            <StatCard label="Daily Waste" value={`${city.waste.toLocaleString()} t`} accent="bg-brand" />
            <StatCard label="Recycling Rate" value={`${city.recyclingRate}%`} accent="bg-green" />
            <StatCard label="PE Machines" value={String(city.machines)} accent="bg-accent" />
            <StatCard label="Waste Types" value={String(city.wasteTypes.length)} accent="bg-brand" />
          </div>

          {/* Recycling rate bar */}
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-white/70">Recycling Rate</span>
              <span className="font-mono font-bold text-accent">
                {city.recyclingRate}%
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${city.recyclingRate}%` }}
              />
            </div>
          </div>

          {/* Waste type tags */}
          <div className="flex flex-wrap gap-2">
            {city.wasteTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 transition-transform duration-200 hover:-translate-y-0.5">
      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-white/40">
        {label}
      </p>
      <div className="flex items-center gap-2">
        <span className={cn("h-7 w-1 rounded-full", accent)} />
        <span className="font-mono text-xl font-bold text-accent">
          {value}
        </span>
      </div>
    </div>
  );
}
