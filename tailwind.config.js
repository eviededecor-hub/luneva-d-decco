/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Palet hitam-putih (nama lama dipertahankan agar semua bagian ikut berubah)
        ivory: "#FFFFFF",    // kertas putih
        cream: "#ECE9E5",    // abu-abu hangat sangat muda (latar section)
        sand: "#D9D5D0",     // panel foto saat memuat
        gold: "#111111",     // aksen = hitam
        golddeep: "#3D3D3D", // teks label di latar terang
        goldlight: "#FFFFFF",// aksen di latar gelap = putih
        muted: "#5E5E5E",    // teks sekunder
        ink: "#111111",      // teks utama
        night: "#0B0B0B",    // latar gelap
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Jost", "Futura", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: { soft: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
