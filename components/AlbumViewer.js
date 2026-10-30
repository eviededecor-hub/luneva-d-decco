"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const pad = (n) => String(n).padStart(2, "0");
// Item album bisa berupa foto ("/a.jpg") atau video ({ video: "/a.mp4", poster: "/a.jpg" })
const isVideo = (it) => typeof it === "object" && it.video;
const keyOf = (it) => (isVideo(it) ? it.video : it);
const thumbOf = (it) => (isVideo(it) ? it.poster : it);

// Galeri layar penuh untuk satu album portofolio
export default function AlbumViewer({ work, onClose }) {
  const [i, setI] = useState(0);
  const touchX = useRef(null);
  const photos = work.album;
  const total = photos.length;
  const go = useCallback((d) => setI((v) => (v + d + total) % total), [total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [go, onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-night text-ivory" role="dialog" aria-modal="true" aria-label={`Album ${work.title}`}>
      {/* Bar atas */}
      <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-10 md:py-6">
        <div>
          <p className="font-serif text-2xl font-light uppercase tracking-[0.08em] text-goldlight">{work.title}</p>
          <p className="mt-1 whitespace-nowrap text-[10px] uppercase tracking-[0.26em] text-ivory/50">
            {work.cat} · {work.place}
          </p>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <p className="whitespace-nowrap font-serif text-lg tabular-nums">
            {pad(i + 1)} <span className="mx-1.5 inline-block w-7 border-t border-goldlight align-middle" /> {pad(total)}
          </p>
          <button type="button" onClick={onClose} aria-label="Tutup album" className="whitespace-nowrap text-[11px] uppercase tracking-[0.24em] text-ivory/70 transition hover:text-ivory">
            <span className="hidden sm:inline">Close </span>✕
          </button>
        </div>
      </div>

      {/* Foto */}
      <div
        className="relative flex-1"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {photos.map((it, k) => (
          <div key={keyOf(it)} className={`absolute inset-x-4 inset-y-0 transition-opacity duration-700 ease-soft md:inset-x-24 ${k === i ? "opacity-100" : "pointer-events-none opacity-0"}`}>
            {isVideo(it) ? (
              k === i ? (
                <video src={it.video} poster={it.poster} controls autoPlay playsInline className="h-full w-full object-contain" aria-label={`${work.title} — video`} />
              ) : null
            ) : Math.abs(k - i) <= 1 ? (
              <Image src={it} alt={`${work.title} — foto ${k + 1}`} fill sizes="100vw" className="object-contain" priority={k === 0} />
            ) : null}
          </div>
        ))}
        <button type="button" onClick={() => go(-1)} aria-label="Foto sebelumnya" className="absolute left-2 top-1/2 hidden -translate-y-1/2 p-4 text-2xl text-ivory/60 transition hover:text-ivory md:block">
          ←
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Foto berikutnya" className="absolute right-2 top-1/2 hidden -translate-y-1/2 p-4 text-2xl text-ivory/60 transition hover:text-ivory md:block">
          →
        </button>
      </div>

      {/* Thumbnail */}
      <div className="overflow-x-auto px-5 py-4 md:px-10">
        <div className="mx-auto flex w-max gap-2">
          {photos.map((it, k) => (
            <button
              key={keyOf(it)}
              type="button"
              onClick={() => setI(k)}
              aria-label={isVideo(it) ? `Putar video ${k + 1}` : `Lihat foto ${k + 1}`}
              className={`relative h-14 w-14 shrink-0 overflow-hidden border transition md:h-16 md:w-16 ${k === i ? "border-goldlight opacity-100" : "border-transparent opacity-40 hover:opacity-80"}`}
            >
              <Image src={thumbOf(it)} alt="" fill sizes="64px" className="object-cover" />
              {isVideo(it) && (
                <span className="absolute inset-0 flex items-center justify-center bg-night/40 text-[13px] text-ivory" aria-hidden="true">▶</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
