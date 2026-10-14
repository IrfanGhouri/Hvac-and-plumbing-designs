"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Heart, Wrench, Snowflake, Flame, Droplet } from "lucide-react";
import { COMPANY_INFO, NAVIGATION_DATA } from "@/data/navigation";

export default function FooterStyle1() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#040A14] text-white border-t border-slate-800 relative overflow-hidden">
      {/* Top Banner Strip */}
      <div className="bg-[#071322] border-b border-slate-800/80 py-4 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1720px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-slate-200">24/7/365 Emergency Service Available</span>
            <span className="text-slate-400 hidden sm:inline">• No Extra Charges for Emergency Calls</span>
          </div>

          <a
            href={COMPANY_INFO.phoneTel}
            className="flex items-center gap-2 font-bold text-amber-400 hover:text-amber-300 font-montserrat"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Any Time: {COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black font-montserrat tracking-tight text-white">
                AGAPE<span className="text-amber-400">.</span>
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                AC, Heating &amp; Master Plumbing
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 font-poppins leading-relaxed max-w-sm">
              New York&rsquo;s trusted 24/7 mechanical contractors. Master plumbing, precision air conditioning, and winter boiler reliability with zero overtime fees.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2 font-poppins">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={COMPANY_INFO.phoneTel} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Serving Manhattan, Brooklyn, Queens, Bronx, Staten Island &amp; LI</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] text-slate-400">
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">NYC DOB Lic #2481</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">EPA Universal Certified</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">Fully Insured</span>
            </div>
          </div>

          {/* Col 2: Air Conditioning */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Snowflake className="w-3.5 h-3.5" />
              <span>Air Conditioning</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-400 font-poppins">
              <li><a href="#ac" className="hover:text-white transition-colors">AC Emergency Repair</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">AC Maintenance &amp; Tune-Up</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">AC Replacement &amp; Install</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">Ductless Mini-Split Systems</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">Multi-Zone Inverter Cooling</a></li>
            </ul>
          </div>

          {/* Col 3: Heating */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Flame className="w-3.5 h-3.5" />
              <span>Heating &amp; Boilers</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-400 font-poppins">
              <li><a href="#heating" className="hover:text-white transition-colors">Heater &amp; Furnace Repair</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">Boiler Safety Tune-Up</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">High-Efficiency Boilers</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">Pre-War Steam Radiators</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">Smart WiFi Thermostats</a></li>
            </ul>
          </div>

          {/* Col 4: Plumbing */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Droplet className="w-3.5 h-3.5" />
              <span>Master Plumbing</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-400 font-poppins">
              <li><a href="#plumbing" className="hover:text-white transition-colors">Burst Pipe Emergency Repair</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Drain Hydro-Jetting</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Tankless Water Heaters</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Sink &amp; Luxury Fixtures</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Acoustic Leak Detection</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Agape AC, Heating &amp; Plumbing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
