"use client";

import React, { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { FAQS_DATA } from "@/data/faqData";
import { COMPANY_INFO } from "@/data/navigation";

export default function FAQStyle1() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: FAQ Header & Contact */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 font-montserrat">
              Common Questions
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat tracking-tight text-slate-950">
              Clear Answers. <br />
              <span className="text-amber-600">Zero Runaround.</span>
            </h2>

            <p className="text-base text-slate-600 font-poppins leading-relaxed">
              Everything you need to know about our response times, flat-rate pricing, and NYC licensing.
            </p>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                Have a question right now?
              </p>
              <p className="text-sm text-slate-700 font-poppins">
                Our local dispatchers answer 24 hours a day with real arrival times.
              </p>
              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 font-montserrat pt-1"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-slate-300 shadow-sm"
                      : "bg-white/80 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold font-montserrat text-slate-900">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-slate-100 text-slate-900" : "text-slate-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-slate-600 font-poppins leading-relaxed border-t border-slate-100">
                      <p className="pt-4">{faq.answer}</p>
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
