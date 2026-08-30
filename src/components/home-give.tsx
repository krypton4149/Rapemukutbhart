import Link from "next/link";

export function HomeGive() {
  return (
    <section className="bg-[#0d0d0d] text-white" aria-labelledby="give-heading">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
          <span className="font-devanagari tracking-normal">सहयोग करें</span>
          {" · "}
          SUPPORT US
        </p>
        <h2
          id="give-heading"
          className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-tight"
        >
          Your Support Can Help Build A Safer Tomorrow.
        </h2>
        <p className="mt-4 font-devanagari text-lg text-zinc-400">
          आपका एक कदम, एक बड़ा बदलाव
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400">
          Every contribution helps us reach more communities, spread awareness
          and support meaningful change across India.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/donate"
            className="inline-flex h-12 items-center rounded-full bg-brand px-7 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark shadow-brand-glow hover:shadow-[0_16px_36px_rgba(225,29,46,0.28)]"
          >
            <span className="font-devanagari">अभी दान करें</span>
            <span aria-hidden="true" className="mx-1.5">
              ·
            </span>
            Donate Now
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex h-12 items-center rounded-full border border-white/70 px-7 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <span className="font-devanagari">स्वयंसेवी बनें</span>
            <span aria-hidden="true" className="mx-1.5">
              ·
            </span>
            Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
}
