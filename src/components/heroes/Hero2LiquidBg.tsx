"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Calendar,
  Shield,
  Wind,
  Sparkles,
  ArrowUpRight,
  Award,
  CheckCircle,
} from "lucide-react";
import LiquidSwap from "@/components/ui/LiquidSwap";
import { COMPANY_INFO } from "@/data/navigation";

const HERO2_BACKGROUNDS = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80", // Modern architectural living space
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80", // Pristine master bathroom plumbing
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80", // Warm fireplace heating
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80", // High efficiency AC & heat pump
];

export default function Hero2LiquidBg() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative overflow-hidden min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] flex items-center border-b border-emerald-950/20">
      {/* =========================================================
          FULL-BLEED BACKGROUND LIQUID SWAP
          ========================================================= */}
      <div className="absolute inset-0 z-0">
        <LiquidSwap
          images={HERO2_BACKGROUNDS}
          transitionDuration={2.0}
          glassRefractionStrength={0.25}
          glassChromaticAberration={0.02}
          glassEdgeGlow={1.0}
          autoCycle={true}
          autoCycleDelay={6000}
          startAtCursor={true}
          showControls={false}
          showDots={false}
          showCaptions={false}
          onSwap={(index) => setActiveSlide(index)}
          className="w-full h-full"
        />
      </div>

      {/* Elegant Luxury Gradient Scrim for 100% Typography Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#092C28]/95 via-[#092C28]/80 to-[#092C28]/40 sm:to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#092C28]/80 via-transparent to-black/30 pointer-events-none" />

      {/* =========================================================
          FOREGROUND CONTENT (WIDE CONTAINER)
          ========================================================= */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 relative z-20 w-full">
        <div className="max-w-2xl sm:max-w-3xl space-y-6 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-900/80 backdrop-blur-md border border-emerald-600/40 text-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Scandinavian Eco-Comfort • Whisper-Quiet Engineering</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold font-montserrat tracking-tight leading-[1.08] text-white">
            Quiet Comfort, Pure Air, &amp; Master Craftsmanship.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-emerald-100/90 font-poppins leading-relaxed max-w-2xl">
            Experience ultra-quiet 24 SEER2 heat pumps and licensed master plumbing. 24/7 emergency dispatch with zero overtime fees across New York.
          </p>

          {/* Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-[#092C28]/70 backdrop-blur-md border border-emerald-700/50 p-3 rounded-2xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-800/80 flex items-center justify-center text-amber-300">
                <Wind className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Silent Operation</p>
                <p className="text-[11px] text-emerald-200">Whisper-quiet inverters</p>
              </div>
            </div>

            <div className="bg-[#092C28]/70 backdrop-blur-md border border-emerald-700/50 p-3 rounded-2xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-800/80 flex items-center justify-center text-amber-300">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Zero Extra Fees</p>
                <p className="text-[11px] text-emerald-200">24/7 Emergency care</p>
              </div>
            </div>

            <div className="bg-[#092C28]/70 backdrop-blur-md border border-emerald-700/50 p-3 rounded-2xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-800/80 flex items-center justify-center text-amber-300">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Master Certified</p>
                <p className="text-[11px] text-emerald-200">Licensed &amp; insured</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={COMPANY_INFO.phoneTel}
              className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-all font-montserrat shadow-lg hover:shadow-amber-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>

            <a
              href="#appointment"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-all font-montserrat border border-white/30 backdrop-blur-md"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </a>
          </div>

          <p className="text-xs text-emerald-300/80 pt-2 flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Background: Click anywhere on the background to trigger the liquid glass swap.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
