"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Calendar,
  Zap,
  Clock,
  ShieldAlert,
  CheckCircle,
  Radio,
  Flame,
  Snowflake,
  Droplet,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";

export default function Hero3Centered() {
  return (
    <section className="relative overflow-hidden bg-[#070A11] text-white py-20 sm:py-28 lg:py-36 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Ultra-wide container with centered content */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-7">
          {/* Top Live Emergency Ribbon */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Radio className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            <span>24/7 Rapid Response Active • Avg Metro Arrival: 35–45 Mins</span>
          </div>

          {/* Centered Massive Headline */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black font-montserrat tracking-tight leading-[1.08] text-white">
            EMERGENCY HVAC &amp; PLUMBING. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
              ZERO OVERTIME FEES. EVER.
            </span>
          </h1>

          {/* Centered Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 font-poppins leading-relaxed max-w-2xl mx-auto">
            When heat fails in freezing winter, AC cuts out in peak humidity, or pipes burst—our licensed master technicians arrive with fully-stocked trucks to restore your home fast.
          </p>

          {/* Centered Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={COMPANY_INFO.phoneTel}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-black px-8 py-4 rounded-xl text-base sm:text-lg transition-all font-montserrat shadow-xl hover:shadow-red-600/30 animate-emergency-pulse"
            >
              <PhoneCall className="w-5 h-5 animate-bounce" />
              <span>EMERGENCY CALL: {COMPANY_INFO.phone}</span>
            </a>

            <a
              href="#appointment"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg transition-all font-montserrat border border-slate-700 shadow-sm"
            >
              <Calendar className="w-5 h-5 text-sky-400" />
              <span>Schedule Non-Urgent</span>
            </a>
          </div>

          {/* Centered Trust Indicators */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-2 text-white">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>24/7 Live Dispatch</span>
            </span>
            <span className="flex items-center gap-2 text-white">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>$0 Emergency Surcharge</span>
            </span>
            <span className="flex items-center gap-2 text-white">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Upfront Flat Rates</span>
            </span>
            <span className="flex items-center gap-2 text-white">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>100% Guaranteed</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
