"use client";

import { FormEvent } from "react";
import { SITE } from "@/lib/site-config";

const PURPOSES = [
  "General Inquiry · सामान्य पूछताछ",
  "Volunteer · स्वयंसेवा",
  "Partnership · साझेदारी",
  "Media & Press · मीडिया",
  "Support · सहायता",
] as const;

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const subject = String(data.get("subject") ?? "");
    const purpose = String(data.get("purpose") ?? "");
    const message = String(data.get("message") ?? "");

    const whatsappMessage = [
      "New contact form message",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Subject: ${subject}`,
      `Purpose: ${purpose}`,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappUrl;
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
            className="btn-cta mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand text-sm font-bold text-white"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span className="font-devanagari">संदेश भेजें</span>
            <span aria-hidden="true"> · </span>
            Send via WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-zinc-500">
            Clicking send opens WhatsApp with your message to{" "}
            <span className="font-semibold text-ink">{SITE.phoneDisplay}</span>
          </p>
        </form>
    </div>
  );
}
