"use client";

import { useEffect, useRef, useState } from "react";

type Ripple = { id: number; x: number; y: number };

export default function TouchGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    let id = 0;

    const moveGlow = (x: number, y: number) => {
      if (glowRef.current) {
        glowRef.current.style.opacity = "1";
        glowRef.current.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
      }
      if (orbRef.current) {
        orbRef.current.style.opacity = "1";
        orbRef.current.style.transform = `translate(${x - 60}px, ${y - 60}px)`;
      }
    };

    const onMove = (e: PointerEvent) => moveGlow(e.clientX, e.clientY);
    const onDown = (e: PointerEvent) => {
      moveGlow(e.clientX, e.clientY);
      const rid = ++id;
      setRipples((r) => [...r.slice(-6), { id: rid, x: e.clientX, y: e.clientY }]);
      window.setTimeout(
        () => setRipples((r) => r.filter((p) => p.id !== rid)),
        900
      );
    };
    const onLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
      if (orbRef.current) orbRef.current.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
      {/* soft wide shadow-glow that follows touch/cursor */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[600px] w-[600px] opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(200,220,220,0.06) 30%, transparent 65%)",
          mixBlendMode: "screen",
        }}
      />
      {/* bright orb core like the reference */}
      <div
        ref={orbRef}
        className="absolute left-0 top-0 h-[120px] w-[120px] opacity-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(220,245,245,0.55) 0%, rgba(200,230,230,0.18) 45%, transparent 70%)",
          filter: "blur(6px)",
          mixBlendMode: "screen",
        }}
      />
      {/* click ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="touch-ripple absolute block h-8 w-8 rounded-full"
          style={{ left: r.x - 16, top: r.y - 16 }}
        />
      ))}
    </div>
  );
}
