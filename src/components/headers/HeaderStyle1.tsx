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
  Flame,
  CalendarCheck,
  Wrench,
  Check,
  Plus,
  Wind,
  Gauge,
  Sparkles,
  Droplet,
  Heart,
  Shield,
  DollarSign,
  Star,
} from "lucide-react";
import GoogleReviewBadge from "@/components/common/GoogleReviewBadge";
import { COMPANY_INFO, NAVIGATION_DATA, NavCategory } from "@/data/navigation";

export default function HeaderStyle1() {
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

  const getServiceIcon = (icon?: string) => {
    switch (icon) {
      case "wrench":
        return <Wrench className="w-4 h-4 text-amber-500" />;
      case "check":
        return <Check className="w-4 h-4 text-emerald-500" />;
      case "plus":
        return <Plus className="w-4 h-4 text-sky-500" />;
      case "wind":
        return <Wind className="w-4 h-4 text-teal-500" />;
      case "flame":
        return <Flame className="w-4 h-4 text-orange-500" />;
      case "gauge":
        return <Gauge className="w-4 h-4 text-amber-500" />;
      case "pipette":
        return <Wrench className="w-4 h-4 text-blue-500" />;
      case "sparkles":
        return <Sparkles className="w-4 h-4 text-cyan-500" />;
      case "droplet":
        return <Droplet className="w-4 h-4 text-blue-500" />;
      case "heart":
        return <Heart className="w-4 h-4 text-rose-500" />;
      case "shield":
        return <Shield className="w-4 h-4 text-amber-500" />;
      case "dollar":
        return <DollarSign className="w-4 h-4 text-emerald-500" />;
      case "star":
        return <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />;
      default:
        return <Check className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
      {/* =========================================================
          TOP BAR - Style 1 (Fixed Clean Mobile Layout)
          ========================================================= */}
      <div className="bg-[#0B1E36] text-white text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-6 lg:px-12 border-b border-slate-800">
        <div className="max-w-[1720px] mx-auto">
          {/* Mobile view (< sm): Clean 2-row layout with zero wrapping */}
          <div className="sm:hidden flex flex-col gap-1.5">
            {/* Top row: 24/7 on left, guarantee on right */}
            <div className="flex items-center justify-between text-[11px] pb-1 border-b border-white/10">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-1 text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>No Extra Emergency Fees</span>
              </div>
            </div>

            {/* Bottom row: Google review on left, Phone button on right */}
            <div className="flex items-center justify-between pt-0.5">
              <GoogleReviewBadge variant="dark" />
              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 bg-amber-500 active:bg-amber-400 text-slate-950 font-bold px-2.5 py-1 rounded text-xs shadow-xs"
              >
                <Phone className="w-3 h-3" />
                <span className="font-montserrat font-bold text-[11px]">
                  {COMPANY_INFO.phone}
                </span>
              </a>
            </div>
          </div>

          {/* Desktop & Tablet view (sm: and up): Spacious single line */}
          <div className="hidden sm:flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-emerald-400">
                  {COMPANY_INFO.emergencyAvailability}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-medium text-slate-200">
                  {COMPANY_INFO.emergencyBadge}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <GoogleReviewBadge variant="dark" />

              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded transition-colors text-xs sm:text-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="font-montserrat font-bold">
                  {COMPANY_INFO.phone}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVIGATION BAR - Style 1 (Clean Industrial)
          ========================================================= */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-[#0B1E36] flex items-center justify-center text-white shadow-sm group-hover:bg-[#152e4d] transition-colors">
            <Flame className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-[#0B1E36] font-montserrat block leading-none">
              AGAPE
            </span>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              AC, Heating &amp; Plumbing
            </span>
          </div>
        </Link>

        {/* DESKTOP DROPDOWN MENU - Style 1: 2-Column Clean Grid */}
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
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isOpen
                      ? "text-amber-600 bg-amber-50"
                      : "text-slate-800 hover:text-amber-600 hover:bg-slate-50"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{cat.title}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-amber-600" : "text-slate-400"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64 animate-in fade-in duration-150 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 divide-y divide-slate-100/80">
                      {cat.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm font-semibold text-slate-800 hover:text-amber-600 hover:bg-slate-50 transition-colors"
                        >
                          {item.name}
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
            className="hidden sm:inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all font-montserrat"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book an Appointment</span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={openMenu}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* =========================================================
          PORTAL MOBILE DRAWER - Style 1 (Slide-in from RIGHT)
          ========================================================= */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex justify-end">
            {/* Backdrop */}
            <div
              className={`fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 ease-out ${
                drawerVisible ? "opacity-100" : "opacity-0"
              }`}
              onClick={closeMenu}
            />

            {/* Drawer Content: Slide from RIGHT */}
            <div
              className={`relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 transform transition-transform duration-300 ease-out ${
                drawerVisible ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Header */}
              <div className="bg-[#0B1E36] text-white p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-base font-montserrat">AGAPE</h3>
                  <p className="text-[11px] text-amber-400">
                    24/7 AC, Heating &amp; Plumbing
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Emergency Banner */}
              <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center gap-2 text-xs text-amber-900 font-medium">
                <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>No Extra Charges for Emergency Services</span>
              </div>

              {/* Accordion List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
                {NAVIGATION_DATA.map((cat) => {
                  const isOpen = openMobileAccordion === cat.title;

                  return (
                    <div
                      key={cat.title}
                      className="border border-slate-200 rounded-lg overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileAccordion(isOpen ? null : cat.title)
                        }
                        className="w-full flex items-center justify-between p-3.5 bg-slate-50 text-left font-bold text-slate-800 text-sm"
                      >
                        <span>{cat.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="py-1 bg-white divide-y divide-slate-100">
                          {cat.items.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={closeMenu}
                              className="block py-2.5 px-4 text-sm font-medium text-slate-700 hover:text-amber-600 hover:bg-slate-50 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Google Reviews */}
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between mt-4">
                  <span className="text-xs font-semibold text-slate-700">
                    Google Reviews
                  </span>
                  <GoogleReviewBadge variant="minimal" />
                </div>
              </div>

              {/* Mobile Drawer Footer: Phone Call ONLY */}
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="w-full flex items-center justify-center gap-2 bg-[#0B1E36] hover:bg-[#152e4d] text-white font-bold py-3.5 rounded-lg text-sm transition-colors shadow-sm"
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
