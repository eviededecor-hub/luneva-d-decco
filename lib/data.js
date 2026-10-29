// ============================================================
//  Ubah semua isi website dari file ini saja.
// ============================================================

export const site = {
  brand: "LUNÉVA",
  brandSub: "D Deco",
  city: "Lampung, Indonesia",
  email: "hello@lunevaddeco.com",          // ganti dengan email asli
  whatsapp: "6281234567890",               // format internasional tanpa "+" — ganti
  whatsappLabel: "+62 812 3456 7890",
  instagram: "lunevaddeco",                // ganti dengan handle Instagram asli
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Analog Series", href: "#analog" },
  { label: "Contact Us", href: "#contact" },
];

const u = (id, w = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroSlides = [
  {
    src: u("photo-1519741497674-611481863552"),
    kicker: "Wedding",
    title: "Nadia & Arga",
    place: "Bandar Lampung",
  },
  {
    src: u("photo-1511285560929-80b456fea0bc"),
    kicker: "Pre-Wedding",
    title: "Salsa & Bima",
    place: "Pantai Mutun",
  },
  {
    src: u("photo-1522673607200-164d1b6ce486"),
    kicker: "Couple Session",
    title: "Rara & Dimas",
    place: "Way Kambas",
  },
];

export const categories = ["All", "Wedding", "Couple Session", "On Film", "Engagement"];

// span: ukuran kartu di grid 12 kolom (desktop)
export const works = [
  { src: u("photo-1465495976277-4387d4b0b4c6", 1400), title: "A Garden Vow", cat: "Wedding", year: "2026", span: "md:col-span-7 md:row-span-2", ratio: "aspect-[4/5] md:aspect-auto md:h-full" },
  { src: u("photo-1460978812857-470ed1c77af0", 1000), title: "Long Table, Low Light", cat: "Wedding", year: "2026", span: "md:col-span-5", ratio: "aspect-[4/3]" },
  { src: u("photo-1507504031003-b417219a0fde", 1000), title: "Before the Rain", cat: "Couple Session", year: "2025", span: "md:col-span-5", ratio: "aspect-[4/3]" },
  { src: u("photo-1515934751635-c81c6bc9a2d8", 1000), title: "Ivory Hour", cat: "Engagement", year: "2025", span: "md:col-span-4", ratio: "aspect-[3/4]" },
  { src: u("photo-1469371670807-013ccf25f16a", 1000), title: "Grain & Gold", cat: "On Film", year: "2025", span: "md:col-span-4", ratio: "aspect-[3/4]" },
  { src: u("photo-1520854221256-17451cc331bf", 1000), title: "Petals in Passing", cat: "Wedding", year: "2025", span: "md:col-span-4", ratio: "aspect-[3/4]" },
  { src: u("photo-1583939003579-730e3918a45a", 1400), title: "Quiet Promise", cat: "Engagement", year: "2024", span: "md:col-span-5", ratio: "aspect-[4/5]" },
  { src: u("photo-1537633552985-df8429e8048b", 1400), title: "Portra Afternoon", cat: "On Film", year: "2024", span: "md:col-span-7", ratio: "aspect-[4/5] md:aspect-[7/5]" },
];

export const analog = [
  { src: u("photo-1525258946800-98cfd641d0de", 900), frame: "07", stock: "Kodak Portra 400" },
  { src: u("photo-1478146896981-b80fe463b330", 900), frame: "12", stock: "Fuji Pro 400H" },
  { src: u("photo-1464366400600-7168b8af9bc3", 900), frame: "19", stock: "Ilford HP5" },
  { src: u("photo-1544078751-58fee2d8a03b", 900), frame: "24", stock: "Kodak Gold 200" },
];
