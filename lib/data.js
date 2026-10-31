// ============================================================
//  Ubah semua isi website dari file ini saja.
// ============================================================

export const site = {
  brand: "LUNÉVA",
  brandSub: "D Deco",
  city: "Lampung, Indonesia",
  formerly: "Evie Decoration",
  email: "evie.dedecor@gmail.com",
  whatsapp: "6282282942526",               // format internasional tanpa "+"
  whatsappLabel: "+62 822 8294 2526",
  instagram: "evie_decoration1",
  maps: "https://maps.app.goo.gl/34bmwhe1Y3xupcV7A",   // lokasi studio di Google Maps
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

// Halaman pembuka bergaya majalah (desain hitam-putih, foto berwarna)
export const hero = {
  src: "/hero/cover-01.jpg",
  word: "LUNÉVA",
  left: "Amour",
  right: "Élégance",
  title: "Decoration that feels like the two of you.",
  text: "Ceremonies and receptions designed around texture, light and a few chosen flowers. Based in Lampung, Indonesia.",
  trio: ["/works/tia-fauzi/tf-22.jpg", "/works/annisa-david/ad-02.jpg", "/works/ikhfa-ricky/ir-23.jpg"],
  words: ["Pelaminan", "Akad", "Floral", "Tablescape"],
};

// Kategori filter. Kategori tanpa karya otomatis disembunyikan.
// Setiap album: cover = foto utama sampul, word = kata besar di atas foto, trio = 3 foto kecil di sampul.
export const categories = ["All", "Reception", "Ceremony", "Intimate", "Engagement"];

export const works = [
  {
    src: "/works/ade-nepti/an-01.jpg",
    title: "Ade & Nepti",
    cover: "/works/ade-nepti/an-05.jpg",
    word: "VELOURS",
    trio: ["/works/ade-nepti/an-02.jpg", "/works/ade-nepti/an-08.jpg", "/works/ade-nepti/an-16.jpg"],
    cat: "Ceremony",
    place: "Lampung",
    // Album: akad nikah — lorong beludru merah, lampu kap & pelaminan pilar romawi
    album: [
      ...Array.from({ length: 17 }, (_, i) => `/works/ade-nepti/an-${String(i + 1).padStart(2, "0")}.jpg`),
      { video: "/works/ade-nepti/an-v01.mp4", poster: "/works/ade-nepti/an-v01.jpg" },
      { video: "/works/ade-nepti/an-v02.mp4", poster: "/works/ade-nepti/an-v02.jpg" },
      { video: "/works/ade-nepti/an-v03.mp4", poster: "/works/ade-nepti/an-v03.jpg" },
    ],
  },
  {
    src: "/works/nindya-dio/nd-01.jpg",
    title: "Nindya & Dio",
    cover: "/works/nindya-dio/nd-15.jpg",
    word: "HÉRITAGE",
    trio: ["/works/nindya-dio/nd-05.jpg", "/works/nindya-dio/nd-11.jpg", "/works/nindya-dio/nd-21.jpg"],
    cat: "Reception",
    place: "Gedung Ernawan",
    // Album: adat Jawa — gebyok, beludru hitam & marun, dinding bunga merah
    album: [
      ...Array.from({ length: 22 }, (_, i) => `/works/nindya-dio/nd-${String(i + 1).padStart(2, "0")}.jpg`),
      { video: "/works/nindya-dio/nd-v01.mp4", poster: "/works/nindya-dio/nd-v01.jpg" },
      { video: "/works/nindya-dio/nd-v02.mp4", poster: "/works/nindya-dio/nd-v02.jpg" },
    ],
  },
  {
    src: "/works/annisa-david/ad-01.jpg",
    title: "Annisa & David",
    cover: "/works/annisa-david/ad-12.jpg",
    word: "LUMIÈRE",
    trio: ["/works/annisa-david/ad-02.jpg", "/works/annisa-david/ad-21.jpg", "/works/annisa-david/ad-36.jpg"],
    cat: "Reception",
    place: "Ballroom Poltekkes Lampung",
    // Album: 23 Agustus 2026 — akad & resepsi adat, pilar romawi & lampu kupu-kupu
    album: [
      ...Array.from({ length: 44 }, (_, i) => `/works/annisa-david/ad-${String(i + 1).padStart(2, "0")}.jpg`),
      { video: "/works/annisa-david/ad-v01.mp4", poster: "/works/annisa-david/ad-v01.jpg" },
      { video: "/works/annisa-david/ad-v02.mp4", poster: "/works/annisa-david/ad-v02.jpg" },
    ],
  },
  {
    src: "/works/ualfa-verdy/uv-01.jpg",
    title: "Ualfa & Verdy",
    cover: "/works/ualfa-verdy/uv-01.jpg",
    word: "PASSION",
    trio: ["/works/ualfa-verdy/uv-11.jpg", "/works/ualfa-verdy/uv-19.jpg", "/works/ualfa-verdy/uv-21.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: akad adat & resepsi — crimson velvet & giant white bloom
    album: [
      ...Array.from({ length: 27 }, (_, i) => `/works/ualfa-verdy/uv-${String(i + 1).padStart(2, "0")}.jpg`),
      { video: "/works/ualfa-verdy/uv-v01.mp4", poster: "/works/ualfa-verdy/uv-v01.jpg" },
      { video: "/works/ualfa-verdy/uv-v02.mp4", poster: "/works/ualfa-verdy/uv-v02.jpg" },
    ],
  },
  {
    src: "/works/revita-ankas/ra-01.jpg",
    title: "Revita & Ankas",
    cover: "/works/revita-ankas/ra-03.jpg",
    word: "ÉTERNEL",
    trio: ["/works/revita-ankas/ra-04.jpg", "/works/revita-ankas/ra-06.jpg", "/works/revita-ankas/ra-14.jpg"],
    cat: "Reception",
    place: "Kota Agung",
    // Album: akad & resepsi — burgundy, giant bloom & cloud aisle
    album: [
      ...Array.from({ length: 15 }, (_, i) => `/works/revita-ankas/ra-${String(i + 1).padStart(2, "0")}.jpg`),
      // Video: cukup tulis { video: "/path.mp4", poster: "/path.jpg" }
      { video: "/works/revita-ankas/ra-v01.mp4", poster: "/works/revita-ankas/ra-v01.jpg" },
      { video: "/works/revita-ankas/ra-v02.mp4", poster: "/works/revita-ankas/ra-v02.jpg" },
    ],
  },
  {
    src: "/works/tia-fauzi/tf-01.jpg",
    title: "Tia & Fauzi",
    cover: "/works/tia-fauzi/tf-13.jpg",
    word: "GRÂCE",
    trio: ["/works/tia-fauzi/tf-05.jpg", "/works/tia-fauzi/tf-22.jpg", "/works/tia-fauzi/tf-26.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: 4 Oktober 2026 — akad, adat Lampung & detail dekorasi emerald
    album: Array.from({ length: 26 }, (_, i) => `/works/tia-fauzi/tf-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/ikhfa-ricky/ir-01.jpg",
    title: "Ikhfa & Ricky",
    cover: "/works/ikhfa-ricky/ir-01.jpg",
    word: "AMOUR",
    trio: ["/works/ikhfa-ricky/ir-03.jpg", "/works/ikhfa-ricky/ir-14.jpg", "/works/ikhfa-ricky/ir-23.jpg"],
    cat: "Reception",
    place: "Bandar Lampung",
    // Album: Wedding Resepsi — akad, adat Lampung & detail dekorasi
    album: Array.from({ length: 30 }, (_, i) => `/works/ikhfa-ricky/ir-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/vp/vp-01.jpg",
    title: "V & P",
    cover: "/works/vp/vp-07.jpg",
    word: "PROMESSE",
    trio: ["/works/vp/vp-01.jpg", "/works/vp/vp-04.jpg", "/works/vp/vp-10.jpg"],
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
