"use client";

import React, { useState } from "react";
import { ChevronDown, AlertCircle, PhoneCall } from "lucide-react";
import { FAQS_DATA } from "@/data/faqData";
import { COMPANY_INFO } from "@/data/navigation";

export default function FAQStyle3() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#070A11] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5 text-red-400" />
              <span>Emergency Dispatch FAQs</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight leading-tight">
              Rapid Response Questions. <br />
              <span className="text-red-400">Answered Plainly.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-poppins">
              Immediate clarity on how our 24/7 night dispatch, arrival windows, and $0 overtime fees work.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY_INFO.phoneTel}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs font-montserrat shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Dispatch: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-[#111726] border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-red-500/60 shadow-xl" : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-montserrat">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-red-400" : "text-slate-500"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-slate-800 text-xs sm:text-sm text-slate-300 font-poppins leading-relaxed">
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
