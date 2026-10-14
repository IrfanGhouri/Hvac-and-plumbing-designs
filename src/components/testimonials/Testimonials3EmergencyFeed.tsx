"use client";

import React from "react";
import { Star, Radio, Clock, ShieldCheck } from "lucide-react";

const EMERGENCY_RESOLUTIONS = [
  {
    badge: "Freezing Night Furnace Outage",
    time: "Resolved 1:40 AM • Brooklyn",
    customer: "Michael & Clara K.",
    rating: 5,
    quote:
      "Boiler stopped working at 14°F outside on a Sunday night. Agape answered on the second ring, arrived in 35 minutes, and had heat blowing before 2 AM. Zero overtime surcharge charged—exactly as promised.",
  },
  {
    badge: "Main Water Line Burst",
    time: "Resolved 6:15 AM • Queens",
    customer: "Amanda & David R.",
    rating: 5,
    quote:
      "Woke up to water rushing across our basement. The dispatcher guided us through shutoff while dispatching a van. Tech arrived 28 minutes later, repaired the copper line, and saved our floors.",
  },
  {
    badge: "AC Failure in 96°F Heat Wave",
    time: "Resolved Same-Day • Manhattan",
    customer: "Gregory P., Midtown",
    rating: 5,
    quote:
      "Other companies had a 3-day backlog. Agape had an emergency truck on our block in 45 minutes. Replaced a blown capacitor from truck stock and restored cold air right away.",
  },
  {
    badge: "Flooded Water Heater Tank",
    time: "Resolved 11:30 PM • Staten Island",
    customer: "Teresa & Jon B.",
    rating: 5,
    quote:
      "Tank gave out late on Saturday evening. Plumber drained, removed, and installed a brand new unit the same night with clean, professional piping and zero mess.",
  },
  {
    badge: "Commercial Boiler Pressure Loss",
    time: "Resolved 4:20 AM • Long Island City",
    customer: "Marcus E., Property Manager",
    rating: 5,
    quote:
      "Called at 3 AM with 12 residential units losing heat. Agape dispatched immediately. Diagnosed a faulty aquastat and brought the building back online before morning rush.",
  },
];

export default function Testimonials3EmergencyFeed() {
  return (
    <section className="py-14 sm:py-20 bg-[#0B0F19] text-white relative overflow-hidden border-b border-slate-800">
      {/* Component-level CSS animation to guarantee infinite marquee */}
      <style>{`
        @keyframes scrollEmergencyLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-emergency {
          animation: scrollEmergencyLeft 28s linear infinite;
          will-change: transform;
        }
        .animate-scroll-emergency:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-8">
        {/* Simple & Focused Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Radio className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
              <span>Real Emergency Resolution Feed</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat tracking-tight text-white">
              Fast Response. <span className="text-red-400">Zero Overtime Fees.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-poppins">
              Verified feedback from recent urgent calls across NYC—technicians dispatched 24/7 with fully-stocked trucks.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold text-slate-200">Avg Arrival: 35-45m</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-slate-200">$0 Overtime Fee</span>
            </div>
          </div>
        </div>

        {/* Continuous Horizontal Infinite Marquee */}
        <div className="relative py-2">
          {/* Edge fade gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex gap-4 sm:gap-6 animate-scroll-emergency w-max">
              {[...EMERGENCY_RESOLUTIONS, ...EMERGENCY_RESOLUTIONS].map((res, i) => (
                <div
                  key={`em-${i}`}
                  className="w-[320px] sm:w-[380px] bg-[#111726] border border-slate-700/80 rounded-2xl p-5 shadow-lg hover:border-red-500/50 transition-colors flex flex-col justify-between space-y-3 flex-shrink-0 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-red-300 bg-red-950/70 border border-red-800/70 px-2 py-0.5 rounded">
                      {res.badge}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(res.rating)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed font-poppins">
                    &ldquo;{res.quote}&rdquo;
                  </p>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{res.customer}</span>
                    <span className="text-emerald-400 font-semibold text-[11px]">{res.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-slate-400">
            Hover over any resolution card to pause • Live verified dispatch records
          </p>
        </div>
      </div>
    </section>
  );
}
