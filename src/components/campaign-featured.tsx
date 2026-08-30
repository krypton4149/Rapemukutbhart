import Image from "next/image";
import Link from "next/link";

export function CampaignFeatured() {
  return (
    <section
      className="bg-[#f8f8f8] px-4 pt-16 pb-16 sm:px-6 lg:px-8 lg:pt-24 lg:pb-24"
      aria-labelledby="campaign-featured-heading"
    >
      <div className="card-hover relative mx-auto max-w-[1440px] overflow-hidden rounded-[1.25rem] bg-[#0d0d0d] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 z-20 w-1 bg-brand"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[56%]"
        >
          <Image
            src="/image/Aware.png"
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 56vw"
            className="object-cover object-center opacity-55 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#0d0d0d] from-0% via-[#0d0d0d] via-45% to-transparent to-70%"
        />

        <div className="relative z-10 max-w-xl px-6 py-8 sm:px-10 sm:py-9 lg:px-12 lg:py-10">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-red-500/25 bg-[#3a0d12]/90 px-3 py-1 text-[0.7rem] font-medium text-[#f0a8ad] sm:text-xs">
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="size-3.5 shrink-0 fill-current"
            >
              <path d="M8 1 2 3.5v4.5c0 3.2 2.6 5.8 6 6.5 3.4-.7 6-3.3 6-6.5V3.5L8 1Zm0 2.2 4 1.8v3.5c0 2.2-1.5 4.1-4 4.7-2.5-.6-4-2.5-4-4.7V5l4-1.8Z" />
            </svg>
            <span className="font-devanagari">प्रमुख अभियान</span>
            <span aria-hidden="true">·</span>
            Featured Campaign
          </p>

          <h2
            id="campaign-featured-heading"
            className="mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl"
          >
            Rape-Free India — A Movement
          </h2>
          <p className="mt-1 font-devanagari text-base font-bold text-brand sm:text-lg">
            परिवर्तन का आंदोलन
          </p>

          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">
            Change begins when communities speak up and refuse to stay silent.
          </p>
          <p className="mt-0.5 max-w-md font-devanagari text-sm leading-6 text-zinc-400">
            बदलाव तब आता है जब समाज एक साथ बोलता है।
          </p>

          <Link
            href="/get-involved"
            className="mt-5 inline-flex h-11 items-center rounded-full bg-brand px-6 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark shadow-brand-glow hover:shadow-[0_16px_36px_rgba(225,29,46,0.28)]"
          >
            <span className="font-devanagari">शामिल हों</span>
            <span aria-hidden="true" className="mx-1.5">
              ·
            </span>
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
}
