"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";

const REVIEWS_COL_1 = [
  {
    name: "Marcus Vance",
    location: "Brooklyn, NY",
    service: "Emergency AC Repair",
    date: "2 days ago",
    text: "Our AC completely stopped blowing cold during the hottest weekend in July. Agape had a technician at our door in 40 minutes. Zero overtime fee, upfront quote, fixed on the spot. Lifesavers!",
  },
  {
    name: "Elena Rostova",
    location: "Manhattan (Upper West)",
    service: "Heater & Boiler Replacement",
    date: "1 week ago",
    text: "Replaced our old noisy boiler with a whisper-quiet high-efficiency system. The crew was respectful, clean, and finished ahead of schedule. Heating bill already dropped significantly.",
  },
  {
    name: "David Chen",
    location: "Queens (Astoria)",
    service: "Burst Pipe & Plumbing",
    date: "2 weeks ago",
    text: "Had a major water leak under the kitchen floor on a Sunday morning. Called Agape and they didn't charge any weekend surcharge. Clean, professional acoustic leak detection and repair.",
  },
  {
    name: "Sarah Jenkins",
    location: "Staten Island",
    service: "Ductless Mini-Split",
    date: "3 weeks ago",
    text: "Installed 3 mini-splits in our historic home. Immaculate piping work, no ugly exterior conduits, and the system cools each bedroom independently. Top notch engineering.",
  },
];

const REVIEWS_COL_2 = [
  {
    name: "Robert MacIntyre",
    location: "Manhattan (Tribeca)",
    service: "Tankless Water Heater",
    date: "5 days ago",
    text: "Endless hot water and reclaimed so much basement space. The master plumbers from Agape explained every step and gave us transparent flat pricing before turning a single screw.",
  },
  {
    name: "Jessica Miller",
    location: "Brooklyn (Park Slope)",
    service: "24/7 Emergency Heating",
    date: "10 days ago",
    text: "Furnace quit on a freezing January night with a newborn baby at home. Agape treated it as a genuine emergency—technician carried universal parts and restored heat within an hour.",
  },
  {
    name: "Arthur Pendelton",
    location: "Queens (Bayside)",
    service: "Drain Hydro-Jetting",
    date: "3 weeks ago",
    text: "Tree roots had invaded the main sewer line. Previous contractors wanted to dig up the driveway; Agape hydro-jetted and cleared the line without any property damage. Honest pros.",
  },
  {
    name: "Chloe Dupont",
    location: "Manhattan (SoHo)",
    service: "Smart Thermostat Integration",
    date: "1 month ago",
    text: "Upgraded our entire HVAC control to smart multi-zone sensors. The technicians calibrated our system perfectly and walked us through the mobile app. Highly recommended!",
  },
];

export default function Testimonials1Marquee() {
  return (
    <section className="py-14 sm:py-20 bg-[#081526] text-white relative overflow-hidden border-b border-slate-800">
      {/* Direct component-level animation styles to guarantee smooth infinite marquee */}
      <style>{`
        @keyframes scrollColUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollColDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .animate-scroll-up {
          animation: scrollColUp 22s linear infinite;
          will-change: transform;
        }
        .animate-scroll-down {
          animation: scrollColDown 22s linear infinite;
          will-change: transform;
        }
        .animate-scroll-up:hover,
        .animate-scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle background ambient lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* =========================================================
              LEFT COLUMN: SIMPLE & CLEAN TESTIMONIAL INTRO
              ========================================================= */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Verified Homeowner Reviews</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat tracking-tight leading-tight">
              Real Experiences from <br />
              <span className="text-amber-400">Your New York Neighbors.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-poppins leading-relaxed">
              Read uncensored feedback from local homeowners across Manhattan, Brooklyn, and Queens who rely on Agape for 24/7 heating, AC, and master plumbing.
            </p>

            {/* Google Rating Pill Card */}
            <div className="bg-[#0B1E36] border border-slate-700/80 p-4 rounded-xl shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.66-5.17 3.66-9.09z" />
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.27v3.09C3.3 21.41 7.37 24 12 24z" />
                      <path fill="#FBBC05" d="M5.28 14.31c-.25-.72-.38-1.49-.38-2.31s.14-1.59.38-2.31V6.6H1.27C.46 8.23 0 10.06 0 12s.46 3.77 1.27 5.4l4.01-3.09z" />
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.3 2.59 1.27 6.6l4.01 3.09c.95-2.84 3.6-4.94 6.72-4.94z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-white text-xs block">Google Customer Reviews</span>
                    <span className="text-[11px] text-slate-400">Based on 520+ verified submissions</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-slate-700/60 text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Transparent Upfront Pricing</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>No Overtime Charges Ever</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 italic">
              Hover over any review card to pause the scroll.
            </p>
          </div>

          {/* =========================================================
              RIGHT COLUMN: TWO OPPOSITE VERTICAL MARQUEES
              ========================================================= */}
          <div className="lg:col-span-7">
            <div className="relative h-[480px] overflow-hidden rounded-2xl bg-[#0B1E36]/50 border border-slate-800 p-3 sm:p-4">
              {/* Top & Bottom Gradient Masks to seamlessly hide card entry/exit */}
              <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-[#0B1E36] via-[#0B1E36]/90 to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#0B1E36] via-[#0B1E36]/90 to-transparent z-20 pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-full">
                {/* MARQUEE 1: SCROLLS UP */}
                <div className="overflow-hidden h-full">
                  <div className="flex flex-col gap-3 sm:gap-4 animate-scroll-up">
                    {[...REVIEWS_COL_1, ...REVIEWS_COL_1].map((review, i) => (
                      <div
                        key={`m1-${i}`}
                        className="bg-[#0B1E36] border border-slate-700/70 rounded-xl p-4 shadow-md space-y-2 hover:border-amber-500/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-0.5 text-amber-400">
                            {[...Array(5)].map((_, s) => (
                              <Star key={s} className="w-3 h-3 fill-amber-400 stroke-none" />
                            ))}
                          </div>
                          <span className="text-[10px] text-slate-400">{review.date}</span>
                        </div>

                        <p className="text-xs text-slate-200 leading-relaxed font-poppins">
                          &ldquo;{review.text}&rdquo;
                        </p>

                        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                          <div>
                            <p className="font-bold text-xs text-white">{review.name}</p>
                            <p className="text-[10px] text-slate-400">{review.location}</p>
                          </div>
                          <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                            {review.service}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MARQUEE 2: SCROLLS DOWN */}
                <div className="overflow-hidden h-full hidden sm:block">
                  <div className="flex flex-col gap-3 sm:gap-4 animate-scroll-down">
                    {[...REVIEWS_COL_2, ...REVIEWS_COL_2].map((review, i) => (
                      <div
                        key={`m2-${i}`}
                        className="bg-[#0B1E36] border border-slate-700/70 rounded-xl p-4 shadow-md space-y-2 hover:border-sky-500/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-0.5 text-amber-400">
                            {[...Array(5)].map((_, s) => (
                              <Star key={s} className="w-3 h-3 fill-amber-400 stroke-none" />
                            ))}
                          </div>
                          <span className="text-[10px] text-slate-400">{review.date}</span>
                        </div>

                        <p className="text-xs text-slate-200 leading-relaxed font-poppins">
                          &ldquo;{review.text}&rdquo;
                        </p>

                        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                          <div>
                            <p className="font-bold text-xs text-white">{review.name}</p>
                            <p className="text-[10px] text-slate-400">{review.location}</p>
                          </div>
                          <span className="text-[10px] font-semibold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                            {review.service}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
