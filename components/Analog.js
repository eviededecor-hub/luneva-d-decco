import Image from "next/image";
import { analog } from "@/lib/data";

function Sprockets() {
  return (
    <div className="flex justify-between gap-3 px-2 py-2" aria-hidden="true">
      {Array.from({ length: 28 }).map((_, i) => (
        <span key={i} className="h-2.5 w-4 shrink-0 rounded-[2px] bg-ivory/15" />
      ))}
    </div>
  );
}

export default function Analog() {
  return (
    <section id="analog" className="overflow-hidden bg-ink py-24 text-ivory md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="mb-14 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="mb-5 font-sans text-[11px] uppercase tracking-label text-sand/70">Analog Series</p>
            <h2 className="font-serif text-5xl font-light leading-[1.02] md:text-7xl">
              Shot on film, <em className="text-sand">kept in the heart.</em>
            </h2>
          </div>
          <p className="self-end text-[15px] font-light leading-relaxed text-ivory/60 md:col-span-4 md:col-start-9">
            A small series of frames on 35mm. Slower, softer, a little imperfect. The way a wedding day
            feels when you look back on it years later.
          </p>
        </div>
      </div>

      {/* film strip */}
      <div className="-rotate-1 border-y border-ivory/10 bg-[#141311]">
        <Sprockets />
        <div className="flex gap-3 overflow-x-auto px-3 pb-1 md:justify-center">
          {analog.map((a) => (
            <figure key={a.frame} className="group w-[72vw] shrink-0 sm:w-[44vw] md:w-[22vw] md:max-w-[340px]">
              <div className="grain relative aspect-[3/2] overflow-hidden bg-[#2a2622]">
                <Image
                  src={a.src}
                  alt={`Frame ${a.frame} — ${a.stock}`}
                  fill
                  sizes="(min-width: 768px) 22vw, 72vw"
                  className="object-cover contrast-[1.05] saturate-[0.75] sepia-[0.18] transition duration-[1200ms] ease-soft group-hover:scale-105 group-hover:saturate-100"
                />
              </div>
              <figcaption className="flex justify-between px-1 pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#d9a441]/80">
                <span>{a.frame}A ▸</span>
                <span>{a.stock}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <Sprockets />
      </div>
    </section>
  );
}
