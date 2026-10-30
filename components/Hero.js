import { Star } from "./Icons";
import { site } from "@/lib/data";

function Badge({ className = "" }) {
  return (
    <div className={`relative aspect-square ${className}`} aria-hidden="true">
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
  return (
    <section id="home" className="silk relative overflow-hidden pt-20 md:pt-24">
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="flex items-center justify-between pt-4 text-ink/80">
          <p className="eyebrow">
            Wedding Decoration<span className="hidden sm:inline"> Studio</span>
          </p>
          <p className="eyebrow flex items-center gap-2">
            <Star className="h-3 w-3 text-gold" /> Lampung
          </p>
        </div>

        {/* Wordmark raksasa — tidak tertutup apa pun */}
        <h1
          className="mt-3 select-none text-center font-serif font-light uppercase leading-[0.8] tracking-[-0.03em] text-ink"
          style={{ fontSize: "clamp(84px, 23.5vw, 340px)" }}
        >
          Lunéva
        </h1>

        <div className="grid items-end gap-10 pb-14 pt-12 md:grid-cols-12 md:gap-8 md:pb-20 md:pt-16">
          <div className="flex flex-col gap-6 md:col-span-5">
            <p className="eyebrow text-golddeep">Wedding</p>
            <h2 className="text-[26px] font-light uppercase leading-[1.3] tracking-[0.14em] text-ink md:text-[30px]">
              Decoration
              <br />& Styling
            </h2>
            <span className="h-px w-14 bg-gold" />
          </div>

          <div className="flex flex-col gap-6 md:col-span-4 md:col-start-6">
            <p className="max-w-[38ch] text-[14px] font-light leading-relaxed text-muted">
              Ceremonies and receptions designed around texture, natural light and a few chosen flowers, so the room
              feels like the two of you.
            </p>
            <p className="font-serif text-[48px] font-light uppercase leading-[0.9] text-gold md:text-[60px]">{site.brandSub}</p>
          </div>

          <div className="hidden md:col-span-2 md:col-start-11 md:flex md:justify-end">
            <Badge className="w-36 text-[15px] lg:w-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
