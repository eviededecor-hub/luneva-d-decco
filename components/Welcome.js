import Image from "next/image";
import { site } from "@/lib/data";

export default function Welcome() {
  return (
    <section id="about" className="bg-ivory">
      {/* Tagline */}
      <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-44">
        <p className="label mb-10">Welcome</p>
        <p className="font-serif text-[30px] font-light leading-[1.3] text-ink md:text-[46px]">
          We believe moments should be remembered not only as they happened,
          <em className="text-taupe"> but as they were felt</em> — the hush before the vow,
          the light on a linen table, the hand that finds yours.
        </p>
        <span className="mx-auto mt-14 block h-14 w-px bg-ink/20" />
      </div>

      {/* About */}
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-28 md:grid-cols-12 md:gap-8 md:px-12 md:pb-40">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand md:col-span-5 md:col-start-2">
          <Image
            src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80"
            alt="Detail rangkaian bunga di meja resepsi"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-8 md:col-span-4 md:col-start-8">
          <p className="label">About the studio</p>
          <h2 className="font-serif text-4xl font-light leading-tight md:text-5xl">
            Decoration that keeps <em>its voice down.</em>
          </h2>
          <div className="space-y-5 text-[15px] font-light leading-relaxed text-muted">
            <p>
              {site.brand} {site.brandSub} is a wedding decoration and styling studio based in {site.city}.
              We design ceremonies and receptions around texture, natural light and a few chosen flowers,
              so the room feels like the two of you rather than a template.
            </p>
            <p>Formerly Evie Decoration — the same hands, now with a quieter, more editorial eye.</p>
          </div>
          <dl className="grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
            {[
              ["Ceremony", "Aisle & altar"],
              ["Reception", "Tables & stage"],
              ["Styling", "Florals & linen"],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="font-serif text-xl">{t}</dt>
                <dd className="mt-1 text-xs text-muted">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
