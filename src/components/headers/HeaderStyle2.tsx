"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  Phone,
  Shield,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
  Check,
  Award,
} from "lucide-react";
import GoogleReviewBadge from "@/components/common/GoogleReviewBadge";
import { COMPANY_INFO, NAVIGATION_DATA, NavCategory } from "@/data/navigation";

export default function HeaderStyle2() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sheetVisible, setSheetVisible] = useState(false);
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
        setSheetVisible(true);
      });
    });
  };

  const closeMenu = () => {
    setSheetVisible(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
      document.body.style.overflow = "";
    }, 300);
  };

  return (
    <header className="w-full bg-[#FAF9F6] sticky top-0 z-50 border-b border-emerald-950/10">
      {/* =========================================================
          TOP BAR - Style 2 (Fixed Clean Mobile Layout)
          ========================================================= */}
      <div className="bg-[#092C28] text-emerald-50 text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-6 lg:px-12 border-b border-emerald-900/60">
        <div className="max-w-[1720px] mx-auto">
          {/* Mobile view (< sm): Clean 2-row layout */}
          <div className="sm:hidden flex flex-col gap-1.5">
            {/* Top row */}
            <div className="flex items-center justify-between text-[11px] pb-1 border-b border-emerald-800/60">
              <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-100/90 font-medium">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>No Emergency Surcharges</span>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between pt-0.5">
              <GoogleReviewBadge
                variant="pill"
                className="bg-emerald-900/50 border-emerald-700/50 py-0.5"
              />
              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 text-white bg-emerald-800/80 active:bg-emerald-700 px-2.5 py-1 rounded-full text-xs font-bold border border-emerald-600/50 shadow-xs"
              >
                <Phone className="w-3 h-3 text-amber-300" />
                <span className="font-montserrat text-[11px]">
                  {COMPANY_INFO.phone}
                </span>
              </a>
            </div>
          </div>

          {/* Desktop & Tablet view (sm: and up) */}
          <div className="hidden sm:flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-medium text-emerald-200">
                  {COMPANY_INFO.emergencyAvailability}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-emerald-100 font-medium">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_INFO.emergencyBadge}</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <GoogleReviewBadge
                variant="pill"
                className="bg-emerald-900/50 border-emerald-700/50"
              />

              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 text-white hover:text-amber-300 font-bold transition-colors text-xs sm:text-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-montserrat">{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVIGATION BAR - Style 2 (Floating Pill Luxury)
          ========================================================= */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[#092C28] flex items-center justify-center text-amber-300 shadow-xs border border-emerald-800/40">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-2xl font-bold tracking-tight text-[#092C28] font-montserrat block leading-none">
              Agape
            </span>
            <span className="text-[11px] font-medium text-emerald-900/70">
              AC • Heating • Plumbing
            </span>
          </div>
        </Link>

        {/* DESKTOP DROPDOWN MENU - Style 2: Luxury Clean List with Feature Visual Card */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-950/10 shadow-xs">
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
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all ${
                    isOpen
                      ? "text-emerald-950 bg-emerald-100/60 font-bold"
                      : "text-slate-700 hover:text-emerald-900 hover:bg-slate-100/60"
                  }`}
                >
                  <span>{cat.title}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-700" : "text-slate-400"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 pt-3 w-[500px] animate-in fade-in duration-150 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-emerald-950/10 p-4 grid grid-cols-12 gap-4">
                      {/* Left: Clean Vertical List */}
                      <div className="col-span-7 space-y-1.5">
                        {cat.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-emerald-50/70 text-slate-800 hover:text-emerald-950 text-sm sm:text-[15px] font-semibold transition-colors group/sub"
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover/sub:scale-125 transition-transform flex-shrink-0" />
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>

                      {/* Right: Clean Visual Accent Card */}
                      <div className="col-span-5 bg-gradient-to-br from-emerald-900 to-[#092C28] text-white p-3.5 rounded-xl flex flex-col justify-between">
                        <div>
                          <Award className="w-5 h-5 text-amber-300 mb-2" />
                          <p className="text-sm font-bold text-white">
                            {cat.title}
                          </p>
                          <p className="text-xs text-emerald-200 mt-1">
                            High-efficiency certified service.
                          </p>
                        </div>
                        <Link
                          href="#consult"
                          className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-amber-200 mt-3"
                        >
                          <span>Explore</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
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
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#092C28] hover:bg-[#0e443e] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-xs transition-all font-montserrat border border-amber-400/30"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={openMenu}
            className="lg:hidden p-2 rounded-xl text-[#092C28] hover:bg-emerald-100/50 transition-colors cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* =========================================================
          PORTAL MOBILE DRAWER - Style 2 (BOTTOM SHEET SLIDE-UP)
          ========================================================= */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex flex-col justify-end">
            {/* Backdrop */}
            <div
              className={`fixed inset-0 bg-emerald-950/60 backdrop-blur-xs transition-opacity duration-300 ease-out ${
                sheetVisible ? "opacity-100" : "opacity-0"
              }`}
              onClick={closeMenu}
            />

            {/* Bottom Sheet Modal: Slide UP from bottom */}
            <div
              className={`relative w-full max-h-[88vh] bg-[#FAF9F6] rounded-t-[28px] shadow-2xl flex flex-col z-10 transform transition-transform duration-300 ease-out border-t border-emerald-900/10 ${
                sheetVisible ? "translate-y-0" : "translate-y-full"
              }`}
            >
              {/* Grab Handle */}
              <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-2.5 flex-shrink-0" />

              {/* Header */}
              <div className="px-5 py-2.5 flex items-center justify-between border-b border-emerald-950/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#092C28] text-amber-300 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#092C28] font-montserrat">
                      Agape Eco-Comfort
                    </h3>
                    <p className="text-[10px] text-emerald-800">
                      24/7 HVAC &amp; Master Plumbing
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Guarantee Banner */}
              <div className="bg-emerald-50/80 px-5 py-2 flex items-center gap-2 text-xs text-emerald-900 border-b border-emerald-100">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium">
                  Zero Extra Charges for Emergency Calls
                </span>
              </div>

              {/* Scrollable Accordions */}
              <div className="flex-1 overflow-y-auto px-5 py-3 space-y-2.5">
                {NAVIGATION_DATA.map((cat) => {
                  const isOpen = openMobileAccordion === cat.title;

                  return (
                    <div
                      key={cat.title}
                      className="border border-emerald-950/10 rounded-2xl bg-white overflow-hidden shadow-xs"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileAccordion(isOpen ? null : cat.title)
                        }
                        className="w-full flex items-center justify-between p-3.5 text-left font-bold text-[#092C28] text-sm"
                      >
                        <span>{cat.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-emerald-700 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="p-2.5 bg-emerald-50/40 border-t border-emerald-100 divide-y divide-emerald-100/50">
                          {cat.items.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={closeMenu}
                              className="flex items-center gap-2.5 py-3 px-2 text-sm font-semibold text-slate-800 hover:text-emerald-950"
                            >
                              <span className="w-2 h-2 rounded-full bg-emerald-500" />
                              <span>{sub.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="p-3 bg-white rounded-2xl border border-emerald-950/10 flex items-center justify-between mt-2">
                  <span className="text-xs font-semibold text-slate-800">
                    Google Reviews
                  </span>
                  <GoogleReviewBadge variant="minimal" />
                </div>
              </div>

              {/* Bottom Sheet Footer: Call Button ONLY */}
              <div className="p-5 bg-white border-t border-emerald-100">
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="w-full flex items-center justify-center gap-2 bg-[#092C28] hover:bg-[#0e443e] text-white font-bold py-3.5 rounded-full text-sm shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
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
