"use client";

import React from "react";
import {
  Compass,
  Building2,
  Check,
  ShieldCheck,
  ArrowRight,
  Layers,
  FileCheck,
} from "lucide-react";
import { SERVICES_DATA, SubServiceItem } from "@/data/servicesData";
import { COMPANY_INFO } from "@/data/navigation";

export default function ServicesStyle4() {
  const acData = SERVICES_DATA.ac;
  const heatingData = SERVICES_DATA.heating;
  const plumbingData = SERVICES_DATA.plumbing;

  return (
    <div className="bg-[#111317] text-white">
      {/* =========================================================================
          PARENT SERVICE 1: AIR CONDITIONING (ARCHITECTURAL SPECIFICATION 23 00 00)
          ========================================================================= */}
      <section id="ac" className="py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          {/* Architectural Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 border-b border-slate-800">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-widest font-montserrat">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Division 23 • HVAC Engineering</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight uppercase text-white leading-tight">
                Concealed Climate Architecture. <br />
                <span className="text-amber-400">Variable Refrigerant Precision.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-400 font-poppins max-w-3xl leading-relaxed">
                {acData.whyBest}
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-6 text-xs text-slate-400">
              <div className="p-4 border-l-2 border-amber-500 bg-slate-900/60">
                <p className="text-2xl font-black text-white font-montserrat">19 dB</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-0.5">Acoustic Rating</p>
              </div>
              <div className="p-4 border-l-2 border-amber-500 bg-slate-900/60">
                <p className="text-2xl font-black text-amber-400 font-montserrat">24 SEER2</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-0.5">Max Efficiency</p>
              </div>
            </div>
          </div>

          {/* Differentiators Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {acData.differentiators.map((diff, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 p-5 space-y-2">
                <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                  Specification Standard 0{i + 1}
                </span>
                <h4 className="text-sm font-bold text-white uppercase">{diff.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-poppins">{diff.description}</p>
              </div>
            ))}
          </div>

          {/* 4 Numbered Sub-Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {acData.subServices.map((sub, index) => (
              <SubServiceCardStyle4 key={sub.id} item={sub} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARENT SERVICE 2: HEATING (ARCHITECTURAL SPECIFICATION 23 20 00)
          ========================================================================= */}
      <section id="heating" className="py-16 sm:py-24 border-b border-slate-800 bg-[#14171D] relative overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          {/* Architectural Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 border-b border-slate-800">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-widest font-montserrat">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Division 23 • Hydronic &amp; Steam Systems</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight uppercase text-white leading-tight">
                High-Efficiency Hydronics. <br />
                <span className="text-amber-400">Historic Brownstone Warmth.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-400 font-poppins max-w-3xl leading-relaxed">
                {heatingData.whyBest}
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-6 text-xs text-slate-400">
              <div className="p-4 border-l-2 border-amber-500 bg-slate-900/60">
                <p className="text-2xl font-black text-white font-montserrat">98%</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-0.5">AFUE Efficiency</p>
              </div>
              <div className="p-4 border-l-2 border-amber-500 bg-slate-900/60">
                <p className="text-2xl font-black text-amber-400 font-montserrat">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-0.5">DOB Code Compliant</p>
              </div>
            </div>
          </div>

          {/* Differentiators Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {heatingData.differentiators.map((diff, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 p-5 space-y-2">
                <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                  Specification Standard 0{i + 1}
                </span>
                <h4 className="text-sm font-bold text-white uppercase">{diff.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-poppins">{diff.description}</p>
              </div>
            ))}
          </div>

          {/* 4 Numbered Sub-Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {heatingData.subServices.map((sub, index) => (
              <SubServiceCardStyle4 key={sub.id} item={sub} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARENT SERVICE 3: MASTER PLUMBING (ARCHITECTURAL SPECIFICATION 22 00 00)
          ========================================================================= */}
      <section id="plumbing" className="py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          {/* Architectural Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 border-b border-slate-800">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-widest font-montserrat">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Division 22 • Master Sanitary Architecture</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight uppercase text-white leading-tight">
                Master Sanitary Piping. <br />
                <span className="text-amber-400">Luxury Fixture Integration.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-400 font-poppins max-w-3xl leading-relaxed">
                {plumbingData.whyBest}
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-6 text-xs text-slate-400">
              <div className="p-4 border-l-2 border-amber-500 bg-slate-900/60">
                <p className="text-2xl font-black text-white font-montserrat">NYC</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-0.5">Master License</p>
              </div>
              <div className="p-4 border-l-2 border-amber-500 bg-slate-900/60">
                <p className="text-2xl font-black text-amber-400 font-montserrat">Fixed</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-0.5">Contract Pricing</p>
              </div>
            </div>
          </div>

          {/* Differentiators Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {plumbingData.differentiators.map((diff, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 p-5 space-y-2">
                <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                  Specification Standard 0{i + 1}
                </span>
                <h4 className="text-sm font-bold text-white uppercase">{diff.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-poppins">{diff.description}</p>
              </div>
            ))}
          </div>

          {/* 4 Numbered Sub-Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {plumbingData.subServices.map((sub, index) => (
              <SubServiceCardStyle4 key={sub.id} item={sub} index={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-Service Card Component for Style 4 (Architectural Specification)
function SubServiceCardStyle4({ item, index }: { item: SubServiceItem; index: number }) {
  return (
    <div className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group">
      {/* Card Header */}
      <div className="p-3 border-b border-slate-800 text-xs">
        <span className="font-mono text-amber-400 font-bold text-[11px]">0{index}. SERVICE</span>
      </div>

      {/* Image with subtle overlay */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-950">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h4 className="text-base font-bold text-white font-montserrat uppercase tracking-wide group-hover:text-amber-400 transition-colors">
            {item.name}
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed font-poppins">
            {item.shortDesc}
          </p>
        </div>

        {/* Feature Checkmarks */}
        <div className="space-y-1.5 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
          {item.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href={COMPANY_INFO.phoneTel}
            className="w-full inline-flex items-center justify-between py-2.5 px-4 text-xs font-bold text-amber-400 border border-amber-500/30 hover:bg-amber-500/10 transition-colors uppercase font-montserrat tracking-wider"
          >
            <span>Request Specification</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
