import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-serif" });
const sans = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans" });

export const metadata = {
  title: "Lunéva D Deco — Wedding Decoration & Styling, Lampung",
  description: "Dekorasi dan styling pernikahan bernuansa editorial di Lampung.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
