import SafeImage from "./SafeImage";
import { editorial, site } from "@/lib/data";

export default function Experience() {
  const e = editorial.experience;
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Halo ${site.brand} ${site.brandSub}, saya ingin bertanya tentang dekorasi pernikahan.`)}`;

  return (
    <section id="experience" className="panel scroll-mt-28 overflow-hidden px-5 py-14 md:px-12 md:py-20">
      <div className="relative grid gap-10 md:grid-cols-12 md:gap-8">
        {/* Judul besar */}
        <h2 className="font-serif text-[clamp(52px,9.5vw,128px)] font-normal uppercase leading-[0.85] tracking-[-0.02em] text-wine md:col-span-9">
          Experience
        </h2>

        {/* Foto kecil + label di kanan atas */}
        <div className="flex items-start justify-between gap-6 md:absolute md:right-0 md:top-0 md:flex-col md:items-end">
          <div className="frame w-32 md:w-40">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <SafeImage src={e.small} alt="Pengantin dengan gaun marun" fill sizes="160px" className="object-cover" />
            </div>
          </div>
          <ul className="flex flex-col gap-1.5 text-right text-[10px] font-medium uppercase tracking-[0.22em] text-ink/80">
            {e.labels.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        {/* Foto besar */}
        <div className="frame md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <SafeImage src={e.main} alt="Pasangan pengantin di depan dinding bunga merah" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>

        {/* Teks + tombol */}
        <div className="flex flex-col justify-end gap-5 md:col-span-5 md:col-start-8 md:pb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">{e.kicker}</p>
          <p className="max-w-[46ch] text-[14px] font-light leading-relaxed text-ink/80">{e.text}</p>
          <a href={wa} target="_blank" rel="noreferrer" className="btn-box mt-2 w-fit">
            Inquire now
          </a>
        </div>
      </div>
    </section>
  );
}
