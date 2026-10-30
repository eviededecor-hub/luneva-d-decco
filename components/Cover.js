"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import SafeImage from "./SafeImage";
import { heroSlides } from "@/lib/data";

const DURATION = 6000;
const pad = (n) => String(n).padStart(2, "0");

// Foto sampul utama, di bawah tulisan LUNÉVA.
// Jika heroSlides berisi lebih dari 1 foto, otomatis menjadi slider.
export default function Cover() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const total = heroSlides.length;
  const multi = total > 1;
  const go = useCallback((dir) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    if (!multi || paused) return;
    const t = setTimeout(() => go(1), DURATION);
    return () => clearTimeout(t);
  }, [index, paused, go, multi]);

  const slide = heroSlides[index];

  return (
    <section aria-label="Sampul utama" className="bg-ivory pb-16 md:pb-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <div
          className="relative aspect-[4/5] overflow-hidden bg-sand sm:aspect-[3/2] lg:aspect-[16/8]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (!multi || touchX.current == null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          {heroSlides.map((s, i) => (
            <div
              key={s.src}
              className={`absolute inset-0 transition-opacity duration-[1600ms] ease-soft ${i === index ? "opacity-100" : "opacity-0"}`}
              aria-hidden={i !== index}
            >
              <div key={i === index ? `on-${index}` : "off"} className={`absolute inset-0 ${i === index ? "kenburns" : ""}`}>
                <SafeImage src={s.src} alt={`${s.kicker} — ${s.place}`} fill priority={i === 0} sizes="(min-width: 1440px) 1344px, 100vw" className="object-cover" />
              </div>
            </div>
          ))}
          {multi && (
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/30">
              <div key={`${index}-${paused}`} className="h-full bg-white" style={{ animation: paused ? "none" : `progress ${DURATION}ms linear forwards`, width: paused ? "0%" : undefined }} />
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-5">
          <p key={index} className="eyebrow text-ink/70" style={{ animation: "fadeUp .9s cubic-bezier(0.22,1,0.36,1) both" }}>
            <span className="text-golddeep">Featured</span> · {slide.kicker} · {slide.place}
          </p>
          <div className="flex items-center gap-5">
            {multi && (
              <>
                <button type="button" onClick={() => go(-1)} aria-label="Foto sebelumnya" className="text-ink/50 transition hover:text-ink">←</button>
                <p className="whitespace-nowrap font-serif text-lg tabular-nums text-ink" aria-live="polite">
                  {pad(index + 1)} <span className="mx-1.5 inline-block w-7 border-t border-gold align-middle" /> {pad(total)}
                </p>
                <button type="button" onClick={() => go(1)} aria-label="Foto berikutnya" className="text-ink/50 transition hover:text-ink">→</button>
              </>
            )}
            <a href="#portfolio" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-ink/70 transition-colors hover:text-ink">
              View portfolio <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
