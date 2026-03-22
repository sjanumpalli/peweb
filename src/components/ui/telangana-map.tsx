"use client";

import "leaflet/dist/leaflet.css";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CircleDot, Flame } from "lucide-react";
import {
  WASTE_LOCATIONS,
  getTier,
  type WasteLocation,
} from "@/lib/telangana-waste-data";

// ── Types ─────────────────────────────────────────────────────────────────
type VizMode = "bubbles" | "heatmap";

// ── Helpers ───────────────────────────────────────────────────────────────
function markerRadius(plasticKg: number) {
  return Math.max(6, Math.sqrt(plasticKg / 10) * 0.9);
}

// ── Count-up animation ────────────────────────────────────────────────────
function CountUp({ target, duration = 1.4, decimals = 0 }: { target: number; duration?: number; decimals?: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      setValue(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return <>{value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</>;
}

// ── SelectPayload carries both data + marker pixel position ───────────────
type SelectPayload = { loc: WasteLocation; px: { x: number; y: number } };

// ── Compact callout anchored to marker with connector line ─────────────────
function WasteCallout({ payload, onClose }: { payload: SelectPayload; onClose: () => void }) {
  const { loc, px } = payload;
  const tier = getTier(loc.plasticKg);
  const barPct = Math.min((loc.plasticKg / 28280) * 100, 100);

  const CARD_W = 210;
  const CARD_H = 148; // approx rendered height
  const GAP = 20;

  // Place above marker unless too close to top
  const placeAbove = px.y > CARD_H + GAP + 40;
  const cardY = placeAbove ? px.y - CARD_H - GAP : px.y + GAP;
  const cardX = Math.max(8, px.x - CARD_W / 2);

  // Connector line endpoint at top or bottom center of card
  const lineEndY = placeAbove ? cardY + CARD_H : cardY;
  const lineEndX = Math.max(cardX + 20, Math.min(px.x, cardX + CARD_W - 20));

  return (
    <>
      {/* SVG connector — sits above map, below card */}
      <svg
        className="pointer-events-none absolute inset-0 z-[850] overflow-visible"
        style={{ width: "100%", height: "100%" }}
      >
        <line
          x1={px.x} y1={px.y} x2={lineEndX} y2={lineEndY}
          stroke={tier.color} strokeWidth="1.5"
          strokeDasharray="4 3" strokeOpacity="0.65"
        />
        <circle cx={px.x} cy={px.y} r="4" fill={tier.color} opacity="0.85" />
        <circle cx={px.x} cy={px.y} r="7" fill={tier.color} opacity="0.15" />
      </svg>

      {/* Card */}
      <motion.div
        className="pointer-events-auto absolute z-[900]"
        style={{ left: cardX, top: cardY, width: CARD_W }}
        initial={{ opacity: 0, y: placeAbove ? 6 : -6, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: placeAbove ? 4 : -4, scale: 0.94 }}
        transition={{ type: "spring", stiffness: 440, damping: 32 }}
      >
        {/* Tier accent stripe */}
        <div className="h-[3px] w-full rounded-t-2xl" style={{ backgroundColor: tier.color }} />

        <div className="rounded-b-2xl border border-t-0 border-gray-200 bg-white/97 shadow-[0_8px_40px_rgba(0,0,0,0.13)] backdrop-blur-sm">
          {/* Header */}
          <div className="flex items-start justify-between px-3.5 pt-3 pb-1">
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-heading text-[13px] font-bold leading-snug text-gray-900">
                {loc.ulb}
              </h3>
              <p className="text-[10px] text-gray-400">{loc.district} District</p>
            </div>
            <button
              onClick={onClose}
              className="ml-2 flex-shrink-0 rounded-full p-0.5 text-gray-300 transition-colors hover:bg-gray-100 hover:text-gray-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Big number */}
          <div
            className="mx-3.5 mb-2.5 rounded-xl px-3 py-2"
            style={{ backgroundColor: tier.color + "14" }}
          >
            <p className="font-heading text-[26px] font-extrabold leading-none" style={{ color: tier.color }}>
              <CountUp target={loc.plasticKg} decimals={0} />
            </p>
            <p className="mt-0.5 text-[10px] font-medium tracking-wide text-gray-400">KG PLASTIC / DAY</p>
          </div>

          {/* Progress bar */}
          <div className="px-3.5 pb-3">
            <div className="mb-1 flex justify-between text-[10px] text-gray-400">
              <span>vs state highest</span>
              <span style={{ color: tier.color }}>{barPct.toFixed(1)}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: tier.color }}
                initial={{ width: 0 }}
                animate={{ width: `${barPct}%` }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              />
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: tier.color }} />
              <span className="text-[10px] font-medium" style={{ color: tier.color }}>
                {tier.label} generation zone
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// ── Leaflet Bubbles + Heatmap (shared map instance) ───────────────────────
function LeafletView({ mode, onSelect }: {
  mode: "bubbles" | "heatmap";
  onSelect: (loc: WasteLocation, px: { x: number; y: number }) => void;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInst = useRef<import("leaflet").Map | null>(null);
  const bubblesGrp = useRef<import("leaflet").LayerGroup | null>(null);
  const heatGrp = useRef<import("leaflet").LayerGroup | null>(null);
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let destroyed = false;

    import("leaflet").then((L) => {
      if (!mapRef.current || mapInst.current || destroyed) return;

      const map = L.map(mapRef.current, {
        center: [17.5, 79.1], zoom: 7,
        zoomControl: false, attributionControl: false,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19, subdomains: "abcd",
      }).addTo(map);

      L.control.zoom({ position: "bottomright" }).addTo(map);

      // ── Bubbles layer ──────────────────────────────────────────────────
      const bubbles = L.layerGroup();
      WASTE_LOCATIONS.forEach((loc) => {
        const tier = getTier(loc.plasticKg);
        const r = markerRadius(loc.plasticKg);
        const icon = L.divIcon({
          className: "",
          html: `<div style="position:relative;width:${r * 2}px;height:${r * 2}px;">
            <div style="position:absolute;inset:0;border-radius:50%;background:${tier.color}33;animation:pulse-ring 2s ease-out infinite;"></div>
            <div style="position:absolute;inset:${r * 0.2}px;border-radius:50%;background:${tier.color};box-shadow:0 0 8px ${tier.color}88;cursor:pointer;"></div>
          </div>`,
          iconSize: [r * 2, r * 2], iconAnchor: [r, r],
        });
        const marker = L.marker([loc.lat, loc.lng], { icon }).on("click", () => {
          const pt = map.latLngToContainerPoint([loc.lat, loc.lng]);
          onSelect(loc, { x: pt.x, y: pt.y });
        });
        marker.bindTooltip(`<strong>${loc.ulb}</strong><br/>${loc.plasticKg.toLocaleString()} kg/day`, {
          className: "pe-tooltip", direction: "top", offset: [0, -r - 4],
        });
        bubbles.addLayer(marker);
      });

      // ── Heatmap layer — native L.circle, no plugin required ───────────
      const heat = L.layerGroup();
      WASTE_LOCATIONS.forEach((loc) => {
        const tier = getTier(loc.plasticKg);
        const baseR = Math.sqrt(loc.plasticKg) * 150; // geographic radius in metres
        // Outer soft glow
        L.circle([loc.lat, loc.lng], {
          radius: baseR, color: "transparent",
          fillColor: tier.color, fillOpacity: 0.13,
          interactive: false,
        }).addTo(heat);
        // Inner hot core
        L.circle([loc.lat, loc.lng], {
          radius: baseR * 0.45, color: "transparent",
          fillColor: tier.color, fillOpacity: 0.30,
          interactive: false,
        }).addTo(heat);
      });

      // Store refs first, THEN add the correct initial layer
      mapInst.current = map;
      bubblesGrp.current = bubbles;
      heatGrp.current = heat;

      if (modeRef.current === "bubbles") bubbles.addTo(map);
      else heat.addTo(map);

      setReady(true);
    });

    return () => {
      destroyed = true;
      if (mapInst.current) {
        mapInst.current.remove();
        mapInst.current = null;
        bubblesGrp.current = null;
        heatGrp.current = null;
      }
    };
  }, []); // eslint-disable-line

  // Switch layers whenever mode or ready changes
  useEffect(() => {
    const map = mapInst.current;
    const bubbles = bubblesGrp.current;
    const heat = heatGrp.current;
    if (!map || !bubbles || !heat) return;

    if (mode === "bubbles") {
      if (map.hasLayer(heat)) map.removeLayer(heat);
      if (!map.hasLayer(bubbles)) bubbles.addTo(map);
    } else {
      if (map.hasLayer(bubbles)) map.removeLayer(bubbles);
      if (!map.hasLayer(heat)) heat.addTo(map);
    }
  }, [mode, ready]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      <style>{`
        @keyframes pulse-ring { 0% { transform:scale(0.8);opacity:0.7; } 100% { transform:scale(2.4);opacity:0; } }
        .pe-tooltip { background:rgba(255,255,255,0.97);border:1px solid #e5e7eb;color:#111827;font-size:11px;border-radius:10px;padding:5px 10px;box-shadow:0 4px 16px rgba(0,0,0,0.10); }
        .pe-tooltip::before { display:none; }
        .leaflet-control-zoom { border:none!important;box-shadow:0 2px 12px rgba(0,0,0,0.10)!important; }
        .leaflet-control-zoom a { background:white!important;color:#374151!important;border-color:#e5e7eb!important;font-size:14px!important; }
        .leaflet-control-zoom a:hover { background:#f3f4f6!important; }
        .leaflet-control-attribution { background:rgba(255,255,255,0.85)!important;color:#9ca3af!important;font-size:10px!important;border-radius:6px 0 0 0!important; }
        .leaflet-control-attribution a { color:#22C55E!important; }
      `}</style>

      <div ref={mapRef} className="h-full w-full" />

      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand border-t-transparent" />
        </div>
      )}

      {ready && mode === "bubbles" && (
        <div className="pointer-events-none absolute left-4 top-4 z-[500] rounded-xl border border-gray-200 bg-white/90 px-3 py-2.5 shadow-sm backdrop-blur-sm">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Plastic kg/day</p>
          {[
            { label: "< 500 kg", color: "#22C55E" },
            { label: "500–2k kg", color: "#EAB308" },
            { label: "2k–7k kg", color: "#F97316" },
            { label: "> 7k kg", color: "#EF4444" },
          ].map((t) => (
            <div key={t.label} className="mb-1 flex items-center gap-2 last:mb-0">
              <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: t.color }} />
              <span className="text-[11px] text-gray-600">{t.label}</span>
            </div>
          ))}
        </div>
      )}

      {ready && mode === "heatmap" && (
        <div className="pointer-events-none absolute left-4 top-4 z-[500] rounded-xl border border-gray-200 bg-white/90 px-3 py-2.5 shadow-sm backdrop-blur-sm">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Density</p>
          <div className="flex items-center gap-2">
            <div className="h-20 w-3 rounded-full" style={{ background: "linear-gradient(to bottom, #EF4444, #F97316, #EAB308, #22C55E)" }} />
            <div className="flex h-20 flex-col justify-between text-[10px] text-gray-400">
              <span>High</span>
              <span>Low</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Mode toggle button ────────────────────────────────────────────────────
const MODES: { id: VizMode; label: string }[] = [
  { id: "bubbles", label: "Bubbles" },
  { id: "heatmap", label: "Heatmap" },
];

// ── Main export ───────────────────────────────────────────────────────────
export function TelanganaMap() {
  const [mode, setMode] = useState<VizMode>("bubbles");
  const [selected, setSelected] = useState<SelectPayload | null>(null);

  return (
    <div className="relative h-full w-full">
      {/* Clipped map layer — tiles + mode toggle stay inside rounded border */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {/* Mode toggle */}
        <div className="absolute right-3 top-3 z-[600] flex overflow-hidden rounded-xl border border-gray-200 bg-white/95 shadow-md backdrop-blur-sm">
          {MODES.map((m) => {
            const Icon = m.id === "bubbles" ? CircleDot : Flame;
            return (
              <button
                key={m.id}
                onClick={() => { setMode(m.id); setSelected(null); }}
                className={`flex cursor-pointer items-center gap-1.5 whitespace-nowrap px-3 py-2 text-xs font-semibold transition-colors duration-150
                  ${mode === m.id ? "bg-brand text-white" : "text-gray-500 hover:text-gray-800"}`}
              >
                <Icon className="h-3 w-3 flex-shrink-0" />
                {m.label}
              </button>
            );
          })}
        </div>

        {/* Map */}
        <div className="h-full w-full">
          <LeafletView
            mode={mode}
            onSelect={(loc, px) => setSelected({ loc, px })}
          />
        </div>
      </div>

      {/* Callout — outside the clipped layer so it never gets cropped */}
      <AnimatePresence>
        {selected && (
          <WasteCallout
            key={selected.loc.ulb}
            payload={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
