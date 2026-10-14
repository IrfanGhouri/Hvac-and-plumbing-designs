"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, Radio, Clock, ShieldAlert, AlertTriangle } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";

export default function FooterStyle3() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#05070D] text-white border-t border-slate-800">
      {/* High-Urgency Dispatch Ticker */}
      <div className="bg-red-950/40 border-b border-red-900/50 py-3 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1720px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="font-bold text-red-200 uppercase tracking-wide">
              Emergency Dispatch Units Active Across 5 Boroughs
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-slate-300">
            <span>Average Arrival: 35-45m</span>
            <span className="text-red-400">•</span>
            <span>$0 Overtime Fee</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black font-montserrat tracking-tight text-white">
                AGAPE<span className="text-red-500">.</span>
              </span>
              <span className="block text-xs font-bold text-red-400 uppercase tracking-wider">
                24/7 Emergency HVAC &amp; Master Plumbing
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 font-poppins leading-relaxed max-w-sm">
              Rapid response mechanical fleet on the road 24 hours a day, 365 days a year. No extra overtime fees for night or weekend emergencies.
            </p>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black px-5 py-3 rounded-xl text-xs font-montserrat transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>HOTLINE: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Cooling */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-red-400">Emergency Cooling</p>
            <ul className="space-y-2 text-xs text-slate-400 font-poppins">
              <li><a href="#ac" className="hover:text-white transition-colors">AC Compressor Failure</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">Frozen Evaporator Coil</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">Refrigerant Leak Repair</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">Same-Day Inverter Fix</a></li>
            </ul>
          </div>

          {/* Heating */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-red-400">Emergency Heating</p>
            <ul className="space-y-2 text-xs text-slate-400 font-poppins">
              <li><a href="#heating" className="hover:text-white transition-colors">Zero-Heat Boiler Outage</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">Furnace Ignition Failure</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">Steam Radiator Knocking</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">Gas Line &amp; Pilot Rescue</a></li>
            </ul>
          </div>

          {/* Plumbing */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-red-400">Emergency Plumbing</p>
            <ul className="space-y-2 text-xs text-slate-400 font-poppins">
              <li><a href="#plumbing" className="hover:text-white transition-colors">Burst Copper Pipe Leak</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Main Sewer Line Overflow</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Water Heater Flooding</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Hydro-Jetting Interventions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-poppins">
          <p>© {currentYear} Agape Emergency Mechanical. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>NYC DOB Lic #2481</span>
            <span>EPA Universal</span>
            <span>$0 Overtime Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
