// ============================================================
//  Ubah semua isi website dari file ini saja.
// ============================================================

export const site = {
  brand: "LUNÉVA",
  brandSub: "D Deco",
  city: "Lampung, Indonesia",
  formerly: "Evie Decoration",
  email: "hello@lunevaddeco.com",          // ganti dengan email asli
  whatsapp: "6281234567890",               // format internasional tanpa "+" — ganti
  whatsappLabel: "+62 812 3456 7890",
  instagram: "lunevaddeco",                // ganti dengan handle Instagram asli
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

// Foto sampul utama di bawah tulisan LUNÉVA.
// Tambahkan baris baru di sini jika ingin sampul berganti otomatis (slider).
export const heroSlides = [
  { src: "/hero/cover-01.jpg", kicker: "Reception", place: "Lampung" },
];

// Kategori filter. Kategori tanpa karya otomatis disembunyikan.
export const categories = ["All", "Reception", "Ceremony", "Intimate", "Engagement"];

export const works = [
  {
    src: "/works/ikhfa-ricky/ir-01.jpg",
    title: "Ikhfa & Ricky",
    cat: "Reception",
    place: "Bandar Lampung",
    // Album: Wedding Resepsi — akad, adat Lampung & detail dekorasi
    album: Array.from({ length: 30 }, (_, i) => `/works/ikhfa-ricky/ir-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/vp/vp-01.jpg",
    title: "V & P",
    cat: "Engagement",
    place: "Lampung",
    // Album: kartu ini bisa diklik untuk membuka semua foto
    album: Array.from({ length: 15 }, (_, i) => `/works/vp/vp-${String(i + 1).padStart(2, "0")}.jpg`),
  },
];

export const services = [
  { icon: "stage", title: "Stage & Pelaminan", text: "Backdrop and stage designed around your venue and palette." },
  { icon: "ring", title: "Akad Setting", text: "Aisle, altar and the akad nikah table, calm and photogenic." },
  { icon: "flower", title: "Floral Styling", text: "Fresh and silk arrangements, from centrepiece to arch." },
  { icon: "table", title: "Tablescape", text: "Linen, candles and place settings for every guest table." },
];

export const process = [
  { title: "Consultation", text: "Your date, venue, guest count and the feeling you want." },
  { title: "Concept", text: "Moodboard, colour palette and a layout of the room." },
  { title: "Preparation", text: "Florals, props and a technical visit to the venue." },
  { title: "The Day", text: "We set up early and clear out after the last guest." },
];

export const quote = {
  src: "/works/vp/vp-04.jpg",
  text: "A beautiful room is not only seen. It is remembered by how it made you feel.",
  sign: "L.D.",
};
