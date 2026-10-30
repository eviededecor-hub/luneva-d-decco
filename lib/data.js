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

const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// Foto besar di bagian atas (berganti otomatis)
export const heroSlides = [
  { src: u("photo-1519741497674-611481863552"), kicker: "Reception", place: "Bandar Lampung" },
  { src: u("photo-1511285560929-80b456fea0bc"), kicker: "Ceremony", place: "Pantai Mutun" },
  { src: u("photo-1522673607200-164d1b6ce486"), kicker: "Intimate", place: "Metro" },
];

export const categories = ["All", "Reception", "Ceremony", "Intimate", "Engagement"];

export const works = [
  { src: u("photo-1465495976277-4387d4b0b4c6", 900), title: "A Garden Vow", cat: "Reception", place: "Bandar Lampung" },
  { src: u("photo-1460978812857-470ed1c77af0", 900), title: "Long Table", cat: "Intimate", place: "Pesawaran" },
  { src: u("photo-1520854221256-17451cc331bf", 900), title: "Ivory Akad", cat: "Ceremony", place: "Bandar Lampung" },
  { src: u("photo-1515934751635-c81c6bc9a2d8", 900), title: "Soft Promise", cat: "Engagement", place: "Metro" },
  { src: u("photo-1469371670807-013ccf25f16a", 900), title: "Golden Hour", cat: "Reception", place: "Kalianda" },
  { src: u("photo-1507504031003-b417219a0fde", 900), title: "Under the Arch", cat: "Ceremony", place: "Pantai Mutun" },
  { src: u("photo-1583939003579-730e3918a45a", 900), title: "Quiet Dinner", cat: "Intimate", place: "Bandar Lampung" },
  { src: u("photo-1537633552985-df8429e8048b", 900), title: "First Yes", cat: "Engagement", place: "Pringsewu" },
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
  src: u("photo-1519225421980-715cb0215aed", 1400),
  text: "A beautiful room is not only seen. It is remembered by how it made you feel.",
  sign: "L.D.",
};
