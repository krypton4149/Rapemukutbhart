import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

const NAV = [
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/campaigns", label: "Campaigns" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

const SUPPORT = [
  { href: "/donate", label: "Donate · दान करें" },
  { href: "/get-involved", label: "Volunteer · स्वयंसेवी" },
  { href: "/resources", label: "Survivor Support" },
  { href: "/contact", label: "Partner With Us" },
  { href: "/campaigns", label: "Spread Awareness" },
] as const;

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-zinc-400 transition-colors hover:border-white/50 hover:text-white"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="premium-dark relative border-t border-white/10 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
      />
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[1.25rem] bg-brand px-6 py-7 shadow-brand-glow sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="font-devanagari text-sm text-white/90">
              आपका सहयोग हमारी ताकत है
            </p>
            <p className="mt-1 text-xl font-extrabold tracking-tight sm:text-2xl">
              Stand With Us. Help Build a Safer India.
            </p>
          </div>
          <Link
            href="/donate"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-brand shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] sm:w-auto"
          >
            <span className="font-devanagari">दान करें</span>
            <span aria-hidden="true" className="mx-1.5">
              ·
            </span>
            Donate Now
          </Link>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-block rounded-xl bg-white px-3 py-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            >
              <Image
                src="/image/Logo.png"
                alt="Rape Mukt Bharat Foundation"
                width={2172}
                height={724}
                className="h-10 w-auto object-contain sm:h-12"
              />
            </Link>
            <p className="mt-4 text-sm text-zinc-300">
              Building awareness. Supporting survivors.
            </p>
            <p className="mt-2 font-devanagari text-sm text-zinc-500">
              जागरूकता · सहयोग · न्याय · पुनर्वास
            </p>
            <div className="mt-5 flex gap-2.5">
              <SocialLink href={SITE.instagram} label="Instagram">
                <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10A2.2 2.2 0 0 0 19.2 17V7A2.2 2.2 0 0 0 17 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.35-2.85a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://facebook.com" label="Facebook">
                <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                  <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-devanagari text-sm font-bold">हमारा सहयोग करें</p>
            <ul className="mt-4 space-y-2.5">
              {SUPPORT.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold">
              <span className="font-devanagari">संपर्क</span>
              {" · "}
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-sm text-zinc-400 hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="hover:text-white">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                {SITE.location}
                <span aria-hidden="true"> · </span>
                <span className="font-devanagari">{SITE.locationHindi}</span>
              </li>
            </ul>
            <div className="mt-5 rounded-xl bg-[#3a0d12] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1 ring-brand/30">
              <p className="font-devanagari text-xs font-semibold text-brand">
                राष्ट्रीय हेल्पलाइन
              </p>
              <a
                href={`tel:${SITE.emergencyHelpline}`}
                className="mt-1 block text-2xl font-extrabold tracking-tight text-white"
              >
                1091
              </a>
              <p className="text-xs text-zinc-400">Women&apos;s Helpline · 24/7</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p>© 2026 Rape Mukt Bharat Foundation. All Rights Reserved.</p>
            <p className="mt-1 font-devanagari">
              सर्वाधिकार सुरक्षित — बनाया गया प्यार और उद्देश्य के साथ
            </p>
          </div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
