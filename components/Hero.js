import SafeImage from "./SafeImage";
import Magazine from "./Magazine";
import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-night pb-10 pt-24 md:pb-14 md:pt-32">
      {/* Latar: foto sampul yang diburamkan */}
      <div aria-hidden="true" className="absolute inset-0">
        <SafeImage src={hero.src} alt="" fill sizes="100vw" className="scale-110 object-cover opacity-60 blur-[6px] brightness-75" />
      </div>

      <div className="relative mx-auto max-w-[940px] px-5">
        <Magazine
          left={hero.left}
          right={hero.right}
          src={hero.src}
          word={hero.word}
          title={hero.title}
          text={hero.text}
          trio={hero.trio}
          sizes="(min-width: 940px) 900px, 100vw"
          priority
        />
      </div>

      {/* Kata-kata di bawah, seperti tepi halaman majalah */}
      <ul className="relative mx-auto mt-8 flex max-w-[940px] justify-between gap-x-3 px-5 text-[10px] uppercase tracking-[0.18em] sm:justify-around sm:text-[11px] sm:tracking-[0.3em] text-ivory/85 md:mt-12">
        {hero.words.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>
    </section>
  );
}
