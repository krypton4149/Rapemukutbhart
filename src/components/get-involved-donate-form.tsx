"use client";

import { useState } from "react";
import { SITE } from "@/lib/site-config";

const AMOUNTS = [500, 1000, 2500, 5000, 10000] as const;

const PURPOSES = [
  "General Support · सामान्य सहयोग",
  "Awareness Campaigns · जागरूकता अभियान",
  "Survivor Support · उत्तरजीवी सहायता",
  "Education Programs · शैक्षिक कार्यक्रम",
] as const;

export function GetInvolvedDonateForm() {
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [otherAmount, setOtherAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const finalAmount = otherAmount
    ? Number(otherAmount)
    : selectedAmount;

  async function handleDonate() {
    if (!finalAmount || finalAmount < 1) return;
    setSubmitted(true);
  }

  async function copyUpi() {
    try {
      await navigator.clipboard.writeText(SITE.upi);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[1.25rem] bg-[#0d0d0d] px-6 py-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:px-7 sm:py-9">
        <div className="flex size-12 items-center justify-center rounded-full bg-brand/20 text-brand">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-none stroke-current stroke-2">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-extrabold tracking-tight">
          <span className="font-devanagari">धन्यवाद!</span> Thank You
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          Complete your donation of{" "}
          <strong className="text-white">
            ₹{finalAmount.toLocaleString("en-IN")}
          </strong>{" "}
          via UPI using the details below.
        </p>

        <div className="mt-5 rounded-xl bg-[#1a1a1a] p-4 ring-1 ring-white/10">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            UPI ID
          </p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="font-mono text-sm font-bold text-white sm:text-base">
              {SITE.upi}
            </p>
            <button
              type="button"
              onClick={copyUpi}
              className="shrink-0 rounded-lg bg-brand px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-brand-dark"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          {purpose ? (
            <p className="mt-3 text-xs text-zinc-500">
              Purpose: <span className="text-zinc-300">{purpose}</span>
            </p>
          ) : null}
        </div>

        <p className="mt-4 text-xs leading-5 text-zinc-500">
          For bank transfer or other methods, email us at{" "}
          <a href={`mailto:${SITE.email}`} className="text-brand hover:underline">
            {SITE.email}
          </a>
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-semibold text-zinc-400 transition-colors hover:text-white"
        >
          ← Change amount
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[1.25rem] bg-[#0d0d0d] px-6 py-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:px-7 sm:py-9">
      <p className="text-sm font-semibold text-white">
        <span className="font-devanagari">राशि चुनें</span>
        <span aria-hidden="true"> · </span>
        Choose Amount
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {AMOUNTS.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => {
              setSelectedAmount(amount);
              setOtherAmount("");
            }}
            className={`h-12 rounded-lg px-1 text-xs font-bold transition-colors sm:text-sm ${
              selectedAmount === amount && !otherAmount
                ? "bg-brand text-white"
                : "bg-[#2a2a2a] text-white hover:bg-[#333]"
            }`}
          >
            ₹{amount.toLocaleString("en-IN")}
          </button>
        ))}
      </div>

      <label className="mt-4 block">
        <span className="sr-only">Other amount</span>
        <input
          type="number"
          min="1"
          placeholder="अन्य राशि · Other Amount (₹)"
          value={otherAmount}
          onChange={(event) => {
            setOtherAmount(event.target.value);
            if (event.target.value) {
              setSelectedAmount(0);
            } else {
              setSelectedAmount(1000);
            }
          }}
          className="input-field h-12 w-full rounded-lg border border-white/10 bg-[#2a2a2a] px-3 text-sm text-white placeholder:text-zinc-500"
        />
      </label>

      <label className="mt-3 block">
        <span className="sr-only">Purpose</span>
        <select
          value={purpose}
          onChange={(event) => setPurpose(event.target.value)}
          className="input-field h-12 w-full appearance-none rounded-lg border border-white/10 bg-[#2a2a2a] px-3 text-sm text-white"
        >
          <option value="" disabled className="text-zinc-500">
            Purpose · उद्देश्य चुनें
          </option>
          {PURPOSES.map((option) => (
            <option key={option} value={option} className="text-ink">
              {option}
            </option>
          ))}
        </select>
      </label>

      <button
        type="button"
        onClick={handleDonate}
        disabled={!finalAmount || finalAmount < 1}
        className="btn-cta mt-5 inline-flex h-14 w-full items-center justify-center rounded-full bg-brand text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="font-devanagari">अभी दान करें</span>
        <span aria-hidden="true"> · </span>
        Donate Now
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-zinc-500">
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className="size-3.5 fill-current"
        >
          <path d="M8 1a3 3 0 0 0-3 3v1H4a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5A1.5 1.5 0 0 0 12 5h-1V4a3 3 0 0 0-3-3Zm1.5 4V4a1.5 1.5 0 0 0-3 0v1h3Z" />
        </svg>
        Secure · Transparent · Impactful
      </p>
    </div>
  );
}
