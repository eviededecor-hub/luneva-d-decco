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
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Inquire", href: "#contact" },
];

// Foto & teks untuk tata letak editorial
const W = (d, f) => `/works/${d}/${f}.jpg`;
export const editorial = {
  // 3 foto berdampingan di bagian pembuka (kiri, tengah, kanan)
  triptych: [W("nindya-dio", "nd-02"), W("nindya-dio", "nd-13"), W("revita-ankas", "ra-14")],
  experience: {
    main: W("nindya-dio", "nd-18"),
    small: W("revita-ankas", "ra-04"),
    labels: ["Weddings", "Akad Nikah", "Engagements"],
    kicker: "Decoration for the romantic souls",
    text: "We design rooms the way a story unfolds: velvet that catches the light, flowers that fill a wall, an aisle you remember walking down. Every detail is chosen with you, from the first moodboard to the last candle.",
  },
  portfolioBand: W("nindya-dio", "nd-22"),
  portfolioIntro: "Every celebration tells a different story. Explore a collection of rooms we dressed for couples across Lampung, each one planned with intention and finished by hand.",
  about: {
    main: W("nindya-dio", "nd-12"),
    smallLeft: W("ikhfa-ricky", "ir-23"),
    smallRight: W("vp", "vp-04"),
    lines: ["Decoration studio", "Formerly Evie Decoration", "Based in Lampung, Indonesia"],
    text: "We are a small team of decorators and florists. We still work the way we started as Evie Decoration: listening first, then building a pelaminan, an akad corner and every table around the two of you.",
  },
};

// Kategori filter. Kategori tanpa karya otomatis disembunyikan.
// Setiap album: cover = foto sampul di grid (dipotong tegak 3:4), desc = keterangan singkat di bawah foto.
export const categories = ["All", "Reception", "Ceremony", "Intimate", "Engagement"];

export const works = [
  {
    src: "/works/quraini-alfany-engagement/qe-01.jpg",
    title: "Quraini & Alfany",
    cover: "/works/quraini-alfany-engagement/qe-01.jpg",
    word: "PROMESSE",
    trio: ["/works/quraini-alfany-engagement/qe-04.jpg", "/works/quraini-alfany-engagement/qe-10.jpg", "/works/quraini-alfany-engagement/qe-16.jpg"],
    cat: "Engagement",
    place: "Lampung",
    // Album: lamaran — beludru navy, lili terompet putih & tangga bunga lavender
    album: [
      ...Array.from({ length: 19 }, (_, i) => `/works/quraini-alfany-engagement/qe-${String(i + 1).padStart(2, "0")}.jpg`),
      { video: "/works/quraini-alfany-engagement/qe-v01.mp4", poster: "/works/quraini-alfany-engagement/qe-v01.jpg" },
    ],
  },
  {
    src: "/works/ratih-denis/rd-01.jpg",
    title: "Ratih & Denis",
    cover: "/works/ratih-denis/rd-01.jpg",
    word: "PAON",
    trio: ["/works/ratih-denis/rd-03.jpg", "/works/ratih-denis/rd-07.jpg", "/works/ratih-denis/rd-11.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: gebyok emas, mural merak, dinding mawar merah-pink & lorong wisteria
    album: [
      ...Array.from({ length: 13 }, (_, i) => `/works/ratih-denis/rd-${String(i + 1).padStart(2, "0")}.jpg`),
      { video: "/works/ratih-denis/rd-v01.mp4", poster: "/works/ratih-denis/rd-v01.jpg" },
    ],
  },
  {
    src: "/works/ayu-restian/ay-01.jpg",
    title: "Ayu & Restian",
    cover: "/works/ayu-restian/ay-01.jpg",
    word: "HONNEUR",
    trio: ["/works/ayu-restian/ay-04.jpg", "/works/ayu-restian/ay-10.jpg", "/works/ayu-restian/ay-16.jpg"],
    cat: "Reception",
    place: "Pantai Tiska",
    // Album: pedang pora TNI AL, ukiran barok putih, bunga merah & lorong kupu-kupu menyala
    album: Array.from({ length: 20 }, (_, i) => `/works/ayu-restian/ay-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/carissa-sendy/cs-01.jpg",
    title: "Carissa & Sendy",
    cover: "/works/carissa-sendy/cs-01.jpg",
    word: "ROMANCE",
    trio: ["/works/carissa-sendy/cs-05.jpg", "/works/carissa-sendy/cs-14.jpg", "/works/carissa-sendy/cs-24.jpg"],
    cat: "Reception",
    place: "Gedung Golkar",
    // Album: pelaminan kuil romawi, bunga merah-biru-krem & langit-langit wisteria
    album: Array.from({ length: 30 }, (_, i) => `/works/carissa-sendy/cs-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/naisya-irvan/ni-01.jpg",
    title: "Naisya & Irvan",
    desc: "Giant white blooms and a glowing butterfly aisle",
    cover: "/works/naisya-irvan/ni-13.jpg",
    word: "PAPILLON",
    trio: ["/works/naisya-irvan/ni-03.jpg", "/works/naisya-irvan/ni-08.jpg", "/works/naisya-irvan/ni-13.jpg"],
    cat: "Ceremony",
    place: "Ballroom Akar Hotel",
    // Album: akad — bunga putih raksasa, lorong kupu-kupu menyala & langit kupu-kupu kertas
    album: [
      ...Array.from({ length: 15 }, (_, i) => `/works/naisya-irvan/ni-${String(i + 1).padStart(2, "0")}.jpg`),
      { video: "/works/naisya-irvan/ni-v01.mp4", poster: "/works/naisya-irvan/ni-v01.jpg" },
    ],
  },
  {
    src: "/works/aulia-ardi/aa-01.jpg",
    title: "Aulia & Ardi",
    desc: "Roman pillars, peach drapes and a wall of red roses",
    cover: "/works/aulia-ardi/aa-01.jpg",
    word: "TEMPLE",
    trio: ["/works/aulia-ardi/aa-05.jpg", "/works/aulia-ardi/aa-12.jpg", "/works/aulia-ardi/aa-20.jpg"],
    cat: "Reception",
    place: "Gedung Ernawan",
    // Album: pilar romawi, tirai peach, dinding mawar merah & gazebo lili gantung
    album: [
      ...Array.from({ length: 30 }, (_, i) => `/works/aulia-ardi/aa-${String(i + 1).padStart(2, "0")}.jpg`),
      { video: "/works/aulia-ardi/aa-v01.mp4", poster: "/works/aulia-ardi/aa-v01.jpg" },
      { video: "/works/aulia-ardi/aa-v02.mp4", poster: "/works/aulia-ardi/aa-v02.jpg" },
    ],
  },
  {
    src: "/works/irma-alfarizi/ia-01.jpg",
    title: "Irma & Alfarizi",
    desc: "Golden Lampung adat, gebyok and a wisteria gate",
    cover: "/works/irma-alfarizi/ia-01.jpg",
    word: "ROYAUME",
    trio: ["/works/irma-alfarizi/ia-05.jpg", "/works/irma-alfarizi/ia-15.jpg", "/works/irma-alfarizi/ia-25.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: pedang pora, adat Lampung emas, gebyok & gerbang wisteria
    album: Array.from({ length: 37 }, (_, i) => `/works/irma-alfarizi/ia-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/brenda-rio/br-01.jpg",
    title: "Brenda & Rio",
    desc: "Giant white blooms and an aisle of hanging lilies",
    cover: "/works/brenda-rio/br-01.jpg",
    word: "FLEUR",
    trio: ["/works/brenda-rio/br-02.jpg", "/works/brenda-rio/br-04.jpg", "/works/brenda-rio/br-06.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: bunga putih raksasa, dinding mawar merah-pink & lorong lili gantung
    album: [
      ...Array.from({ length: 6 }, (_, i) => `/works/brenda-rio/br-${String(i + 1).padStart(2, "0")}.jpg`),
      { video: "/works/brenda-rio/br-v01.mp4", poster: "/works/brenda-rio/br-v01.jpg" },
      { video: "/works/brenda-rio/br-v02.mp4", poster: "/works/brenda-rio/br-v02.jpg" },
    ],
  },
  {
    src: "/works/sabrina-sandi/ss-01.jpg",
    title: "Sabrina & Sandi",
    desc: "Lampung adat in peach drapes and pink clouds",
    cover: "/works/sabrina-sandi/ss-01.jpg",
    word: "PÊCHE",
    trio: ["/works/sabrina-sandi/ss-03.jpg", "/works/sabrina-sandi/ss-07.jpg", "/works/sabrina-sandi/ss-11.jpg"],
    cat: "Reception",
    place: "Gedung Ernawan",
    // Album: akad & resepsi adat Lampung — tirai peach, lili gantung & awan pink
    album: Array.from({ length: 13 }, (_, i) => `/works/sabrina-sandi/ss-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/trisila-andri/ta-01.jpg",
    title: "Trisila & Andri",
    desc: "A Javanese gebyok and a red velvet aisle",
    cover: "/works/trisila-andri/ta-01.jpg",
    word: "CRAMOISI",
    trio: ["/works/trisila-andri/ta-04.jpg", "/works/trisila-andri/ta-09.jpg", "/works/trisila-andri/ta-14.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: adat Jawa — gebyok emas, lorong beludru merah & taman bunga
    album: [
      ...Array.from({ length: 19 }, (_, i) => `/works/trisila-andri/ta-${String(i + 1).padStart(2, "0")}.jpg`),
      { video: "/works/trisila-andri/ta-v01.mp4", poster: "/works/trisila-andri/ta-v01.jpg" },
    ],
  },
  {
    src: "/works/quraini-alfany/qa-01.jpg",
    title: "Quraini & Alfany",
    desc: "White arches, navy velvet and blue hydrangea",
    cover: "/works/quraini-alfany/qa-01.jpg",
    word: "AZUR",
    trio: ["/works/quraini-alfany/qa-05.jpg", "/works/quraini-alfany/qa-15.jpg", "/works/quraini-alfany/qa-25.jpg"],
    cat: "Reception",
    place: "Balong Kuring",
    // Album: akad & resepsi adat — lengkung putih, beludru navy & hortensia biru
    album: [
      ...Array.from({ length: 34 }, (_, i) => `/works/quraini-alfany/qa-${String(i + 1).padStart(2, "0")}.jpg`),
      { video: "/works/quraini-alfany/qa-v01.mp4", poster: "/works/quraini-alfany/qa-v01.jpg" },
    ],
  },
  {
    src: "/works/dini-ilza/di-01.jpg",
    title: "Dini & Ilza",
    desc: "A pink cloud sky, gold carvings and rose walls",
    cover: "/works/dini-ilza/di-01.jpg",
    word: "ROSÉE",
    trio: ["/works/dini-ilza/di-04.jpg", "/works/dini-ilza/di-10.jpg", "/works/dini-ilza/di-16.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: akad & resepsi — langit awan pink, ukiran emas & dinding mawar
    album: Array.from({ length: 20 }, (_, i) => `/works/dini-ilza/di-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/rosyid-utami/ru-01.jpg",
    title: "Rosyid & Utami",
    desc: "Golden arches, flower walls and soft mist",
    cover: "/works/rosyid-utami/ru-01.jpg",
    word: "JARDIN",
    trio: ["/works/rosyid-utami/ru-10.jpg", "/works/rosyid-utami/ru-30.jpg", "/works/rosyid-utami/ru-50.jpg"],
    cat: "Reception",
    place: "Mahligai Agung",
    // Album: akad & resepsi adat Lampung — lengkung emas, dinding bunga & kabut
    album: Array.from({ length: 79 }, (_, i) => `/works/rosyid-utami/ru-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/zakia-andi/za-01.jpg",
    title: "Zakia & Andi",
    desc: "Flower walls, a velvet aisle and crystal chandeliers",
    cover: "/works/zakia-andi/za-07.jpg",
    word: "SPLENDEUR",
    trio: ["/works/zakia-andi/za-12.jpg", "/works/zakia-andi/za-15.jpg", "/works/zakia-andi/za-31.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: akad & resepsi adat — dinding bunga, lorong beludru & lampu kristal
    album: Array.from({ length: 38 }, (_, i) => `/works/zakia-andi/za-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/ade-nepti/an-01.jpg",
    title: "Ade & Nepti",
    desc: "A red velvet aisle and a Roman pillar pelaminan",
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
    desc: "Black and maroon velvet with a wall of red blooms",
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
    desc: "Roman pillars and butterfly lights",
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
    desc: "Crimson velvet and a giant white bloom",
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
    desc: "Burgundy blooms and a cloud aisle",
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
    desc: "Emerald drapes and white florals",
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
    desc: "Lampung adat in red and gold",
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
    desc: "An intimate engagement with a wall of flowers",
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
