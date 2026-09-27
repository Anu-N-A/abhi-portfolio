"use client";

import { useEffect, useRef } from "react";

// Smooth fluid trailer: layered soft orbs chase the cursor with
// different lag speeds, so movement feels connected and weighty.
export default function SmokeCursor() {
  const backRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: -9999, y: -9999, active: false };
    const back = { x: -9999, y: -9999 };
    const mid = { x: -9999, y: -9999 };
    const core = { x: -9999, y: -9999 };
    let raf = 0;

    const place = (
      el: HTMLDivElement | null,
      x: number,
      y: number,
      size: number
    ) => {
      if (!el) return;
      el.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
    };

    const loop = () => {
      // chase with increasing looseness: core sticks to hand, back lags behind
      core.x += (target.x - core.x) * 0.22;
      core.y += (target.y - core.y) * 0.22;
      mid.x += (target.x - mid.x) * 0.1;
      mid.y += (target.y - mid.y) * 0.1;
      back.x += (target.x - back.x) * 0.055;
      back.y += (target.y - back.y) * 0.055;

      place(backRef.current, back.x, back.y, 560);
      place(midRef.current, mid.x, mid.y, 300);
      // fine high-frequency shimmer on the core — the "vibration" feel
      const t = performance.now() / 1000;
      const jx = Math.sin(t * 31) * 1.6 + Math.sin(t * 57) * 0.8;
      const jy = Math.cos(t * 37) * 1.6 + Math.cos(t * 53) * 0.8;
      place(coreRef.current, core.x + jx, core.y + jy, 130);

      raf = requestAnimationFrame(loop);
    };

    const show = () => {
      // slow bloom on touch: core appears first, haze rolls in last
      const layers: Array<[HTMLDivElement | null, string]> = [
        [coreRef.current, "900ms"],
        [midRef.current, "1300ms"],
        [backRef.current, "1800ms"],
      ];
      for (const [el, dur] of layers) {
        if (!el) continue;
        el.style.transitionDuration = dur;
        el.style.opacity = "1";
      }
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!target.active) {
        target.active = true;
        // start on top of cursor so there's no fly-in from the corner
        back.x = mid.x = core.x = e.clientX;
        back.y = mid.y = core.y = e.clientY;
        show();
      }
    };
    const onDown = (e: PointerEvent) => {
      onMove(e);
      // haptic tap on supported phones + visual pulse
      try {
        navigator.vibrate?.(12);
      } catch {
        /* unsupported — visual pulse still applies */
      }
      // gentle pulse on tap: briefly swell the core
      const el = coreRef.current;
      if (!el) return;
      el.style.transition = "width 0.25s ease, height 0.25s ease";
      el.style.width = "170px";
      el.style.height = "170px";
      window.setTimeout(() => {
        el.style.width = "130px";
        el.style.height = "130px";
      }, 260);
    };
    const hideSlowly = () => {
      target.active = false;
      target.x = -9999;
      target.y = -9999;
      // slow varnish: staggered fade, haze lingers longest
      const layers = [coreRef.current, midRef.current, backRef.current];
      layers.forEach((el, i) => {
        if (!el) return;
        el.style.transitionDuration = `${1400 + i * 400}ms`;
        el.style.opacity = "0";
      });
    };
    const onLeave = () => {
      hideSlowly();
    };
    // lifting the finger on touch slowly dissolves the smoke
    const onUp = (e: PointerEvent) => {
      if (e.pointerType === "touch") hideSlowly();
    };

    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("pointercancel", onUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
      {/* wide trailing haze — lags most, feels like smoke */}
      <div
        ref={backRef}
        className="absolute left-0 top-0 h-[560px] w-[560px] opacity-0 transition-opacity duration-[1800ms]"
        style={{
          background:
            "radial-gradient(circle, rgba(200,215,215,0.07) 0%, transparent 65%)",
          mixBlendMode: "screen",
        }}
      />
      {/* mid glow */}
      <div
        ref={midRef}
        className="absolute left-0 top-0 h-[300px] w-[300px] opacity-0 transition-opacity duration-[1300ms]"
        style={{
          background:
            "radial-gradient(circle, rgba(220,235,235,0.13) 0%, transparent 65%)",
          mixBlendMode: "screen",
        }}
      />
      {/* core orb — sticks closest to the hand, like the reference */}
      <div
        ref={coreRef}
        className="absolute left-0 top-0 h-[130px] w-[130px] opacity-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(circle, rgba(225,248,248,0.6) 0%, rgba(210,235,235,0.22) 45%, transparent 70%)",
          filter: "blur(5px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
