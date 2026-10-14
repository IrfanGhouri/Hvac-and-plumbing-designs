"use client";

import React from "react";
import Image from "next/image";
import {
  Snowflake,
  Flame,
  Droplet,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Wrench,
  Clock,
  PhoneCall,
  Volume2,
  DollarSign,
  Search,
} from "lucide-react";
import { SERVICES_DATA, SubServiceItem } from "@/data/servicesData";
import { COMPANY_INFO } from "@/data/navigation";

export default function ServicesStyle1() {
  const acData = SERVICES_DATA.ac;
  const heatingData = SERVICES_DATA.heating;
  const plumbingData = SERVICES_DATA.plumbing;

  return (
    <div className="bg-[#06101E] text-white">
      {/* =========================================================================
          PARENT SERVICE 1: AIR CONDITIONING SECTION
          ========================================================================= */}
      <section id="ac" className="py-16 sm:py-24 border-b border-slate-800/80 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
          {/* Main 2-Column Split: Parent Showcase Left, 4 Sub-services 2x2 Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Why We Are The Best in AC & Benefits */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 text-sky-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Snowflake className="w-4 h-4 text-sky-400" />
                <span>{acData.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat tracking-tight leading-tight">
                Precision Cooling. <br />
                <span className="text-amber-400">Engineered for New York.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-poppins leading-relaxed">
                {acData.whyBest}
              </p>

              {/* Performance Stats Pill */}
              <div className="grid grid-cols-3 gap-3 bg-[#0B1E36] border border-slate-700/80 p-3 sm:p-4 rounded-2xl">
                {acData.stats.map((stat, i) => (
                  <div key={i} className="text-center border-r last:border-r-0 border-slate-700/60 pr-2">
                    <p className="text-lg sm:text-2xl font-black text-amber-400 font-montserrat">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* 3 Key Differentiators / Benefits */}
              <div className="space-y-3.5 pt-2">
                <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  What Makes Agape AC Different:
                </h3>

                <div className="space-y-3">
                  {acData.differentiators.map((diff, i) => (
                    <div key={i} className="bg-[#0B1E36]/60 border border-slate-800 p-3.5 rounded-xl flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wide">{diff.title}</h4>
                        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{diff.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact CTA */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs font-montserrat shadow-md transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call For AC Dispatch: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: 4 Sub-Services Cards in 2x2 Grid */}
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                  Our 4 Air Conditioning Sub-Services
                </h3>
                <span className="text-xs text-amber-400 font-semibold">24/7 Available</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {acData.subServices.map((sub) => (
                  <SubServiceCardStyle1 key={sub.id} item={sub} themeColor="sky" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARENT SERVICE 2: HEATING SECTION (REVERSED ALTERNATING LAYOUT)
          ========================================================================= */}
      <section id="heating" className="py-16 sm:py-24 bg-[#081526] border-b border-slate-800/80 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
          {/* Main 2-Column Split: 4 Sub-services Left, Parent Showcase Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: 4 Sub-Services Cards in 2x2 Grid */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                  Our 4 Heating &amp; Boiler Sub-Services
                </h3>
                <span className="text-xs text-red-400 font-semibold">$0 Overtime Fee</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {heatingData.subServices.map((sub) => (
                  <SubServiceCardStyle1 key={sub.id} item={sub} themeColor="amber" />
                ))}
              </div>
            </div>

            {/* Right Column: Why We Are The Best in Heating & Benefits */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4 text-red-400" />
                <span>{heatingData.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat tracking-tight leading-tight">
                Reliable Heat. <br />
                <span className="text-red-400">When Temperatures Drop.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-poppins leading-relaxed">
                {heatingData.whyBest}
              </p>

              {/* Performance Stats Pill */}
              <div className="grid grid-cols-3 gap-3 bg-[#0B1E36] border border-slate-700/80 p-3 sm:p-4 rounded-2xl">
                {heatingData.stats.map((stat, i) => (
                  <div key={i} className="text-center border-r last:border-r-0 border-slate-700/60 pr-2">
                    <p className="text-lg sm:text-2xl font-black text-amber-400 font-montserrat">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* 3 Key Differentiators / Benefits */}
              <div className="space-y-3.5 pt-2">
                <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  What Makes Agape Heating Different:
                </h3>

                <div className="space-y-3">
                  {heatingData.differentiators.map((diff, i) => (
                    <div key={i} className="bg-[#0B1E36]/60 border border-slate-800 p-3.5 rounded-xl flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0 text-red-400 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wide">{diff.title}</h4>
                        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{diff.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact CTA */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-5 py-3 rounded-xl text-xs font-montserrat shadow-md transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call For Emergency Heat: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARENT SERVICE 3: MASTER PLUMBING SECTION (FULL WIDTH SHOWCASE)
          ========================================================================= */}
      <section id="plumbing" className="py-16 sm:py-24 border-b border-slate-800/80 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
          {/* Top Parent Showcase Header with Differentiator Pills */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-10 border-b border-slate-800">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Droplet className="w-4 h-4 text-cyan-400" />
                <span>{plumbingData.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat tracking-tight leading-tight">
                Master Plumbing. <br />
                <span className="text-cyan-400">Non-Invasive Precision.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-poppins leading-relaxed">
                {plumbingData.whyBest}
              </p>
            </div>

            {/* Differentiators & Stats Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {plumbingData.differentiators.map((diff, i) => (
                <div key={i} className="bg-[#0B1E36] border border-slate-700/80 p-4 rounded-xl space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">{diff.title}</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Sub-Services Cards in 4-Column Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                Our 4 Master Plumbing Sub-Services
              </h3>
              <span className="text-xs text-cyan-400 font-semibold">NYC Licensed Plumbers</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plumbingData.subServices.map((sub) => (
                <SubServiceCardStyle1 key={sub.id} item={sub} themeColor="cyan" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-Service Card Component for Style 1
function SubServiceCardStyle1({ item, themeColor }: { item: SubServiceItem; themeColor: "sky" | "amber" | "cyan" }) {
  const accentClasses = {
    sky: "text-sky-400 border-sky-500/30 bg-sky-500/10 hover:border-sky-500/60",
    amber: "text-amber-400 border-amber-500/30 bg-amber-500/10 hover:border-amber-500/60",
    cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10 hover:border-cyan-500/60",
  }[themeColor];

  return (
    <div className="bg-[#0B1E36] border border-slate-700/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group">
      {/* Image */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-[#0B1E36]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h4 className="text-base sm:text-lg font-bold text-white font-montserrat group-hover:text-amber-400 transition-colors">
            {item.name}
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed font-poppins">
            {item.shortDesc}
          </p>
        </div>

        {/* Features Checklist */}
        <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
          {item.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href={COMPANY_INFO.phoneTel}
            className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold border transition-colors ${accentClasses}`}
          >
            <span>Book This Service</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
