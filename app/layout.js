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
    "Vision Technolabs is an Ahmedabad-based web, mobile app and AI development company serving clients in the India.",
  icons: {
    icon: "/logo/vision_logo.png",
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
