"use client";

import dynamic from "next/dynamic";
import { WASTE_LOCATIONS, TOTAL_PLASTIC_KG } from "@/lib/telangana-waste-data";

// Leaflet requires browser APIs — load client-side only
const TelanganaMap = dynamic(
  () => import("@/components/ui/telangana-map").then((m) => ({ default: m.TelanganaMap })),
  { ssr: false, loading: () => <MapSkeleton /> }
);

function MapSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-surface">
      <div className="text-center">
        <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-brand border-t-transparent" />
        <p className="text-sm text-muted">Loading map…</p>
      </div>
    </div>
  );
}

const TOP_5 = [...WASTE_LOCATIONS]
  .sort((a, b) => b.plasticKg - a.plasticKg)
  .slice(0, 5);

export function MapExplorer() {
  const ulbCount = WASTE_LOCATIONS.length;
  const avgKg = ulbCount > 0 ? TOTAL_PLASTIC_KG / ulbCount : 0;

  return (
    <section className="px-4 pb-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Summary stats strip */}
        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { label: "Urban Local Bodies", value: ulbCount.toString(), unit: "" },
            {
              label: "Total Plastic Waste",
              value: (TOTAL_PLASTIC_KG / 1000).toFixed(1),
              unit: "t/day",
            },
            {
              label: "Avg per ULB",
              value: avgKg.toFixed(0),
              unit: "kg/day",
            },
            {
              label: "State",
              value: "Telangana",
              unit: "India",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-surface px-4 py-3"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
                {s.label}
              </p>
              <p className="mt-1 font-heading text-xl font-bold text-heading">
                {s.value}
                {s.unit && (
                  <span className="ml-1 text-sm font-normal text-muted">
                    {s.unit}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Map — full width, no overflow-hidden so callout can escape */}
        <div className="relative mb-4 h-[520px] rounded-2xl border border-border md:h-[640px]">
          <TelanganaMap />
        </div>

        {/* Info strip below map */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {/* Top 5 */}
          <div className="rounded-2xl border border-border bg-surface p-4 md:col-span-1">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
              Top 5 by Plastic Waste
            </h3>
            <div className="space-y-2.5">
              {TOP_5.map((loc, i) => {
                const maxKg = TOP_5[0].plasticKg;
                const pct = (loc.plasticKg / maxKg) * 100;
                const colors = ["#EF4444", "#F97316", "#EAB308", "#22C55E", "#22C55E"];
                return (
                  <div key={loc.ulb}>
                    <div className="mb-1 flex items-center justify-between">
                      <div>
                        <span className="text-sm font-semibold text-heading">{loc.ulb}</span>
                        <span className="ml-2 text-[10px] text-muted">{loc.district}</span>
                      </div>
                      <span className="font-mono text-xs font-bold" style={{ color: colors[i] }}>
                        {loc.plasticKg.toLocaleString()} kg
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${pct}%`, backgroundColor: colors[i] }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Click hint */}
          <div className="flex items-center rounded-2xl border border-border bg-brand/5 p-4">
            <p className="text-sm leading-relaxed text-muted">
              <span className="font-semibold text-brand">Click any dot</span>{" "}
              on the map to see full waste stats for that ULB. Bubble size reflects
              plastic generation volume.
            </p>
          </div>

          {/* Data note */}
          <div className="rounded-2xl border border-border bg-surface p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
              Data Note
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              Plastic waste estimated at 7% of total municipal solid waste generation.
              Data covers <span className="text-body">Telangana</span> state. More
              states coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
