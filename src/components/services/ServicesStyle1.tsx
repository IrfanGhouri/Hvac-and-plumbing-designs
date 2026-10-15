"use client";

import React from "react";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA, ParentServiceData } from "@/data/servicesData";
import { COMPANY_INFO } from "@/data/navigation";

// Authentic vector manufacturer logos for the Partnered With marquee
const PARTNER_LOGOS = [
  {
    name: "Carrier",
    component: (
      <svg viewBox="0 0 160 48" className="h-7 sm:h-8 w-auto text-slate-800 hover:text-[#002F6C] transition-colors" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="80" cy="24" rx="76" ry="21" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <text x="80" y="32" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontStyle="italic" fontSize="27" fill="currentColor" letterSpacing="-0.5">Carrier</text>
      </svg>
    ),
  },
  {
    name: "Trane",
    component: (
      <svg viewBox="0 0 160 40" className="h-6 sm:h-7 w-auto text-slate-800 hover:text-[#E31837] transition-colors" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="31" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="33" fill="currentColor" letterSpacing="1">TRANE</text>
        <polygon points="126,8 142,8 134,34 118,34" fill="#FF5E00" />
      </svg>
    ),
  },
  {
    name: "Mitsubishi Electric",
    component: (
      <svg viewBox="0 0 220 40" className="h-6 sm:h-7 w-auto text-slate-800 hover:text-[#E60012] transition-colors" xmlns="http://www.w3.org/2000/svg">
        <g fill="#E60012">
          <polygon points="16,4 23,16 16,28 9,16" />
          <polygon points="9,16 16,28 2,28 -5,16" />
          <polygon points="23,16 37,16 30,28 16,28" />
        </g>
        <text x="44" y="21" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="13" fill="currentColor" letterSpacing="0.5">MITSUBISHI</text>
        <text x="44" y="33" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="10.5" fill="currentColor" letterSpacing="1.2">ELECTRIC</text>
      </svg>
    ),
  },
  {
    name: "Lennox",
    component: (
      <svg viewBox="0 0 170 40" className="h-6 sm:h-7 w-auto text-slate-800 hover:text-[#D71920] transition-colors" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="31" fontFamily="Georgia, serif" fontWeight="900" fontStyle="italic" fontSize="33" fill="currentColor" letterSpacing="0.5">LENNOX</text>
      </svg>
    ),
  },
  {
    name: "Daikin",
    component: (
      <svg viewBox="0 0 170 40" className="h-6 sm:h-7 w-auto text-slate-800 hover:text-[#0097E2] transition-colors" xmlns="http://www.w3.org/2000/svg">
        <polygon points="6,34 26,6 32,34" fill="#0097E2" />
        <text x="40" y="31" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="30" fill="currentColor" letterSpacing="1">DAIKIN</text>
      </svg>
    ),
  },
  {
    name: "Rheem",
    component: (
      <svg viewBox="0 0 150 40" className="h-6 sm:h-7 w-auto text-slate-800 hover:text-[#E31B23] transition-colors" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="22" cy="20" rx="18" ry="18" fill="#E31B23" />
        <text x="22" y="27" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" fontSize="22" fill="#fff">R</text>
        <text x="50" y="31" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontStyle="italic" fontSize="30" fill="currentColor" letterSpacing="-0.5">Rheem</text>
      </svg>
    ),
  },
  {
    name: "Kohler",
    component: (
      <svg viewBox="0 0 160 40" className="h-6 sm:h-7 w-auto text-slate-800 hover:text-slate-950 transition-colors" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="31" fontFamily="Times New Roman, Georgia, serif" fontWeight="800" fontSize="33" fill="currentColor" letterSpacing="2">KOHLER</text>
      </svg>
    ),
  },
  {
    name: "Moen",
    component: (
      <svg viewBox="0 0 140 40" className="h-6 sm:h-7 w-auto text-slate-800 hover:text-[#002D72] transition-colors" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="31" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="32" fill="currentColor" letterSpacing="3">MOEN</text>
      </svg>
    ),
  },
  {
    name: "Burnham",
    component: (
      <svg viewBox="0 0 180 40" className="h-6 sm:h-7 w-auto text-slate-800 hover:text-slate-950 transition-colors" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="26" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="24" fill="currentColor" letterSpacing="1.5">BURNHAM</text>
        <text x="6" y="37" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="9" fill="currentColor" letterSpacing="2">HYDRONICS</text>
      </svg>
    ),
  },
];

// Helper to render one full parent service section with 50/50 layout and optional column swap
function ParentServiceBlock({
  data,
  serviceName,
  badgeText,
  subHeadline,
  dispatchHighlight,
  offerHeading,
  reverse = false,
}: {
  data: ParentServiceData;
  serviceName: string;
  badgeText: string;
  subHeadline: string;
  dispatchHighlight: string;
  offerHeading: string;
  reverse?: boolean;
}) {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 2-Column Split Card: 50/50 (2/2) Equal Heights, Alternating Reverse */}
      <div
        className={`bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col items-stretch ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Content Column (50% Space, White Background) - with generous padding and tighter headline grouping */}
        <div className="lg:w-1/2 p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 font-montserrat">
            {badgeText}
          </span>
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat tracking-tight text-slate-950 leading-[1.1]">
              {serviceName}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-slate-700 font-poppins">
              {subHeadline}
            </p>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-poppins leading-relaxed pt-1">
            {data.whyBest}
          </p>
        </div>

        {/* Action Column (50% Space, Primary Navy Background, Equal Height) - generous padding */}
        <div className="lg:w-1/2 bg-[#071322] text-white p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black font-montserrat text-white leading-tight">
              {dispatchHighlight}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-poppins leading-relaxed">
              Mobile units active across Manhattan, Brooklyn, Queens, Bronx, and Staten Island.
            </p>
          </div>

          {/* 3 Guarantees moved here next to the button */}
          <div className="space-y-3 pt-2 text-sm font-medium text-slate-200">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Licensed &amp; Insured Technicians</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Upfront Flat Rates • No Extra Overtime Fees</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>All Work Backed by Written Warranty</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href={COMPANY_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold py-3.5 px-8 rounded-xl text-base font-montserrat transition-all shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current flex-shrink-0" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Centered Heading for Services We Offer */}
      <div className="text-center space-y-2 pt-2">
        <h3 className="text-2xl sm:text-3xl font-black font-montserrat tracking-tight text-slate-950">
          {offerHeading}
        </h3>
        <p className="text-sm text-slate-600 font-poppins max-w-xl mx-auto">
          Select a service below for same-day dispatch or a free in-home estimate.
        </p>
      </div>

      {/* 4 Clean Sub-Service Cards Grid (No image badge, no flat rates text, full-width Learn More button) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.subServices.map((sub) => (
          <div
            key={sub.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
          >
            {/* Photo (Clean without badges) */}
            <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
              <Image
                src={sub.image}
                alt={sub.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h4 className="text-lg font-black font-montserrat text-slate-900 group-hover:text-amber-600 transition-colors">
                  {sub.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-poppins leading-relaxed line-clamp-3">
                  {sub.shortDesc}
                </p>
              </div>

              {/* Full-width "Learn More" Button */}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href="#estimate"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-[#071322] text-slate-800 hover:text-white font-bold py-3 px-4 rounded-xl text-sm font-montserrat transition-all cursor-pointer group-hover:bg-[#071322] group-hover:text-white"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesStyle1() {
  const acData = SERVICES_DATA.ac;
  const heatingData = SERVICES_DATA.heating;
  const plumbingData = SERVICES_DATA.plumbing;

  return (
    <section id="services" className="bg-slate-50 text-slate-900 py-20 sm:py-28 lg:py-32 border-b border-slate-200">
      {/* =========================================================================
          PARTNERED WITH: Infinite Logo Marquee Strip
          ========================================================================= */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 pb-14 sm:pb-16 border-b border-slate-200/80">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 overflow-hidden">
          {/* "Partnered with" in bold */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-900 font-montserrat whitespace-nowrap">
              Partnered with
            </span>
            <div className="hidden md:block w-px h-8 bg-slate-300 ml-2" />
          </div>

          {/* Marquee Track with gradient fade on left and right */}
          <div className="flex-1 w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0%,black_30px,black_calc(100%-30px),transparent_100%)]">
            <div className="flex items-center gap-14 sm:gap-16 w-max animate-partner-marquee hover:[animation-play-state:paused]">
              {/* Duplicated list of brand logos for infinite marquee */}
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity"
                  title={logo.name}
                >
                  {logo.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded scoped animation for guaranteed smooth loop */}
      <style jsx>{`
        @keyframes partnerMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-partner-marquee {
          animation: partnerMarquee 26s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* =========================================================================
          INDIVIDUAL PARENT SECTIONS (50/50 EQUAL COLUMNS, ALTERNATING SWAP)
          ========================================================================= */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20 space-y-28 sm:space-y-36 lg:space-y-40">
        {/* 1. AIR CONDITIONING (White on Left, Navy on Right) */}
        <div id="ac">
          <ParentServiceBlock
            data={acData}
            serviceName="Air Conditioning & Cooling"
            badgeText="Cooling Authority"
            subHeadline="Emergency repairs, high-efficiency ductless systems, and precision multi-zone cooling."
            dispatchHighlight="Need Emergency Cooling?"
            offerHeading="AC services we offer"
            reverse={false}
          />
        </div>

        {/* 2. HEATING & BOILERS (SWAPPED: Navy on Left, White on Right) */}
        <div id="heating">
          <ParentServiceBlock
            data={heatingData}
            serviceName="Heating & Boiler Systems"
            badgeText="Heating Authority"
            subHeadline="Steam boilers, radiant floor heat, gas furnaces, and winter heat restoration."
            dispatchHighlight="No Heat in Your Home?"
            offerHeading="Heating services we offer"
            reverse={true}
          />
        </div>

        {/* 3. MASTER PLUMBING (White on Left, Navy on Right) */}
        <div id="plumbing">
          <ParentServiceBlock
            data={plumbingData}
            serviceName="Master Plumbing & Pipe Services"
            badgeText="Master Plumbing"
            subHeadline="Licensed Master Plumbers for leak repairs, tankless water heaters, and drain clearing."
            dispatchHighlight="Plumbing Leak or Emergency?"
            offerHeading="Plumbing services we offer"
            reverse={false}
          />
        </div>
      </div>
    </section>
  );
}
