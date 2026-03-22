"use client";

import { cn } from "@/lib/utils";

interface CalcSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  prefix?: string;
  onChange: (value: number) => void;
  className?: string;
}

export function CalcSlider({
  label,
  value,
  min,
  max,
  step,
  unit = "",
  prefix = "",
  onChange,
  className,
}: CalcSliderProps) {
  const displayValue = `${prefix}${value.toLocaleString("en-IN")}${unit}`;

  return (
    <div className={cn("mb-5", className)}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-heading">{label}</span>
        <span className="font-heading text-sm font-bold text-heading">
          {displayValue}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-black/[0.03] accent-brand outline-none transition-colors [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-brand [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-brand [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md"
        aria-label={label}
      />
      <div className="mt-1 flex justify-between text-xs text-muted">
        <span>{prefix}{min.toLocaleString("en-IN")}{unit}</span>
        <span>{prefix}{max.toLocaleString("en-IN")}{unit}</span>
      </div>
    </div>
  );
}
