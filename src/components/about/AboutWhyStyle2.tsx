"use client";

import React from "react";
import { VolumeX, Shield, Leaf, Sparkles } from "lucide-react";
import NYCServiceMap from "@/components/common/NYCServiceMap";

export default function AboutWhyStyle2() {
  const points = [
    {
      title: "Whisper-Quiet Equipment",
      desc: "Our heat pumps and air systems are calibrated to operate beneath 19 dB for peaceful living.",
      icon: VolumeX,
    },
    {
      title: "Zero Surcharges Ever",
      desc: "Fair, straightforward pricing 24 hours a day with zero late-night or weekend penalties.",
      icon: Shield,
    },
    {
      title: "Rebate Filing Support",
      desc: "We file all utility paperwork so you claim up to $2,800 in clean heating and cooling rebates.",
      icon: Leaf,
    },
    {
      title: "Spotless Home Care",
      desc: "Clean drop cloths, protective boot covers, and complete cleanup after every installation.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F6] text-slate-800 border-b border-emerald-950/10">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Simple & Human Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#092C28]">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>About Agape • Clean &amp; Quiet Living</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat text-[#092C28] tracking-tight">
            Quiet Comfort. Honest Craftsmanship.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-poppins leading-relaxed">
            We believe home climate should be gentle, energy-efficient, and whisper quiet. For over twenty years, we&rsquo;ve helped New York homeowners enjoy dependable heating, cooling, and plumbing without the noise.
          </p>
        </div>

        {/* Main Grid: 4 Cards on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 4 Clean Nordic Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-emerald-950/10 rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-[#092C28] font-montserrat">
                    {pt.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-poppins">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Service Area Map */}
          <div className="lg:col-span-5">
            <NYCServiceMap theme="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
