import { Inter, Tiro_Devanagari_Marathi } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Nabvar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const tiroMarathi = Tiro_Devanagari_Marathi({
  weight: "400",
  subsets: ["devanagari"],
  variable: "--font-tiro",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${tiroMarathi.variable} font-sans bg-spiritual-cream text-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}