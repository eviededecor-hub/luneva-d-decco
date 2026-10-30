import SafeImage from "./SafeImage";
import { site } from "@/lib/data";

// Halaman bergaya majalah hitam-putih:
// label atas, foto utama dengan kata besar di atasnya, judul tebal bergaris, dan tiga foto berjajar.
// Semua ukuran memakai satuan "cqw" (persen lebar kartu) agar proporsinya sama di layar mana pun.
export default function Magazine({
  left,
  right,
  src,
  word,
  title,
  text,
  trio = [],
  sizes = "100vw",
  priority = false,
  hoverColor = false,
  footer = null,
}) {
  const wordSize = Math.min(21, 90 / (word.length * 0.64)); // kata panjang otomatis mengecil
  const tone = hoverColor
    ? "grayscale transition-[filter,transform] duration-[1200ms] ease-soft group-hover:grayscale-0"
    : "grayscale";

  return (
    <div className="h-full bg-ivory text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]" style={{ containerType: "inline-size" }}>
      <div style={{ padding: "4.5cqw" }}>
        {/* Label atas */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3" style={{ fontSize: "max(9px, 2.2cqw)" }}>
          <span className="font-semibold uppercase leading-none tracking-[0.04em]">{left}</span>
          <span className="text-center leading-none">
            <span className="block font-medium tracking-[0.14em]" style={{ fontSize: "1.05em" }}>
              {site.brand}
            </span>
            <span className="mt-[0.35em] block uppercase tracking-[0.32em]" style={{ fontSize: "0.48em" }}>
              {site.brandSub} · Decoration
            </span>
          </span>
          <span className="text-right font-semibold uppercase leading-none tracking-[0.04em]">{right}</span>
        </div>

        {/* Foto utama + kata besar */}
        <div className="relative mt-[2.4cqw] aspect-[6/5] overflow-hidden bg-sand">
          <SafeImage src={src} alt={`${title} — foto utama`} fill sizes={sizes} priority={priority} className={`object-cover ${tone}`} />
          <p
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-[7%] select-none text-center font-sans font-normal uppercase leading-[0.8] text-white/90 [text-shadow:0_2px_24px_rgba(0,0,0,0.25)]"
            style={{ fontSize: `${wordSize}cqw` }}
          >
            {word}
          </p>
        </div>

        {/* Judul tebal + garis + paragraf kecil */}
        <div className="mt-[3.2cqw]">
          <h3 className="font-semibold uppercase leading-tight tracking-[0.02em]" style={{ fontSize: "max(11px, 2.3cqw)" }}>
            {title}
          </h3>
          <span className="mt-[1.4cqw] block h-[1.5px] w-[72%] bg-ink" />
          <p
            className="ml-auto mt-[1.8cqw] max-w-[58%] text-right font-serif leading-snug text-ink/80"
            style={{ fontSize: "max(10px, 1.85cqw)" }}
          >
            {text}
          </p>
        </div>

        {/* Tiga foto berjajar */}
        {trio.length > 0 && (
          <div className="ml-[13%] mt-[3cqw] grid grid-cols-3 gap-[1.4cqw]">
            {trio.map((t, i) => (
              <div key={t} className="relative aspect-[3/4] overflow-hidden bg-sand">
                <SafeImage src={t} alt={`${title} — detail ${i + 1}`} fill sizes="(min-width: 768px) 15vw, 30vw" className={`object-cover ${tone}`} />
              </div>
            ))}
          </div>
        )}

        {footer}
      </div>
    </div>
  );
}
