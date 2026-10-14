"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Clock, ShieldCheck } from "lucide-react";

interface Borough {
  name: string;
  area: string;
  x: number; // percentage
  y: number; // percentage
  avgArrival: string;
}

const BOROUGHS: Borough[] = [
  { name: "Manhattan", area: "Upper & Lower Manhattan", x: 42, y: 38, avgArrival: "30-40 min" },
  { name: "Brooklyn", area: "Park Slope, Heights, Bay Ridge", x: 46, y: 58, avgArrival: "30-45 min" },
  { name: "Queens", area: "Astoria, Bayside, Flushing", x: 62, y: 40, avgArrival: "35-45 min" },
  { name: "Staten Island", area: "North & South Shore", x: 25, y: 72, avgArrival: "40-50 min" },
  { name: "The Bronx", area: "Riverdale, Pelham, South Bronx", x: 50, y: 20, avgArrival: "35-45 min" },
  { name: "Long Island", area: "Nassau & Western Suffolk", x: 80, y: 46, avgArrival: "40-55 min" },
];

interface NYCServiceMapProps {
  theme?: "navy" | "light" | "emergency" | "architectural";
}

export default function NYCServiceMap({ theme = "navy" }: NYCServiceMapProps) {
  const [selectedBorough, setSelectedBorough] = useState<Borough>(BOROUGHS[0]);

  // Styling presets based on theme
  const styles = {
    navy: {
      cardBg: "bg-[#0B1E36] border-slate-700/80",
      mapBg: "bg-[#071322]",
      landColor: "#132A4A",
      waterColor: "#071322",
      accent: "text-amber-400",
      pinBg: "bg-amber-500",
      pinRing: "border-amber-400",
      textMuted: "text-slate-400",
      textColor: "text-white",
    },
    light: {
      cardBg: "bg-white border-emerald-950/10 shadow-sm",
      mapBg: "bg-[#F3EFEA]",
      landColor: "#E2DBD2",
      waterColor: "#F3EFEA",
      accent: "text-emerald-700",
      pinBg: "bg-[#092C28]",
      pinRing: "border-emerald-600",
      textMuted: "text-slate-500",
      textColor: "text-[#092C28]",
    },
    emergency: {
      cardBg: "bg-[#111726] border-red-500/30",
      mapBg: "bg-[#090D17]",
      landColor: "#1B2338",
      waterColor: "#090D17",
      accent: "text-red-400",
      pinBg: "bg-red-500",
      pinRing: "border-red-400",
      textMuted: "text-slate-400",
      textColor: "text-white",
    },
    architectural: {
      cardBg: "bg-slate-900/90 border-slate-800",
      mapBg: "bg-[#0D0F14]",
      landColor: "#1C2029",
      waterColor: "#0D0F14",
      accent: "text-amber-400",
      pinBg: "bg-amber-400",
      pinRing: "border-amber-300",
      textMuted: "text-slate-400",
      textColor: "text-white",
    },
  }[theme];

  return (
    <div className={`rounded-2xl border p-4 sm:p-5 flex flex-col justify-between space-y-4 ${styles.cardBg}`}>
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Navigation className={`w-4 h-4 ${styles.accent}`} />
          <span className={`text-xs font-bold uppercase tracking-wider ${styles.textColor}`}>
            Service Coverage Area
          </span>
        </div>
        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded-full">
          Live Dispatch
        </span>
      </div>

      {/* Interactive Map Visual */}
      <div className={`relative h-64 sm:h-72 w-full rounded-xl overflow-hidden border border-slate-800/50 ${styles.mapBg}`}>
        {/* SVG stylized map of NYC landmasses */}
        <svg viewBox="0 0 500 350" className="w-full h-full object-cover select-none">
          {/* Subtle grid pattern */}
          <defs>
            <pattern id={`grid-${theme}`} width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${theme})`} />

          {/* Stylized Borough shapes */}
          {/* Manhattan */}
          <path
            d="M 195 90 L 225 125 L 210 185 L 185 200 L 180 150 Z"
            fill={styles.landColor}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
          />
          {/* The Bronx */}
          <path
            d="M 215 50 L 285 55 L 290 105 L 235 115 L 210 80 Z"
            fill={styles.landColor}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
          />
          {/* Queens */}
          <path
            d="M 235 120 L 350 120 L 360 190 L 300 210 L 225 180 Z"
            fill={styles.landColor}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
          />
          {/* Brooklyn */}
          <path
            d="M 190 205 L 270 190 L 285 260 L 210 280 L 175 250 Z"
            fill={styles.landColor}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
          />
          {/* Staten Island */}
          <path
            d="M 110 230 L 160 240 L 150 300 L 95 285 Z"
            fill={styles.landColor}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
          />
          {/* Long Island (East Nassau) */}
          <path
            d="M 355 125 L 485 130 L 480 175 L 365 185 Z"
            fill={styles.landColor}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
          />
        </svg>

        {/* Interactive Borough Markers */}
        {BOROUGHS.map((b) => {
          const isSelected = selectedBorough.name === b.name;
          return (
            <button
              key={b.name}
              type="button"
              onClick={() => setSelectedBorough(b)}
              style={{ left: `${b.x}%`, top: `${b.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
            >
              <div className="relative flex items-center justify-center">
                {/* Ping ring */}
                <span
                  className={`absolute w-6 h-6 rounded-full animate-ping opacity-75 ${
                    isSelected ? "bg-amber-400" : "bg-white/40"
                  }`}
                />
                {/* Pin center */}
                <span
                  className={`relative w-4 h-4 rounded-full border-2 flex items-center justify-center shadow-md transition-transform group-hover:scale-125 ${
                    isSelected
                      ? "bg-amber-500 border-white scale-110"
                      : "bg-slate-800 border-slate-400"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>
              </div>

              {/* Label */}
              <span
                className={`absolute top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold whitespace-nowrap px-1.5 py-0.5 rounded transition-all pointer-events-none ${
                  isSelected
                    ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
                    : "bg-black/70 text-slate-300 group-hover:text-white"
                }`}
              >
                {b.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Selected Borough Info Pill */}
      <div className="p-3 bg-black/20 rounded-xl border border-white/5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <MapPin className={`w-4 h-4 ${styles.accent}`} />
          <div>
            <p className={`font-bold ${styles.textColor}`}>{selectedBorough.name}</p>
            <p className={`text-[10px] ${styles.textMuted}`}>{selectedBorough.area}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wider text-slate-400">Response Window</p>
          <p className={`font-black text-xs ${styles.accent}`}>{selectedBorough.avgArrival}</p>
        </div>
      </div>
    </div>
  );
}
