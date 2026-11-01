import { Bodoni_Moda, Jost, Pinyon_Script } from "next/font/google";
import "./globals.css";

const serif = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-serif" });
const sans = Jost({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-sans" });
const script = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-script" });

export const metadata = {
  title: "Lunéva D Deco — Wedding Decoration & Styling, Lampung",
  description: "Dekorasi dan styling pernikahan bernuansa editorial di Lampung.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
