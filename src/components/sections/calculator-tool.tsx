"use client";

import { useState, useMemo } from "react";
import {
  SlidersHorizontal,
  TrendingUp,
  IndianRupee,
  Clock,
  Droplets,
  CalendarDays,
  Flame,
  ShieldCheck,
} from "lucide-react";
import { CalcSlider } from "@/components/ui/calc-slider";
import { FadeIn } from "@/components/ui/fade-in";

// ─── Constants from Excel Model (1-Ton Modular Machine ROI) ─────────────────
const MACHINE_COST = 6_000_000;          // ₹60,00,000 CAPEX
const OIL_YIELD = 0.80;                  // 80% by weight → litres
const BUYBACK_RATE_DEFAULT = 40;         // ₹40/L guaranteed buyback
const RAW_MATERIAL_RATE = 10;            // ₹10/kg input plastic
const ELECTRICITY_PER_DAY = 4_800;       // 25 kWh/hr × 24 hrs × ₹8/kWh
const MANPOWER_MONTHLY = 120_000;        // 6 staff × ₹20,000
const RM_MONTHLY = 60_000;               // 1% of machine cost
const INTEREST_MONTHLY = 60_000;         // 1% of machine cost

function formatINR(value: number): string {
  const abs = Math.abs(Math.round(value));
  if (abs >= 10_000_000) return `₹${(value / 10_000_000).toFixed(2)} Cr`;
  if (abs >= 100_000) return `₹${(value / 100_000).toFixed(2)} L`;
  if (abs >= 1_000) return `₹${abs.toLocaleString("en-IN")}`;
  return `₹${abs}`;
}

function Stat({
  label,
  value,
  sub,
  accent = false,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card ${
        accent
          ? "border-brand/25 bg-gradient-to-br from-brand/5 to-bg-cream"
          : "border-border bg-white"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
      <p className="mt-1 font-mono text-2xl font-bold text-heading">{value}</p>
      {sub && <p className="mt-1 text-xs text-muted">{sub}</p>}
    </div>
  );
}

export function CalculatorTool() {
  const [dailyWaste, setDailyWaste] = useState(1000);    // kg/day
  const [operatingDays, setOperatingDays] = useState(24); // days/month
  const [buybackRate, setBuybackRate] = useState(BUYBACK_RATE_DEFAULT); // ₹/L

  const calc = useMemo(() => {
    // Scale CAPEX & fixed OPEX linearly with machine capacity vs 1-ton base
    const scaleFactor = dailyWaste / 1000;

    // Revenue
    const fuelPerDay = dailyWaste * OIL_YIELD;                            // litres/day
    const dailyRevenue = fuelPerDay * buybackRate;                         // ₹/day
    const monthlyRevenue = dailyRevenue * operatingDays;                   // ₹/month

    // OPEX (monthly)
    const rawMatMonthly = dailyWaste * RAW_MATERIAL_RATE * operatingDays;  // scales with waste
    const elecMonthly = ELECTRICITY_PER_DAY * operatingDays * scaleFactor; // scales slightly
    const fixedMonthly =
      MANPOWER_MONTHLY + RM_MONTHLY * scaleFactor + INTEREST_MONTHLY * scaleFactor;
    const totalOpex = rawMatMonthly + elecMonthly + fixedMonthly;

    // Profitability
    const monthlyProfit = monthlyRevenue - totalOpex;
    const annualIncome = monthlyProfit * 12;
    const machineCost = MACHINE_COST * scaleFactor;
    const paybackMonths =
      monthlyProfit > 0 ? Math.ceil(machineCost / monthlyProfit) : 0;
    const roi = machineCost > 0 ? (annualIncome / machineCost) * 100 : 0;

    return {
      fuelPerDay,
      dailyRevenue,
      monthlyRevenue,
      totalOpex,
      monthlyProfit,
      annualIncome,
      paybackMonths,
      roi,
      machineCost,
    };
  }, [dailyWaste, operatingDays, buybackRate]);

  const isProfit = calc.monthlyProfit > 0;

  return (
    <section className="px-6 pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* ── Inputs ─────────────────────────────────────────────────── */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-card">
              <h2 className="mb-6 flex items-center gap-2 font-heading text-lg font-bold text-heading">
                <SlidersHorizontal className="h-5 w-5 text-brand" />
                Your Parameters
              </h2>

              <CalcSlider
                label="Daily Plastic Waste"
                value={dailyWaste}
                min={500}
                max={5000}
                step={250}
                unit=" kg/day"
                onChange={setDailyWaste}
              />
              <CalcSlider
                label="Operating Days / Month"
                value={operatingDays}
                min={10}
                max={30}
                step={1}
                unit=" days"
                onChange={setOperatingDays}
              />
              <CalcSlider
                label="Buyback Rate"
                value={buybackRate}
                min={30}
                max={60}
                step={2}
                prefix="₹"
                unit="/litre"
                onChange={setBuybackRate}
              />

              {/* Assumptions box */}
              <div className="mt-6 rounded-xl border border-border bg-bg-warm p-4 text-xs text-muted">
                <p className="mb-2 font-semibold text-heading">Fixed Assumptions</p>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Oil yield</span>
                    <span className="font-semibold text-brand">80% by weight</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Raw material cost</span>
                    <span className="font-semibold text-heading">₹10/kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Machine cost (1T)</span>
                    <span className="font-semibold text-heading">₹60,00,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Manpower</span>
                    <span className="font-semibold text-heading">6 × ₹20,000/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Results ────────────────────────────────────────────────── */}
          <FadeIn delay={0.2} className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-card">
              <h2 className="mb-6 flex items-center gap-2 font-heading text-lg font-bold text-heading">
                <TrendingUp className="h-5 w-5 text-brand" />
                Projected Returns
              </h2>

              {/* Key metrics grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                <Stat
                  label="Fuel Produced"
                  value={`${calc.fuelPerDay.toLocaleString("en-IN")} L`}
                  sub="per day (80% yield)"
                />
                <Stat
                  label="Daily Revenue"
                  value={formatINR(calc.dailyRevenue)}
                  sub={`at ₹${buybackRate}/litre buyback`}
                />
                <Stat
                  label="Monthly Revenue"
                  value={formatINR(calc.monthlyRevenue)}
                  sub={`${operatingDays} days operation`}
                />
                <Stat
                  label="Monthly OPEX"
                  value={formatINR(calc.totalOpex)}
                  sub="raw material + fixed costs"
                />
              </div>

              {/* Net profit highlight */}
              <div
                className={`mt-4 rounded-2xl border p-6 ${
                  isProfit
                    ? "border-brand/25 bg-gradient-to-br from-brand/8 to-bg-cream"
                    : "border-red/25 bg-red/5"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Monthly Net Profit
                    </p>
                    <p
                      className={`mt-1 font-mono text-4xl font-bold ${
                        isProfit ? "text-brand" : "text-red"
                      }`}
                    >
                      {formatINR(calc.monthlyProfit)}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Annual income:{" "}
                      <span className="font-semibold text-heading">
                        {formatINR(calc.annualIncome)}
                      </span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Annual ROI
                    </p>
                    <p className="mt-1 font-mono text-3xl font-bold text-heading">
                      {calc.roi.toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Payback + secondary stats */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center rounded-xl border border-border bg-bg-warm p-4 text-center">
                  <Clock className="mb-1.5 h-4 w-4 text-brand" />
                  <p className="font-mono text-xl font-bold text-heading">
                    {isProfit ? `${calc.paybackMonths}mo` : "—"}
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted">Payback Period</p>
                </div>
                <div className="flex flex-col items-center rounded-xl border border-border bg-bg-warm p-4 text-center">
                  <Droplets className="mb-1.5 h-4 w-4 text-brand" />
                  <p className="font-mono text-xl font-bold text-heading">
                    {(calc.fuelPerDay * operatingDays).toLocaleString("en-IN")}L
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted">Monthly Fuel</p>
                </div>
                <div className="flex flex-col items-center rounded-xl border border-border bg-bg-warm p-4 text-center">
                  <Flame className="mb-1.5 h-4 w-4 text-brand" />
                  <p className="font-mono text-xl font-bold text-heading">
                    {(dailyWaste * operatingDays / 1000).toFixed(1)}T
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted">Waste Processed</p>
                </div>
              </div>

              {/* Buyback guarantee note */}
              <div className="mt-4 flex gap-2.5 rounded-xl border border-brand/15 bg-brand/5 p-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                <p className="text-xs leading-relaxed text-muted">
                  <span className="font-semibold text-heading">Buyback Guarantee:</span>{" "}
                  Polymer Energy purchases 100% of your production at the guaranteed rate of
                  ₹{buybackRate}/L for intermediary fuel oil — eliminating all market risk.
                  Revenue projections assume {operatingDays} operational days/month with 80%
                  plastic-to-oil conversion efficiency.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
