"use client";

import React from "react";
import {
  Radio,
  Zap,
  PhoneCall,
  Clock,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Flame,
  Snowflake,
  Droplet,
  CheckCircle,
} from "lucide-react";
import { SERVICES_DATA, SubServiceItem } from "@/data/servicesData";
import { COMPANY_INFO } from "@/data/navigation";

export default function ServicesStyle3() {
  const acData = SERVICES_DATA.ac;
  const heatingData = SERVICES_DATA.heating;
  const plumbingData = SERVICES_DATA.plumbing;

  return (
    <div className="bg-[#070A11] text-white">
      {/* =========================================================================
          PARENT SERVICE 1: RAPID AC RECOVERY (HIGH-URGENCY TACTICAL)
          ========================================================================= */}
      <section id="ac" className="py-16 sm:py-24 border-b border-slate-800/80 relative overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          {/* Header & Rapid Dispatch Status */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 text-sky-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                <span>Active Cooling Fleet Dispatched</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight leading-tight">
                Summer Cooling Failures. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-300">
                  Restored Within 45 Minutes.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-poppins leading-relaxed">
                {acData.whyBest}
              </p>
            </div>

            {/* Differentiator Strip */}
            <div className="lg:col-span-5 bg-[#111726] border border-slate-700/80 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Dispatch Guarantee</span>
                <span className="text-xs font-black text-amber-400">$0 Overtime Fee</span>
              </div>

              <div className="space-y-3">
                {acData.differentiators.map((diff, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">{diff.title}</span>
                      <span className="text-slate-400 text-[11px]">{diff.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Sub-Services Cards */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Cooling Units &amp; Emergency Recovery Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {acData.subServices.map((sub) => (
                <SubServiceCardStyle3 key={sub.id} item={sub} tagColor="sky" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARENT SERVICE 2: HEATING EMERGENCY DISPATCH (CRIMSON CODE RED)
          ========================================================================= */}
      <section id="heating" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0A0D15] relative overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          {/* Header & Rapid Dispatch Status */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                <span>Zero Heat Emergency Protocol</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight leading-tight">
                No Heat in Freezing Weather? <br />
                <span className="text-red-500">Immediate Truck Deployment.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-poppins leading-relaxed">
                {heatingData.whyBest}
              </p>
            </div>

            {/* Differentiator Strip */}
            <div className="lg:col-span-5 bg-[#111726] border border-red-500/30 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs uppercase font-bold text-red-400 tracking-wider">Winter Freeze Policy</span>
                <span className="text-xs font-black text-white">24/7/365 On-Call</span>
              </div>

              <div className="space-y-3">
                {heatingData.differentiators.map((diff, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">{diff.title}</span>
                      <span className="text-slate-400 text-[11px]">{diff.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Sub-Services Cards */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Emergency Heating &amp; Boiler Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {heatingData.subServices.map((sub) => (
                <SubServiceCardStyle3 key={sub.id} item={sub} tagColor="red" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARENT SERVICE 3: PLUMBING EMERGENCY DISPATCH (CYAN CODE BLUE)
          ========================================================================= */}
      <section id="plumbing" className="py-16 sm:py-24 border-b border-slate-800/80 relative overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          {/* Header & Rapid Dispatch Status */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Droplet className="w-4 h-4 text-cyan-400" />
                <span>Burst Pipe &amp; Drain Priority Dispatch</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight leading-tight">
                Flooding or Broken Pipes? <br />
                <span className="text-cyan-400">Immediate Containment.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-poppins leading-relaxed">
                {plumbingData.whyBest}
              </p>
            </div>

            {/* Differentiator Strip */}
            <div className="lg:col-span-5 bg-[#111726] border border-cyan-500/30 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">Water Line Policy</span>
                <span className="text-xs font-black text-white">NYC Master Licensed</span>
              </div>

              <div className="space-y-3">
                {plumbingData.differentiators.map((diff, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">{diff.title}</span>
                      <span className="text-slate-400 text-[11px]">{diff.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Sub-Services Cards */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Master Plumbing &amp; Rapid Interventions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plumbingData.subServices.map((sub) => (
                <SubServiceCardStyle3 key={sub.id} item={sub} tagColor="cyan" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-Service Card Component for Style 3 (Tactical Emergency Dispatch)
function SubServiceCardStyle3({ item, tagColor }: { item: SubServiceItem; tagColor: "sky" | "red" | "cyan" }) {
  const colorScheme = {
    sky: {
      border: "border-sky-500/30 hover:border-sky-500/70",
      badge: "text-sky-400 bg-sky-950/70 border-sky-800",
      btn: "bg-sky-500 hover:bg-sky-400 text-slate-950",
    },
    red: {
      border: "border-red-500/30 hover:border-red-500/70",
      badge: "text-red-400 bg-red-950/70 border-red-800",
      btn: "bg-red-600 hover:bg-red-500 text-white",
    },
    cyan: {
      border: "border-cyan-500/30 hover:border-cyan-500/70",
      badge: "text-cyan-400 bg-cyan-950/70 border-cyan-800",
      btn: "bg-cyan-500 hover:bg-cyan-400 text-slate-950",
    },
  }[tagColor];

  return (
    <div
      className={`bg-[#111726] border ${colorScheme.border} rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group`}
    >
      <div className="relative h-44 w-full overflow-hidden bg-slate-900">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-[#111726]/40 to-transparent" />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h4 className="text-base sm:text-lg font-bold text-white font-montserrat">
            {item.name}
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed font-poppins">
            {item.shortDesc}
          </p>
        </div>

        <div className="space-y-1.5 pt-2 border-t border-slate-800 text-[11px] text-slate-300">
          {item.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <a
            href={COMPANY_INFO.phoneTel}
            className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-black font-montserrat transition-all shadow-md ${colorScheme.btn}`}
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Dispatch Unit Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
