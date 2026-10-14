"use client";

import React, { useState } from "react";
import { ChevronDown, Compass } from "lucide-react";
import { FAQS_DATA } from "@/data/faqData";

export default function FAQStyle4() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#111317] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3.5 py-1 text-xs font-bold uppercase tracking-widest font-montserrat">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Technical &amp; Commercial FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight uppercase leading-tight text-white">
              Client &amp; Practice Inquiries.
            </h2>

            <p className="text-sm sm:text-base text-slate-400 font-poppins leading-relaxed">
              Standard commercial specifications, historic building compliance, and DOB permitting procedures.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            <span className="text-amber-400 font-bold">24/7 SUPPORT</span> • NYC DOB COMPLIANT
          </div>
        </div>

        {/* Numbered Architectural Accordions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-amber-400 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white font-montserrat uppercase tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 flex-shrink-0 transition-transform duration-300 mt-1 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400 font-poppins leading-relaxed pl-11">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
