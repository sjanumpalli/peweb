"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  color?: string;
  size?: number;
  speed?: number;
  opacity?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export function Particles({
  className,
  quantity = 50,
  color = "#22C55E",
  size = 2,
  speed = 0.3,
  opacity = 0.4,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  const initParticles = useCallback(
    (w: number, h: number) => {
      particlesRef.current = Array.from({ length: quantity }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * size + 0.5,
        opacity: Math.random() * opacity + 0.1,
      }));
    },
    [quantity, size, speed, opacity],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      setDimensions({ w: rect.width, h: rect.height });
      initParticles(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const { w, h } = { w: canvas.width / (window.devicePixelRatio || 1), h: canvas.height / (window.devicePixelRatio || 1) };
      ctx.clearRect(0, 0, w, h);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [color, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
    />
  );
}
