import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Vardha Warehousing | Premium Warehouse Space in Gorakhpur",

  description:
    "Warehouse Expertise Since 1987. Premium warehousing, storage, logistics and distribution solutions in Gorakhpur with 24×7 truck access, CCTV security, office facilities and commercial infrastructure.",

  keywords: [
    "Vardha Warehousing",
    "Warehouse in Gorakhpur",
    "Warehouse Space",
    "Commercial Warehouse",
    "Storage Solutions",
    "Warehousing Services",
    "Logistics Solutions",
    "Distribution Center",
    "Industrial Storage",
    "Warehouse Rental",
  ],

  openGraph: {
    title: "Vardha Warehousing",
    description:
      "Premium warehouse space in Gorakhpur with warehouse expertise since 1987.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} min-h-screen bg-slate-50 text-gray-900 antialiased`}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />

        <FloatingWhatsapp />
      </body>
    </html>
  );
}