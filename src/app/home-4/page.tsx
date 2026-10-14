import React from "react";
import HeaderStyle4 from "@/components/headers/HeaderStyle4";
import Hero4EstimateForm from "@/components/heroes/Hero4EstimateForm";
import Testimonials4Executive from "@/components/testimonials/Testimonials4Executive";
import ServicesStyle4 from "@/components/services/ServicesStyle4";
import AboutWhyStyle4 from "@/components/about/AboutWhyStyle4";
import FAQStyle4 from "@/components/faq/FAQStyle4";
import CTAStyle4 from "@/components/cta/CTAStyle4";
import FooterStyle4 from "@/components/footers/FooterStyle4";

export const metadata = {
  title: "Homepage 4 (Metropolitan Architectural & Free Estimate Form) | Agape",
  description: "Architectural executive hero with interactive upfront estimate form, luxury aesthetics, case study testimonials, mechanical engineering specifications, FAQs, and architectural contract specifications.",
};

export default function Home4Page() {
  return (
    <div className="min-h-screen bg-[#111317] text-white flex flex-col">
      {/* HEADER 4 */}
      <HeaderStyle4 />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Hero4EstimateForm />
        <Testimonials4Executive />
        <ServicesStyle4 />
        <AboutWhyStyle4 />
        <FAQStyle4 />
        <CTAStyle4 />
      </main>

      {/* FOOTER 4 */}
      <FooterStyle4 />
    </div>
  );
}
