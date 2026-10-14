"use client";

import React from "react";
import { Phone, Calendar, HeartHandshake } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";

export default function CTAStyle2() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6] text-slate-800 border-b border-emerald-950/10">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#092C28] text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-emerald-800/40 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-800/60 border border-emerald-700/60 text-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Comfort Without Compromise</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight leading-tight text-white">
                Bring Quiet, Clean Comfort <br />
                <span className="text-[#D4AF37]">To Your New York Home.</span>
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 font-poppins max-w-2xl leading-relaxed">
                Contact our friendly team for whisper-quiet heat pump upgrades, clean water filtration, or emergency repairs. Always flat pricing with zero overtime charges.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end w-full">
              <a
                href={COMPANY_INFO.phoneTel}
                className="w-full sm:w-64 lg:w-72 h-12 sm:h-13 inline-flex items-center justify-center gap-2.5 bg-[#FAF9F6] hover:bg-white text-[#092C28] font-bold px-4 sm:px-6 rounded-full text-xs sm:text-sm font-montserrat shadow-md transition-all hover:scale-[1.02] whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#092C28] flex-shrink-0" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <a
                href="#estimate"
                className="w-full sm:w-64 lg:w-72 h-12 sm:h-13 inline-flex items-center justify-center gap-2.5 bg-emerald-900/60 hover:bg-emerald-900 text-emerald-100 font-semibold px-4 sm:px-6 rounded-full text-xs sm:text-sm border border-emerald-700/60 transition-all whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
