"use client";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const light = !scrolled && !open; // teks putih di atas foto hero

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-soft ${
        scrolled && !open ? "bg-ivory/90 backdrop-blur-md border-b border-ink/5" : "bg-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-12 ${scrolled ? "h-16" : "h-20 md:h-24"} transition-all duration-500`}>
        <a href="#home" className={`flex items-baseline gap-2 transition-colors ${light ? "text-white" : "text-ink"}`}>
          <span className="font-serif text-2xl tracking-[0.18em] md:text-[26px]">{site.brand}</span>
          <span className="font-serif text-sm italic opacity-80">{site.brandSub}</span>
        </a>

        <nav className="hidden md:block" aria-label="Utama">
          <ul className="flex items-center gap-10">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={`group relative text-[12px] uppercase tracking-[0.22em] transition-colors ${light ? "text-white/90 hover:text-white" : "text-ink/70 hover:text-ink"}`}
                >
                  {n.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-current transition-all duration-500 ease-soft group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className={`relative h-10 w-10 md:hidden ${light ? "text-white" : "text-ink"}`}
        >
          <span className={`absolute left-2 right-2 h-px bg-current transition-all duration-500 ease-soft ${open ? "top-1/2 rotate-45" : "top-[15px]"}`} />
          <span className={`absolute left-2 right-2 h-px bg-current transition-all duration-500 ease-soft ${open ? "top-1/2 -rotate-45" : "top-[24px]"}`} />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 -z-10 flex flex-col justify-between bg-ivory px-6 pb-10 pt-28 transition-all duration-700 ease-soft md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5">
          {nav.map((n, i) => (
            <li
              key={n.href}
              className={`transition-all duration-700 ease-soft ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
            >
              <a href={n.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 font-serif text-[40px] font-light leading-none text-ink">
                <span className="font-sans text-[11px] tracking-label text-taupe">0{i + 1}</span>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-end justify-between border-t border-ink/10 pt-6">
          <p className="label">{site.city}</p>
          <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer" className="text-sm text-ink">
            @{site.instagram}
          </a>
        </div>
      </div>
    </header>
  );
}
