"use client";

import React from "react";
import { Compass, Building2, ShieldCheck, Check } from "lucide-react";
import NYCServiceMap from "@/components/common/NYCServiceMap";

export default function AboutWhyStyle4() {
  const points = [
    {
      code: "01",
      title: "Concealed Mechanicals",
      desc: "Zoned climate systems and piping integrated neatly into ceiling reveals and custom millwork.",
    },
    {
      code: "02",
      title: "Acoustic Dampening",
      desc: "Calibrated vibration isolators ensure inaudible operation throughout residences.",
    },
    {
      code: "03",
      title: "Fixed-Sum Contracts",
      desc: "Comprehensive mechanical estimates with fixed costs and zero change-order inflation.",
    },
    {
      code: "04",
      title: "DOB Permitted Work",
      desc: "All master plumbing, gas lines, and high-SEER installations fully certified to NYC code.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#111317] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Simple & Human Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 font-montserrat">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>About Agape Architectural Mechanical</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat tracking-tight uppercase">
            Precision Climate Engineering for NYC Homes.
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-poppins leading-relaxed">
            For over twenty years, Agape has collaborated with New York architects, brownstone owners, and general contractors to deliver discreet, high-performance HVAC and master plumbing.
          </p>
        </div>

        {/* Main Grid: 4 Cards on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 4 Architectural Spec Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, i) => (
              <div
                key={i}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-3 hover:border-amber-500/50 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-amber-400 block">
                  {pt.code}.
                </span>

                <h3 className="text-base font-bold text-white font-montserrat uppercase tracking-wide">
                  {pt.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-poppins">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Service Area Map */}
          <div className="lg:col-span-5">
            <NYCServiceMap theme="architectural" />
          </div>
        </div>
      </div>
    </section>
  );
}
