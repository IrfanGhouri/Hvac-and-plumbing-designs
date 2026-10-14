import type { Metadata } from "next";
import { Poppins, Montserrat, Caveat } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const caveat = Caveat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agape - AC, Heating & Plumbing | 24/7 Emergency Service",
  description:
    "Top-rated HVAC and master plumbing services in New York. 24/7 Emergency availability with no extra charges for nights, weekends, or holidays. Call (917) 776-3603.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${caveat.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-400 selection:text-slate-900">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
