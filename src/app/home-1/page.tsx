import React from "react";
import HeaderStyle1 from "@/components/headers/HeaderStyle1";
import HeroLiquidSwap from "@/components/heroes/HeroLiquidSwap";
import Testimonials1Marquee from "@/components/testimonials/Testimonials1Marquee";
import ServicesStyle1 from "@/components/services/ServicesStyle1";
import AboutWhyStyle1 from "@/components/about/AboutWhyStyle1";
import FAQStyle1 from "@/components/faq/FAQStyle1";
import CTAStyle1 from "@/components/cta/CTAStyle1";
import FooterStyle1 from "@/components/footers/FooterStyle1";

export const metadata = {
  title: "Homepage 1 (Industrial Navy & Amber with Dual Marquees) | Agape",
  description: "Modern industrial design with liquid glass ball swap hero, dual opposite vertical marquees, comprehensive AC, Heating, and Plumbing services, About Us, FAQs, and 24/7 hotline.",
};

export default function Home1Page() {
  return (
    <div className="min-h-screen bg-[#06101E] text-white flex flex-col">
      <HeaderStyle1 />
      <main className="flex-1">
        <HeroLiquidSwap />
        <Testimonials1Marquee />
        <ServicesStyle1 />
        <AboutWhyStyle1 />
        <FAQStyle1 />
        <CTAStyle1 />
      </main>
      <FooterStyle1 />
    </div>
  );
}
