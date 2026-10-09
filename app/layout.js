import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import SvgSprite from "@/components/SvgSprite";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Vision Technolabs | Web, Mobile App & AI Development Company",
  description:
    "Vision Technolabs is an Ahmedabad-based web, mobile app and AI development company serving clients in the US, UK and India.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='11' fill='%234f46e5'/%3E%3Cpath d='M7 20s5-8 13-8 13 8 13 8-5 8-13 8S7 20 7 20z' fill='none' stroke='white' stroke-width='2.4'/%3E%3Ccircle cx='20' cy='20' r='4.2' fill='white'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <SvgSprite />
        <Loader />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
