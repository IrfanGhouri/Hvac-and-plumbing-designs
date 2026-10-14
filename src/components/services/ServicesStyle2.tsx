"use client";

import React from "react";
import {
  Wind,
  Flame,
  Droplets,
  Check,
  Shield,
  Sparkles,
  ArrowUpRight,
  Leaf,
  Compass,
  Phone,
} from "lucide-react";
import { SERVICES_DATA, SubServiceItem } from "@/data/servicesData";
import { COMPANY_INFO } from "@/data/navigation";

export default function ServicesStyle2() {
  const acData = SERVICES_DATA.ac;
  const heatingData = SERVICES_DATA.heating;
  const plumbingData = SERVICES_DATA.plumbing;

  return (
    <div className="bg-[#FAF9F6] text-slate-800">
      {/* =========================================================================
          PARENT SERVICE 1: AIR CONDITIONING (SCANDINAVIAN LUXURY & ACOUSTICS)
          ========================================================================= */}
      <section id="ac" className="py-16 sm:py-24 border-b border-emerald-950/10">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          {/* Section Header & Differentiators Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Narrative */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-emerald-950/10 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-200 text-[#092C28] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Wind className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{acData.badge}</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black font-montserrat text-[#092C28] tracking-tight leading-tight">
                  Whisper-Quiet Cooling. <br />
                  <span className="text-[#C5A880]">Pure Nordic Air.</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 font-poppins leading-relaxed">
                  {acData.whyBest}
                </p>
              </div>

              {/* Differentiators Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                {acData.differentiators.map((diff, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#092C28]">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{diff.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{diff.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metric Card */}
            <div className="lg:col-span-5 bg-[#092C28] text-white rounded-3xl p-8 sm:p-12 border border-emerald-800/40 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Clean Climate Engineering
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-montserrat text-white leading-snug">
                  Designed for Homes Where Silence Matters.
                </h3>
                <p className="text-xs text-emerald-100/80 leading-relaxed font-poppins">
                  Our inverter heat pumps modulate smoothly without the jarring clatter of traditional compressors.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-emerald-800/60">
                <div>
                  <p className="text-3xl sm:text-4xl font-black font-montserrat text-[#D4AF37]">19 dB</p>
                  <p className="text-[11px] text-emerald-200 mt-0.5">Whisper Sound Rating</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-black font-montserrat text-[#D4AF37]">$2,800</p>
                  <p className="text-[11px] text-emerald-200 mt-0.5">NY Clean Heat Rebates</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Sub-Services Cards */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Air Conditioning Sub-Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {acData.subServices.map((sub) => (
                <SubServiceCardStyle2 key={sub.id} item={sub} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARENT SERVICE 2: HEATING (NORDIC THERMAL COMFORT)
          ========================================================================= */}
      <section id="heating" className="py-16 sm:py-24 border-b border-emerald-950/10 bg-white">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-100/70 border border-amber-200 text-[#092C28] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-amber-700" />
                <span>{heatingData.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-montserrat text-[#092C28] tracking-tight leading-tight">
                Gentle Hydronic Warmth. <br />
                <span className="text-[#C5A880]">Unfailing Winter Reliability.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-poppins leading-relaxed">
                {heatingData.whyBest}
              </p>
            </div>

            {/* Differentiators Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {heatingData.differentiators.map((diff, i) => (
                <div key={i} className="bg-[#FAF9F6] border border-emerald-950/10 p-5 rounded-2xl space-y-2">
                  <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#092C28] uppercase">{diff.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Heating Sub-Services Cards */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Heating &amp; Boiler Sub-Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {heatingData.subServices.map((sub) => (
                <SubServiceCardStyle2 key={sub.id} item={sub} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARENT SERVICE 3: PLUMBING (PURE WATER & SANITARY CRAFTSMANSHIP)
          ========================================================================= */}
      <section id="plumbing" className="py-16 sm:py-24 border-b border-emerald-950/10">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-200 text-[#092C28] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Droplets className="w-3.5 h-3.5 text-emerald-700" />
                <span>{plumbingData.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-montserrat text-[#092C28] tracking-tight leading-tight">
                Architectural Plumbing. <br />
                <span className="text-[#C5A880]">Pristine Water Quality.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-poppins leading-relaxed">
                {plumbingData.whyBest}
              </p>
            </div>

            {/* Differentiators Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {plumbingData.differentiators.slice(0, 2).map((diff, i) => (
                <div key={i} className="bg-white border border-emerald-950/10 p-5 rounded-2xl space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#092C28] uppercase">{diff.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Plumbing Sub-Services Cards */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Master Plumbing Sub-Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plumbingData.subServices.map((sub) => (
                <SubServiceCardStyle2 key={sub.id} item={sub} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-Service Card Component for Style 2 (Scandinavian Bento)
function SubServiceCardStyle2({ item }: { item: SubServiceItem }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-emerald-950/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h4 className="text-base sm:text-lg font-bold text-[#092C28] font-montserrat group-hover:text-emerald-700 transition-colors">
            {item.name}
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-poppins">
            {item.shortDesc}
          </p>
        </div>

        {/* Feature bullets */}
        <div className="space-y-1.5 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
          {item.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Link Button */}
        <div className="pt-2">
          <a
            href={COMPANY_INFO.phoneTel}
            className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-full text-xs font-bold bg-[#FAF9F6] hover:bg-emerald-50 text-[#092C28] border border-emerald-950/10 transition-colors"
          >
            <span>Learn More &amp; Book</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
