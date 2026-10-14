import React from "react";
import HeaderStyle2 from "@/components/headers/HeaderStyle2";
import Hero2LiquidBg from "@/components/heroes/Hero2LiquidBg";
import Testimonials2Bento from "@/components/testimonials/Testimonials2Bento";
import ServicesStyle2 from "@/components/services/ServicesStyle2";
import AboutWhyStyle2 from "@/components/about/AboutWhyStyle2";
import FAQStyle2 from "@/components/faq/FAQStyle2";
import CTAStyle2 from "@/components/cta/CTAStyle2";
import FooterStyle2 from "@/components/footers/FooterStyle2";

export const metadata = {
  title: "Homepage 2 (Scandinavian Luxury & Background Liquid Swap) | Agape",
  description: "Scandinavian eco-comfort design featuring full-bleed background liquid glass swap, floating nav, river marquee testimonials, bespoke AC, Heating, and Plumbing services, FAQs, and Nordic luxury aesthetics.",
};

export default function Home2Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col text-slate-800">
      {/* HEADER 2 */}
      <HeaderStyle2 />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Hero2LiquidBg />
        <Testimonials2Bento />
        <ServicesStyle2 />
        <AboutWhyStyle2 />
        <FAQStyle2 />
        <CTAStyle2 />
      </main>

      {/* FOOTER 2 */}
      <FooterStyle2 />
    </div>
  );
}
