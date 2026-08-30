"use client";

import { useState } from "react";
import { SITE } from "@/lib/site-config";

const METHODS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]">
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M10 5.5h4M10 18.5h4" strokeLinecap="round" />
      </svg>
    ),
    title: "UPI · यूपीआई",
    detail: SITE.upi,
    copyable: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]">
        <path d="M3 9.5 12 4l9 5.5V19a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19V9.5Z" />
        <path d="M9 20.5V12h6v8.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Bank Transfer · बैंक हस्तांतरण",
    detail: "Account details on request",
    copyable: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]">
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="3" y="13" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="3" height="3" rx="0.5" />
        <rect x="18" y="13" width="3" height="3" rx="0.5" />
        <rect x="13" y="18" width="3" height="3" rx="0.5" />
        <rect x="18" y="18" width="3" height="3" rx="0.5" />
      </svg>
    ),
    title: "QR Code · क्यूआर कोड",
    detail: "Scan to donate instantly",
    copyable: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]">
        <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
        <path d="M2.5 10.5h19" />
      </svg>
    ),
    title: "Cards & Wallets · कार्ड",
    detail: "All major payment methods accepted",
    copyable: false,
  },
] as const;

export function PaymentMethodsList() {
  const [copied, setCopied] = useState(false);

  async function copyUpi() {
    try {
      await navigator.clipboard.writeText(SITE.upi);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <ul className="mt-6 space-y-2">
      {METHODS.map((method) => (
        <li
          key={method.title}
          className="card-hover flex items-center gap-3 rounded-xl bg-[#f4f4f4] px-3.5 py-3"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand">
            {method.icon}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-ink">{method.title}</p>
            <p className="mt-0.5 break-all text-sm text-zinc-500">{method.detail}</p>
          </div>
          {method.copyable ? (
            <button
              type="button"
              onClick={copyUpi}
              className="shrink-0 rounded-lg bg-brand px-2.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-brand-dark"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
