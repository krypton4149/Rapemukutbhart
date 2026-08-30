"use client";

import { SITE } from "@/lib/site-config";

export function HelplineFab() {
  return (
    <a
      href={`tel:${SITE.emergencyHelpline}`}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-white/20 bg-brand/95 px-4 py-3 text-sm font-bold text-white shadow-brand-glow backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 sm:px-5"
      aria-label={`Call women's helpline ${SITE.emergencyHelpline}`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-4 fill-none stroke-current stroke-2"
      >
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-devanagari">हेल्पलाइन</span>
      <span aria-hidden="true">·</span>
      <span>{SITE.emergencyHelpline}</span>
    </a>
  );
}
