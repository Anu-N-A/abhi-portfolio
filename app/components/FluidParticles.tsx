"use client";

import { useEffect, useRef } from "react";

type P = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  c: number;
};

const COLORS = ["232,222,208", "201,184,163", "220,240,240"];

export default function FluidParticles({
  fullscreen = false,
  hideInHero = false,
}: {
  fullscreen?: boolean;
  hideInHero?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let particles: P[] = [];
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.floor(rect.width * dpr));
      h = Math.max(1, Math.floor(rect.height * dpr));
      canvas.width = w;
      canvas.height = h;
    };

    const seed = () => {
      const area = canvas.clientWidth * canvas.clientHeight;
      const count = Math.max(
        40,
        Math.min(110, Math.floor(area / 16000))
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: (0.8 + Math.random() * 1.8) * Math.min(window.devicePixelRatio || 1, 2),
        c: Math.floor(Math.random() * COLORS.length),
      }));
    };

    const step = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      const R = 140 * Math.min(window.devicePixelRatio || 1, 2);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      for (const p of particles) {
        // gentle push away from cursor/touch
        const px = pointer.x * dpr;
        const py = pointer.y * dpr;
        const dx = p.x - px;
        const dy = p.y - py;
        const dist = Math.hypot(dx, dy);
        if (dist < R && dist > 0.01) {
          const force = ((R - dist) / R) * 0.6;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // friction back to drift speed
        p.vx *= 0.985;
        p.vy *= 0.985;
        if (Math.hypot(p.vx, p.vy) < 0.08) {
          p.vx += (Math.random() - 0.5) * 0.02;
          p.vy += (Math.random() - 0.5) * 0.02;
        }

        p.x += p.vx;
        p.y += p.vy;

        // wrap edges for endless diffusion
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLORS[p.c]},0.4)`;
        ctx.fill();
      }

      // faint diffusion links
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const max = 110 * dpr;
          if (d2 < max * max) {
            ctx.strokeStyle = `rgba(232,222,208,${0.07 * (1 - Math.sqrt(d2) / max)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };

    // pause when offscreen (embedded mode) or hide over hero (fullscreen mode)
    const hero = canvas.closest("section");
    const heroSection =
      hideInHero && fullscreen ? document.getElementById("hero") : null;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !document.hidden) {
          if (!running) {
            running = true;
            raf = requestAnimationFrame(step);
          }
        } else {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    if (hero && !fullscreen) io.observe(hero);

    // in fullscreen mode, fade out while the hero is on screen
    let heroIo: IntersectionObserver | null = null;
    if (heroSection) {
      const setHeroHidden = (hidden: boolean) => {
        canvas.style.opacity = hidden ? "0" : "1";
      };
      setHeroHidden(heroSection.getBoundingClientRect().top < window.innerHeight && heroSection.getBoundingClientRect().bottom > 0);
      heroIo = new IntersectionObserver(
        ([entry]) => setHeroHidden(entry.isIntersecting),
        { threshold: 0 }
      );
      heroIo.observe(heroSection);
    }

    resize();
    seed();
    raf = requestAnimationFrame(step);

    window.addEventListener("resize", () => {
      resize();
      seed();
    });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      heroIo?.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [fullscreen, hideInHero]);

  if (fullscreen) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-[90] transition-opacity duration-700"
        aria-hidden
      >
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
