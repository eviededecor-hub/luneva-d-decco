"use client";
import { useState } from "react";
import Image from "next/image";
import { categories, works } from "@/lib/data";

function WorkCard({ w, i, layout }) {
  const [broken, setBroken] = useState(false);
  return (
    <a
      href="#contact"
      className={`group relative block overflow-hidden bg-sand ${layout.span} ${layout.ratio}`}
      style={{ animation: `cardIn 900ms cubic-bezier(0.22,1,0.36,1) ${i * 70}ms both` }}
    >
      {!broken && (
        <Image
          src={w.src}
          alt={`${w.title} — ${w.cat}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          onError={() => setBroken(true)}
          className="object-cover transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.045]"
        />
      )}
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 ease-soft group-hover:bg-ink/25" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white md:p-7">
        <div className="translate-y-0 opacity-100 transition-all duration-700 ease-soft md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <p className="mb-2 text-[10px] uppercase tracking-label text-white/80">{w.cat}</p>
          <h3 className="font-serif text-2xl font-light italic md:text-3xl">{w.title}</h3>
        </div>
        <span className="font-serif text-sm tabular-nums text-white/80 opacity-100 transition-opacity duration-700 md:opacity-0 md:group-hover:opacity-100">
          {w.year}
        </span>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? works : works.filter((w) => w.cat === active);

  return (
    <section id="portfolio" className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label mb-5">Selected Works</p>
            <h2 className="font-serif text-5xl font-light leading-none md:text-7xl">
              Portfolio<span className="text-taupe">.</span>
            </h2>
          </div>
          <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0" role="tablist" aria-label="Kategori portofolio">
            <ul className="flex w-max gap-6 md:gap-8">
              {categories.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active === c}
                    onClick={() => setActive(c)}
                    className={`whitespace-nowrap border-b pb-1.5 text-[12px] uppercase tracking-[0.2em] transition-colors duration-500 ${
                      active === c ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink"
                    }`}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div key={active} className="grid grid-cols-1 gap-4 md:grid-flow-dense md:grid-cols-12 md:gap-6">
          {list.map((w, i) => (
            <WorkCard
              key={w.title}
              w={w}
              i={i}
              layout={active === "All" ? w : { span: "md:col-span-6", ratio: "aspect-[4/5]" }}
            />
          ))}
        </div>
      </div>
      <style>{`@keyframes cardIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }`}</style>
    </section>
  );
}
