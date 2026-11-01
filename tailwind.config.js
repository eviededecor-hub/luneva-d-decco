/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Editorial Vintage: krem hangat + marun beludru + arang
        ivory: "#F4F0EA",    // latar utama krem
        paper: "#FAF7F2",    // krem lebih terang
        cream: "#ECE5DA",    // krem sedikit lebih gelap
        sand: "#DED3C4",     // panel foto saat memuat
        wine: "#4A0E17",     // marun beludru (aksen utama)
        rose: "#B98A8F",     // dusty rose untuk judul besar
        gold: "#4A0E17",     // (nama lama) = marun
        golddeep: "#4A0E17", // (nama lama) = marun
        goldlight: "#E8D3CB",// aksen terang di latar marun
        muted: "#6B625B",    // teks sekunder
        ink: "#1A1A1A",      // arang
        night: "#2D050B",    // marun tua (latar halaman & footer)
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Bodoni Moda", "Didot", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Jost", "Futura", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "Pinyon Script", "cursive"],
      },
      transitionTimingFunction: { soft: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
