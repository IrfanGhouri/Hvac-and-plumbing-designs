"use client";

import React from "react";
import Link from "next/link";
import { Compass, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";

export default function FooterStyle4() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B0C0E] text-white border-t border-slate-800">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black font-montserrat tracking-tight uppercase text-white">
                AGAPE<span className="text-amber-400">.</span>
              </span>
              <span className="block text-[11px] font-mono text-amber-400 uppercase tracking-widest mt-0.5">
                Architectural Mechanical Systems
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 font-poppins leading-relaxed max-w-sm">
              Mechanical contracting partner for premier New York architects, historic brownstone owners, and luxury residences.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 font-mono pt-2">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">TEL:</span>
                <a href={COMPANY_INFO.phoneTel} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">LOC:</span>
                <span>Manhattan • Brooklyn • Queens • Long Island</span>
              </div>
            </div>
          </div>

          {/* Division 23 HVAC */}
          <div className="space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">Division 23 • HVAC</p>
            <ul className="space-y-2 text-xs text-slate-400 font-poppins">
              <li><a href="#ac" className="hover:text-white transition-colors">Concealed VRF Cooling</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">Linear Slot Diffusers</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">Acoustic Vibration Isolators</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">Multi-Zone Engineering</a></li>
            </ul>
          </div>

          {/* Division 23 Hydronics */}
          <div className="space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">Division 23 • Heating</p>
            <ul className="space-y-2 text-xs text-slate-400 font-poppins">
              <li><a href="#heating" className="hover:text-white transition-colors">High-AFUE Boilers</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">Hydronic In-Floor Heating</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">Brownstone Steam Systems</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">Museum Humidity Control</a></li>
            </ul>
          </div>

          {/* Division 22 Plumbing */}
          <div className="space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">Division 22 • Sanitary</p>
            <ul className="space-y-2 text-xs text-slate-400 font-poppins">
              <li><a href="#plumbing" className="hover:text-white transition-colors">Master Sanitary Piping</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Luxury Fixture Fitting</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Tankless Recirculation</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Acoustic Leak Detection</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {currentYear} Agape Architectural Mechanical. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>NYC MASTER PLUMBER #2481</span>
            <span>EPA UNIVERSAL</span>
            <span>FIXED CONTRACTS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
