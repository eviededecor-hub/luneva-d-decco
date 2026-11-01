"use client";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div className="panel relative">
        <div className="flex h-16 items-center justify-between px-5 md:h-[72px] md:px-10">
          <a href="#home" className="flex items-baseline gap-2 text-wine">
            <span className="font-serif text-[26px] leading-none tracking-[0.04em] md:text-[30px]">{site.brand}</span>
            <span className="font-script text-[20px] leading-none text-ink/70 md:text-[22px]">d&rsquo;deco</span>
          </a>

          <nav className="hidden md:block" aria-label="Utama">
            <ul className="flex items-center gap-9">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="group relative text-[11px] font-medium uppercase tracking-[0.2em] text-ink/75 transition-colors hover:text-wine">
                    {n.label}
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-wine transition-all duration-500 ease-soft group-hover:w-full" />
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
            className="relative h-10 w-10 text-ink md:hidden"
          >
            <span className={`absolute left-2 right-2 h-px bg-current transition-all duration-500 ease-soft ${open ? "top-1/2 rotate-45" : "top-[15px]"}`} />
            <span className={`absolute left-2 right-2 h-px bg-current transition-all duration-500 ease-soft ${open ? "top-1/2 -rotate-45" : "top-[24px]"}`} />
          </button>
        </div>
        {/* garis ganda tipis di bawah header */}
        <div className="mx-5 border-b border-t border-ink/60 pt-[3px] md:mx-10" />

        {/* Menu mobile */}
        <div className={`overflow-hidden transition-[max-height] duration-700 ease-soft md:hidden ${open ? "max-h-[480px]" : "max-h-0"}`}>
          <ul className="flex flex-col gap-4 px-5 pb-8 pt-6">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="font-serif text-[34px] uppercase leading-none text-wine">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
