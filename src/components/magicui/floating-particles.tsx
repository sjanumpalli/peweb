"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FloatingParticlesProps {
  className?: string;
  quantity?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
}

interface FloatingParticle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export function FloatingParticles({
  className,
  quantity = 60,
  colors = ["#22C55E", "#1B4332", "#16A34A"],
  minSize = 1,
  maxSize = 4,
}: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<FloatingParticle[]>([]);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const initParticles = useCallback(
    (w: number, h: number) => {
      particlesRef.current = Array.from({ length: quantity }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * (maxSize - minSize) + minSize,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      }));
    },
    [quantity, colors, minSize, maxSize],
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
      initParticles(rect.width, rect.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);

    let time = 0;
    const animate = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      time += 0.016;

      for (const p of particlesRef.current) {
        // Mouse repulsion
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 2;
          p.y += (dy / dist) * force * 2;
        }

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const pulse = Math.sin(time * p.pulseSpeed * 60 + p.pulsePhase) * 0.3 + 0.7;
        const alpha = p.opacity * pulse;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha * 0.1;
        ctx.fill();
      }

      // Draw connecting lines between nearby particles
      ctx.globalAlpha = 1;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dx2 = a.x - b.x;
          const dy2 = a.y - b.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist2 < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = a.color;
            ctx.globalAlpha = (1 - dist2 / 100) * 0.08;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-auto absolute inset-0", className)}
      aria-hidden="true"
    />
  );
}
