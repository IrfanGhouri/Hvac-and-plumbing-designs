"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, Mail, MapPin, Radio, Clock, ShieldAlert, AlertTriangle } from "lucide-react";
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

            <div className="space-y-2 text-xs text-slate-300 pt-2 font-poppins">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a href={COMPANY_INFO.emailMailto} className="hover:text-red-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black px-5 py-2.5 rounded-xl text-xs font-montserrat transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>HOTLINE: {COMPANY_INFO.phone}</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href={COMPANY_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-500 flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-500 flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.socialLinks.x}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-500 flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-500 flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
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
