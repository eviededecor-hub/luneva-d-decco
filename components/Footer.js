import { Star } from "./Icons";
import { site } from "@/lib/data";

export default function Footer() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Halo ${site.brand} ${site.brandSub}, saya ingin bertanya tentang dekorasi pernikahan.`
  )}`;

  return (
    <footer id="contact" className="bg-night text-ivory">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-20 md:px-12 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Pesan penutup + tombol */}
          <div className="flex flex-col gap-6 md:col-span-4 md:border-r md:border-ivory/15 md:pr-10">
            <p className="eyebrow text-ivory/50">We&rsquo;ll see you soon</p>
            <h2 className="font-serif text-[34px] font-light uppercase leading-[1.1] tracking-[0.04em] text-goldlight md:text-[40px]">
              Let&rsquo;s create something beautiful
            </h2>
            <Star className="h-4 w-4 text-goldlight" />
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="group mt-2 inline-flex w-fit items-center gap-3 border border-goldlight px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-goldlight transition-colors duration-500 hover:bg-goldlight hover:text-night"
            >
              Chat on WhatsApp
              <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Kontak */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="eyebrow text-goldlight">Let&rsquo;s connect</h3>
            <ul className="mt-6 flex flex-col gap-3 text-[13px] font-light text-ivory/80">
              <li><a href={`mailto:${site.email}`} className="transition-colors hover:text-ivory">{site.email}</a></li>
              <li><a href={wa} target="_blank" rel="noreferrer" className="transition-colors hover:text-ivory">{site.whatsappLabel}</a></li>
              <li>
                <a href={site.maps} target="_blank" rel="noreferrer" className="group inline-flex items-start gap-2 transition-colors hover:text-ivory">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="mt-0.5 shrink-0" aria-hidden="true">
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                  <span>
                    Based in {site.city}
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.24em] text-goldlight">
                      Open in Google Maps <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Media sosial */}
          <div className="md:col-span-2">
            <h3 className="eyebrow text-goldlight">Follow</h3>
            <ul className="mt-6 flex flex-col gap-3 text-[13px] font-light text-ivory/80">
              <li>
                <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 transition-colors hover:text-ivory">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
                  </svg>
                  @{site.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Monogram */}
          <div className="hidden md:col-span-2 md:col-start-11 md:flex md:justify-end" aria-hidden="true">
            <div className="relative h-32 w-36 font-serif font-light text-goldlight">
              <span className="absolute left-0 top-0 text-[88px] leading-none">L</span>
              <span className="absolute bottom-0 right-0 text-[88px] leading-none">D</span>
              <span className="absolute left-1/2 top-0 h-full w-px rotate-[32deg] bg-goldlight/70" />
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-ivory/10 pt-6 text-[11px] text-ivory/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.brand} {site.brandSub}. All rights reserved.</p>
          <p>Formerly {site.formerly}</p>
        </div>
      </div>
    </footer>
  );
}
