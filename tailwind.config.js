/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F4",    // latar utama terang
        cream: "#F1E9DE",    // latar bagian Services
        sand: "#E4D9C8",     // panel foto saat memuat
        gold: "#B08D5B",     // aksen emas utama
        golddeep: "#8A6B40", // emas untuk teks kecil di latar terang
        goldlight: "#C9A877",// emas untuk teks di latar gelap
        muted: "#6B655D",    // teks sekunder
        ink: "#1A1816",      // teks utama
        night: "#131210",    // latar gelap (Works & footer)
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Montserrat", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: { soft: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
