import { nav, site } from "@/lib/data";

export default function Footer() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Halo ${site.brand} ${site.brandSub}, saya ingin bertanya tentang dekorasi pernikahan.`
  )}`;

  return (
    <footer id="contact" className="bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-28 md:px-12 md:pt-40">
        <div className="text-center">
          <p className="label mb-8">Get in touch</p>
          <h2 className="font-serif text-[56px] font-light italic leading-[0.95] md:text-[128px]">
            We&rsquo;ll see you soon.
          </h2>
          <p className="mx-auto mt-8 max-w-md text-[15px] font-light leading-relaxed text-muted">
            Tell us your date, your venue and how you want the day to feel. We reply within one working day.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-w-[240px] items-center justify-center gap-3 bg-ink px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-ivory transition-colors duration-500 hover:bg-taupe"
            >
              Chat on WhatsApp
              <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-w-[240px] items-center justify-center border border-ink/30 px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-ink transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-ivory"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-28 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-3 md:items-end">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl tracking-[0.18em]">{site.brand}</span>
            <span className="font-serif text-sm italic text-muted">{site.brandSub}</span>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 md:items-end">
            <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer" className="text-sm transition-colors hover:text-taupe">
              Instagram — @{site.instagram}
            </a>
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} {site.brand} {site.brandSub}. {site.city}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
