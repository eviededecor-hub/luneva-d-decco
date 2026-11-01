import SafeImage from "./SafeImage";
import { editorial, site } from "@/lib/data";

export default function Hero() {
  const [left, middle, right] = editorial.triptych;
  return (
    <section id="home" className="panel scroll-mt-28 px-3 pb-6 pt-[92px] md:px-10 md:pb-10 md:pt-[112px]">
      {/* Triptych: tiga foto vertikal berdampingan dengan garis tipis */}
      <div className="grid h-[440px] grid-cols-[1fr_2fr_1fr] gap-[5px] border-y border-ink/60 py-[5px] sm:h-[560px] md:h-[min(76vh,680px)]">
        {[left, middle, right].map((src, i) => (
          <div key={src} className="relative overflow-hidden bg-sand">
            <SafeImage
              src={src}
              alt={["Pengantin di depan tirai beludru merah", "Pengantin di bawah bunga gantung", "Bunga putih raksasa dan mawar merah"][i]}
              fill
              priority
              sizes={i === 1 ? "50vw" : "25vw"}
              className="object-cover"
              style={{ animation: `fadeUp 1.2s cubic-bezier(0.22,1,0.36,1) ${i * 150}ms both` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-[3px] border-t border-ink/60" />

      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-ink/70 md:mt-6 md:text-[11px]">
        <span>Wedding decoration</span>
        <span className="font-script text-[26px] normal-case tracking-normal text-wine md:text-[30px]">since Evie</span>
        <span className="text-right">{site.city}</span>
      </div>
    </section>
  );
}
