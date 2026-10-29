/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F4",   // latar utama
        paper: "#F2EDE4",   // latar section sekunder
        sand: "#E4D9C8",    // aksen cream / soft beige
        taupe: "#9A8B78",   // aksen earthy untuk label
        muted: "#6B655D",   // teks sekunder
        ink: "#1F1D1A",     // hitam arang untuk teks
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: { label: "0.28em" },
      transitionTimingFunction: { soft: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
