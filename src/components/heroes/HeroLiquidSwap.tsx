"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Calendar,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Wrench,
  Flame,
  Snowflake,
  Droplet,
} from "lucide-react";
import LiquidSwap from "@/components/ui/LiquidSwap";
import { COMPANY_INFO } from "@/data/navigation";

// Curated high-res HVAC, plumbing and luxury climate images
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80", // Modern luxury living room climate
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80", // Luxury bathroom & plumbing
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80", // High efficiency AC & heat pump
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80", // Warm cozy heating interior
];

const HERO_CAPTIONS = [
  {
    tag: "High-Efficiency Cooling",
    title: "Whisper-Quiet AC Inverter Systems",
    description: "Multi-zone climate control engineered for maximum comfort and up to 40% energy reduction.",
  },
  {
    tag: "Master Plumbing",
    title: "Bespoke Piping & Hot Water Solutions",
    description: "Tankless water heaters, non-invasive leak repairs, and luxury fixtures installed by licensed masters.",
  },
  {
    tag: "24/7 Rapid Dispatch",
    title: "Same-Day Emergency Heat & AC Repair",
    description: "Zero overtime fees for night, weekend, or holiday emergencies. Fully stocked fleet ready.",
  },
  {
    tag: "Clean Indoor Air",
    title: "Next-Gen Filtration & Smart Thermostats",
    description: "Hospital-grade HEPA filtration and whole-home humidity balance for cleaner, healthier living.",
  },
];

export default function HeroLiquidSwap() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1E36] via-[#081526] to-[#0B1E36] text-white py-14 sm:py-20 lg:py-24 border-b border-slate-800">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Ultra-wide container */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Brand Information & CTAs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>24/7 Emergency Dispatch Active</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black font-montserrat tracking-tight leading-[1.1]">
              Mastery In <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                Air Conditioning, Heating
              </span>{" "}
              &amp; Plumbing.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 font-poppins leading-relaxed">
              Available 24 hours a day with upfront flat-rate pricing. We never charge extra for nights, weekends, or emergency calls across New York.
            </p>

            {/* Reassurance Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">No Overtime Fees</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">Upfront Rates</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black px-7 py-4 rounded-xl text-sm sm:text-base transition-all font-montserrat shadow-lg hover:shadow-amber-500/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <a
                href="#appointment"
                className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] active:scale-95 text-white font-bold px-7 py-4 rounded-xl text-sm sm:text-base transition-all font-montserrat shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </a>
            </div>
          </div>

          {/* Right Column: Custom Liquid Glass Ball Swap Frame */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[440px] sm:h-[540px] xl:h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 group">
              <LiquidSwap
                images={HERO_IMAGES}
                captions={HERO_CAPTIONS}
                transitionDuration={2.2}
                glassRefractionStrength={0.36}
                glassChromaticAberration={0.04}
                glassBubbleClarity={0.88}
                glassEdgeGlow={1.4}
                glassLiquidFlow={1.1}
                startAtCursor={true}
                autoCycle={true}
                autoCycleDelay={5500}
                onSwap={(index) => setActiveSlide(index)}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
