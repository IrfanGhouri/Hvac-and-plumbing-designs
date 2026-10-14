"use client";

import React from "react";
import { Star, HeartHandshake } from "lucide-react";

const REVIEWS = [
  {
    name: "Julian & Claire Sterling",
    area: "Scarsdale, NY",
    type: "24 SEER2 Heat Pump",
    stars: 5,
    text: "The silence is unbelievable. Our previous furnace rattled through the floorboards. Agape designed a zoned system that feels like gentle mountain air.",
  },
  {
    name: "Dr. Aris Thorne",
    area: "Brooklyn Heights",
    type: "Whole-Home Water Filtration",
    stars: 5,
    text: "Pristine plumbing craftsmanship. Installed a water purification loop and tankless hot water. Water pressure is sublime and flat pricing was honored.",
  },
  {
    name: "Camilla Lindqvist",
    area: "Manhattan (Tribeca)",
    type: "Eco-Smart Inverter Heat Pump",
    stars: 5,
    text: "We wanted an environmentally responsible climate system. Agape helped us qualify for $2,800 in clean heat rebates and completed work in 2 days.",
  },
  {
    name: "Harrison Brooks",
    area: "Long Island City",
    type: "Emergency AC Recovery",
    stars: 5,
    text: "Our building's condenser froze in August. Agape answered immediately, dispatched within 45 minutes, and didn't charge a cent extra for Sunday night service.",
  },
  {
    name: "Nadia Sorenson",
    area: "Forest Hills, Queens",
    type: "Master Bathroom Plumbing",
    stars: 5,
    text: "Every copper joint and drainage line is a work of art. True master plumbers who take immense pride in their trade. Upfront flat pricing as promised.",
  },
  {
    name: "Liam O'Connor",
    area: "Upper East Side",
    type: "Ductless Multi-Split",
    stars: 5,
    text: "Flawless installation without compromising our pre-war architectural crown moldings. Clean, prompt, and courteous technicians from start to finish.",
  },
];

export default function Testimonials2Bento() {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F6] text-slate-800 relative overflow-hidden border-b border-emerald-950/10">
      {/* Component-level CSS animation to guarantee infinite horizontal marquee */}
      <style>{`
        @keyframes scrollRiverLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-river {
          animation: scrollRiverLeft 32s linear infinite;
          will-change: transform;
        }
        .animate-scroll-river:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-8">
        {/* Simple & Clean Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100/70 border border-emerald-200 text-[#092C28] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            <span>Verified Local Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat text-[#092C28] tracking-tight">
            Quiet Comfort, Honest Craftsmanship.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-poppins">
            Here is what New York homeowners say about our whisper-quiet heat pumps, clean water filtration, and master plumbing services.
          </p>
        </div>

        {/* Continuous Horizontal Infinite Marquee */}
        <div className="relative py-2">
          {/* Edge fade gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex gap-4 sm:gap-6 animate-scroll-river w-max">
              {[...REVIEWS, ...REVIEWS].map((item, i) => (
                <div
                  key={`rev2-${i}`}
                  className="w-[310px] sm:w-[360px] bg-white rounded-2xl p-5 sm:p-6 border border-emerald-950/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-3 flex-shrink-0 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(item.stars)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/50">
                      {item.type}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-poppins">
                    &ldquo;{item.text}&rdquo;
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#092C28]">{item.name}</span>
                    <span className="text-slate-500 text-[11px]">{item.area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-slate-400">
            Hover over any review to pause the stream • Over 520+ 5-star ratings across NY
          </p>
        </div>
      </div>
    </section>
  );
}
