"use client";

import React from "react";
import { Phone, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";

export default function CTAStyle1() {
  return (
    <section className="py-16 sm:py-24 bg-[#081526] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-transparent pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="bg-gradient-to-br from-[#0B1E36] to-[#0E2747] border border-amber-500/30 rounded-3xl p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>24/7 Available Across All 5 Boroughs &amp; Long Island</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat tracking-tight leading-tight">
                Need Heating, AC, or Plumbing Today? <br />
                <span className="text-amber-400">Zero Overtime Fees. Ever.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-poppins max-w-2xl leading-relaxed">
                Call our local New York dispatch team now. We&rsquo;ll give you an honest flat quote before any work starts and have a fully-stocked service truck at your door.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Licensed &amp; Insured Masters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>35-45m Average Arrival</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Upfront Pricing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end w-full">
              <a
                href={COMPANY_INFO.phoneTel}
                className="w-full sm:w-64 lg:w-72 h-12 sm:h-13 inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 sm:px-6 rounded-xl text-xs sm:text-sm transition-all font-montserrat shadow-md hover:scale-[1.02] whitespace-nowrap"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <a
                href="#estimate"
                className="w-full sm:w-64 lg:w-72 h-12 sm:h-13 inline-flex items-center justify-center gap-2.5 bg-[#0B1E36] hover:bg-slate-800 text-white font-bold px-4 sm:px-6 rounded-xl text-xs sm:text-sm border border-slate-700 transition-all font-montserrat whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Schedule Online</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
