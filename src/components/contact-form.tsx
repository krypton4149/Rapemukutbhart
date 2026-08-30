"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/site-config";

const PURPOSES = [
  "General Inquiry · सामान्य पूछताछ",
  "Volunteer · स्वयंसेवा",
  "Partnership · साझेदारी",
  "Media & Press · मीडिया",
  "Support · सहायता",
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const subject = String(data.get("subject") ?? "");
    const purpose = String(data.get("purpose") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Purpose: ${purpose}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
        <span className="font-devanagari tracking-normal">संदेश भेजें</span>
        {" · "}
        SEND MESSAGE
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Get In Touch With Us
      </h2>

      {submitted ? (
        <div className="mt-8 rounded-[1.25rem] border border-brand/20 bg-brand-soft p-6 text-center sm:p-8">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand text-white">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-none stroke-current stroke-2">
              <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="mt-4 text-lg font-extrabold text-ink">
            <span className="font-devanagari">धन्यवाद!</span> Message Ready
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Your email app should open with your message. If it didn&apos;t, write
            to us at{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-brand hover:underline">
              {SITE.email}
            </a>
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-5 text-sm font-bold text-brand hover:text-brand-dark"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-[1.25rem] bg-[#f4f4f4] p-5 sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-ink">
                Full Name · <span className="font-devanagari">पूरा नाम</span>
              </span>
              <input
                required
                type="text"
                name="name"
                autoComplete="name"
                className="input-field mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-ink"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink">
                Email · <span className="font-devanagari">ईमेल</span>
              </span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="input-field mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-ink"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink">
                Phone · <span className="font-devanagari">फ़ोन</span>
              </span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className="input-field mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-ink"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink">
                Subject · <span className="font-devanagari">विषय</span>
              </span>
              <input
                required
                type="text"
                name="subject"
                className="input-field mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-ink"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-ink">
              Purpose · <span className="font-devanagari">उद्देश्य</span>
            </span>
            <select
              required
              name="purpose"
              defaultValue=""
              className="input-field mt-2 h-11 w-full appearance-none rounded-xl border border-zinc-200 bg-white px-4 text-sm text-ink"
            >
              <option value="" disabled>
                Select purpose · उद्देश्य चुनें
              </option>
              {PURPOSES.map((purpose) => (
                <option key={purpose} value={purpose}>
                  {purpose}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-ink">
              Message · <span className="font-devanagari">संदेश</span>
            </span>
            <textarea
              required
              name="message"
              rows={5}
              className="input-field mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-ink"
            />
          </label>

          <button
            type="submit"
            className="btn-cta mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-brand text-sm font-bold text-white"
          >
            <span className="font-devanagari">संदेश भेजें</span>
            <span aria-hidden="true"> · </span>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
