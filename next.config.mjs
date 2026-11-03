/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Foto sudah dikecilkan sebelum diunggah (maks. 1800px), jadi tidak perlu
    // diolah ulang oleh Vercel. Ini menghindari batas 5.000 Image Transformations/bulan.
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};
export default nextConfig;
