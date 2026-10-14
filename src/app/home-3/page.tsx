import React from "react";
import HeaderStyle3 from "@/components/headers/HeaderStyle3";
import Hero3Centered from "@/components/heroes/Hero3Centered";
import Testimonials3EmergencyFeed from "@/components/testimonials/Testimonials3EmergencyFeed";
import ServicesStyle3 from "@/components/services/ServicesStyle3";
import AboutWhyStyle3 from "@/components/about/AboutWhyStyle3";
import FAQStyle3 from "@/components/faq/FAQStyle3";
import CTAStyle3 from "@/components/cta/CTAStyle3";
import FooterStyle3 from "@/components/footers/FooterStyle3";

export const metadata = {
  title: "Homepage 3 (Rapid Emergency Response & Centered Layout) | Agape",
  description: "High-urgency emergency dispatch hero with centered typography, direct hotline, zero overtime charges, priority intervention services, FAQs, and 24/7 fleet command.",
};

export default function Home3Page() {
  return (
    <div className="min-h-screen bg-[#070A11] text-white flex flex-col">
      {/* HEADER 3 */}
      <HeaderStyle3 />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Hero3Centered />
        <Testimonials3EmergencyFeed />
        <ServicesStyle3 />
        <AboutWhyStyle3 />
        <FAQStyle3 />
        <CTAStyle3 />
      </main>

      {/* FOOTER 3 */}
      <FooterStyle3 />
    </div>
  );
}
