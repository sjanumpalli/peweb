"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";

/**
 * Renders the global Navbar only on inner pages.
 * The home page (/) uses the MinimalistHero's built-in nav.
 */
export function ConditionalNavbar() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Navbar />;
}
