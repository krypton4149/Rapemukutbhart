import Link from "next/link";

export function WorkCollaborate() {
  return (
    <section className="bg-white" aria-labelledby="collaborate-heading">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-24">
        <h2
          id="collaborate-heading"
          className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]"
        >
          Want to <span className="text-brand">Collaborate?</span>
        </h2>
        <p className="mt-4 font-devanagari text-lg text-zinc-500">
          हमारे साथ मिलकर काम करें।
        </p>
        <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-7 text-zinc-600">
          If your organisation, school or institution wants to partner with us,
          host an awareness session or contribute resources — we would love to
          hear from you.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-brand px-7 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark shadow-brand-glow hover:shadow-[0_16px_36px_rgba(225,29,46,0.28)]"
        >
          <span className="font-devanagari">संपर्क करें</span>
          <span aria-hidden="true" className="mx-1.5">
            ·
          </span>
          Get In Touch
          <span aria-hidden="true" className="ml-2 text-base leading-none">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
