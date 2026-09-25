"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = ["PRODUCTS", "SOLUTIONS", "RESOURCES"];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ---------- NAVBAR ---------- */}
      <header className="sticky top-0 z-50 bg-black border-b border-white/10">
        <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-5 md:px-8 h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 tracking-[0.18em] font-semibold text-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M7 17L17 7M9 7h8v8M7 7l3 3M17 17l-3-3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="3" y="3" width="18" height="18" rx="4" />
            </svg>
            SQUARESPACE
          </a>

          {/* Center links */}
          <div className="hidden lg:flex items-center gap-8 text-[14px] font-semibold tracking-wide">
            {navLinks.map((l) => (
              <button key={l} className="flex items-center gap-1.5 hover:text-white/70 transition-colors">
                {l}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-[14px] font-semibold tracking-wide hover:text-white/70">
              LOG IN
            </a>
            <a
              href="#hero"
              className="bg-white text-black text-[14px] font-semibold tracking-wide px-8 py-3.5 rounded-[3px] hover:bg-white/85 transition-colors"
            >
              GET STARTED
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-sm font-semibold tracking-wide bg-black">
            {navLinks.map((l) => (
              <a key={l} href="#" className="flex items-center justify-between">
                {l} <span>﹀</span>
              </a>
            ))}
            <a href="#">LOG IN</a>
            <a href="#hero" className="bg-white text-black text-center px-8 py-3.5 rounded-[3px]">
              GET STARTED
            </a>
          </div>
        )}
      </header>

      {/* ---------- HERO ---------- */}
      <section id="hero" className="relative bg-black text-white overflow-hidden">
        {/* warm dark background */}
        <div className="absolute inset-0">
          <Image
            src="/pexels-asim-razan-32997.jpg"
            alt="Background"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
        </div>

        <div className="relative z-10 pt-14 md:pt-20 pb-0 px-5 text-center">
          <h1 className="font-display text-[42px] leading-[1.05] md:text-7xl font-medium tracking-tight">
            A website
            <br />
            makes it real
          </h1>

          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-white text-black text-[14px] font-semibold tracking-wide px-12 py-4 rounded-[3px] hover:bg-white/85 transition-colors"
            >
              GET STARTED
            </a>
            <p className="mt-5 text-[15px] text-white/90">Start for free. No credit card required.</p>
          </div>

          {/* Template cards — Squarespace style, your photos */}
          <div className="mt-12 flex items-end justify-center gap-4 md:gap-6 max-w-[1600px] mx-auto">
            {/* LEFT CARD */}
            <div className="hidden sm:block w-[30%] shrink-0 -rotate-3 translate-y-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <div className="relative h-[300px] md:h-[420px]">
                <Image
                  src="/pexels-bertellifotografia-13871691.jpg"
                  alt=""
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="30vw"
                />
              </div>
            </div>

            {/* CENTER CARD */}
            <div className="w-full sm:w-[46%] shrink-0 z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <div className="grid grid-cols-2 h-[340px] md:h-[460px]">
                <div className="relative">
                  <Image
                    src="/pexels-chris-wade-ntezicimpa-564856410-29002892.jpg"
                    alt=""
                    fill
                    priority
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 23vw"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/pexels-expressivestanley-1487077.jpg"
                    alt=""
                    fill
                    priority
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 23vw"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="hidden sm:block w-[30%] shrink-0 rotate-3 translate-y-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <div className="grid grid-cols-2 gap-1 h-[300px] md:h-[420px]">
                <div className="relative rounded overflow-hidden">
                  <Image
                    src="/pexels-frank-minjarez-333886454-35568009.jpg"
                    alt=""
                    fill
                    quality={85}
                    className="object-cover object-[65%_50%]"
                    sizes="15vw"
                  />
                </div>
                <div className="relative rounded overflow-hidden">
                  <Image
                    src="/pexels-gantas-5528205.jpg"
                    alt=""
                    fill
                    quality={85}
                    className="object-cover"
                    sizes="15vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom fade into black */}
        <div className="relative h-10 bg-gradient-to-t from-black to-transparent -mt-10 z-20" />
      </section>
    </div>
  );
}
