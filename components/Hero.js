"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/lib/data";

const DURATION = 6500;
const pad = (n) => String(n).padStart(2, "0");

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const total = heroSlides.length;

  const go = useCallback((dir) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), DURATION);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const slide = heroSlides[index];

  return (
    <section
      id="home"
      className="relative h-[92svh] min-h-[560px] w-full overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
      aria-roledescription="carousel"
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-soft ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <div key={i === index ? `on-${index}` : "off"} className={`absolute inset-0 ${i === index ? "kenburns" : ""}`}>
            <Image src={s.src} alt={`${s.kicker} — ${s.title}`} fill priority={i === 0} sizes="100vw" className="object-cover" />
          </div>
        </div>
      ))}

      {/* gradasi lembut agar teks terbaca */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55" />

      {/* keterangan slide */}
      <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1440px] flex-col gap-8 px-5 pb-10 md:flex-row md:items-end md:justify-between md:px-12 md:pb-14">
        <div key={index} className="animate-[fadeUp_1.2s_cubic-bezier(0.22,1,0.36,1)_both] text-white">
          <p className="mb-4 text-[11px] uppercase tracking-label text-white/75">{slide.kicker} · {slide.place}</p>
          <h1 className="font-serif text-[52px] font-light italic leading-[0.95] md:text-[96px]">{slide.title}</h1>
        </div>

        <div className="flex items-center gap-6 text-white">
          <button type="button" onClick={() => go(-1)} aria-label="Foto sebelumnya" className="text-[11px] uppercase tracking-label text-white/70 transition hover:text-white">
            Prev
          </button>
          <p className="font-serif text-xl tabular-nums" aria-live="polite">
            {pad(index + 1)} <span className="mx-2 inline-block w-10 border-t border-white/60 align-middle" /> {pad(total)}
          </p>
          <button type="button" onClick={() => go(1)} aria-label="Foto berikutnya" className="text-[11px] uppercase tracking-label text-white/70 transition hover:text-white">
            Next
          </button>
        </div>
      </div>

      {/* indikator progres */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/20">
        <div key={`${index}-${paused}`} className="h-full bg-white/80" style={{ animation: paused ? "none" : `progress ${DURATION}ms linear forwards`, width: paused ? "0%" : undefined }} />
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        @keyframes progress { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </section>
  );
}
