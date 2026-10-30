"use client";
import { useState } from "react";
import Magazine from "./Magazine";
import AlbumViewer from "./AlbumViewer";
import { categories, site, works } from "@/lib/data";

const pad = (n) => String(n).padStart(2, "0");
const isVideo = (it) => typeof it === "object" && it.video;

function describe(w) {
  const videos = w.album.filter(isVideo).length;
  const photos = w.album.length - videos;
  const count = `${photos} photos${videos ? ` & ${videos} video${videos > 1 ? "s" : ""}` : ""}`;
  return `${w.place}. ${count}, decorated by ${site.brand} ${site.brandSub}.`;
}

export default function Works() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(null);
  const list = active === "All" ? works : works.filter((w) => w.cat === active);
  const cats = categories.filter((c) => c === "All" || works.some((w) => w.cat === c));

  return (
    <section id="portfolio" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-12">
        <div className="flex items-end gap-6">
          <h2 className="shrink-0 text-[26px] font-semibold uppercase leading-none tracking-[0.02em] md:text-[34px]">Selected Works</h2>
          <span className="mb-1.5 h-[1.5px] flex-1 bg-ink" />
          <a
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="group mb-0.5 hidden shrink-0 items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-ink/70 transition-colors hover:text-ink sm:flex"
          >
            View all works
            <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">→</span>
          </a>
        </div>

        {cats.length > 2 && (
          <div className="-mx-5 mt-8 overflow-x-auto px-5 md:mx-0 md:px-0" role="tablist" aria-label="Kategori portofolio">
            <ul className="flex w-max gap-7">
              {cats.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active === c}
                    onClick={() => setActive(c)}
                    className={`whitespace-nowrap border-b pb-1.5 text-[12px] uppercase tracking-[0.2em] transition-colors duration-500 ${
                      active === c ? "border-ink font-medium text-ink" : "border-transparent text-ink/45 hover:text-ink/80"
                    }`}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div key={active} className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
          {list.map((w, i) => (
            <article
              key={w.title}
              className="group cursor-pointer transition-transform duration-700 ease-soft hover:-translate-y-1"
              style={{ animation: `fadeUp 900ms cubic-bezier(0.22,1,0.36,1) ${i * 80}ms both` }}
              role="button"
              tabIndex={0}
              aria-label={`Buka album ${w.title}`}
              onClick={() => setOpen(w)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setOpen(w))}
            >
              <Magazine
                left={w.cat}
                right={`N° ${pad(works.indexOf(w) + 1)}`}
                src={w.cover || w.src}
                word={w.word || w.cat}
                title={`${w.title}.`}
                text={describe(w)}
                trio={w.trio || []}
                sizes="(min-width: 768px) 560px, 100vw"
                hoverColor
                footer={
                  <p className="mt-[3cqw] flex items-center justify-end gap-2 font-medium uppercase tracking-[0.24em]" style={{ fontSize: "max(10px, 1.6cqw)" }}>
                    View album <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">→</span>
                  </p>
                }
              />
            </article>
          ))}
        </div>
      </div>
      {open && <AlbumViewer work={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
