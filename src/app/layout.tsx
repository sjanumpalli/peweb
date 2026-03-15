import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Codr Superpowers",
  description: "Explore the superpowers that make Claude Code the ultimate AI coding companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
