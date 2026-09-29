"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollEffects from "./components/ScrollEffects";

export default function Home() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 80;
      setScrolled(past);
      if (past) setMenuOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${contactName}`);
    const body = encodeURIComponent(`${contactMessage}\n\n— ${contactName} (${contactEmail})`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-clip">
      <ScrollEffects />
      {/* ---------- NAVBAR ---------- */}
      <header className="sticky top-0 z-50 bg-black border-b border-white/10">
        <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-5 md:px-8 h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="Home">
            <Image
              src="/logo.png"
              alt="AJ Photography logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
              priority
            />
          </a>
          {/* Right links — full menu at the top, HOME only when scrolled */}
          {!scrolled ? (
            <div className="hidden lg:flex items-center gap-8 text-[13px] font-light tracking-[0.2em]">
              {[
                { label: "WORK", href: "#work" },
                { label: "SERVICES", href: "#services" },
                { label: "TOOLS", href: "#tools" },
                { label: "REVIEWS", href: "#testimonials" },
                { label: "CONTACT", href: "#contact" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/60 [@media(hover:hover)]:hover:text-[#E9C46A] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          ) : (
            <a
              href="#hero"
              className="hidden lg:block text-[13px] font-light tracking-[0.2em] text-white/60 [@media(hover:hover)]:hover:text-[#E9C46A] transition-colors"
            >
              HOME
            </a>
          )}

          {/* Mobile hamburger — visible only at the top */}
          {!scrolled ? (
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                {menuOpen ? <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
              </svg>
            </button>
          ) : (
            <a
              href="#hero"
              className="lg:hidden text-sm font-light tracking-[0.2em] text-white/70 active:text-[#E9C46A]"
            >
              HOME
            </a>
          )}
        </nav>

        {/* Mobile menu */}
        {menuOpen && !scrolled && (
          <div className="lg:hidden border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-sm font-light tracking-[0.2em] bg-black">
            {[
              { label: "WORK", href: "#work" },
              { label: "SERVICES", href: "#services" },
              { label: "TOOLS", href: "#tools" },
              { label: "REVIEWS", href: "#testimonials" },
              { label: "CONTACT", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-white/70 active:text-[#E9C46A]"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ---------- HERO ---------- */}
      <section id="hero" className="relative bg-black text-white overflow-hidden">
        {/* warm dark background */}
        <div className="absolute inset-0">
          <Image
            src="/pexels-asim-razan-32997.jpg"
            alt=""
            fill
            priority
            quality={85}
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
        </div>

        <div className="relative z-10 pt-20 md:pt-28 pb-0 px-5 text-center">
          <h1 className="font-condensed-head text-[13vw] leading-[0.95] md:text-8xl tracking-wide text-balance">
            CAPTURING MOMENTS
            <br />
            <span className="text-white/50">THAT LAST FOREVER...</span>
          </h1>
          <p className="mt-6 text-base md:text-xl font-light italic tracking-wide text-white/60 max-w-2xl mx-auto">
            Timeless weddings, heartfelt portraits & unforgettable events —
            crafted with light, care and soul.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#work"
              className="inline-block bg-white text-black text-[14px] font-semibold tracking-wide px-10 py-4 rounded-[3px] [@media(hover:hover)]:hover:bg-[#D4AF37] transition-colors"
              >
                View My Work
            </a>
            <a
              href="#contact"
              className="inline-block border border-white/40 text-white text-[14px] font-semibold tracking-wide px-10 py-4 rounded-[3px] [@media(hover:hover)]:hover:bg-[#E9C46A]/10 [@media(hover:hover)]:hover:border-[#E9C46A]/60 [@media(hover:hover)]:hover:text-amber-100 transition-colors"
            >
              Book a Session
            </a>
          </div>

          {/* Template cards — Squarespace style, your photos */}
          <div className="mt-32 md:mt-40 flex items-end justify-center gap-6 md:gap-10 max-w-[1600px] mx-auto">
            {/* LEFT CARD */}
            <div className="hidden sm:block w-[30%] shrink-0 -rotate-3 translate-y-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black/60 transition-all duration-300 [@media(hover:hover)]:hover:border-[#D4AF37]/60 [@media(hover:hover)]:hover:shadow-[0_0_36px_rgba(212,175,55,0.55)] active:border-[#D4AF37]/60">
              <div className="relative h-[300px] md:h-[420px]">
                <Image
                  src="/wedding/upper card cover.jpg"
                  alt=""
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="30vw"
                />
              </div>
            </div>

            {/* CENTER CARD */}
            <div className="w-full sm:w-[46%] shrink-0 z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 transition-all duration-300 [@media(hover:hover)]:hover:border-[#D4AF37]/60 [@media(hover:hover)]:hover:shadow-[0_0_36px_rgba(212,175,55,0.55)] active:border-[#D4AF37]/60">
              <div className="grid grid-cols-2 h-[340px] md:h-[460px]">
                <div className="relative">
                  <Image
                    src="/events/upper card cover.jpg"
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
                    src="/nature/upper card cover.jpg"
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
            <div className="hidden sm:block w-[30%] shrink-0 rotate-3 translate-y-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black/60 transition-all duration-300 [@media(hover:hover)]:hover:border-[#D4AF37]/60 [@media(hover:hover)]:hover:shadow-[0_0_36px_rgba(212,175,55,0.55)] active:border-[#D4AF37]/60">
              <div className="grid grid-cols-2 gap-1 h-[300px] md:h-[420px]">
                <div className="relative rounded overflow-hidden">
                  <Image
                    src="/wedding/upper card cover (2).jpg"
                    alt=""
                    fill
                    quality={85}
                    className="object-cover object-[65%_50%]"
                    sizes="15vw"
                  />
                </div>
                <div className="relative rounded overflow-hidden">
                  <Image
                    src="/portraits/pexels-gantas-5528205.jpg"
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

      {/* ---------- PHOTOGRAPHY BANNER ---------- */}
      <section className="bg-black overflow-hidden pt-6 md:pt-10 pb-10 md:pb-14">
        <h2
          aria-hidden
          className="whitespace-nowrap text-center font-extrabold leading-none tracking-tight text-[11vw] scale-y-[1.85] -translate-y-4 select-none"
        >
          <span className="text-[#8f8f8f]">PHOTO</span>
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)" }}
          >
            GRAPHY
          </span>
        </h2>
        <div className="mx-auto -mt-[4vw] flex max-w-[1400px] items-start justify-center gap-3 md:gap-5 px-4">
          {[
            {
              src: "/portraits/pexels-laurachouette-28781680.jpg",
              tilt: "-rotate-3 translate-y-6",
              hide: "",
            },
            {
              src: "/portraits/pexels-beccacorreiaph-31419666.jpg",
              tilt: "rotate-0",
              hide: "",
            },
            {
              src: "/portraits/pexels-eyesofmuk-32544082.jpg",
              tilt: "rotate-2",
              hide: "hidden sm:block",
            },
            {
              src: "/portraits/pexels-tanya-gupta-2440711-4066947.jpg",
              tilt: "-rotate-2 translate-y-4",
              hide: "hidden sm:block",
            },
            {
              src: "/portraits/pexels-suguna-14090740.jpg",
              tilt: "rotate-3 translate-y-8",
              hide: "hidden md:block",
            },
          ].map(({ src, tilt, hide }) => (
            <div
              key={src}
              className={`${tilt} ${hide} relative w-[46%] sm:w-[30%] md:w-[19%] shrink-0 overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-black/60 transition-all duration-300 [@media(hover:hover)]:hover:border-[#D4AF37]/60 [@media(hover:hover)]:hover:shadow-[0_0_36px_rgba(212,175,55,0.55)] active:border-[#D4AF37]/60`}
            >
              <div className="relative h-[280px] md:h-[400px]">
                <Image
                  src={src}
                  alt=""
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 640px) 46vw, (max-width: 768px) 30vw, 19vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section id="about" data-reveal className="bg-black px-5 md:px-8 py-12 md:py-16 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          {/* text, reference editorial style, same content */}
          <div className="text-center">
            <p className="font-serif italic text-2xl md:text-3xl font-light tracking-wide text-[#e8ded0]">
              About
            </p>
            <h2 className="mt-1 font-sans font-black uppercase leading-[0.9] tracking-tight text-[#e8ded0] text-6xl md:text-8xl">
              Abhijith
              <br />
              P.V.
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="text-[#e8ded0]/70 text-sm">✦</span>
              <span className="h-px w-40 bg-white/20" />
            </div>
            <p className="mt-5 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] leading-relaxed text-white/80">
              Photographer · Visual Creative · Designer
            </p>
            <p className="mt-4 font-serif italic text-lg md:text-xl font-light text-white/80">
              “Turning ideas, moments, and perspectives into visual stories.”
            </p>
            <div className="mt-6 max-w-xl mx-auto space-y-5 text-[13px] md:text-sm font-light leading-relaxed text-white/60">
              <p>
                I’m Abhijith, a visual creative from Kannur with a passion for
                photography, design, and storytelling.
              </p>
              <p>
                I’m inspired by music, pop culture, literature, and the world
                around me. I enjoy finding connections between different ideas
                and turning them into meaningful visual experiences.
              </p>
              <p>
                My work is driven by curiosity, experimentation, and attention to
                detail — whether I’m capturing a moment through photography,
                developing a visual concept, or creating something from scratch.
              </p>
              <p>
                For me, every project is an opportunity to explore a new
                perspective, tell a story, and create something that connects
                with people.
              </p>
            </div>
            <p className="mt-8 font-serif italic text-xl text-white/40">
              Abhijith
            </p>
          </div>
          <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60 transition-all duration-300 [@media(hover:hover)]:hover:border-[#D4AF37]/60 [@media(hover:hover)]:hover:shadow-[0_0_36px_rgba(212,175,55,0.55)] active:border-[#D4AF37]/60">
            <div className="relative h-[300px] md:h-[420px]">
              <Image
                src="/about-camera.jpg.jpg"
                alt="Abhijith holding his camera"
                fill
                quality={85}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </div>
        </div>

        {/* bottom strip like reference */}
        <div className="max-w-6xl mx-auto mt-14 flex items-center justify-between bg-[#111] border border-white/10 rounded-sm px-5 py-4">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70">
            Selected Work
          </span>
          <a
            href="#work"
            className="text-[12px] font-light uppercase tracking-[0.2em] text-white/50 [@media(hover:hover)]:hover:text-[#E9C46A] transition-colors"
          >
            View all projects
          </a>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section id="services" data-reveal className="bg-black px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-thin-head text-4xl md:text-6xl font-extralight tracking-wide text-center">
            SERVICES
          </h2>
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                name: "Wedding",
                slug: "wedding",
                desc: "Full-day coverage, candid moments, rituals and portraits.",
              },
              {
                name: "Portrait",
                slug: "portrait",
                desc: "Individual, couple and creative portraits in natural light.",
              },
              {
                name: "Events",
                slug: "events",
                desc: "Corporate, cultural and private events covered end to end.",
              },
            ].map(({ name, slug, desc }) => (
              <a
                key={slug}
                href={`/work/${slug}`}
                className="group rounded-xl border border-white/10 p-8 transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-2 [@media(hover:hover)]:hover:scale-[1.03] [@media(hover:hover)]:hover:bg-[#D4AF37]/[0.07] [@media(hover:hover)]:hover:border-[#D4AF37]/50 [@media(hover:hover)]:hover:shadow-[0_0_32px_rgba(212,175,55,0.5)] active:-translate-y-2 active:scale-[1.03] active:border-[#D4AF37]/50"
              >
                <h3 className="font-thin-head text-2xl md:text-3xl font-extralight tracking-wide text-white/80 group-hover:text-[#E9C46A] transition-colors">
                  {name}
                </h3>
                <p className="mt-4 text-sm md:text-base font-light leading-relaxed text-white/50">
                  {desc}
                </p>
                <span className="mt-6 inline-block text-sm font-light tracking-wide text-white/40 group-hover:text-[#E9C46A] transition-colors">
                  View work
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* ---------- FAVORITE TOOLS ---------- */}
      <section id="tools" data-reveal className="bg-black px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[12px] font-light tracking-[0.25em] text-[#E9C46A]">
            ✦ My Favorite Tools
          </p>
          <h2 className="mt-3 font-thin-head text-4xl md:text-6xl font-extralight tracking-wide">
            <span className="text-[#D4AF37]">Exploring the Tools</span>
            <br />
            <span className="text-white">Behind My Designs</span>
          </h2>
          <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {[
              { abbr: "Lr", name: "Lightroom", pct: "95%", color: "#31A8FF" },
              { abbr: "Ps", name: "Photoshop", pct: "92%", color: "#7AB8FF" },
              { abbr: "Pr", name: "Premiere Pro", pct: "88%", color: "#9999FF" },
              { abbr: "Ae", name: "After Effects", pct: "85%", color: "#D291FF" },
              { abbr: "Ai", name: "Illustrator", pct: "90%", color: "#FF9A00" },
              { abbr: "Au", name: "Audition", pct: "82%", color: "#FF5544" },
            ].map(({ abbr, name, pct, color }) => (
              <div
                key={name}
                className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-4 py-8 transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-2 [@media(hover:hover)]:hover:border-[#D4AF37]/60 [@media(hover:hover)]:hover:shadow-[0_0_32px_rgba(212,175,55,0.5)] active:-translate-y-2 active:border-[#D4AF37]/60"
              >
                <span
                  className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg text-sm font-bold"
                  style={{ backgroundColor: `${color}22`, color }}
                >
                  {abbr}
                </span>
                <p className="mt-4 text-xl font-bold tracking-tight text-white">
                  {pct}
                </p>
                <p className="mt-1 text-[11px] font-light tracking-widest text-white/50">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---------- EXPLORE MY WORK ---------- */}
      <section id="work" data-reveal className="bg-black px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-thin-head text-4xl md:text-6xl font-extralight tracking-wide text-center">
            EXPLORE MY WORK
          </h2>
          <div className="mt-12 md:mt-16 border-t border-white/10">
            {[
              { name: "Wedding", slug: "wedding" },
              { name: "Portrait", slug: "portrait" },
              { name: "Events", slug: "events" },
              { name: "Fashion", slug: "fashion" },
              { name: "Nature", slug: "nature" },
            ].map(({ name, slug }, i) => (
              <a
                key={slug}
                href={`/work/${slug}`}
                className="group flex items-center justify-between border-b border-white/10 py-6 md:py-8 px-2 [@media(hover:hover)]:hover:bg-[#E9C46A]/[0.05] transition-colors"
              >
                <span className="flex items-center gap-4 md:gap-6">
                  <span className="font-serif text-5xl sm:text-6xl md:text-8xl font-light italic leading-none text-white/70 transition-colors group-hover:text-[#E9C46A]">
                    0{i + 1}
                  </span>
                  <span className="font-thin-head text-2xl md:text-4xl font-extralight tracking-wide text-white/70 group-hover:text-[#E9C46A] transition-colors">
                    {name}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* ---------- TESTIMONIALS ---------- */}
      <section id="testimonials" data-reveal className="bg-black px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-thin-head text-4xl md:text-6xl font-extralight tracking-wide text-center">
            TESTIMONIALS
          </h2>
          {/* stats + client strip like reference */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.03] px-8 md:px-12 py-8">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-14">
              {[
                { label: "Weddings", end: 200 },
                { label: "Portraits", end: 350 },
                { label: "Events", end: 150 },
              ].map(({ label, end }) => (
                <div key={label} className="text-left">
                  <p className="text-[11px] font-light tracking-widest text-white/40">
                    {label}
                  </p>
                  <p className="mt-1 text-3xl md:text-4xl font-bold tracking-tight text-white">
                    <span data-countup={end} data-suffix="+">
                      0+
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-light tracking-wide text-white/70">
                Rated <span className="font-bold text-white">4.9 ★</span> by
                clients
              </p>
              <div className="mt-3 flex items-center justify-center md:justify-end">
                {[
                  "/portraits/pexels-beccacorreiaph-31419666.jpg",
                  "/portraits/pexels-eyesofmuk-32544082.jpg",
                  "/portraits/pexels-felicity-tai-7951886.jpg",
                  "/portraits/pexels-suguna-14090740.jpg",
                  "/portraits/pexels-tanya-gupta-2440711-4066947.jpg",
                ].map((src, i) => (
                  <span
                    key={src}
                    className="review-avatar relative h-10 w-10 overflow-hidden rounded-full border-2 border-black transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-2 [@media(hover:hover)]:hover:scale-125 [@media(hover:hover)]:hover:border-[#E9C46A]/70 [@media(hover:hover)]:hover:shadow-[0_8px_20px_rgba(212,175,55,0.4)] active:-translate-y-2 active:scale-125 active:border-[#E9C46A]/70 cursor-pointer"
                    style={{
                      marginLeft: i === 0 ? 0 : -12,
                      zIndex: 5 - i,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  >
                    <Image
                      src={src}
                      alt="Happy client"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 overflow-hidden marquee-mask">
            <div className="flex w-max gap-4 md:gap-6 animate-marquee [@media(hover:hover)]:hover:[animation-play-state:paused]">
              {[
                {
                  quote: "Abhijith captured our wedding beautifully. Every candid felt natural and timeless.",
                  name: "Ebin Sebastan",
                },
                {
                  quote: "The portraits were stunning. He made us feel comfortable and the results speak for themselves.",
                  name: "Anu",
                },
                {
                  quote: "Professional, punctual and creative. Our event coverage was perfect from start to finish.",
                  name: "Vinu Antony",
                },
                {
                  quote: "The pre-wedding shoot was magical. Every frame looks like a movie still.",
                  name: "Sneha & Arjun",
                },
                {
                  quote: "Great eye for detail and lighting. Our family portraits are treasures now.",
                  name: "Rahul Menon",
                },
                {
                  quote: "Friendly, patient and truly talented. Highly recommended for any occasion.",
                  name: "Divya Nair",
                },
                {
                  quote: "Abhijith captured our wedding beautifully. Every candid felt natural and timeless.",
                  name: "Ebin Sebastan",
                },
                {
                  quote: "The portraits were stunning. He made us feel comfortable and the results speak for themselves.",
                  name: "Anu",
                },
                {
                  quote: "Professional, punctual and creative. Our event coverage was perfect from start to finish.",
                  name: "Vinu Antony",
                },
                {
                  quote: "The pre-wedding shoot was magical. Every frame looks like a movie still.",
                  name: "Sneha & Arjun",
                },
                {
                  quote: "Great eye for detail and lighting. Our family portraits are treasures now.",
                  name: "Rahul Menon",
                },
                {
                  quote: "Friendly, patient and truly talented. Highly recommended for any occasion.",
                  name: "Divya Nair",
                },
              ].map(({ quote, name }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="w-[300px] md:w-[360px] shrink-0 rounded-xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-300 [@media(hover:hover)]:hover:border-[#D4AF37]/50 [@media(hover:hover)]:hover:bg-[#D4AF37]/[0.07]"
                >
                  <p className="font-light leading-relaxed text-white/70">
                    “{quote}”
                  </p>
                  <p className="mt-6 text-sm font-light tracking-widest text-white/40">
                    — {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LET'S WORK TOGETHER ---------- */}
      <section data-reveal className="bg-black px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto rounded-[2rem] border border-[#D4AF37]/40 bg-gradient-to-b from-[#D4AF37]/[0.12] via-white/[0.03] to-transparent px-6 md:px-12 py-14 md:py-20 text-center shadow-[0_0_60px_rgba(212,175,55,0.25)]">
          <p className="text-[12px] font-light tracking-[0.25em] text-[#E9C46A]">
            ✦ Have An Idea In Mind
          </p>
          <h2 className="mt-3 font-thin-head text-4xl md:text-6xl font-extralight tracking-wide">
            LET&apos;S WORK TOGETHER
          </h2>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-[#D4AF37] text-black text-[14px] font-semibold tracking-wide px-10 py-4 rounded-[3px] [@media(hover:hover)]:hover:bg-[#E9C46A] transition-colors shadow-[0_0_32px_rgba(212,175,55,0.45)]"
            >
              SEND AN INQUIRY
            </a>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" data-reveal className="relative bg-black px-5 md:px-8 py-12 md:py-16 overflow-hidden">
        {/* eclipse glow */}
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[80%] max-w-3xl -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-[#D4AF37]/50 via-white/40 to-sky-400/50 blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[80%] max-w-3xl -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-sky-400/40 via-white/30 to-[#D4AF37]/50 blur-2xl" />
        <div className="relative max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#0b0b0b] px-6 md:px-12 py-10 md:py-14 shadow-[0_0_60px_rgba(212,175,55,0.15)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* LEFT — form */}
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-7">
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Your Name"
                className="bg-transparent border-b border-white/20 focus:border-[#D4AF37] outline-none py-3 text-sm font-light tracking-wide text-white placeholder:text-white/40 transition-colors"
              />
              <input
                type="email"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Your Email"
                className="bg-transparent border-b border-white/20 focus:border-[#D4AF37] outline-none py-3 text-sm font-light tracking-wide text-white placeholder:text-white/40 transition-colors"
              />
              <textarea
                required
                rows={3}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Share your thoughts"
                className="bg-transparent border-b border-white/20 focus:border-[#D4AF37] outline-none py-3 text-sm font-light tracking-wide text-white placeholder:text-white/40 transition-colors resize-none"
              />
              <button
                type="submit"
                className="mt-2 self-start bg-white text-black text-[12px] font-semibold tracking-[0.2em] px-8 py-4 rounded-[3px] shadow-[0_0_28px_rgba(255,255,255,0.35)] [@media(hover:hover)]:hover:bg-[#D4AF37] [@media(hover:hover)]:hover:shadow-[0_0_32px_rgba(212,175,55,0.55)] active:bg-[#D4AF37] transition-all"
              >
                SHARE YOUR FEEDBACK
              </button>
            </form>
            {/* RIGHT — heading */}
            <div className="text-center md:text-left">
              <h2
                className="font-didone-head text-5xl md:text-7xl font-normal leading-[1.05]"
                style={{
                  textShadow:
                    "-2px 0 0 rgba(255,0,80,0.55), 2px 0 0 rgba(0,180,255,0.55)",
                }}
              >
                Contact
                <br />
                <span className="inline-block border-b-2 border-[#D4AF37] pb-1">
                  Us
                </span>
              </h2>
              <p className="mt-6 text-sm font-light leading-relaxed text-white/50 max-w-xs mx-auto md:mx-0">
                It is very important for us to keep in touch with you, so we
                are always ready to answer any question that interests you.
                Shoot!
              </p>
            </div>
          </div>
          {/* bottom info bar */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center">
            <div>
              <p className="text-[11px] font-light tracking-[0.25em] text-white/35">
                PHONE NO
              </p>
              <a href="tel:+919747164982" className="mt-1 block text-sm font-light text-white/70 hover:text-[#E9C46A] transition-colors">
                +91 97471 64982
              </a>
            </div>
            <div>
              <p className="text-[11px] font-light tracking-[0.25em] text-white/35">
                ADDRESS
              </p>
              <p className="mt-1 text-sm font-light text-white/70">
                Kannur, Kerala
              </p>
            </div>
            <div>
              <p className="text-[11px] font-light tracking-[0.25em] text-white/35">
                EMAIL
              </p>
              <a href="mailto:hello@example.com" className="mt-1 block text-sm font-light text-white/70 hover:text-[#E9C46A] transition-colors">
                hello@example.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-black border-t border-white/10 px-5 md:px-8 py-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-6 text-sm font-light tracking-widest text-white/60">
            <a href="https://www.instagram.com/photojoint_creations?stkn=cG5qN2ducTZwMG0=" target="_blank" rel="noopener noreferrer" className="hover:text-[#E9C46A] transition-colors">
              Instagram
            </a>
            <span className="text-white/20">|</span>
            <a href="https://wa.me/919747164982" target="_blank" rel="noopener noreferrer" className="hover:text-[#E9C46A] transition-colors">
              WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-light tracking-widest text-white/60">
            <a
              href="mailto:hello@example.com"
              className="hover:text-[#E9C46A] transition-colors"
            >
              Email
            </a>
            <span className="text-white/20">|</span>
            <a href="tel:+919747164982" className="hover:text-[#E9C46A] transition-colors">
              Phone
            </a>
            <span className="text-white/20">|</span>
            <span className="text-white/40">Kannur, Kerala</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
