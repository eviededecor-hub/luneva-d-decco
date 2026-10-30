"use client";
import { useState } from "react";
import SafeImage from "./SafeImage";
import { categories, site, works } from "@/lib/data";

export default function Works() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? works : works.filter((w) => w.cat === active);

  return (
    <section id="portfolio" className="bg-night py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        {/* Judul bagian dengan garis panjang */}
        <div className="flex items-center gap-6">
          <h2 className="eyebrow shrink-0 text-goldlight">Selected Works</h2>
          <span className="h-px flex-1 bg-ivory/15" />
          <a
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="group hidden shrink-0 items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-ivory/70 transition-colors hover:text-ivory sm:flex"
          >
            View all works
            <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Filter kategori */}
        <div className="-mx-5 mt-8 overflow-x-auto px-5 md:mx-0 md:px-0" role="tablist" aria-label="Kategori portofolio">
          <ul className="flex w-max gap-7">
            {categories.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === c}
                  onClick={() => setActive(c)}
                  className={`whitespace-nowrap border-b pb-1.5 text-[11px] uppercase tracking-[0.22em] transition-colors duration-500 ${
                    active === c ? "border-goldlight text-ivory" : "border-transparent text-ivory/45 hover:text-ivory/80"
                  }`}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div key={active} className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6 md:gap-y-14">
          {list.map((w, i) => (
            <article key={w.title} className="group" style={{ animation: `fadeUp 900ms cubic-bezier(0.22,1,0.36,1) ${i * 70}ms both` }}>
              <div className="relative aspect-[3/4] overflow-hidden border border-ivory/15 bg-[#26231f]">
                <SafeImage
                  src={w.src}
                  alt={`${w.title} — ${w.cat}, ${w.place}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-night/0 transition-colors duration-700 group-hover:bg-night/30" />
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-[12px] font-normal uppercase tracking-[0.24em] text-ivory md:text-[13px]">{w.title}</h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.26em] text-goldlight">{w.cat}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.26em] text-ivory/45">{w.place}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
