import SafeImage from "./SafeImage";
import { editorial } from "@/lib/data";

export default function About() {
  const a = editorial.about;
  return (
    <section id="about" className="panel scroll-mt-28 overflow-hidden px-5 py-14 md:px-12 md:py-24">
      <div className="relative grid gap-8 md:grid-cols-12 md:gap-6">
        {/* Judul besar, sebagian tertutup foto tengah */}
        <h2 className="font-serif text-[clamp(44px,7.5vw,104px)] font-normal uppercase leading-[0.9] tracking-[-0.02em] text-wine md:col-span-10 md:col-start-2">
          Hi, we&rsquo;re Lunéva
        </h2>

        <div className="flex flex-col gap-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/80 md:col-span-3 md:col-start-2">
          {a.lines.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>

        {/* Foto tengah menimpa judul */}
        <div className="frame relative z-10 md:col-span-4 md:col-start-5 md:row-span-2 md:-mt-3">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <SafeImage src={a.main} alt="Lorong dengan bunga gantung dan tirai marun" fill sizes="(min-width: 768px) 34vw, 100vw" className="object-cover" />
          </div>
        </div>

        {/* Foto kecil kanan atas */}
        <div className="frame hidden w-36 self-start justify-self-end md:col-span-2 md:col-start-11 md:row-start-2 md:-mt-10 md:block lg:w-40">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <SafeImage src={a.smallRight} alt="Bunga anthurium merah muda" fill sizes="160px" className="object-cover" />
          </div>
        </div>

        {/* Foto kecil kiri bawah */}
        <div className="frame hidden w-36 self-end md:col-span-2 md:col-start-2 md:row-start-3 md:block lg:w-40">
          <div className="relative aspect-square overflow-hidden bg-sand">
            <SafeImage src={a.smallLeft} alt="Detail bunga ungu" fill sizes="160px" className="object-cover" />
          </div>
        </div>

        {/* Teks + tombol kanan bawah */}
        <div className="flex flex-col gap-5 self-end md:col-span-3 md:col-start-10 md:row-start-3">
          <p className="text-[13px] font-light leading-relaxed text-ink/80">{a.text}</p>
          <a href="#services" className="btn-box w-fit">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
