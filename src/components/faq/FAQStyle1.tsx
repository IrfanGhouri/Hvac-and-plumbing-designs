"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import { FAQS_DATA } from "@/data/faqData";
import { COMPANY_INFO } from "@/data/navigation";

export default function FAQStyle1() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#06101E] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: FAQ Header & Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat tracking-tight leading-tight">
              Frequently Asked <br />
              <span className="text-amber-400">Questions.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-poppins leading-relaxed">
              Everything you need to know about our response times, pricing policy, and licensing. Have a question not listed here?
            </p>

            <div className="p-5 bg-[#0B1E36] border border-slate-700/80 rounded-2xl space-y-3">
              <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">Need Immediate Answers?</p>
              <p className="text-xs text-slate-300 font-poppins">Our local dispatchers are ready to answer your call 24 hours a day.</p>
              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 font-montserrat pt-1"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#0B1E36] border-amber-500/60 shadow-lg"
                      : "bg-[#0B1E36]/60 border-slate-800 hover:border-slate-700"
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
                        isOpen ? "rotate-180 text-amber-400" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 font-poppins leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
