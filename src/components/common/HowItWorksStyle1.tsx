"use client";

import React from "react";
import { PhoneCall, ClipboardCheck, ShieldCheck, Check, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";

interface StepItem {
  number: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  points: string[];
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Call or Book Online",
    desc: "Reach out by phone or submit a quick request online. A local dispatcher confirms your arrival window immediately with zero runarounds.",
    icon: PhoneCall,
    points: ["Local NYC dispatch team", "Confirmed arrival window"],
  },
  {
    number: "02",
    title: "Upfront Diagnosis & Flat Quote",
    desc: "A licensed master technician inspects your system and presents an exact flat quote before any work starts. No hidden overtime fees.",
    icon: ClipboardCheck,
    points: ["Thorough diagnostic inspection", "Approved flat price in writing"],
  },
  {
    number: "03",
    title: "Fixed Right & Guaranteed",
    desc: "We carry over 1,200 OEM parts on our truck to resolve most issues on the first visit. We test thoroughly and leave your space spotless.",
    icon: ShieldCheck,
    points: ["First-visit repair completion", "Written parts & labor warranty"],
  },
];

export default function HowItWorksStyle1() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-14 sm:space-y-16">
        {/* Section Header: Centered Subheading, Heading & Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 font-montserrat block">
            Our Process in Three Simple Steps
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat tracking-tight text-slate-950">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-poppins leading-relaxed">
            Getting your heating, cooling, or plumbing fixed should be fast and stress-free. Here is what to expect from first call to completed job.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-slate-50/80 hover:bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Background Ghost Step Number */}
                <div className="absolute -top-3 -right-2 text-7xl sm:text-8xl font-black font-montserrat text-slate-200/60 group-hover:text-amber-200/40 transition-colors pointer-events-none select-none">
                  {step.number}
                </div>

                <div className="relative z-10 space-y-5">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black font-montserrat text-slate-950 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 font-poppins leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Key Points */}
                <div className="relative z-10 border-t border-slate-200/90 pt-6 mt-8 space-y-2.5">
                  {step.points.map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast-Action Callout */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-montserrat text-white">
              Have an urgent heating, cooling, or plumbing issue?
            </h4>
            <p className="text-sm text-slate-300 font-poppins">
              Technicians are on duty across Manhattan, Brooklyn, Queens, Bronx, and Staten Island.
            </p>
          </div>
          <a
            href={COMPANY_INFO.phoneTel}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
