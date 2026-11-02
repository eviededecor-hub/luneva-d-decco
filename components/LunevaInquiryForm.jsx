"use client";

/**
 * LunevaInquiryForm — form konsultasi bertahap untuk Lunéva D Deco
 * React + Tailwind CSS, tanpa library tambahan.
 *
 * Pemakaian sebagai halaman penuh (mis. app/konsultasi/page.jsx):
 *   import LunevaInquiryForm from "@/components/LunevaInquiryForm";
 *   export default function Page() { return <LunevaInquiryForm />; }
 *
 * Pemakaian sebagai pop-up:
 *   const [open, setOpen] = useState(false);
 *   <button onClick={() => setOpen(true)}>Konsultasi</button>
 *   <LunevaInquiryForm asModal open={open} onClose={() => setOpen(false)} />
 *
 * Saat dikirim, form membuka WhatsApp dengan ringkasan jawaban klien.
 * Bila SHEET_ENDPOINT diisi, setiap jawaban juga otomatis tersimpan sebagai baris baru di Google Sheets.
 */

import { forwardRef, useEffect, useMemo, useRef, useState } from "react";

/* ============ PENGATURAN — silakan ubah ============ */
const BRAND = "LUNÉVA";
const BRAND_SUB = "D DECO";
const WHATSAPP_NUMBER = "6282282942526"; // format internasional, tanpa "+" dan tanpa 0 di depan

// URL Web App dari Google Apps Script (lihat file kode-apps-script.gs).
// Tempel URL yang berakhiran /exec di sini. Kosongkan bila belum ingin menyimpan ke Google Sheets.
const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbzdMp_IBhTPYH5K0X2eNH5uD_WzmSETUWPov_ep1HJE1GtOHBYITM89Zvhc5QExPqkr4A/exec";

const SERVICES = [
  { id: "akad", label: "Akad & Pemberkatan", desc: "Backdrop akad, area prosesi, meja ijab" },
  { id: "resepsi", label: "Resepsi Pernikahan", desc: "Pelaminan, gate, photobooth, dekor meja" },
  { id: "intimate", label: "Intimate Wedding", desc: "Konsep kecil yang hangat dan personal" },
  { id: "lamaran", label: "Lamaran & Engagement", desc: "Dekor tunangan dan area seserahan" },
  { id: "event", label: "Private Event", desc: "Ulang tahun, gathering, acara keluarga" },
];

const GUEST_OPTIONS = ["Di bawah 100 tamu", "100 – 300 tamu", "300 – 500 tamu", "500 – 1.000 tamu", "Lebih dari 1.000 tamu"];

const SOURCE_OPTIONS = ["Instagram Ads", "Instagram", "TikTok", "Wedding Expo", "Other"];
/* =================================================== */

const SERIF = "'Cormorant Garamond', 'Playfair Display', Georgia, serif";
const SANS = "'Jost', 'Helvetica Neue', Arial, sans-serif";
const TOTAL = 6;
const MONTHS = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const DOW = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
@keyframes lvFade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
@keyframes lvBackdrop { from { opacity: 0; } to { opacity: 1; } }
.lv-fade { animation: lvFade .8s cubic-bezier(.22,1,.36,1) both; }
.lv-fade-2 { animation: lvFade .9s .12s cubic-bezier(.22,1,.36,1) both; }
.lv-fade-3 { animation: lvFade .9s .24s cubic-bezier(.22,1,.36,1) both; }
.lv-backdrop { animation: lvBackdrop .4s ease both; }
@media (prefers-reduced-motion: reduce) { .lv-fade, .lv-fade-2, .lv-fade-3, .lv-backdrop { animation: none; } }
`;

/* ---------- helpers ---------- */
const pad = (n) => String(n).padStart(2, "0");
const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromISO = (s) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const formatDate = (iso) =>
  fromISO(iso).toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const noFocusOnClick = (e) => e.preventDefault(); // klik mouse tidak meninggalkan fokus, jadi Enter tetap = Lanjut

/* ---------- komponen kecil ---------- */
const PrimaryButton = forwardRef(function PrimaryButton({ children, arrow = true, ...props }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      {...props}
      className="group inline-flex items-center gap-3 rounded-[3px] bg-[#2B2826] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[#F4F0EA] transition-all duration-500 ease-out hover:bg-[#5B2F33] hover:shadow-[0_14px_30px_-14px_rgba(91,47,51,0.7)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#2B2826] active:scale-[0.98]"
    >
      <span>{children}</span>
      {arrow && <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>}
    </button>
  );
});

const TextField = forwardRef(function TextField(props, ref) {
  return (
    <input
      ref={ref}
      {...props}
      style={{ fontFamily: SERIF }}
      className="w-full rounded-none border-0 border-b border-[#CFC5B8] bg-transparent px-0 pb-3 text-[28px] font-light text-[#2B2826] outline-none transition-colors duration-500 placeholder:italic placeholder:text-[#B5ABA0] focus:border-[#2B2826] focus:ring-0 md:text-[34px]"
    />
  );
});

function Question({ eyebrow, title, hint }) {
  return (
    <div className="mb-10">
      <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#8C837B]">{eyebrow}</p>
      <h2 style={{ fontFamily: SERIF }} className="text-[34px] font-light leading-[1.1] md:text-5xl">
        {title}
      </h2>
      {hint && <p className="mt-4 text-sm leading-relaxed text-[#8C837B]">{hint}</p>}
    </div>
  );
}

function Choice({ letter, label, desc, selected, onClick }) {
  return (
    <button
      type="button"
      onMouseDown={noFocusOnClick}
      onClick={onClick}
      aria-pressed={selected}
      className={`flex w-full items-center gap-4 rounded-[3px] border px-5 py-4 text-left transition-all duration-300 ${
        selected
          ? "border-[#2B2826] bg-[#2B2826]/[0.04]"
          : "border-[#D8CFC3] hover:border-[#2B2826]/50 hover:bg-white/40"
      }`}
    >
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-[2px] border text-[10px] transition-colors duration-300 ${
          selected ? "border-[#2B2826] bg-[#2B2826] text-[#F4F0EA]" : "border-[#D8CFC3] text-[#8C837B]"
        }`}
      >
        {letter}
      </span>
      <span className="flex-1">
        <span className="block text-[15px]">{label}</span>
        {desc && <span className="mt-0.5 block text-[13px] text-[#8C837B]">{desc}</span>}
      </span>
      <span className={`text-sm transition-opacity duration-300 ${selected ? "opacity-100" : "opacity-0"}`}>✓</span>
    </button>
  );
}

function Toggle({ checked, onChange, children }) {
  return (
    <button
      type="button"
      onMouseDown={noFocusOnClick}
      onClick={() => onChange(!checked)}
      className="mt-7 inline-flex items-center gap-3 text-sm text-[#8C837B] transition-colors hover:text-[#2B2826]"
    >
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-[2px] border transition-colors duration-300 ${
          checked ? "border-[#2B2826] bg-[#2B2826] text-[#F4F0EA]" : "border-[#BFB4A6]"
        }`}
      >
        {checked && <span className="text-[10px] leading-none">✓</span>}
      </span>
      {children}
    </button>
  );
}

function Calendar({ value, onChange, disabled }) {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);
  const [view, setView] = useState(() => {
    const d = value ? fromISO(value) : today;
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });

  const y = view.getFullYear();
  const m = view.getMonth();
  const cells = useMemo(() => {
    const offset = (new Date(y, m, 1).getDay() + 6) % 7; // minggu dimulai Senin
    const count = new Date(y, m + 1, 0).getDate();
    const list = Array(offset).fill(null);
    for (let d = 1; d <= count; d++) list.push(new Date(y, m, d));
    return list;
  }, [y, m]);

  const canPrev = y > today.getFullYear() || (y === today.getFullYear() && m > today.getMonth());
  const navBtn =
    "flex h-9 w-9 items-center justify-center rounded-full text-lg text-[#2B2826] transition-colors hover:bg-[#2B2826]/[0.06] disabled:pointer-events-none disabled:opacity-20";

  return (
    <div className={`w-full max-w-sm transition-opacity duration-500 ${disabled ? "pointer-events-none opacity-30" : ""}`}>
      <div className="mb-4 flex items-center justify-between">
        <button type="button" onMouseDown={noFocusOnClick} className={navBtn} disabled={!canPrev} onClick={() => setView(new Date(y, m - 1, 1))} aria-label="Bulan sebelumnya">
          ‹
        </button>
        <span style={{ fontFamily: SERIF }} className="text-xl">
          {MONTHS[m]} <span className="text-[#8C837B]">{y}</span>
        </span>
        <button type="button" onMouseDown={noFocusOnClick} className={navBtn} onClick={() => setView(new Date(y, m + 1, 1))} aria-label="Bulan berikutnya">
          ›
        </button>
      </div>
      <div className="mb-1 grid grid-cols-7 text-center text-[10px] uppercase tracking-[0.15em] text-[#8C837B]">
        {DOW.map((d) => (
          <span key={d} className="py-2">{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          if (!d) return <span key={i} />;
          const iso = toISO(d);
          const selected = iso === value;
          const past = d < today;
          const isToday = d.getTime() === today.getTime();
          return (
            <button
              key={i}
              type="button"
              disabled={past}
              onMouseDown={noFocusOnClick}
              onClick={() => onChange(iso)}
              className={`aspect-square rounded-full text-sm transition-all duration-300 ${
                selected
                  ? "bg-[#2B2826] text-[#F4F0EA]"
                  : past
                  ? "text-[#CFC5B8]"
                  : `hover:bg-[#2B2826]/[0.07] ${isToday ? "ring-1 ring-inset ring-[#CFC5B8]" : ""}`
              }`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- komponen utama ---------- */
export default function LunevaInquiryForm({ asModal = false, open = true, onClose, onSubmit }) {
  // 0 = sambutan, 1–6 = pertanyaan, 7 = ringkasan, 8 = terima kasih
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [waUrl, setWaUrl] = useState("");
  const [data, setData] = useState({
    name: "",
    date: "",
    dateTbd: false,
    venue: "",
    venueTbd: false,
    services: [],
    guests: "",
    source: "",
  });

  const inputRef = useRef(null);
  const startRef = useRef(null);
  const keyHandler = useRef(null);

  const set = (key, val) => {
    setData((d) => ({ ...d, [key]: val }));
    setError("");
  };

  const toggleService = (id) =>
    set("services", data.services.includes(id) ? data.services.filter((s) => s !== id) : [...data.services, id]);

  const chooseGuests = (g) => {
    set("guests", g);
    setTimeout(() => setStep(6), 450);
  };

  const chooseSource = (src) => {
    set("source", src);
    setTimeout(() => setStep(7), 450);
  };

  const validate = () => {
    switch (step) {
      case 1:
        return data.name.trim().length >= 2 || "Mohon tuliskan nama lengkap Anda.";
      case 2:
        return !!data.date || data.dateTbd || "Pilih tanggal, atau tandai bila belum pasti.";
      case 3:
        return data.venue.trim() !== "" || data.venueTbd || "Tuliskan lokasi acara, atau tandai bila belum ditentukan.";
      case 4:
        return data.services.length > 0 || "Pilih setidaknya satu layanan.";
      case 5:
        return !!data.guests || "Pilih perkiraan jumlah tamu.";
      case 6:
        return !!data.source || "Pilih salah satu jawaban.";
      default:
        return true;
    }
  };

  const next = () => {
    const ok = validate();
    if (ok !== true) return setError(ok);
    setError("");
    setStep((s) => s + 1);
  };

  const back = () => {
    setError("");
    setStep((s) => Math.max(0, s - 1));
  };

  const serviceLabels = data.services.map((id) => SERVICES.find((s) => s.id === id)?.label).join(", ");

  const submit = () => {
    const message = [
      "Halo Lunéva D Deco, saya ingin konsultasi dekorasi.",
      "",
      `Nama: ${data.name.trim()}`,
      `Tanggal acara: ${data.dateTbd ? "Belum pasti" : formatDate(data.date)}`,
      `Lokasi / venue: ${data.venueTbd ? "Belum ditentukan" : data.venue.trim()}`,
      `Layanan: ${serviceLabels}`,
      `Perkiraan tamu: ${data.guests}`,
      `Mengenal kami dari: ${data.source}`,
    ].join("\n");

    onSubmit?.(data);
    if (SHEET_ENDPOINT) {
      fetch(SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: data.name.trim(),
          date: data.dateTbd ? "Belum pasti" : formatDate(data.date),
          venue: data.venueTbd ? "Belum ditentukan" : data.venue.trim(),
          services: serviceLabels,
          guests: data.guests,
          source: data.source,
        }),
      }).catch(() => {});
    }
    if (WHATSAPP_NUMBER) {
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      setWaUrl(url);
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setStep(8);
  };

  const reset = () => {
    setData({ name: "", date: "", dateTbd: false, venue: "", venueTbd: false, services: [], guests: "", source: "" });
    setStep(0);
  };

  // Keyboard: Enter = lanjut, huruf A–E = pilih opsi, Esc = tutup pop-up
  keyHandler.current = (e) => {
    if (e.key === "Escape" && asModal) return onClose?.();
    const tag = e.target?.tagName;
    if (e.key === "Enter" && tag !== "BUTTON" && tag !== "TEXTAREA") {
      if (step === 0) return setStep(1);
      if (step >= 1 && step <= TOTAL) {
        e.preventDefault();
        return next();
      }
    }
    if (step >= 4 && step <= 6 && tag !== "INPUT" && /^[a-z]$/i.test(e.key) && !e.metaKey && !e.ctrlKey) {
      const idx = e.key.toLowerCase().charCodeAt(0) - 97;
      if (step === 4 && SERVICES[idx]) toggleService(SERVICES[idx].id);
      if (step === 5 && GUEST_OPTIONS[idx]) chooseGuests(GUEST_OPTIONS[idx]);
      if (step === 6 && SOURCE_OPTIONS[idx]) chooseSource(SOURCE_OPTIONS[idx]);
    }
  };

  useEffect(() => {
    if (asModal && !open) return;
    const h = (e) => keyHandler.current?.(e);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [asModal, open]);

  useEffect(() => {
    const t = setTimeout(() => (step === 0 ? startRef.current : inputRef.current)?.focus({ preventScroll: true }), 300);
    return () => clearTimeout(t);
  }, [step]);

  useEffect(() => {
    if (!asModal || !open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [asModal, open]);

  if (asModal && !open) return null;

  const progress = step === 0 ? 0 : (Math.min(step, TOTAL) / TOTAL) * 100;
  const firstName = data.name.trim().split(" ")[0];

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center">
            <p className="lv-fade mb-6 text-[11px] uppercase tracking-[0.35em] text-[#8C837B]">Begin our dialogue</p>
            <h1 style={{ fontFamily: SERIF }} className="lv-fade-2 text-[44px] font-light leading-[1.05] md:text-[64px]">
              Tell us about <br className="hidden sm:block" />
              your <em className="italic">celebration</em>
            </h1>
            <div className="lv-fade-2 mx-auto my-8 h-px w-12 bg-[#CFC5B8]" />
            <p className="lv-fade-3 mx-auto max-w-md text-[15px] leading-relaxed text-[#6F665F]">
              Setiap perayaan layak dirancang dengan sepenuh hati. Ceritakan sedikit tentang acara Anda, dan tim kami akan
              menghubungi Anda secara personal untuk membahas konsep, tema, hingga anggaran.
            </p>
            <div className="lv-fade-3 mt-10 flex flex-col items-center gap-4">
              <PrimaryButton ref={startRef} onClick={() => setStep(1)}>
                Mulai
              </PrimaryButton>
              <span className="text-[11px] tracking-[0.15em] text-[#A39A91]">± 1 menit · 6 pertanyaan</span>
            </div>
          </div>
        );

      case 1:
        return (
          <>
            <Question eyebrow="Perkenalan" title="Boleh kami tahu nama Anda?" />
            <TextField
              ref={inputRef}
              value={data.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Nama lengkap"
              autoComplete="name"
              aria-label="Nama lengkap"
            />
          </>
        );

      case 2:
        return (
          <>
            <Question eyebrow="Tanggal" title="Kapan hari bahagia Anda?" />
            <Calendar
              value={data.date}
              disabled={data.dateTbd}
              onChange={(iso) => {
                setData((d) => ({ ...d, date: iso, dateTbd: false }));
                setError("");
              }}
            />
            <p style={{ fontFamily: SERIF }} className="mt-6 min-h-[28px] text-xl italic text-[#2B2826]">
              {data.date && !data.dateTbd ? formatDate(data.date) : ""}
            </p>
            <Toggle checked={data.dateTbd} onChange={(v) => set("dateTbd", v)}>
              Tanggal belum pasti
            </Toggle>
          </>
        );

      case 3:
        return (
          <>
            <Question eyebrow="Lokasi" title="Di mana acara akan berlangsung?" />
            <div className={`transition-opacity duration-500 ${data.venueTbd ? "opacity-30" : ""}`}>
              <TextField
                ref={inputRef}
                value={data.venue}
                disabled={data.venueTbd}
                onChange={(e) => set("venue", e.target.value)}
                placeholder="Nama gedung, hotel, atau rumah"
                aria-label="Lokasi atau venue"
              />
            </div>
            <Toggle checked={data.venueTbd} onChange={(v) => set("venueTbd", v)}>
              Venue belum ditentukan
            </Toggle>
          </>
        );

      case 4:
        return (
          <>
            <Question eyebrow="Layanan" title="Dekorasi apa yang Anda butuhkan?" hint="Boleh pilih lebih dari satu." />
            <div className="space-y-3">
              {SERVICES.map((s, i) => (
                <Choice
                  key={s.id}
                  letter={String.fromCharCode(65 + i)}
                  label={s.label}
                  desc={s.desc}
                  selected={data.services.includes(s.id)}
                  onClick={() => toggleService(s.id)}
                />
              ))}
            </div>
          </>
        );

      case 5:
        return (
          <>
            <Question eyebrow="Tamu" title="Perkiraan jumlah tamu undangan?" />
            <div className="space-y-3">
              {GUEST_OPTIONS.map((g, i) => (
                <Choice
                  key={g}
                  letter={String.fromCharCode(65 + i)}
                  label={g}
                  selected={data.guests === g}
                  onClick={() => chooseGuests(g)}
                />
              ))}
            </div>
          </>
        );

      case 6:
        return (
          <>
            <Question eyebrow="Sumber" title="Dari mana Anda pertama kali mengenal kami?" />
            <div className="space-y-3">
              {SOURCE_OPTIONS.map((src, i) => (
                <Choice
                  key={src}
                  letter={String.fromCharCode(65 + i)}
                  label={src}
                  selected={data.source === src}
                  onClick={() => chooseSource(src)}
                />
              ))}
            </div>
          </>
        );

      case 7: {
        const rows = [
          ["Nama", data.name.trim(), 1],
          ["Tanggal", data.dateTbd ? "Belum pasti" : formatDate(data.date), 2],
          ["Lokasi", data.venueTbd ? "Belum ditentukan" : data.venue.trim(), 3],
          ["Layanan", serviceLabels, 4],
          ["Tamu", data.guests, 5],
          ["Sumber", data.source, 6],
        ];
        return (
          <>
            <Question
              eyebrow="Satu langkah lagi"
              title="Mohon periksa kembali"
              hint="Setelah dikirim, percakapan akan dilanjutkan melalui WhatsApp."
            />
            <dl className="divide-y divide-[#DDD4C8] border-y border-[#DDD4C8]">
              {rows.map(([label, value, target]) => (
                <div key={label} className="flex items-baseline gap-4 py-4">
                  <dt className="w-20 shrink-0 text-[11px] uppercase tracking-[0.2em] text-[#8C837B]">{label}</dt>
                  <dd style={{ fontFamily: SERIF }} className="flex-1 text-lg leading-snug">
                    {value}
                  </dd>
                  <button
                    type="button"
                    onClick={() => setStep(target)}
                    className="text-[11px] tracking-[0.15em] text-[#8C837B] underline-offset-4 transition-colors hover:text-[#5B2F33] hover:underline"
                  >
                    Ubah
                  </button>
                </div>
              ))}
            </dl>
          </>
        );
      }

      case 8:
        return (
          <div className="text-center">
            <p className="lv-fade mb-6 text-[11px] uppercase tracking-[0.35em] text-[#8C837B]">With gratitude</p>
            <h2 style={{ fontFamily: SERIF }} className="lv-fade-2 text-[44px] font-light leading-[1.05] md:text-[60px]">
              Thank you, <em className="italic">{firstName}</em>.
            </h2>
            <div className="lv-fade-2 mx-auto my-8 h-px w-12 bg-[#CFC5B8]" />
            <p className="lv-fade-3 mx-auto max-w-md text-[15px] leading-relaxed text-[#6F665F]">
              Cerita Anda sudah kami terima. Kirimkan pesan di WhatsApp yang baru saja terbuka, dan tim Lunéva akan
              membalas Anda secara personal.
            </p>
            <div className="lv-fade-3 mt-10 flex flex-col items-center gap-5">
              {waUrl && (
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <PrimaryButton tabIndex={-1}>Buka WhatsApp</PrimaryButton>
                </a>
              )}
              <button
                type="button"
                onClick={asModal ? onClose : reset}
                className="text-[11px] uppercase tracking-[0.25em] text-[#8C837B] transition-colors hover:text-[#2B2826]"
              >
                {asModal ? "Tutup" : "Isi ulang"}
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const panel = (
    <div
      style={{ fontFamily: SANS }}
      className={`relative flex w-full flex-col bg-[#F4F0EA] text-[#2B2826] antialiased ${
        asModal
          ? "h-[min(780px,94svh)] max-w-3xl overflow-y-auto rounded-[4px] shadow-[0_40px_80px_-30px_rgba(43,40,38,0.55)] lv-fade"
          : "min-h-[100svh]"
      }`}
    >
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

      {/* garis progres */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[#E6DED3]">
        <div className="h-full bg-[#2B2826] transition-all duration-700 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <header className="grid grid-cols-[4rem_1fr_4rem] items-center px-6 pt-8 md:px-12">
        <span className="text-[11px] tracking-[0.2em] text-[#8C837B]">
          {step >= 1 && step <= TOTAL ? `${pad(step)} / ${pad(TOTAL)}` : ""}
        </span>
        <div className="text-center">
          <div style={{ fontFamily: SERIF }} className="pl-[0.45em] text-[22px] tracking-[0.45em]">
            {BRAND}
          </div>
          <div className="mt-1 pl-[0.5em] text-[9px] tracking-[0.5em] text-[#8C837B]">{BRAND_SUB}</div>
        </div>
        <span className="text-right">
          {asModal && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-xl text-[#8C837B] transition-colors hover:bg-[#2B2826]/[0.06] hover:text-[#2B2826]"
            >
              ×
            </button>
          )}
        </span>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-12 md:px-12">
        <div key={step} className="lv-fade w-full max-w-xl">
          {renderStep()}
          <p className={`mt-6 min-h-[20px] text-sm text-[#5B2F33] transition-opacity duration-300 ${error ? "opacity-100" : "opacity-0"}`} role="alert">
            {error}
          </p>
        </div>
      </main>

      {step >= 1 && step <= 7 && (
        <footer className="flex items-center justify-between px-6 pb-8 md:px-12">
          <button
            type="button"
            onClick={back}
            className="text-[11px] uppercase tracking-[0.25em] text-[#8C837B] transition-colors hover:text-[#2B2826]"
          >
            ← Kembali
          </button>
          <div className="flex items-center gap-5">
            {step <= TOTAL && (
              <span className="hidden text-[11px] tracking-[0.1em] text-[#A39A91] md:inline">
                tekan <span className="text-[#6F665F]">Enter ↵</span>
              </span>
            )}
            <PrimaryButton onClick={step === 7 ? submit : next}>{step === 7 ? "Kirim" : "Lanjut"}</PrimaryButton>
          </div>
        </footer>
      )}
    </div>
  );

  if (!asModal) return panel;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Form konsultasi Lunéva"
      className="lv-backdrop fixed inset-0 z-50 flex items-center justify-center bg-[#2B2826]/40 p-3 backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && onClose?.()}
    >
      {panel}
    </div>
  );
}
