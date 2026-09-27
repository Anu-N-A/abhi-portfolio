"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function LightboxGallery({ photos }: { photos: string[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight")
        setOpen((i) => (i === null ? null : (i + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setOpen((i) =>
          i === null ? null : (i - 1 + photos.length) % photos.length
        );
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, photos.length]);

  return (
    <>
      <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {photos.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpen(i)}
            className="group relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded-lg border border-white/10 transition-all duration-300 [@media(hover:hover)]:hover:border-white/40 [@media(hover:hover)]:hover:shadow-[0_0_60px_rgba(200,200,200,0.4)] active:scale-[0.97] active:border-white/40"
            aria-label={`Enlarge photo ${i + 1}`}
          >
            <Image
              src={src}
              alt=""
              fill
              quality={80}
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2.5 py-1 text-sm leading-none text-white/70">
              ⤢
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="lightbox-fade fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xl text-white/80 transition-colors [@media(hover:hover)]:hover:bg-white [@media(hover:hover)]:hover:text-black active:bg-white active:text-black"
            aria-label="Close viewer"
          >
            ✕
          </button>

          {photos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open! - 1 + photos.length) % photos.length);
                }}
                className="absolute left-2 md:left-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl text-white/80 transition-colors [@media(hover:hover)]:hover:border-white/50 [@media(hover:hover)]:hover:text-white active:text-white"
                aria-label="Previous photo"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open! + 1) % photos.length);
                }}
                className="absolute right-2 md:right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl text-white/80 transition-colors [@media(hover:hover)]:hover:border-white/50 [@media(hover:hover)]:hover:text-white active:text-white"
                aria-label="Next photo"
              >
                →
              </button>
            </>
          )}

          <div
            className="lightbox-pop relative h-[78vh] w-[92vw] max-w-4xl overflow-hidden rounded-xl border border-white/20 shadow-[0_0_100px_rgba(200,200,200,0.22)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={photos[open]}
              src={photos[open]}
              alt=""
              fill
              quality={90}
              className="object-contain bg-black"
              sizes="90vw"
              priority
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-light tracking-widest text-white/60">
            {open + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
