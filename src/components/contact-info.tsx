import { SITE } from "@/lib/site-config";

const CONTACT_DETAILS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Phone",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]">
        <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    label: "Location",
    value: `${SITE.location} · ${SITE.locationHindi}`,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Hours",
    value: "Mon–Sat, 10am–6pm IST",
  },
] as const;

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    handle: SITE.instagramHandle,
    href: SITE.instagram,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10A2.2 2.2 0 0 0 19.2 17V7A2.2 2.2 0 0 0 17 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.35-2.85a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "Rape Mukt Bharat Foundation",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
      </svg>
    ),
  },
] as const;

export function ContactInfo() {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
        <span className="font-devanagari tracking-normal">संपर्क जानकारी</span>
        {" · "}
        CONTACT INFO
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Reach Us Directly
      </h2>

      <ul className="mt-8 space-y-3">
        {CONTACT_DETAILS.map((item) => (
          <li key={item.label}>
            {"href" in item && item.href ? (
              <a
                href={item.href}
                className="card-hover flex items-center gap-4 rounded-xl bg-[#f4f4f4] px-4 py-4 hover:bg-[#ececec]"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{item.label}</p>
                  <p className="mt-0.5 break-words text-sm text-zinc-600">{item.value}</p>
                </div>
              </a>
            ) : (
              <div className="card-hover flex items-center gap-4 rounded-xl bg-[#f4f4f4] px-4 py-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{item.label}</p>
                  <p className="mt-0.5 break-words text-sm text-zinc-600">{item.value}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-[1.25rem] bg-brand px-6 py-6 text-white">
        <p className="font-devanagari text-sm font-semibold text-white/90">
          आपातकाल में
        </p>
        <p className="mt-2 text-sm leading-6 text-white/90">
          Need urgent help? Call our emergency helpline immediately.
        </p>
        <a
          href="tel:1091"
          className="mt-3 block text-4xl font-extrabold tracking-tight"
        >
          1091
        </a>
        <p className="mt-2 font-devanagari text-sm text-white/85">
          महिला हेल्पलाइन · 24/7 · Free
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-extrabold tracking-tight text-ink">
          <span className="font-devanagari">हमें फ़ॉलो करें</span>
          <span aria-hidden="true"> · </span>
          Follow Us
        </h3>
        <ul className="mt-4 space-y-3">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-hover flex items-center gap-4 rounded-xl bg-[#f4f4f4] px-4 py-4 hover:bg-[#ececec]"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand">
                  {social.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-ink">{social.label}</p>
                  <p className="mt-0.5 break-words text-sm text-zinc-500">
                    {social.handle}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-brand transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 overflow-hidden rounded-[1.25rem] bg-[#f4f4f4] ring-1 ring-black/[0.04]">
        <div className="relative aspect-[16/10] min-h-[180px] w-full sm:min-h-[220px]">
          <iframe
            title="Rape Mukt Bharat Foundation location — Agra, India"
            src={SITE.mapsEmbedUrl}
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-5">
          <div className="text-center sm:text-left">
            <p className="text-base font-extrabold tracking-tight text-ink">
              <span className="font-devanagari">आगरा</span>
              <span aria-hidden="true"> · </span>
              Agra, Uttar Pradesh
            </p>
            <p className="mt-0.5 text-sm text-zinc-500">
              Serving communities across India
            </p>
          </div>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-brand px-5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-4 fill-none stroke-current stroke-2"
            >
              <path
                d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span className="font-devanagari">मानचित्र</span>
            <span aria-hidden="true"> · </span>
            Open in Maps
          </a>
        </div>
      </div>
    </div>
  );
}
