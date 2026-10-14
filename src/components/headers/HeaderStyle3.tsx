"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  PhoneCall,
  Zap,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import GoogleReviewBadge from "@/components/common/GoogleReviewBadge";
import { COMPANY_INFO, NAVIGATION_DATA, NavCategory } from "@/data/navigation";

export default function HeaderStyle3() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cockpitVisible, setCockpitVisible] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(
    "Air Conditioning"
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openMenu = () => {
    setMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setCockpitVisible(true);
      });
    });
  };

  const closeMenu = () => {
    setCockpitVisible(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
      document.body.style.overflow = "";
    }, 300);
  };

  return (
    <header className="w-full bg-[#0B0F19] text-white sticky top-0 z-50 border-b border-slate-800 shadow-lg">
      {/* =========================================================
          TOP BAR - Style 3 (Fixed Clean Mobile Layout)
          ========================================================= */}
      <div className="bg-gradient-to-r from-red-700 via-rose-700 to-red-800 text-white text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-6 lg:px-12 border-b border-red-600/50">
        <div className="max-w-[1720px] mx-auto">
          {/* Mobile view (< sm): Clean 2-row layout */}
          <div className="sm:hidden flex flex-col gap-1.5">
            {/* Top row */}
            <div className="flex items-center justify-between text-[11px] pb-1 border-b border-white/20 font-bold">
              <div className="flex items-center gap-1.5 uppercase text-yellow-300">
                <Zap className="w-3.5 h-3.5 fill-yellow-300" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <CheckCircle className="w-3.5 h-3.5 text-yellow-300" />
                <span>No Emergency Fees</span>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between pt-0.5">
              <GoogleReviewBadge variant="pill" className="bg-black/30 border-white/20 py-0.5" />
              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 bg-white text-red-700 active:bg-yellow-300 active:text-slate-950 font-black px-2.5 py-1 rounded text-xs shadow-xs"
              >
                <PhoneCall className="w-3 h-3" />
                <span className="font-montserrat font-bold text-[11px]">
                  {COMPANY_INFO.phone}
                </span>
              </a>
            </div>
          </div>

          {/* Desktop & Tablet view (sm: and up) */}
          <div className="hidden sm:flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs">
                <Zap className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                <span>{COMPANY_INFO.emergencyAvailability}</span>
              </div>

              <div className="flex items-center gap-1.5 font-medium text-white/95 text-xs sm:text-sm">
                <CheckCircle className="w-3.5 h-3.5 text-yellow-300" />
                <span>{COMPANY_INFO.emergencyBadge}</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <GoogleReviewBadge variant="pill" className="bg-black/30 border-white/20" />

              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-2 bg-white text-red-700 hover:bg-yellow-300 hover:text-slate-950 font-black px-3.5 py-1 rounded transition-colors text-xs sm:text-sm shadow-sm font-montserrat"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVIGATION BAR - Style 3 (High-Tech Carbon)
          ========================================================= */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between gap-4">
        {/* LOGO (24/7 REMOVED AS REQUESTED) */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-md group-hover:bg-red-500 transition-colors">
            <Zap className="w-5 h-5 fill-white" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-white font-montserrat block leading-none">
              AGAPE
            </span>
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              AC • Heating • Plumbing
            </span>
          </div>
        </Link>

        {/* DESKTOP DROPDOWN MENU - Style 3: Sleek Emergency Bars */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAVIGATION_DATA.map((cat: NavCategory) => {
            const isOpen = activeDropdown === cat.title;

            return (
              <div
                key={cat.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(cat.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded text-sm font-bold tracking-tight transition-colors ${
                    isOpen
                      ? "text-red-400 bg-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{cat.title}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-red-400" : "text-slate-500"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 pt-2 w-[400px] animate-in fade-in duration-150 z-50">
                    <div className="bg-[#111726] border border-slate-700 rounded-xl shadow-2xl p-3 space-y-1.5">
                      {cat.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800 border border-transparent hover:border-red-500/40 text-sm sm:text-[15px] font-bold text-slate-200 hover:text-white transition-all group/item"
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="w-4 h-4 text-slate-500 group-hover/item:text-red-400 group-hover/item:translate-x-1.5 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA & MOBILE TOGGLE */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Link
            href="#appointment"
            className="hidden sm:inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded shadow-md transition-all font-montserrat"
          >
            <span>Book an Appointment</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={openMenu}
            className="lg:hidden p-2 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* =========================================================
          PORTAL MOBILE DRAWER - Style 3 (SLIDE-DOWN FROM TOP)
          ========================================================= */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex flex-col justify-start">
            {/* Backdrop */}
            <div
              className={`fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity duration-300 ease-out ${
                cockpitVisible ? "opacity-100" : "opacity-0"
              }`}
              onClick={closeMenu}
            />

            {/* Cockpit Overlay: Slide DOWN from TOP */}
            <div
              className={`relative w-full max-h-[92vh] bg-[#0B0F19] border-b-2 border-red-600 shadow-2xl flex flex-col z-10 transform transition-transform duration-300 ease-out text-white ${
                cockpitVisible ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-red-700 to-red-900 p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-base font-montserrat">
                    AGAPE RAPID DISPATCH
                  </h3>
                  <p className="text-[11px] text-yellow-200">
                    24/7 Emergency AC, Heating &amp; Plumbing
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-1.5 rounded bg-black/20 text-white hover:bg-black/40 transition-colors cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Guarantee */}
              <div className="bg-red-950/80 border-b border-red-800/80 px-4 py-2 flex items-center gap-2 text-xs text-red-200">
                <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="font-semibold">
                  Zero Extra Charges for Emergency Services
                </span>
              </div>

              {/* Accordions */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
                {NAVIGATION_DATA.map((cat) => {
                  const isOpen = openMobileAccordion === cat.title;

                  return (
                    <div
                      key={cat.title}
                      className="border border-slate-800 rounded-lg bg-slate-900/60 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileAccordion(isOpen ? null : cat.title)
                        }
                        className="w-full flex items-center justify-between p-3.5 text-left font-bold text-white text-sm"
                      >
                        <span>{cat.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="p-2.5 bg-[#080B12] border-t border-slate-800 space-y-1.5">
                          {cat.items.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={closeMenu}
                              className="flex items-center justify-between p-3 rounded bg-slate-900/80 hover:bg-slate-800 text-sm sm:text-base text-slate-200 font-semibold"
                            >
                              <span>{sub.name}</span>
                              <ArrowRight className="w-4 h-4 text-red-400" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between mt-2">
                  <span className="text-xs font-semibold text-slate-300">
                    Google Reviews
                  </span>
                  <GoogleReviewBadge variant="pill" />
                </div>
              </div>

              {/* Footer: Emergency Call Button ONLY */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800">
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black py-3.5 rounded text-sm transition-colors shadow-lg"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
