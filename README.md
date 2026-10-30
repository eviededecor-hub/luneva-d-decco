# Lunéva D Deco — Landing Page

Next.js 14 (App Router) + Tailwind CSS.

## Menjalankan
```bash
npm install
npm run dev      # buka http://localhost:3000
```
Untuk online: unggah folder ini ke GitHub lalu import di vercel.com (gratis).

## Mengubah isi
Semua teks, kontak, dan foto ada di `lib/data.js`:
- `site` — nama merek, email, nomor WhatsApp, handle Instagram
- `heroSlides` — 3 foto besar di bagian atas (berganti otomatis)
- `works` — kartu Selected Works (judul, kategori, lokasi, foto)
- `services` — daftar layanan
- `process` — 4 langkah proses kerja
- `quote` — kutipan dan foto di samping proses

Foto saat ini adalah placeholder dari Unsplash. Ganti dengan foto karya sendiri:
taruh file di folder `public/` (misal `public/works/nadia.jpg`) lalu tulis `src: "/works/nadia.jpg"`.

Warna & font diatur di `tailwind.config.js` dan `app/layout.js`.
