"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Heart, Wind, Flame, Droplets } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";

export default function FooterStyle2() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#051815] text-white border-t border-emerald-950/20">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-emerald-900/30">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black font-montserrat tracking-tight text-white">
                AGAPE<span className="text-[#D4AF37]">.</span>
              </span>
              <span className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                Quiet Climate &amp; Master Plumbing
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-emerald-100/70 font-poppins leading-relaxed max-w-sm">
              Engineering Nordic calm, energy efficiency, and master plumbing craftsmanship for New York residences. Zero surcharges, 24/7.
            </p>

            <div className="space-y-2 text-xs text-emerald-200 pt-2 font-poppins">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={COMPANY_INFO.phoneTel} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>NYC 5 Boroughs &amp; Nassau County</span>
              </div>
            </div>
          </div>

          {/* Cooling */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Air Conditioning</p>
            <ul className="space-y-2 text-xs text-emerald-100/70 font-poppins">
              <li><a href="#ac" className="hover:text-white transition-colors">Whisper Heat Pumps</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">Ductless Mini-Splits</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">Eco-Smart Tune-Ups</a></li>
              <li><a href="#ac" className="hover:text-white transition-colors">NY Clean Heat Rebates</a></li>
            </ul>
          </div>

          {/* Heating */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Heating Systems</p>
            <ul className="space-y-2 text-xs text-emerald-100/70 font-poppins">
              <li><a href="#heating" className="hover:text-white transition-colors">Hydronic Radiant Heat</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">Condensing Boilers</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">Steam Balancing</a></li>
              <li><a href="#heating" className="hover:text-white transition-colors">Emergency Heat Repair</a></li>
            </ul>
          </div>

          {/* Plumbing */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Master Plumbing</p>
            <ul className="space-y-2 text-xs text-emerald-100/70 font-poppins">
              <li><a href="#plumbing" className="hover:text-white transition-colors">Luxury Bath Fixtures</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Water Purification</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Tankless Hot Water</a></li>
              <li><a href="#plumbing" className="hover:text-white transition-colors">Acoustic Leak Pinpointing</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60 font-poppins">
          <p>© {currentYear} Agape. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">DOB License #2481</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
