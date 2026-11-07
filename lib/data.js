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
  // ── SLIDESHOW PEMBUKA ─────────────────────────────────────────────
  // Tiga kolom foto tegak. Setiap kolom berganti foto sendiri-sendiri.
  // Untuk menambah foto: tambahkan satu baris W("nama-folder", "nama-file") ke kolom yang diinginkan.
  // Untuk foto dari luar (misal Unsplash), tulis langsung alamatnya: "https://images.unsplash.com/...".
  heroColumns: {
    left: [ // foto pengantin
      W("nindya-dio", "nd-02"),
      W("ualfa-verdy", "uv-11"),
      W("ikhfa-ricky", "ir-02"),
      W("annisa-david", "ad-24"),
      W("revita-ankas", "ra-11"),
    ],
    middle: [ // foto pasangan
      W("nindya-dio", "nd-13"),
      W("ualfa-verdy", "uv-19"),
      W("naisya-irvan", "ni-13"),
      W("tia-fauzi", "tf-04"),
      W("revita-ankas", "ra-04"),
    ],
    right: [ // detail dekorasi
      W("revita-ankas", "ra-14"),
      W("tia-fauzi", "tf-22"),
      W("ikhfa-ricky", "ir-23"),
      W("vp", "vp-04"),
      W("annisa-david", "ad-36"),
    ],
  },
  heroInterval: 5000, // lama tiap foto tampil (milidetik). 5000 = 5 detik
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
    src: "/works/roy-esa/re-01.jpg",
    title: "Roy & Esa",
    cover: "/works/roy-esa/re-01.jpg",
    word: "CUIVRE",
    trio: ["/works/roy-esa/re-04.jpg", "/works/roy-esa/re-10.jpg", "/works/roy-esa/re-16.jpg"],
    cat: "Reception",
    place: "Balong Kuring",
    // Album: adat Sunda & Lampung — gebyok emas, lorong wisteria kristal, bunga tembaga-lilac
    album: Array.from({ length: 20 }, (_, i) => `/works/roy-esa/re-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/widya-rizky/wr-01.jpg",
    title: "Widya & Rizky",
    cover: "/works/widya-rizky/wr-01.jpg",
    word: "BOUGIE",
    trio: ["/works/widya-rizky/wr-08.jpg", "/works/widya-rizky/wr-20.jpg", "/works/widya-rizky/wr-35.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: adat Lampung & Jawa — pilar romawi, tirai peach, rak lilin, wisteria & lampu kristal
    album: Array.from({ length: 48 }, (_, i) => `/works/widya-rizky/wr-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/ofy-arif/oa-01.jpg",
    title: "Ofy & Arif",
    cover: "/works/ofy-arif/oa-01.jpg",
    word: "JARDIN",
    trio: ["/works/ofy-arif/oa-05.jpg", "/works/ofy-arif/oa-15.jpg", "/works/ofy-arif/oa-28.jpg"],
    cat: "Reception",
    place: "Outdoor Amalia Hotel",
    // Album: garden wedding — bunga putih raksasa, buku puisi, arch biru-pink & lorong wisteria
    album: Array.from({ length: 39 }, (_, i) => `/works/ofy-arif/oa-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/fenty-dion/fd-01.jpg",
    title: "Fenty & Dion",
    cover: "/works/fenty-dion/fd-01.jpg",
    word: "LILAS",
    trio: ["/works/fenty-dion/fd-04.jpg", "/works/fenty-dion/fd-08.jpg", "/works/fenty-dion/fd-12.jpg"],
    cat: "Reception",
    place: "Gedung Pramuka",
    // Album: adat Lampung — panggung tirai lukis & awan, wisteria ungu, lampu kristal & bunga lilac-blush
    album: Array.from({ length: 15 }, (_, i) => `/works/fenty-dion/fd-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/eloi-fadhlan/ef-01.jpg",
    title: "Eloi & Fadhlan",
    cover: "/works/eloi-fadhlan/ef-01.jpg",
    word: "SPLENDIDE",
    trio: ["/works/eloi-fadhlan/ef-04.jpg", "/works/eloi-fadhlan/ef-10.jpg", "/works/eloi-fadhlan/ef-16.jpg"],
    cat: "Reception",
    place: "Gedung Mahligai UBL",
    // Album: adat Jawa — ukiran emas, mural joglo & merak, dinding bunga merah, tenda tirai peach
    album: Array.from({ length: 20 }, (_, i) => `/works/eloi-fadhlan/ef-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/nani-fajar/nf-01.jpg",
    title: "Nani & Fajar",
    cover: "/works/nani-fajar/nf-01.jpg",
    word: "DORURE",
    trio: ["/works/nani-fajar/nf-04.jpg", "/works/nani-fajar/nf-10.jpg", "/works/nani-fajar/nf-16.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: adat Sunda & Jawa — panggung ukiran emas, bunga peach-lavender & lorong wisteria merah
    album: Array.from({ length: 20 }, (_, i) => `/works/nani-fajar/nf-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/sinoktarina-fitrarizky/sf-01.jpg",
    title: "Sinoktarina & Fitrarizky",
    cover: "/works/sinoktarina-fitrarizky/sf-01.jpg",
    word: "GLYCINE",
    trio: ["/works/sinoktarina-fitrarizky/sf-04.jpg", "/works/sinoktarina-fitrarizky/sf-10.jpg", "/works/sinoktarina-fitrarizky/sf-16.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: lorong wisteria & lampu kristal, panggung istana putih & bunga merah-fuchsia
    album: Array.from({ length: 20 }, (_, i) => `/works/sinoktarina-fitrarizky/sf-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/desty-agung-akad/dk-01.jpg",
    title: "Desty & Agung",
    cover: "/works/desty-agung-akad/dk-01.jpg",
    word: "BLANC",
    trio: ["/works/desty-agung-akad/dk-04.jpg", "/works/desty-agung-akad/dk-09.jpg", "/works/desty-agung-akad/dk-14.jpg"],
    cat: "Ceremony",
    place: "Akad Nikah",
    // Album: akad — dinding bunga putih & sage, kursi emas & ronce melati
    album: Array.from({ length: 17 }, (_, i) => `/works/desty-agung-akad/dk-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/thur-arif/th-01.jpg",
    title: "Thyur & Arif",
    cover: "/works/thur-arif/th-01.jpg",
    word: "ÉMERAUDE",
    trio: ["/works/thur-arif/th-05.jpg", "/works/thur-arif/th-15.jpg", "/works/thur-arif/th-25.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: adat Jawa — tirai beludru zamrud, lampu kristal & dinding bunga merah-sage
    album: Array.from({ length: 40 }, (_, i) => `/works/thur-arif/th-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/desty-agung/dg-01.jpg",
    title: "Desty & Agung",
    cover: "/works/desty-agung/dg-01.jpg",
    word: "ÉTOILE",
    trio: ["/works/desty-agung/dg-05.jpg", "/works/desty-agung/dg-14.jpg", "/works/desty-agung/dg-24.jpg"],
    cat: "Reception",
    place: "Ballroom UIN",
    // Album: adat Lampung — bunga putih raksasa, tirai lampu bintang & lorong wisteria kristal
    album: [
      ...Array.from({ length: 31 }, (_, i) => `/works/desty-agung/dg-${String(i + 1).padStart(2, "0")}.jpg`),
    ],
  },
  {
    src: "/works/diyan-putri/dp-01.jpg",
    title: "Diyan & Putri",
    cover: "/works/diyan-putri/dp-01.jpg",
    word: "FORÊT",
    trio: ["/works/diyan-putri/dp-02.jpg", "/works/diyan-putri/dp-03.jpg", "/works/diyan-putri/dp-04.jpg"],
    cat: "Reception",
    place: "Lampung",
    // Album: adat Jawa — mural rusa lilac, awan lukis & dinding bunga pink-ungu
    album: Array.from({ length: 4 }, (_, i) => `/works/diyan-putri/dp-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    src: "/works/ratih-kafih/rk-01.jpg",
    title: "Ratih & Kafih",
    cover: "/works/ratih-kafih/rk-01.jpg",
    word: "THÉÂTRE",
    trio: ["/works/ratih-kafih/rk-02.jpg", "/works/ratih-kafih/rk-04.jpg", "/works/ratih-kafih/rk-06.jpg"],
    cat: "Reception",
    place: "GSG UIN",
    // Album: adat Lampung — panggung tirai merah lukis, awan & dinding bunga merah-pink
    album: [
      ...Array.from({ length: 8 }, (_, i) => `/works/ratih-kafih/rk-${String(i + 1).padStart(2, "0")}.jpg`),
    ],
  },
  {
    src: "/works/rafael-inocent/rf-01.jpg",
    title: "Rafael & Inocent",
    cover: "/works/rafael-inocent/rf-01.jpg",
    word: "VELOUR",
    trio: ["/works/rafael-inocent/rf-04.jpg", "/works/rafael-inocent/rf-10.jpg", "/works/rafael-inocent/rf-16.jpg"],
    cat: "Reception",
    place: "Gedung Balong Kuring",
    // Album: adat Jawa — gebyok emas, lorong beludru merah, lampu kristal & lili terompet
    album: [
      ...Array.from({ length: 19 }, (_, i) => `/works/rafael-inocent/rf-${String(i + 1).padStart(2, "0")}.jpg`),
    ],
  },
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
