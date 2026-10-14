"use client";

import React from "react";
import { DollarSign, ShieldCheck, Truck, Sparkles, Check } from "lucide-react";
import NYCServiceMap from "@/components/common/NYCServiceMap";

export default function AboutWhyStyle1() {
  const points = [
    {
      title: "No Overtime Fees",
      desc: "Same flat price on nights, weekends, and holidays. We never charge extra for an emergency.",
      icon: DollarSign,
    },
    {
      title: "Upfront Fixed Quotes",
      desc: "You receive an exact written quote before any work starts. No surprises and no hidden fees.",
      icon: ShieldCheck,
    },
    {
      title: "Arrive Fully Stocked",
      desc: "Our vans carry over 1,200 universal parts, allowing us to fix most issues in a single visit.",
      icon: Truck,
    },
    {
      title: "Clean Home Guarantee",
      desc: "We wear shoe covers, protect your floors with runners, and leave your home spotless.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#081526] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Simple & Human Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>About Agape &amp; Why Homeowners Choose Us</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat tracking-tight">
            Family-Owned. 20 Years in New York.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-poppins leading-relaxed">
            We started Agape with a simple goal: show up on time, give an honest price, and fix the problem right the first time. Two decades later, we still treat every home like it belongs to family.
          </p>
        </div>

        {/* Main Grid: 4 Cards on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 4 Cards in 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div
                  key={i}
                  className="bg-[#0B1E36] border border-slate-700/70 rounded-2xl p-5 sm:p-6 space-y-3 hover:border-amber-500/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white font-montserrat">
                    {pt.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-poppins">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Service Area Map */}
          <div className="lg:col-span-5">
            <NYCServiceMap theme="navy" />
          </div>
        </div>
      </div>
    </section>
  );
}
