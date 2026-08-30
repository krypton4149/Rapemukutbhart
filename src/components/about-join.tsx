import Link from "next/link";

export function AboutJoin() {
  return (
    <section className="bg-white" aria-labelledby="join-heading">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-24">
        <h2
          id="join-heading"
          className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]"
        >
          Join Our <span className="text-brand">Mission</span>
        </h2>
        <p className="mt-4 font-devanagari text-lg text-zinc-500">
          हमारे साथ बदलाव का हिस्सा बनें।
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/get-involved"
            className="inline-flex h-12 items-center rounded-full bg-brand px-7 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark shadow-brand-glow hover:shadow-[0_16px_36px_rgba(225,29,46,0.28)]"
          >
            Get Involved
            <span aria-hidden="true" className="ml-2 text-base leading-none">
              →
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center rounded-full border border-ink px-7 text-sm font-bold text-ink transition-colors hover:bg-black/[0.04]"
          >
            Contact Us
            <span aria-hidden="true" className="ml-2 text-base leading-none">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
