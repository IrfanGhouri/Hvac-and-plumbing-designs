"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Calendar,
  ShieldCheck,
  Check,
  Building2,
  ArrowRight,
  Calculator,
  Snowflake,
  Flame,
  Droplet,
  Compass,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";

export default function Hero4EstimateForm() {
  const [selectedService, setSelectedService] = useState<string>("Air Conditioning");
  const [propertyType, setPropertyType] = useState<string>("Residential");
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [zipInput, setZipInput] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput) return;
    setIsSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-16 sm:py-24 border-b border-slate-200">
      {/* Ultra-wide container */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Architectural Branding & Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#111317] text-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest font-montserrat shadow-xs">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Architectural Climate &amp; Master Plumbing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black font-montserrat tracking-tight text-[#111317] uppercase leading-[1.08]">
              Mastery In Climate &amp; Master Plumbing.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-poppins leading-relaxed max-w-2xl">
              Elevating residential estates and commercial buildings across New York with bespoke climate systems and licensed master plumbing. 24/7 response with transparent flat-rate pricing.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-2 bg-[#111317] hover:bg-slate-800 text-white font-bold px-7 py-3.5 text-xs uppercase tracking-widest font-montserrat border border-amber-600/50 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <a
                href="#estimate-card"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#111317] font-bold px-7 py-3.5 text-xs uppercase tracking-widest font-montserrat border border-slate-300 transition-all shadow-xs"
              >
                <span>Request Online Estimate</span>
                <ArrowRight className="w-4 h-4 text-amber-600" />
              </a>
            </div>

            {/* 4 Architectural Metric Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
              <div className="p-3.5 border-l-2 border-amber-600 bg-slate-50">
                <p className="text-2xl font-black text-[#111317] font-montserrat">24/7</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-0.5">Fleet Dispatch</p>
              </div>
              <div className="p-3.5 border-l-2 border-amber-600 bg-slate-50">
                <p className="text-2xl font-black text-[#111317] font-montserrat">$0</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-0.5">Overtime Fees</p>
              </div>
              <div className="p-3.5 border-l-2 border-amber-600 bg-slate-50">
                <p className="text-2xl font-black text-[#111317] font-montserrat">520+</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-0.5">5-Star Reviews</p>
              </div>
              <div className="p-3.5 border-l-2 border-amber-600 bg-slate-50">
                <p className="text-2xl font-black text-[#111317] font-montserrat">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-0.5">Guaranteed</p>
              </div>
            </div>
          </div>

          {/* Right Column: "Get an Estimate" Form Card */}
          <div id="estimate-card" className="lg:col-span-5">
            <div className="bg-[#111317] text-white p-7 sm:p-9 shadow-2xl border border-slate-800 relative">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-amber-400" />
                    <h3 className="font-extrabold text-lg sm:text-xl font-montserrat uppercase tracking-wider text-white">
                      Get a Free Estimate
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Upfront transparent pricing • No hidden fees
                  </p>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-1">
                  Instant
                </span>
              </div>

              {isSubmitted ? (
                /* Success Screen */
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold font-montserrat text-white uppercase">
                    Estimate Request Received!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Our master technician is reviewing your {selectedService} request. We will contact you at <strong className="text-amber-400">{phoneInput}</strong> within 15 minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-amber-400 underline font-bold uppercase tracking-wider pt-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                /* Interactive Estimate Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service Category Selector */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-300 mb-2">
                      1. Select Service Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { name: "Air Conditioning", icon: Snowflake },
                        { name: "Heating", icon: Flame },
                        { name: "Plumbing", icon: Droplet },
                      ].map((item) => {
                        const isSelected = selectedService === item.name;
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.name}
                            type="button"
                            onClick={() => setSelectedService(item.name)}
                            className={`p-3 text-center border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-amber-600 border-amber-500 text-slate-950 font-bold"
                                : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"
                            }`}
                          >
                            <Icon className="w-4 h-4 mx-auto mb-1" />
                            <span className="text-[11px] font-bold block leading-tight">
                              {item.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Property Type Radio */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-300 mb-2">
                      2. Property Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Residential Home", "Commercial Building"].map((type) => {
                        const isSelected = propertyType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setPropertyType(type)}
                            className={`py-2 px-3 text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer text-center ${
                              isSelected
                                ? "bg-white text-slate-950 border-white"
                                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Inputs: Zip & Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-300 mb-1">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 10001"
                        value={zipInput}
                        onChange={(e) => setZipInput(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(917) 000-0000"
                        value={phoneInput}
                        onChange={(e) => setPhoneInput(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-500 active:scale-98 text-slate-950 font-black py-3.5 text-xs uppercase tracking-widest font-montserrat transition-all mt-2 cursor-pointer shadow-md"
                  >
                    Get My Free Upfront Estimate →
                  </button>

                  {/* Reassurance footnote */}
                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    🔒 Zero obligation • No emergency surcharges guaranteed
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
