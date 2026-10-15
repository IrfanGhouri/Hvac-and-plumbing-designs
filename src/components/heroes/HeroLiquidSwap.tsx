"use client";

import React, { useState } from "react";
import { Phone } from "lucide-react";
import LiquidSwap from "@/components/ui/LiquidSwap";
import { COMPANY_INFO } from "@/data/navigation";

// Authentic, verified high-resolution HVAC and plumbing imagery
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80", // High efficiency AC & Heat Pump
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80", // Master Plumbing Fixtures
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80", // Clean Heating & Climate
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80", // Modern Residential Comfort
];

export default function HeroLiquidSwap() {
  const [, setActiveSlide] = useState(0);

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-[#071322] text-white overflow-hidden flex flex-col justify-center">
      {/* Background subtle atmospheric gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071322] via-[#0A192F] to-[#040A14] pointer-events-none" />

      {/* Desktop (lg+): Full Height Edge-to-Edge Three.js Liquid Ripple Canvas on the Right */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-[48%] xl:w-[46%] 2xl:w-[44%] h-full z-10 pointer-events-auto">
        {/* Full Height Canvas with gentle left edge color fade */}
        <div className="w-full h-full relative overflow-hidden">
          <LiquidSwap
            images={HERO_IMAGES}
            transitionDuration={2.0}
            glassRefractionStrength={0.32}
            glassChromaticAberration={0.03}
            glassBubbleClarity={0.92}
            glassEdgeGlow={1.2}
            glassLiquidFlow={1.0}
            startAtCursor={true}
            autoCycle={true}
            autoCycleDelay={5500}
            showControls={true}
            showDots={true}
            showCaptions={false}
            onSwap={(index) => setActiveSlide(index)}
            className="w-full h-full object-cover"
          />

          {/* Smooth narrow gradient dissolve on the left 80px of the canvas */}
          <div className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10 bg-gradient-to-r from-[#071322] via-[#071322]/70 to-transparent" />
        </div>

        {/* 
            Narrow Soft Blur Seam (Decreased width, feather-faded on BOTH left and right ends).
            Using radial/linear mask so the blur fades into 0 opacity on both edges - ZERO sharp boundaries.
        */}
        <div className="absolute inset-y-0 -left-12 w-24 pointer-events-none z-20 backdrop-blur-sm [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_40%,black_60%,transparent_100%)] [mask-image:linear-gradient(to_right,transparent_0%,black_40%,black_60%,transparent_100%)]" />
      </div>

      {/* Main Content: Left Column aligned to Header Container Width */}
      <div className="max-w-[1720px] mx-auto w-full px-4 sm:px-6 lg:px-12 relative z-20 py-12 lg:py-0">
        <div className="lg:w-[56%] xl:w-[58%] 2xl:w-[60%] flex flex-col justify-center space-y-6">
          {/* Clear, Punchy Human Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-montserrat tracking-tight text-white leading-[1.06] max-w-3xl">
            Fast Heating, Cooling <br />
            <span className="text-amber-400">&amp; Master Plumbing.</span>
          </h1>

          {/* Short, Honest Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-poppins leading-relaxed max-w-2xl">
            Same-day service across Manhattan, Brooklyn, and Queens. Upfront flat rates with zero overtime fees — day or night.
          </p>

          {/* Single Action Button: Call Us Now (font-semibold lighter text) */}
          <div className="pt-2">
            <a
              href={COMPANY_INFO.phoneTel}
              className="inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-semibold px-8 py-3.5 rounded-xl text-sm sm:text-base font-montserrat shadow-md hover:shadow-amber-400/20 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current flex-shrink-0" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile view (< lg): Three.js Canvas sits below text */}
      <div className="lg:hidden w-full h-[420px] sm:h-[500px] relative overflow-hidden mt-6">
        <LiquidSwap
          images={HERO_IMAGES}
          transitionDuration={2.0}
          glassRefractionStrength={0.32}
          glassChromaticAberration={0.03}
          glassBubbleClarity={0.92}
          glassEdgeGlow={1.2}
          glassLiquidFlow={1.0}
          startAtCursor={true}
          autoCycle={true}
          autoCycleDelay={5500}
          showControls={true}
          showDots={true}
          showCaptions={false}
          onSwap={(index) => setActiveSlide(index)}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
