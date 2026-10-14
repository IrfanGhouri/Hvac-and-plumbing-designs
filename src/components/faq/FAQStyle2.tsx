"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS_DATA } from "@/data/faqData";

export default function FAQStyle2() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6] text-slate-800 border-b border-emerald-950/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-200 text-[#092C28] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Common Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-montserrat text-[#092C28] tracking-tight">
            Frequently Asked Questions.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-poppins">
            Clear, transparent answers regarding our quiet installations, flat pricing, and clean energy rebate assistance.
          </p>
        </div>

        {/* Clean Accordion Stack */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-emerald-950/10 rounded-2xl overflow-hidden shadow-xs transition-shadow hover:shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#092C28] font-montserrat">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                      isOpen ? "bg-[#092C28] text-white" : "bg-emerald-50 text-[#092C28]"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-slate-100 text-sm text-slate-600 font-poppins leading-relaxed">
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
