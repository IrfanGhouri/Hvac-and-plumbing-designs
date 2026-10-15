"use client";

import React, { useState } from "react";
import HeaderStyle1 from "@/components/headers/HeaderStyle1";
import HeaderStyle2 from "@/components/headers/HeaderStyle2";
import HeaderStyle3 from "@/components/headers/HeaderStyle3";
import HeaderStyle4 from "@/components/headers/HeaderStyle4";

import HeroLiquidSwap from "@/components/heroes/HeroLiquidSwap";
import Hero2LiquidBg from "@/components/heroes/Hero2LiquidBg";
import Hero3Centered from "@/components/heroes/Hero3Centered";
import Hero4EstimateForm from "@/components/heroes/Hero4EstimateForm";

import Testimonials1Marquee from "@/components/testimonials/Testimonials1Marquee";
import Testimonials2Bento from "@/components/testimonials/Testimonials2Bento";
import Testimonials3EmergencyFeed from "@/components/testimonials/Testimonials3EmergencyFeed";
import Testimonials4Executive from "@/components/testimonials/Testimonials4Executive";

import ServicesStyle1 from "@/components/services/ServicesStyle1";
import ServicesStyle2 from "@/components/services/ServicesStyle2";
import ServicesStyle3 from "@/components/services/ServicesStyle3";
import ServicesStyle4 from "@/components/services/ServicesStyle4";

import AboutWhyStyle1 from "@/components/about/AboutWhyStyle1";
import AboutWhyStyle2 from "@/components/about/AboutWhyStyle2";
import AboutWhyStyle3 from "@/components/about/AboutWhyStyle3";
import AboutWhyStyle4 from "@/components/about/AboutWhyStyle4";

import FAQStyle1 from "@/components/faq/FAQStyle1";
import FAQStyle2 from "@/components/faq/FAQStyle2";
import FAQStyle3 from "@/components/faq/FAQStyle3";
import FAQStyle4 from "@/components/faq/FAQStyle4";

import CTAStyle1 from "@/components/cta/CTAStyle1";
import CTAStyle2 from "@/components/cta/CTAStyle2";
import CTAStyle3 from "@/components/cta/CTAStyle3";
import CTAStyle4 from "@/components/cta/CTAStyle4";

import FooterStyle1 from "@/components/footers/FooterStyle1";
import FooterStyle2 from "@/components/footers/FooterStyle2";
import FooterStyle3 from "@/components/footers/FooterStyle3";
import FooterStyle4 from "@/components/footers/FooterStyle4";

export default function HomePage() {
  const [selectedStyle, setSelectedStyle] = useState<number>(1);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative">
      {/* =========================================================
          ACTIVE HEADER
          ========================================================= */}
      {selectedStyle === 1 && <HeaderStyle1 />}
      {selectedStyle === 2 && <HeaderStyle2 />}
      {selectedStyle === 3 && <HeaderStyle3 />}
      {selectedStyle === 4 && <HeaderStyle4 />}

      {/* =========================================================
          MAIN CONTENT PER STYLE
          ========================================================= */}
      <main className="flex-1">
        {/* STYLE 1: Industrial Navy & Amber */}
        {selectedStyle === 1 && (
          <>
            <HeroLiquidSwap />
            <ServicesStyle1 />
            <AboutWhyStyle1 />
            <Testimonials1Marquee />
            <FAQStyle1 />
            <CTAStyle1 />
          </>
        )}

        {/* STYLE 2: Scandinavian Luxury & Sand */}
        {selectedStyle === 2 && (
          <>
            <Hero2LiquidBg />
            <Testimonials2Bento />
            <ServicesStyle2 />
            <AboutWhyStyle2 />
            <FAQStyle2 />
            <CTAStyle2 />
          </>
        )}

        {/* STYLE 3: Rapid Emergency Dispatch */}
        {selectedStyle === 3 && (
          <>
            <Hero3Centered />
            <Testimonials3EmergencyFeed />
            <ServicesStyle3 />
            <AboutWhyStyle3 />
            <FAQStyle3 />
            <CTAStyle3 />
          </>
        )}

        {/* STYLE 4: Metropolitan Architectural */}
        {selectedStyle === 4 && (
          <>
            <Hero4EstimateForm />
            <Testimonials4Executive />
            <ServicesStyle4 />
            <AboutWhyStyle4 />
            <FAQStyle4 />
            <CTAStyle4 />
          </>
        )}
      </main>

      {/* =========================================================
          FOOTER PER STYLE
          ========================================================= */}
      {selectedStyle === 1 && <FooterStyle1 />}
      {selectedStyle === 2 && <FooterStyle2 />}
      {selectedStyle === 3 && <FooterStyle3 />}
      {selectedStyle === 4 && <FooterStyle4 />}

      {/* =========================================================
          MINIMAL FLOATING DESIGN SWITCHER (BOTTOM LEFT)
          ========================================================= */}
      <aside className="fixed bottom-6 left-6 z-50">
        <div className="bg-slate-950/90 backdrop-blur-md text-white p-2 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-1.5">
          <span className="text-[11px] font-bold text-slate-400 px-2 uppercase tracking-wider hidden sm:inline">
            Designs:
          </span>
          {[1, 2, 3, 4].map((num) => {
            const isActive = selectedStyle === num;
            return (
              <button
                key={num}
                type="button"
                onClick={() => setSelectedStyle(num)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-md scale-105"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                Style {num}
              </button>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
