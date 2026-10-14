"use client";

import React from "react";
import { Phone, ArrowRight, Compass } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";

export default function CTAStyle4() {
  return (
    <section className="py-16 sm:py-24 bg-[#111317] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#181B20] border border-slate-800 hover:border-amber-500/40 transition-colors p-8 sm:p-14 lg:p-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-widest font-montserrat">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Architectural Collaboration &amp; Contracts</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight uppercase leading-tight text-white">
                Initiate a Mechanical Specification <br />
                <span className="text-amber-400">or Schedule Emergency Service.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-400 font-poppins max-w-2xl leading-relaxed">
                Whether you need a concealed VRF design review for a landmark residence or immediate 24/7 master plumbing dispatch, our senior mechanical partners are on call.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end w-full">
              <a
                href={COMPANY_INFO.phoneTel}
                className="w-full sm:w-64 lg:w-72 h-12 sm:h-13 inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 sm:px-6 text-xs sm:text-sm uppercase tracking-wider font-montserrat transition-all shadow-md whitespace-nowrap"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <a
                href="#estimate"
                className="w-full sm:w-64 lg:w-72 h-12 sm:h-13 inline-flex items-center justify-center gap-2.5 border border-slate-700 hover:border-amber-500/60 text-slate-300 hover:text-white px-4 sm:px-6 text-xs sm:text-sm uppercase tracking-wider font-montserrat transition-colors whitespace-nowrap"
              >
                <span>Request Specification</span>
                <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
