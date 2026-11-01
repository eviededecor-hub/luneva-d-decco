import SafeImage from "./SafeImage";
import { icons, Star } from "./Icons";
import { process, quote, services } from "@/lib/data";

export default function Services() {
  return (
    <section className="panel py-16 md:py-24">
      <div className="grid gap-16 px-5 md:grid-cols-12 md:gap-8 md:px-12">
        {/* Layanan */}
        <div id="services" className="scroll-mt-24 md:col-span-3">
          <h2 className="font-serif text-[34px] uppercase leading-none text-wine md:text-[40px]">Services</h2>
          <ul className="mt-10 flex flex-col gap-9">
            {services.map((s) => (
              <li key={s.title} className="flex gap-4">
                <span className="mt-0.5 shrink-0 text-gold">{icons[s.icon]}</span>
                <div>
                  <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink">{s.title}</h3>
                  <p className="mt-2 max-w-[28ch] text-[13px] font-light leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Proses kerja */}
        <div id="process" className="scroll-mt-24 md:col-span-4">
          <h2 className="font-serif text-[34px] uppercase leading-none text-wine md:text-[40px]">Our <span className="font-script normal-case">process</span></h2>
          <ol className="relative mt-10 flex flex-col gap-9 pl-8">
            <span className="absolute bottom-2 left-[5px] top-2 w-px bg-gold/40" aria-hidden="true" />
            {process.map((p, i) => (
              <li key={p.title} className="relative flex gap-5">
                <Star className="absolute -left-8 top-3 h-[11px] w-[11px] text-gold" />
                <span className="w-12 shrink-0 font-serif text-[40px] font-light leading-none text-gold">0{i + 1}</span>
                <div>
                  <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink">{p.title}</h3>
                  <p className="mt-2 max-w-[30ch] text-[13px] font-light leading-relaxed text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Kutipan dengan foto */}
        <figure className="relative min-h-[420px] overflow-hidden bg-sand md:col-span-5">
          <SafeImage src={quote.src} alt="Detail dekorasi bunga" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <blockquote className="absolute inset-x-0 bottom-0 flex gap-4 p-7 md:p-10">
            <span className="font-serif text-6xl leading-[0.6] text-goldlight" aria-hidden="true">“</span>
            <div>
              <p className="max-w-[26ch] font-serif text-[19px] uppercase leading-snug tracking-[0.08em] text-ivory md:text-[22px]">
                {quote.text}
              </p>
              <figcaption className="mt-5 text-right font-serif text-2xl italic text-goldlight">{quote.sign}</figcaption>
            </div>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
