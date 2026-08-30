import Image from "next/image";
import Link from "next/link";

export function ResourcesSupport() {
  return (
    <section className="bg-white" aria-labelledby="resources-support-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="card-hover overflow-hidden rounded-[1.25rem] bg-[#f2f2f2] lg:grid lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src="/image/who-we-are-heart.jpg"
              alt="Hands painted red coming together in a heart shape"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:py-12">
            <div className="flex size-12 items-center justify-center rounded-full bg-brand text-white">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-6 fill-none stroke-current"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20.4S4.5 15.3 4.5 9.9A4.4 4.4 0 0 1 12 7.1a4.4 4.4 0 0 1 7.5 2.8c0 5.4-7.5 10.5-7.5 10.5Z" />
              </svg>
            </div>

            <h2
              id="resources-support-heading"
              className="mt-5 font-devanagari text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl"
            >
              आप अकेले नहीं।
            </h2>
            <p className="mt-1 text-2xl font-extrabold tracking-tight text-brand sm:text-3xl lg:text-4xl">
              You Are Not Alone.
            </p>

            <p className="mt-5 max-w-lg text-[0.95rem] leading-7 text-zinc-600">
              If you or someone you know needs help — reaching out is the
              bravest first step. We are here with compassion, no judgement.{" "}
              <span className="font-devanagari">हम यहाँ हैं।</span>
            </p>

            <Link
              href="tel:1091"
              className="mt-8 inline-flex h-12 w-full max-w-md items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark shadow-brand-glow hover:shadow-[0_16px_36px_rgba(225,29,46,0.28)] sm:w-auto"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-4 fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span className="font-devanagari">अभी मदद लें</span>
              <span aria-hidden="true"> · </span>
              Get Help Now (1091)
            </Link>

            <p className="mt-4 inline-flex items-center gap-2 text-xs text-zinc-500 sm:text-sm">
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="size-3.5 shrink-0 fill-current"
              >
                <path d="M8 1a3 3 0 0 0-3 3v1H4a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5A1.5 1.5 0 0 0 12 5h-1V4a3 3 0 0 0-3-3Zm1.5 4V4a1.5 1.5 0 0 0-3 0v1h3Z" />
              </svg>
              Confidential · <span className="font-devanagari">गोपनीय</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
