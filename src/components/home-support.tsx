import Link from "next/link";

export function HomeSupport() {
  return (
    <section className="bg-[#f2f2f2]" aria-labelledby="support-heading">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-24">
        <div className="flex size-14 items-center justify-center rounded-full bg-brand text-white">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-7 fill-none stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20.4S4.5 15.3 4.5 9.9A4.4 4.4 0 0 1 12 7.1a4.4 4.4 0 0 1 7.5 2.8c0 5.4-7.5 10.5-7.5 10.5Z" />
          </svg>
          <span className="sr-only">Support</span>
        </div>

        <h2
          id="support-heading"
          className="mt-6 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl"
        >
          <span className="font-devanagari">आप अकेले नहीं हैं।</span>
        </h2>
        <p className="mt-2 text-2xl font-extrabold tracking-tight text-brand sm:text-3xl lg:text-4xl">
          You Are Not Alone.
        </p>

        <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-zinc-600">
          If you or someone you know needs support, help or information —
          reaching out is the first step.{" "}
          <span className="font-devanagari">मदद माँगना पहला कदम है।</span>
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-6 text-sm font-bold text-white shadow-brand-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_16px_36px_rgba(225,29,46,0.28)] sm:w-auto"
          >
            <span className="font-devanagari">सहायता पाएं</span>
            <span aria-hidden="true" className="mx-1.5">
              ·
            </span>
            Get Support
          </Link>
          <Link
            href="/resources"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-ink px-6 text-sm font-bold text-ink transition-colors hover:bg-black/[0.04] sm:w-auto"
          >
            <span className="font-devanagari">संसाधन देखें</span>
            <span aria-hidden="true" className="mx-1.5">
              ·
            </span>
            Find Resources
          </Link>
        </div>

        <p className="mt-8 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-brand-soft px-3 py-2 text-center text-[0.7rem] font-medium text-brand sm:px-4 sm:text-xs md:text-sm">
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="size-3.5 shrink-0"
          >
            <rect x="3" y="7" width="10" height="8" rx="1.6" fill="#16a34a" />
            <path
              d="M5.2 7V5.6a2.8 2.8 0 0 1 5.6 0V7"
              fill="none"
              stroke="#16a34a"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle cx="8" cy="11" r="1.1" fill="white" />
          </svg>
          <span>
            <span className="font-devanagari">
              आपकी गोपनीयता हमारी प्राथमिकता है।
            </span>{" "}
            Your privacy matters.
          </span>
        </p>
      </div>
    </section>
  );
}
