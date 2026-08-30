"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site-config";

const SHARE_TEXT =
  "Join the movement for a safer, more aware India with Rape Mukt Bharat Foundation.";

const FALLBACK_URL = "https://rapemuktbharat.org/get-involved";

function buildShareLinks(url: string) {
  return {
    instagram: SITE.instagram,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`${SHARE_TEXT} ${url}`)}`,
  };
}

const SHARE_BUTTONS = [
  {
    id: "instagram",
    label: "Share on Instagram",
    className: "bg-[#E4405F] hover:bg-[#d6336c]",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10A2.2 2.2 0 0 0 19.2 17V7A2.2 2.2 0 0 0 17 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.35-2.85a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Share on Facebook",
    className: "bg-[#1877F2] hover:bg-[#166fe5]",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
      </svg>
    ),
  },
] as const;

export function GetInvolvedShare() {
  const [pageUrl, setPageUrl] = useState(FALLBACK_URL);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setPageUrl(window.location.href);
    setCanNativeShare(typeof navigator.share === "function");
  }, []);

  const links = buildShareLinks(pageUrl);

  async function handleNativeShare() {
    if (!navigator.share) return;
    try {
      await navigator.share({
        title: "Rape Mukt Bharat Foundation",
        text: SHARE_TEXT,
        url: pageUrl,
      });
    } catch {
      // user cancelled
    }
  }

  return (
    <section className="bg-[#f2f2f2]" aria-labelledby="involved-share-heading">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-20">
        <h2
          id="involved-share-heading"
          className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl"
        >
          Can&apos;t donate right now?
        </h2>
        <p className="mt-1 text-2xl font-extrabold tracking-tight text-brand sm:text-3xl lg:text-4xl">
          Spread the word.
        </p>
        <p className="mt-4 font-devanagari text-lg text-zinc-500">
          शेयर करें, जागरूकता फैलाएं।
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:items-center">
          {canNativeShare ? (
            <button
              type="button"
              onClick={handleNativeShare}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-xs font-bold text-white transition-colors hover:bg-black sm:w-auto sm:text-sm"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current stroke-2">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Share
            </button>
          ) : null}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            {SHARE_BUTTONS.map((button) => (
              <a
                key={button.id}
                href={links[button.id]}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-5 text-xs font-bold text-white transition-colors sm:w-auto sm:text-sm ${button.className}`}
              >
                {button.icon}
                {button.label}
              </a>
            ))}
          </div>

          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-xs font-bold text-white transition-colors hover:bg-[#20bd5a] sm:w-auto sm:text-sm"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
              <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 0 1 6.5 13.2l-.3.2-.8 3.1-3.2-.8-.2-.2A8.2 8.2 0 0 1 12 3.8Zm-2.2 3.8c.1 0 .2 1.1.5 1.3.3.2 1.1.2 1.1.2s.8 2.5 3.1 3c.2.1 1.3.5 1.5-.1.2-.6.5-1.2.6-1.3.1-.1.9-.6.9-1.2 0-.5-.1-.8-.3-1-.2-.2-.5-.1-1 .2-.4.3-1.6.8-1.9.8-.3 0-.8-.2-1.4-.8-.5-.5-1-1.2-1-1.4 0-.2 0-.3.1-.5.1-.1.1-.2.2-.3.1-.1.1-.2.1-.3 0-.1 0-.2-.1-.3l-.4-.9c-.1-.2-.2-.3-.4-.3-.2 0-.5 0-.7.1-.3.1-1.9.9-2.2 2.2-.4 1.3.2 2.9 2.4 4.5 2.9 2.1 5.2 2.2 6.1 1.9.9-.3 1.4-1.2 1.6-1.5.2-.3.1-.5 0-.7-.1-.1-.3-.2-.5-.3Z" />
            </svg>
            Share on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
