"use client";

import React from "react";

const POINTS = [
  {
    metric: "45 Min",
    title: "Rapid Dispatch",
    desc: "Stationed units active across Manhattan, Brooklyn, Queens, Bronx, and Staten Island.",
  },
  {
    metric: "$0",
    title: "Zero Overtime Fees",
    desc: "Same honest flat rate on nights, weekends, and holidays. You approve the price before we start.",
  },
  {
    metric: "92%",
    title: "First-Visit Resolution",
    desc: "Every truck carries over 1,200 OEM parts to resolve issues without waiting for shipments.",
  },
  {
    metric: "100%",
    title: "Clean Home Guarantee",
    desc: "We wear protective shoe covers, lay floor runners, and leave your mechanical room spotless.",
  },
];

export default function AboutWhyStyle1() {
  return (
    <section className="relative w-full bg-[#071322] text-white border-b border-slate-800 overflow-hidden flex flex-col justify-center">
      {/* Background subtle atmospheric gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071322] via-[#0A192F] to-[#040A14] pointer-events-none" />

      {/* Desktop (lg+): Full Height Edge-to-Edge Real Google Map on the Right (No blur effect per instruction) */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-[46%] xl:w-[44%] 2xl:w-[42%] h-full z-10 overflow-hidden pointer-events-auto">
        <iframe
          src="https://maps.google.com/maps?q=147%20W%2035th%20St,%20New%20York,%20NY%2010001&t=&z=12&ie=UTF8&iwloc=&output=embed"
          title="Agape NYC Service Area Map"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </div>

      {/* Main Content: Left Column aligned to Header Container Width */}
      <div className="max-w-[1720px] mx-auto w-full px-4 sm:px-6 lg:px-12 relative z-20 py-16 sm:py-24">
        <div className="lg:w-[52%] xl:w-[54%] flex flex-col justify-center space-y-10 lg:pr-8 xl:pr-12">
          {/* Simple & Human Header */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-montserrat">
              Why Homeowners Choose Agape
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat tracking-tight leading-[1.1]">
              Family-Owned in New York for 20 Years.
            </h2>

            <p className="text-base text-slate-300 font-poppins leading-relaxed">
              No call center runarounds. No surprise bills. Just honest, licensed master tradespeople who show up on time and fix the problem right the first time.
            </p>
          </div>

          {/* 4 Cards taking FULL WIDTH in 2 columns and 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {POINTS.map((pt, i) => (
              <div
                key={i}
                className="bg-[#0A1A2F] border border-slate-700/80 rounded-2xl p-6 sm:p-7 space-y-2 hover:border-amber-400/50 transition-colors w-full"
              >
                <div className="text-3xl font-black font-montserrat text-amber-400">
                  {pt.metric}
                </div>
                <h3 className="text-lg font-bold font-montserrat text-white">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-poppins leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view (< lg): Real Google Map below the text cards */}
        <div className="lg:hidden w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-700/80 shadow-lg mt-8 relative">
          <iframe
            src="https://maps.google.com/maps?q=147%20W%2035th%20St,%20New%20York,%20NY%2010001&t=&z=12&ie=UTF8&iwloc=&output=embed"
            title="Agape NYC Service Area Map Mobile"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
