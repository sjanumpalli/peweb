"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, TrendingUp, IndianRupee, Clock, Fuel } from "lucide-react";
import { cn } from "@/lib/utils";
import { CalcSlider } from "@/components/ui/calc-slider";
import { FadeIn } from "@/components/ui/fade-in";

type EquipmentModel = "PE-100" | "PE-200" | "PE-500";

const EQUIPMENT = {
  "PE-100": { capacity: 100, cost: 1500000, label: "PE-100 — Small Scale (100 kg/day)" },
  "PE-200": { capacity: 250, cost: 2800000, label: "PE-200 — Mid Scale (250 kg/day)" },
  "PE-500": { capacity: 500, cost: 4500000, label: "PE-500 — Industrial (500 kg/day)" },
} as const;

const FUEL_YIELD = 0.6;

function formatINR(value: number): string {
  const abs = Math.abs(Math.round(value));
  if (abs >= 10000000) return `₹${(value / 10000000).toFixed(1)} Cr`;
  if (abs >= 100000) return `₹${(value / 100000).toFixed(1)} L`;
  return `₹${abs.toLocaleString("en-IN")}`;
}

interface ResultCardProps {
  label: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  colorClass: string;
}

function ResultCard({ label, value, subtitle, icon, colorClass }: ResultCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="mb-2 flex items-center gap-2">
        <span className={cn("flex-shrink-0", colorClass)}>{icon}</span>
        <span className="text-sm font-semibold text-muted">{label}</span>
      </div>
      <div className="font-mono text-3xl font-bold text-accent">{value}</div>
      <p className="mt-1 text-xs text-muted">{subtitle}</p>
    </div>
  );
}

export function CalculatorTool() {
  const [model, setModel] = useState<EquipmentModel>("PE-200");
  const [dailyInput, setDailyInput] = useState(500);
  const [operatingDays, setOperatingDays] = useState(25);
  const [fuelPrice, setFuelPrice] = useState(55);
  const [operatingCost, setOperatingCost] = useState(3500);

  const results = useMemo(() => {
    const eq = EQUIPMENT[model];
    const effectiveDaily = Math.min(dailyInput, eq.capacity);
    const monthlyFuelOutput = effectiveDaily * FUEL_YIELD * operatingDays;
    const monthlyRevenue = monthlyFuelOutput * fuelPrice;
    const monthlyCost = operatingCost * operatingDays;
    const monthlyProfit = monthlyRevenue - monthlyCost;
    const roiMonths = monthlyProfit > 0 ? Math.ceil(eq.cost / monthlyProfit) : 99;

    return { monthlyRevenue, monthlyProfit, roiMonths };
  }, [model, dailyInput, operatingDays, fuelPrice, operatingCost]);

  return (
    <section className="px-6 pb-16">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <FadeIn delay={0.1}>
          <div className="rounded-xl border border-border bg-white p-8 shadow-card md:p-10">
            <h2 className="mb-6 flex items-center gap-2 font-heading text-lg font-bold text-heading">
              <SlidersHorizontal className="h-5 w-5 text-heading" />
              Input Parameters
            </h2>

            <div className="mb-6">
              <label
                htmlFor="equipment-model"
                className="mb-2 block text-sm font-semibold text-heading"
              >
                Equipment Model
              </label>
              <select
                id="equipment-model"
                value={model}
                onChange={(e) => setModel(e.target.value as EquipmentModel)}
                className="w-full cursor-pointer appearance-none rounded-xl border border-border bg-bg-warm px-4 py-3 font-body text-sm text-heading transition-colors duration-200 hover:border-brand/40 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none"
              >
                {Object.entries(EQUIPMENT).map(([key, eq]) => (
                  <option key={key} value={key}>
                    {eq.label}
                  </option>
                ))}
              </select>
            </div>

            <CalcSlider
              label="Daily Plastic Input"
              value={dailyInput}
              min={50}
              max={2000}
              step={50}
              unit=" kg"
              onChange={setDailyInput}
            />
            <CalcSlider
              label="Operating Days / Month"
              value={operatingDays}
              min={10}
              max={30}
              step={1}
              onChange={setOperatingDays}
            />
            <CalcSlider
              label="Fuel Price"
              value={fuelPrice}
              min={30}
              max={80}
              step={1}
              prefix="₹"
              unit="/litre"
              onChange={setFuelPrice}
            />
            <CalcSlider
              label="Operating Cost"
              value={operatingCost}
              min={1000}
              max={10000}
              step={500}
              prefix="₹"
              unit="/day"
              onChange={setOperatingCost}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col gap-5 rounded-xl border border-border bg-white p-8 shadow-card md:p-10">
            <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-heading">
              <TrendingUp className="h-5 w-5 text-heading" />
              Projected Returns
            </h2>

            <ResultCard
              label="Monthly Revenue"
              value={formatINR(results.monthlyRevenue)}
              subtitle="Based on current fuel prices"
              icon={<IndianRupee className="h-4 w-4" />}
              colorClass="text-green"
            />
            <ResultCard
              label="Monthly Profit"
              value={formatINR(results.monthlyProfit)}
              subtitle="Revenue minus operating costs"
              icon={<Fuel className="h-4 w-4" />}
              colorClass="text-accent"
            />
            <ResultCard
              label="ROI Period"
              value={results.roiMonths < 99 ? `${results.roiMonths} months` : "N/A"}
              subtitle="Time to recover equipment investment"
              icon={<Clock className="h-4 w-4" />}
              colorClass="text-brand"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
