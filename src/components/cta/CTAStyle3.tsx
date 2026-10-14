"use client";

import React from "react";
import { PhoneCall, Radio, Clock, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";

export default function CTAStyle3() {
  return (
    <section className="py-16 sm:py-24 bg-[#070A11] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#111726] border-2 border-red-500/50 rounded-3xl p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle pulse background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                <span>24/7/365 Emergency Hotline Active</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight leading-tight">
                No Heat, AC Failure, or Burst Pipes? <br />
                <span className="text-red-400">We Arrive in 35-45 Minutes.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-poppins max-w-2xl leading-relaxed">
                Do not wait while property damage multiplies. Call our emergency dispatch line directly. No automated menus, no overtime fees.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300 font-semibold">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span>35-45 Min Avg Arrival</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>$0 Emergency Overtime Fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>NYC Master Plumber On Call</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end w-full">
              <a
                href={COMPANY_INFO.phoneTel}
                className="w-full sm:w-64 lg:w-72 h-12 sm:h-13 inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-black px-4 sm:px-6 rounded-xl text-xs sm:text-sm font-montserrat shadow-lg hover:scale-[1.02] transition-all animate-emergency-pulse whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 flex-shrink-0 animate-bounce" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <a
                href="#estimate"
                className="w-full sm:w-64 lg:w-72 h-12 sm:h-13 inline-flex items-center justify-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-white font-bold px-4 sm:px-6 rounded-xl text-xs sm:text-sm border border-slate-700 transition-all font-montserrat whitespace-nowrap"
              >
                <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>Request Callback</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
