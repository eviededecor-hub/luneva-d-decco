"use client";
import { useState } from "react";
import SafeImage from "./SafeImage";
import AlbumViewer from "./AlbumViewer";
import { categories, editorial, works } from "@/lib/data";

const FIRST = 9; // jumlah album yang tampil sebelum tombol "View all works"

export default function Works() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(null);
  const [all, setAll] = useState(false);
  const filtered = active === "All" ? works : works.filter((w) => w.cat === active);
  const list = all ? filtered : filtered.slice(0, FIRST);
  const cats = categories.filter((c) => c === "All" || works.some((w) => w.cat === c));

  return (
    <section id="portfolio" className="panel scroll-mt-28 overflow-hidden">
      {/* Pita marun dengan foto dan judul besar */}
      <div className="relative h-[230px] bg-wine sm:h-[320px] md:h-[400px]">
        <SafeImage src={editorial.portfolioBand} alt="" fill sizes="1280px" className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-wine/50 via-wine/30 to-wine/70" />
      </div>
      <h2
        className="relative -mt-[0.5em] text-center font-serif font-normal uppercase leading-[0.8] tracking-[-0.01em] text-rose"
        style={{ fontSize: "clamp(56px, 13.5vw, 172px)" }}
      >
        Portfolio
      </h2>

      <div className="px-5 pb-16 pt-12 md:px-12 md:pb-24 md:pt-20">
        {/* Judul koleksi dengan kata kursif */}
        <div className="grid gap-8 md:grid-cols-12">
          <h3 className="font-serif text-[clamp(34px,5vw,60px)] font-normal uppercase leading-[0.95] text-ink md:col-span-7">
            A collection
            <br />
            of{" "}
            <span className="relative -ml-1 align-baseline font-script text-[1.15em] normal-case leading-none text-wine">meaningful</span>
            <br />
            moments
          </h3>
          <p className="self-start text-justify text-[13px] font-light leading-relaxed text-ink/80 md:col-span-4 md:col-start-9">
            {editorial.portfolioIntro}
          </p>
        </div>

        {cats.length > 2 && (
          <div className="-mx-5 mt-12 overflow-x-auto px-5 md:mx-0 md:px-0" role="tablist" aria-label="Kategori portofolio">
            <ul className="flex w-max gap-7">
              {cats.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active === c}
                    onClick={() => {
                      setActive(c);
                      setAll(false);
                    }}
                    className={`whitespace-nowrap border-b pb-1.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
                      active === c ? "border-wine text-wine" : "border-transparent text-ink/45 hover:text-ink/80"
                    }`}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Grid 3 kolom, foto tegak 3:4, keterangan di bawah */}
        <div key={active} className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-14">
          {list.map((w, i) => (
            <article
              key={w.title}
              className="group cursor-pointer"
              style={{ animation: `fadeUp 900ms cubic-bezier(0.22,1,0.36,1) ${(i % FIRST) * 60}ms both` }}
              role="button"
              tabIndex={0}
              aria-label={`Buka album ${w.title}`}
              onClick={() => setOpen(w)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setOpen(w))}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                <SafeImage
                  src={w.cover || w.src}
                  alt={`${w.title} — ${w.desc || w.cat}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-wine/85 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  View album · {w.album.length}
                </span>
              </div>
              <h4 className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink md:text-[12px]">{w.title}</h4>
              <p className="mt-1 text-[10px] uppercase leading-snug tracking-[0.08em] text-ink/70 md:text-[11px]">
                {w.desc ? `${w.desc} — ` : ""}
                {w.place}
              </p>
            </article>
          ))}
        </div>

        {filtered.length > FIRST && (
          <div className="mt-14 flex justify-center">
            <button type="button" onClick={() => setAll((v) => !v)} className="btn-box">
              {all ? "Show fewer" : `View all works (${filtered.length})`}
            </button>
          </div>
        )}
      </div>
      {open && <AlbumViewer work={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
