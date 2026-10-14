import React from "react";
import { Star } from "lucide-react";

interface GoogleReviewBadgeProps {
  variant?: "dark" | "light" | "pill" | "minimal";
  className?: string;
}

export default function GoogleReviewBadge({
  variant = "light",
  className = "",
}: GoogleReviewBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 group transition-all duration-200 cursor-pointer ${
        variant === "dark"
          ? "text-slate-200 hover:text-white"
          : variant === "pill"
          ? "bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-white"
          : variant === "minimal"
          ? "text-slate-600 hover:text-slate-900"
          : "text-slate-800"
      } ${className}`}
      title="Google Reviews"
    >
      {/* Official styled Google 'G' icon */}
      <div className="relative flex-shrink-0 w-4 h-4 rounded-full bg-white flex items-center justify-center p-[2px] shadow-xs">
        <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.66-5.17 3.66-9.09z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.27v3.09C3.3 21.41 7.37 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.31c-.25-.72-.38-1.49-.38-2.31s.14-1.59.38-2.31V6.6H1.27C.46 8.23 0 10.06 0 12s.46 3.77 1.27 5.4l4.01-3.09z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.3 2.59 1.27 6.6l4.01 3.09c.95-2.84 3.6-4.94 6.72-4.94z"
          />
        </svg>
      </div>

      {/* 5 Stars Only (No rating number, no review count) */}
      <div className="flex items-center gap-0.5 text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
        ))}
      </div>
    </div>
  );
}
