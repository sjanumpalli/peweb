"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-border bg-surface text-heading transition-all duration-200 hover:bg-surface-hover"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-brand" />
      ) : (
        <Moon className="h-4 w-4 text-brand" />
      )}
    </button>
  );
}
