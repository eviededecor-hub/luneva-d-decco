"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import SafeImage from "./SafeImage";
import { Star } from "./Icons";
import { heroSlides, site } from "@/lib/data";

const DURATION = 6000;
const pad = (n) => String(n).padStart(2, "0");

function Badge({ className = "" }) {
  return (
    <div className={`aspect-square ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-[spin_30s_linear_infinite] text-golddeep">
        <defs>
          <path id="badge-ring" d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0" />
        </defs>
        <text fontSize="7.4" fill="currentColor" style={{ fontFamily: "var(--font-sans), sans-serif", letterSpacing: "0.2em" }}>
          <textPath href="#badge-ring" textLength="292" lengthAdjust="spacing">
            WEDDING DECORATION · LAMPUNG ·
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-serif text-[2.6em] font-light text-gold">L</span>
      <Star className="absolute bottom-[22%] left-[24%] h-[8%] w-[8%] text-gold" />
    </div>
  );
}

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
    <section id="home" className="silk relative overflow-hidden pt-20 md:pt-24">
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="flex items-center justify-between pt-4 text-ink/80">
          <p className="eyebrow">Wedding Decoration<span className="hidden sm:inline"> Studio</span></p>
          <p className="eyebrow flex items-center gap-2">
            <Star className="h-3 w-3 text-gold" /> Lampung
          </p>
        </div>

        {/* Wordmark raksasa */}
        <h1
          className="mt-3 select-none text-center font-serif font-light uppercase leading-[0.8] tracking-[-0.03em] text-ink"
          style={{ fontSize: "clamp(84px, 23.5vw, 340px)" }}
        >
          Lunéva
        </h1>

        <div className="relative grid gap-10 pb-16 md:grid-cols-12 md:gap-8 md:pb-24">
          {/* Teks kiri */}
          <div className="order-2 flex flex-col gap-6 md:order-1 md:col-span-4 md:self-end md:pb-4">
            <p className="eyebrow text-golddeep">Wedding</p>
            <h2 className="text-[26px] font-light uppercase leading-[1.3] tracking-[0.14em] text-ink md:text-[30px]">
              Decoration
              <br />& Styling
            </h2>
            <span className="h-px w-14 bg-gold" />
            <p className="max-w-[34ch] text-[14px] font-light leading-relaxed text-muted">
              Ceremonies and receptions designed around texture, natural light and a few chosen flowers, so the room
              feels like the two of you.
            </p>
            <p className="font-serif text-[48px] font-light uppercase leading-[0.9] text-gold md:text-[60px]">{site.brandSub}</p>
          </div>

          {/* Foto utama (slider) — menimpa bagian bawah wordmark */}
          <div
            className="relative z-10 order-1 -mt-[2vw] md:order-2 md:col-span-5 md:col-start-6 md:-mt-[6vw]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current == null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-sand" aria-roledescription="carousel">
              {heroSlides.map((s, i) => (
                <div
                  key={s.src}
                  className={`absolute inset-0 transition-opacity duration-[1600ms] ease-soft ${i === index ? "opacity-100" : "opacity-0"}`}
                  aria-hidden={i !== index}
                >
                  <div key={i === index ? `on-${index}` : "off"} className={`absolute inset-0 ${i === index ? "kenburns" : ""}`}>
                    <SafeImage src={s.src} alt={`${s.kicker} — ${s.place}`} fill priority={i === 0} sizes="(min-width: 768px) 42vw, 100vw" className="object-cover" />
                  </div>
                </div>
              ))}
              <div className="absolute inset-x-0 bottom-0 h-px bg-white/30">
                <div key={`${index}-${paused}`} className="h-full bg-white" style={{ animation: paused ? "none" : `progress ${DURATION}ms linear forwards`, width: paused ? "0%" : undefined }} />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p key={index} className="eyebrow text-ink/70" style={{ animation: "fadeUp .9s cubic-bezier(0.22,1,0.36,1) both" }}>
                {slide.kicker} · {slide.place}
              </p>
              <div className="flex items-center gap-4">
                <button type="button" onClick={() => go(-1)} aria-label="Foto sebelumnya" className="text-ink/50 transition hover:text-ink">←</button>
                <p className="whitespace-nowrap font-serif text-lg tabular-nums text-ink" aria-live="polite">
                  {pad(index + 1)} <span className="mx-1.5 inline-block w-7 border-t border-gold align-middle" /> {pad(total)}
                </p>
                <button type="button" onClick={() => go(1)} aria-label="Foto berikutnya" className="text-ink/50 transition hover:text-ink">→</button>
              </div>
            </div>

            <Badge className="absolute right-3 top-3 w-24 rounded-full bg-ivory/90 text-[11px] backdrop-blur-sm md:hidden" />
          </div>

          {/* Lencana bulat */}
          <div className="order-3 hidden md:col-span-2 md:col-start-11 md:flex md:items-center md:justify-center">
            <Badge className="relative w-36 text-[15px] lg:w-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
