"use client";

import Image from "next/image";

export default function Home() {
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

        </nav>
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
          <h1 className="font-condensed-head text-[52px] leading-[0.95] md:text-8xl tracking-wide">
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
              href="#"
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
      <section id="about" className="bg-black px-5 md:px-8 py-12 md:py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* LEFT — text, reference editorial style, same content */}
          <div className="text-left">
            <p className="font-serif italic text-2xl md:text-3xl font-light tracking-wide text-[#e8ded0]">
              About
            </p>
            <h2 className="mt-1 font-sans font-black uppercase leading-[0.9] tracking-tight text-[#e8ded0] text-6xl md:text-8xl">
              Abhijith
              <br />
              P.V.
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-[#e8ded0]/70 text-sm">✦</span>
              <span className="h-px w-40 bg-white/20" />
            </div>
            <p className="mt-5 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] leading-relaxed text-white/80">
              Photographer · Visual Creative · Designer
            </p>
            <p className="mt-4 font-serif italic text-lg md:text-xl font-light text-white/80">
              “Turning ideas, moments, and perspectives into visual stories.”
            </p>
            <div className="mt-6 max-w-xl space-y-5 text-[13px] md:text-sm font-light leading-relaxed text-white/60">
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

          {/* RIGHT — arch portrait with beige backdrop + badge */}
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[420px] w-[420px] md:h-[520px] md:w-[520px] rounded-full bg-[#c9b8a3]/25" />
            </div>
            <div className="relative mx-auto h-[420px] w-[280px] md:h-[520px] md:w-[340px] overflow-hidden rounded-t-full rounded-b-2xl border border-dashed border-white/20 bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-white/25 text-white/40">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="absolute bottom-6 right-2 md:right-0 h-20 w-20 rounded-full bg-black border border-white/20 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="h-16 w-16 animate-[spin_12s_linear_infinite]">
                <defs>
                  <path id="about-badge-circle" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                </defs>
                <text className="fill-white/70" style={{ fontSize: "11px", letterSpacing: "2px" }}>
                  <textPath href="#about-badge-circle">
                    ABOUT · ABHIJITH · PHOTOGRAPHY ·
                  </textPath>
                </text>
              </svg>
              <span className="absolute text-white/80 text-sm">✦</span>
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
      <section id="services" className="bg-black px-5 md:px-8 py-12 md:py-16">
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
      <section id="tools" className="bg-black px-5 md:px-8 py-12 md:py-16">
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
      <section id="work" className="bg-black px-5 md:px-8 py-12 md:py-16">
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
                  <span className="font-serif text-6xl md:text-8xl font-light italic leading-none text-white/70 transition-colors group-hover:text-[#E9C46A]">
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
      <section id="testimonials" className="bg-black px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-thin-head text-4xl md:text-6xl font-extralight tracking-wide text-center">
            TESTIMONIALS
          </h2>
          {/* stats + client strip like reference */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.03] px-8 md:px-12 py-8">
            <div className="flex items-center gap-10 md:gap-14">
              {[
                { label: "Weddings", value: "200+" },
                { label: "Portraits", value: "350+" },
                { label: "Events", value: "150+" },
              ].map(({ label, value }) => (
                <div key={label} className="text-left">
                  <p className="text-[11px] font-light tracking-widest text-white/40">
                    {label}
                  </p>
                  <p className="mt-1 text-3xl md:text-4xl font-bold tracking-tight text-white">
                    {value}
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
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                quote: "Abhijith captured our wedding beautifully. Every candid felt natural and timeless.",
                name: "Wedding Client",
              },
              {
                quote: "The portraits were stunning. He made us feel comfortable and the results speak for themselves.",
                name: "Portrait Client",
              },
              {
                quote: "Professional, punctual and creative. Our event coverage was perfect from start to finish.",
                name: "Event Client",
              },
            ].map(({ quote, name }) => (
              <div
                key={name}
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-2 [@media(hover:hover)]:hover:scale-[1.03] [@media(hover:hover)]:hover:border-[#D4AF37]/50 [@media(hover:hover)]:hover:bg-[#D4AF37]/[0.07] [@media(hover:hover)]:hover:shadow-[0_10px_34px_rgba(212,175,55,0.5)] active:-translate-y-2 active:scale-[1.03] active:border-[#D4AF37]/50 active:bg-[#D4AF37]/[0.07] cursor-pointer"
              >
                <p className="font-light leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-[#E9C46A] group-active:text-white">
                  “{quote}”
                </p>
                <p className="mt-6 text-sm font-light tracking-widest text-white/40 transition-colors duration-300 group-hover:text-[#E9C46A]/70 group-active:text-white/70">
                  — {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LET'S WORK TOGETHER ---------- */}
      <section className="bg-black px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-thin-head text-4xl md:text-6xl font-extralight tracking-wide">
            LET&apos;S WORK TOGETHER
          </h2>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-white text-black text-[14px] font-semibold tracking-wide px-10 py-4 rounded-[3px] [@media(hover:hover)]:hover:bg-[#D4AF37] transition-colors"
            >
              SEND AN INQUIRY
            </a>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="bg-black px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[12px] font-light tracking-[0.25em] text-[#E9C46A]">
            ✦ Get In Touch
          </p>
          <h2 className="mt-3 font-thin-head text-4xl md:text-6xl font-extralight tracking-wide">
            CONTACT
          </h2>
          <div className="mt-10 md:mt-12 flex flex-col gap-4">
            {[
              { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
              { label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
              { label: "WhatsApp", value: "Chat with me", href: "#" },
              { label: "Instagram", value: "Follow my work", href: "#" },
            ].map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-6 md:px-8 py-5 transition-all duration-300 [@media(hover:hover)]:hover:border-[#D4AF37]/50 [@media(hover:hover)]:hover:bg-[#D4AF37]/[0.07] active:border-[#D4AF37]/50"
              >
                <span className="text-[12px] font-light tracking-[0.25em] text-white/40 group-hover:text-[#E9C46A] transition-colors">
                  {label.toUpperCase()}
                </span>
                <span className="text-sm md:text-base font-light tracking-wide text-white/80 group-hover:text-white transition-colors">
                  {value}
                </span>
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm font-light tracking-widest text-white/40">
            Kannur, Kerala
          </p>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-black border-t border-white/10 px-5 md:px-8 py-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-6 text-sm font-light tracking-widest text-white/60">
            <a href="#" className="hover:text-[#E9C46A] transition-colors">
              Instagram
            </a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-[#E9C46A] transition-colors">
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
            <a href="tel:+910000000000" className="hover:text-[#E9C46A] transition-colors">
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
