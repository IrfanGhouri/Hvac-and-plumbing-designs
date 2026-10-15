"use client";

import React from "react";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcus Vance",
    location: "Park Slope, Brooklyn",
    service: "Emergency AC Repair",
    date: "July 2026",
    quote: "Our AC completely stopped blowing cold on a 95° Saturday. Agape had a technician at our door in 40 minutes. No weekend upcharge, exact flat quote before starting, fixed in one visit. Lifesavers.",
  },
  {
    name: "Elena Rostova",
    location: "Upper West Side, Manhattan",
    service: "Boiler Replacement",
    date: "September 2026",
    quote: "Replaced our 25-year-old noisy steam boiler with a whisper-quiet high efficiency unit. The crew laid floor protection runners from the front door down to the basement. Clean, professional pros.",
  },
  {
    name: "David Chen",
    location: "Astoria, Queens",
    service: "Burst Water Pipe",
    date: "August 2026",
    quote: "Woke up to water dripping through the ceiling on Sunday morning. Called Agape and a licensed master plumber arrived quickly with universal copper fittings. Transparent pricing, no stress.",
  },
  {
    name: "Sarah Jenkins",
    location: "Cobble Hill, Brooklyn",
    service: "Ductless Mini-Split Installation",
    date: "June 2026",
    quote: "Installed 3 Mitsubishi mini-splits in our brownstone. Immaculate concealed piping, zero ugly exterior conduits, and our electric bill actually dropped by a third. Highly recommended.",
  },
  {
    name: "Robert MacIntyre",
    location: "Tribeca, Manhattan",
    service: "Tankless Water Heater",
    date: "October 2026",
    quote: "Endless hot water and we reclaimed so much square footage in the utility closet. The team walked me through the digital controls and left everything spotless.",
  },
  {
    name: "Jessica Miller",
    location: "Riverdale, Bronx",
    service: "Emergency Heating Repair",
    date: "January 2026",
    quote: "Furnace quit in the middle of a snowstorm with our 6-month-old daughter at home. The technician carried the exact ignition sensor on his truck and had heat running in under an hour.",
  },
];

export default function Testimonials1Marquee() {
  return (
    <section id="reviews" className="bg-white text-slate-900 py-20 sm:py-28 border-b border-slate-200">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        {/* Section Header: Centered Subheading, Heading & Paragraph */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 font-montserrat block">
            Verified Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat tracking-tight text-slate-950">
            Trusted by 380+ New Yorkers.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-poppins max-w-2xl mx-auto">
            Read real feedback from your neighbors across Manhattan, Brooklyn, Queens, Bronx, and Staten Island.
          </p>
        </div>

        {/* Clean 3-Column Review Cards Grid with Smooth Hover Lift & Shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/70 hover:border-amber-400 hover:bg-white cursor-default group"
            >
              <div className="space-y-4">
                {/* 5 Stars and Service Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 bg-white group-hover:bg-slate-100 px-3 py-1 rounded-full border border-slate-200 transition-colors">
                    {rev.service}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-[15px] text-slate-700 font-poppins leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author & Neighborhood */}
              <div className="pt-5 border-t border-slate-200/70 text-xs">
                <h4 className="font-bold text-slate-900 font-montserrat text-sm">{rev.name}</h4>
                <p className="text-slate-500">{rev.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
