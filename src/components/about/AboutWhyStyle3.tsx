"use client";

import React from "react";
import { Clock, ShieldCheck, Truck, PhoneCall } from "lucide-react";
import NYCServiceMap from "@/components/common/NYCServiceMap";

export default function AboutWhyStyle3() {
  const points = [
    {
      title: "$0 Emergency Overtime",
      desc: "Zero overtime fees for middle-of-the-night, weekend, or holiday dispatch calls.",
      icon: ShieldCheck,
    },
    {
      title: "Real Human Dispatch",
      desc: "A knowledgeable team member answers immediately—no automated bots or call trees.",
      icon: PhoneCall,
    },
    {
      title: "Stocked Fleet on Road",
      desc: "Our vehicles carry universal replacement parts to fix over 96% of calls on the first trip.",
      icon: Truck,
    },
    {
      title: "Licensed Master Trades",
      desc: "EPA-certified technicians and NYC DOB Licensed Master Plumbers on every dispatch.",
      icon: Clock,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#070A11] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Simple & Human Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>About Agape 24/7 Rapid Response</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat tracking-tight">
            When Heat Fails or Pipes Burst, We Answer.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-poppins leading-relaxed">
            We built Agape around genuine 24/7 readiness. When your boiler quits in January or water floods your floor, our local service vans are positioned to arrive fast with flat upfront pricing.
          </p>
        </div>

        {/* Main Grid: 4 Cards on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 4 Emergency Priority Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div
                  key={i}
                  className="bg-[#111726] border border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-3 hover:border-red-500/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
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
            <NYCServiceMap theme="emergency" />
          </div>
        </div>
      </div>
    </section>
  );
}
