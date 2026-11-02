"use client";
import { useEffect, useState } from "react";
import SafeImage from "./SafeImage";
import { editorial, site } from "@/lib/data";

// Satu kolom slideshow: foto-foto ditumpuk, yang aktif tampil dengan efek pudar.
function HeroColumn({ images, interval, delay, sizes, label }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    // Hormati pengunjung yang mematikan animasi di perangkatnya
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer;
    const next = () => {
      // jeda saat tab tidak dilihat, agar tidak boros baterai
      if (!document.hidden) setIndex((i) => (i + 1) % images.length);
      timer = setTimeout(next, interval);
    };
    // kolom mulai berganti bergiliran (kiri → tengah → kanan)
    timer = setTimeout(next, interval + delay);
    return () => clearTimeout(timer);
  }, [images.length, interval, delay]);

  return (
    <div className="relative overflow-hidden bg-sand" aria-roledescription="carousel" aria-label={label}>
      {images.map((src, i) => {
        const active = i === index;
        return (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${active ? "opacity-100" : "opacity-0"}`}
            aria-hidden={!active}
          >
            <div className={`absolute inset-0 transition-transform duration-[7000ms] ease-out ${active ? "scale-100" : "scale-[1.06]"}`}>
              <SafeImage
                src={src}
                alt={`${label} — foto ${i + 1}`}
                fill
                priority={i === 0}
                sizes={sizes}
                className="object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const { left, middle, right } = editorial.heroColumns;
  const interval = editorial.heroInterval || 5000;
  const step = Math.round(interval / 3); // jarak antar kolom berganti

  return (
    <section id="home" className="panel scroll-mt-28 px-3 pb-6 pt-[92px] md:px-10 md:pb-10 md:pt-[112px]">
      {/* Triptych: tiga kolom foto vertikal berdampingan dengan garis tipis */}
      <div className="grid h-[440px] grid-cols-[1fr_2fr_1fr] gap-[5px] border-y border-ink/60 py-[5px] sm:h-[560px] md:h-[min(76vh,680px)]">
        <HeroColumn images={left} interval={interval} delay={0} sizes="25vw" label="Pengantin" />
        <HeroColumn images={middle} interval={interval} delay={step} sizes="50vw" label="Pasangan pengantin" />
        <HeroColumn images={right} interval={interval} delay={step * 2} sizes="25vw" label="Detail dekorasi" />
      </div>
      <div className="mt-[3px] border-t border-ink/60" />

      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-ink/70 md:mt-6 md:text-[11px]">
        <span>Wedding decoration</span>
        <span className="font-script text-[26px] normal-case tracking-normal text-wine md:text-[30px]">since Evie</span>
        <span className="text-right">{site.city}</span>
      </div>
    </section>
  );
}
