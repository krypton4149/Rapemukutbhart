import Image from "next/image";
import Link from "next/link";

export function HomeCampaign() {
  return (
    <section className="bg-[#f8f8f8] px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="card-hover relative mx-auto max-w-[1440px] overflow-hidden rounded-[1.25rem] bg-[#0d0d0d] text-white ring-1 ring-white/10 shadow-premium">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1 bg-brand"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] sm:block lg:w-[58%]"
        >
          <Image
            src="/image/Aware.png"
            alt=""
            fill
            sizes="60vw"
            className="object-cover object-center grayscale contrast-125 opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-[#0d0d0d]/25" />
        </div>

        <div className="relative max-w-2xl px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-red-500/25 bg-[#3a0d12]/90 px-3 py-1.5 text-[0.7rem] font-medium text-[#f0a8ad] sm:text-xs">
            <span aria-hidden="true">🏆</span>
            <span className="font-devanagari">विशेष अभियान</span>
            <span aria-hidden="true">·</span>
            Featured Campaign
          </p>

          <h2 className="mt-5 text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.75rem]">
            Rape-Free India —
            <span className="mt-1 block font-devanagari text-brand">
              परिवर्तन का आंदोलन
            </span>
          </h2>

          <p className="mt-4 flex items-center gap-1.5 text-sm text-zinc-400">
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="size-3.5 shrink-0 fill-current"
            >
              <path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.2 4.5 8.5 4.5 8.5s4.5-5.3 4.5-8.5A4.5 4.5 0 0 0 8 1.5Zm0 6.1A1.6 1.6 0 1 1 8 4.4a1.6 1.6 0 0 1 0 3.2Z" />
            </svg>
            India-wide
            <span aria-hidden="true">·</span>
            <span className="font-devanagari">भारतव्यापी</span>
            <span aria-hidden="true">·</span>
            Ongoing 2026
          </p>

          <p className="mt-4 max-w-lg text-[0.95rem] leading-7 text-zinc-300">
            Change begins when communities speak up and stand together.{" "}
            <span className="font-devanagari">
              बदलाव तब आता है जब समाज एक साथ बोलता है।
            </span>
          </p>

          <Link
            href="/campaigns"
            className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-5 text-sm font-bold text-white shadow-brand-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_16px_36px_rgba(225,29,46,0.28)] sm:w-auto sm:px-7"
          >
            <span className="font-devanagari">अभियान में शामिल हों</span>
            <span aria-hidden="true" className="mx-1.5">
              ·
            </span>
            Join Campaign
          </Link>
        </div>
      </div>
    </section>
  );
}
