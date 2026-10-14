"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  Phone,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  Calendar,
} from "lucide-react";
import GoogleReviewBadge from "@/components/common/GoogleReviewBadge";
import { COMPANY_INFO, NAVIGATION_DATA, NavCategory } from "@/data/navigation";

export default function HeaderStyle4() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
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
        setDrawerVisible(true);
      });
    });
  };

  const closeMenu = () => {
    setDrawerVisible(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
      document.body.style.overflow = "";
    }, 300);
  };

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* =========================================================
          TOP BAR - Style 4 (Fixed Clean Mobile Layout)
          ========================================================= */}
      <div className="bg-[#111317] text-slate-300 text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-12 border-b border-slate-800">
        <div className="max-w-[1720px] mx-auto">
          {/* Mobile view (< sm): Clean 2-row layout */}
          <div className="sm:hidden flex flex-col gap-1.5">
            {/* Top row */}
            <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-800">
              <div className="flex items-center gap-1.5 uppercase tracking-wider text-white font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-1 text-slate-300 text-[10px]">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                <span>No Emergency Fees</span>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between pt-0.5">
              <GoogleReviewBadge variant="dark" />
              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 text-white active:text-amber-400 font-bold text-xs"
              >
                <div className="w-4 h-4 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Phone className="w-2.5 h-2.5" />
                </div>
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
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="font-semibold uppercase tracking-wider text-white">
                  {COMPANY_INFO.emergencyAvailability}
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_INFO.emergencyBadge}</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <GoogleReviewBadge variant="dark" />

              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-2 text-white hover:text-amber-400 font-bold transition-colors text-xs sm:text-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-montserrat">{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVIGATION BAR - Style 4 (Minimalist Architectural)
          ========================================================= */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex items-center justify-between gap-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-9 h-9 bg-[#111317] flex items-center justify-center text-amber-400 border border-slate-900 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
            <span className="font-montserrat font-black text-lg">A</span>
          </div>
          <div>
            <span className="text-2xl font-black tracking-widest text-[#111317] font-montserrat uppercase block leading-none">
              Agape
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-500">
              AC • Heating • Plumbing
            </span>
          </div>
        </Link>

        {/* DESKTOP DROPDOWN MENU - Style 4: Minimalist Line-Divided Column */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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
                  className={`flex items-center gap-1.5 py-2 text-xs xl:text-sm font-bold tracking-wider uppercase transition-colors relative ${
                    isOpen
                      ? "text-amber-700"
                      : "text-slate-800 hover:text-amber-700"
                  }`}
                >
                  <span>{cat.title}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-amber-600" : "text-slate-400"
                    }`}
                  />
                  {isOpen && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 animate-in fade-in" />
                  )}
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 pt-2 w-[360px] animate-in fade-in duration-150 z-50">
                    <div className="bg-white border border-slate-200 shadow-xl p-3.5 divide-y divide-slate-100">
                      {cat.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-between py-3 px-2.5 hover:bg-slate-50 text-sm sm:text-[15px] font-bold text-slate-800 hover:text-amber-700 transition-colors group/item"
                        >
                          <span>{item.name}</span>
                          <span className="text-amber-600 font-bold opacity-0 group-hover/item:opacity-100 transition-opacity">
                            —
                          </span>
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
            className="hidden sm:inline-flex items-center gap-2 bg-[#111317] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 transition-all font-montserrat uppercase tracking-wider border border-amber-600/40"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Book an Appointment</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={openMenu}
            className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* =========================================================
          PORTAL MOBILE DRAWER - Style 4 (SLIDE-IN FROM LEFT)
          ========================================================= */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex justify-start">
            {/* Backdrop */}
            <div
              className={`fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity duration-300 ease-out ${
                drawerVisible ? "opacity-100" : "opacity-0"
              }`}
              onClick={closeMenu}
            />

            {/* Drawer Content: Slide in from LEFT */}
            <div
              className={`relative w-full max-w-sm bg-white border-r border-slate-200 h-full shadow-2xl flex flex-col z-10 transform transition-transform duration-300 ease-in-out ${
                drawerVisible ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Header */}
              <div className="bg-[#111317] text-white p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-base uppercase tracking-wider font-montserrat">
                    AGAPE
                  </h3>
                  <p className="text-[10px] text-amber-400 uppercase tracking-widest">
                    24/7 HVAC &amp; Plumbing
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Strip */}
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center gap-2 text-xs text-slate-800">
                <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="font-semibold uppercase tracking-tight text-[11px]">
                  No Extra Charges For Emergency Service
                </span>
              </div>

              {/* Accordions */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
                {NAVIGATION_DATA.map((cat) => {
                  const isOpen = openMobileAccordion === cat.title;

                  return (
                    <div
                      key={cat.title}
                      className="border border-slate-200 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileAccordion(isOpen ? null : cat.title)
                        }
                        className="w-full flex items-center justify-between p-3.5 bg-slate-50 text-left font-bold text-slate-900 text-xs uppercase tracking-wider"
                      >
                        <span>{cat.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="p-2.5 bg-white divide-y divide-slate-100">
                          {cat.items.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={closeMenu}
                              className="block py-3 px-2.5 hover:bg-slate-50 text-sm sm:text-base font-semibold text-slate-800 hover:text-amber-700"
                            >
                              <span>{sub.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="p-3 bg-slate-50 border border-slate-200 flex items-center justify-between mt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Google Reviews
                  </span>
                  <GoogleReviewBadge variant="minimal" />
                </div>
              </div>

              {/* Footer: Phone Call ONLY */}
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="w-full flex items-center justify-center gap-2 bg-[#111317] hover:bg-slate-800 text-white font-bold py-3.5 text-xs uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
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
