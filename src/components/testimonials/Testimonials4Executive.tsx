"use client";

import React from "react";
import { Star, Building2 } from "lucide-react";

const REVIEWS_ROW_1 = [
  {
    estate: "Park Avenue Penthouse",
    project: "Concealed Variable-Refrigerant HVAC",
    owner: "V. Sterling, Architect",
    stars: 5,
    quote: "Agape engineered a completely concealed climate system within the ceiling reveals. Zero acoustic noise and seamless architectural integration.",
  },
  {
    estate: "Tribeca Historic Loft",
    project: "Radiant Floor Heating & Cast Iron Restoration",
    owner: "M. Rosenblatt, Developer",
    stars: 5,
    quote: "Preserving historical infrastructure while integrating hydronic radiant heat requires rare master craftsmanship. Agape executed with textbook precision.",
  },
  {
    estate: "Brooklyn Heights Brownstone",
    project: "Full-Home Copper Repiping & Dual VRF",
    owner: "The Kensington Family",
    stars: 5,
    quote: "Zero surprise fees, upfront fixed contract pricing, and daily cleanups. Our multi-floor climate balance is now flawless across all 4 levels.",
  },
  {
    estate: "Gramercy Park Residence",
    project: "High-Efficiency Boiler & Zoned Radiators",
    owner: "D. Hoffman, Homeowner",
    stars: 5,
    quote: "Replaced an obsolete steam boiler with a whisper-quiet modulating unit. Piping is immaculate and fuel consumption dropped noticeably.",
  },
];

const REVIEWS_ROW_2 = [
  {
    estate: "SoHo Contemporary Gallery",
    project: "Museum-Grade Climate & Humidity Control",
    owner: "Curatorial Director",
    stars: 5,
    quote: "Protecting fine art requires strict 50% relative humidity and steady temperature 24/7. Agape's automated backup systems deliver absolute peace of mind.",
  },
  {
    estate: "Central Park West Residence",
    project: "Emergency Sunday Heat Exchanger Swap",
    owner: "Dr. A. Vance",
    stars: 5,
    quote: "When boiler failure threatened water damage to parquet floors, Agape arrived in 35 minutes on a Sunday. No overtime premium charged—exemplary service.",
  },
  {
    estate: "Greenwich Village Townhouse",
    project: "Tankless Hot Water Recirculation",
    owner: "L. Montclair",
    stars: 5,
    quote: "Instant hot water at every fixture with zero pressure drop across 5 bathrooms. Cleanest mechanical room piping I have ever seen.",
  },
  {
    estate: "DUMBO Waterfront Loft",
    project: "Sound-Attenuated Heat Pump",
    owner: "A. Takahashi, Designer",
    stars: 5,
    quote: "Vibration isolation was our primary requirement. Agape engineered custom suspended dampers—completely inaudible even during peak cooling.",
  },
];

export default function Testimonials4Executive() {
  return (
    <section className="py-14 sm:py-20 bg-[#111317] text-white relative overflow-hidden border-b border-slate-800">
      {/* Component-level CSS animation to guarantee dual-direction horizontal marquees */}
      <style>{`
        @keyframes scrollExecLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollExecRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-exec-left {
          animation: scrollExecLeft 30s linear infinite;
          will-change: transform;
        }
        .animate-exec-right {
          animation: scrollExecRight 30s linear infinite;
          will-change: transform;
        }
        .animate-exec-left:hover,
        .animate-exec-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-8">
        {/* Simple & Clean Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Architectural Endorsements</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat tracking-tight text-white uppercase">
              Endorsed by Architects <span className="text-amber-400">&amp; Estate Owners.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-400 font-poppins">
              Bespoke mechanical solutions designed for Manhattan penthouses, historic brownstones, and landmark residences across New York.
            </p>
          </div>

          <div className="text-xs text-slate-400">
            <span className="text-amber-400 font-bold">520+ Reviews</span> • 100% Fixed Upfront Pricing
          </div>
        </div>

        {/* Dual Alternating Horizontal Marquees */}
        <div className="space-y-4 relative py-2">
          {/* Edge fade gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#111317] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#111317] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Leftward */}
          <div className="overflow-hidden">
            <div className="flex gap-4 sm:gap-6 animate-exec-left w-max">
              {[...REVIEWS_ROW_1, ...REVIEWS_ROW_1].map((card, i) => (
                <div
                  key={`e1-${i}`}
                  className="w-[320px] sm:w-[380px] bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 p-5 rounded-xl flex flex-col justify-between space-y-3 flex-shrink-0 transition-colors cursor-pointer shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 border border-amber-500/20 rounded">
                      {card.estate}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(card.stars)].map((_, s) => (
                        <Star key={s} className="w-3 h-3 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-poppins">
                    &ldquo;{card.quote}&rdquo;
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white text-xs">{card.owner}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">{card.project}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward */}
          <div className="overflow-hidden">
            <div className="flex gap-4 sm:gap-6 animate-exec-right w-max">
              {[...REVIEWS_ROW_2, ...REVIEWS_ROW_2].map((card, i) => (
                <div
                  key={`e2-${i}`}
                  className="w-[320px] sm:w-[380px] bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 p-5 rounded-xl flex flex-col justify-between space-y-3 flex-shrink-0 transition-colors cursor-pointer shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 border border-amber-500/20 rounded">
                      {card.estate}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(card.stars)].map((_, s) => (
                        <Star key={s} className="w-3 h-3 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-poppins">
                    &ldquo;{card.quote}&rdquo;
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white text-xs">{card.owner}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">{card.project}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-slate-500">
            Hover over any case study card to pause
          </p>
        </div>
      </div>
    </section>
  );
}
