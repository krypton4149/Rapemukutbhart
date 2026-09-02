import Image from "next/image";
import Link from "next/link";

function StatCard({
  value,
  hindi,
  english,
  className,
}: {
  value: string;
  hindi: string;
  english: string;
  className: string;
}) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/60 bg-white/95 px-5 py-4 shadow-premium backdrop-blur-md ${className}`}
    >
      <p className="text-[1.65rem] font-extrabold leading-none tracking-tight text-brand">
        {value}
      </p>
      <p className="mt-1.5 font-devanagari text-[0.7rem] font-medium leading-tight text-zinc-500">
        {hindi}
      </p>
      <p className="text-[0.7rem] font-medium leading-tight text-zinc-500">
        {english}
      </p>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-x-hidden bg-[#0a0a0a] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/image/BG.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#3a0d12]/40" />
        <div className="absolute -left-32 top-20 size-64 rounded-full bg-brand/20 blur-[100px]" />
        <div className="absolute -right-20 bottom-10 size-72 rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-14 sm:px-6 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.9fr)] lg:gap-16 lg:px-8 lg:py-20">
        <div className="min-w-0 max-w-xl">
          <p className="inline-flex max-w-full flex-wrap items-center rounded-full border border-red-500/20 bg-[#3a0d12]/80 px-3 py-1.5 text-center text-[0.65rem] font-medium leading-5 tracking-wide text-[#f0a8ad] sm:px-3.5 sm:text-xs">
            <span className="font-devanagari">
              जागरूकता • सहयोग • न्याय • पुनर्वास
            </span>
          </p>

          <h1 className="mt-6 text-[1.875rem] font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Building a{" "}
            <span className="gradient-text">Safer India,</span>
            <br />
            Together.
          </h1>

          <p className="mt-4 font-devanagari text-base text-zinc-400 sm:text-lg">
            एक सुरक्षित, न्यायपूर्ण और जागरूक भारत की ओर
          </p>

          <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-zinc-400">
            Standing with survivors, raising awareness, supporting justice, and
            working towards a future where every individual lives with dignity,
            safety and freedom.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/get-involved"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white shadow-brand-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_16px_36px_rgba(225,29,46,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:w-auto"
            >
              <span className="font-devanagari">शामिल हों</span>
              <span aria-hidden="true">•</span>
              Get Involved
              <span aria-hidden="true" className="text-base leading-none">
                →
              </span>
            </Link>
            <Link
              href="/donate"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/80 px-6 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:w-auto"
            >
              <span className="font-devanagari">दान करें</span>
              <span aria-hidden="true" className="mx-1.5">
                •
              </span>
              Support Mission
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none lg:justify-self-end">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] image-premium ring-2 ring-white/10">
            <Image
              src="/image/Hero.png"
              alt="Illustration of a girl with bound eyes and mouth, and protesters holding Beti Bachao Beti Padhao signs"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-5 pb-5 pt-16">
              <p className="font-devanagari text-sm text-white">
                “हर आवाज़ मायने रखती है।”
              </p>
              <p className="text-xs text-white/80">Every voice matters.</p>
            </div>
          </div>

          <StatCard
            value="50+"
            hindi="स्वयंसेवी"
            english="Volunteers"
            className="left-2 top-6 max-sm:scale-90 max-sm:origin-top-left sm:left-2 lg:left-0 lg:-translate-x-4"
          />
          <StatCard
            value="100+"
            hindi="जीवन"
            english="Lives Touched"
            className="bottom-12 right-2 max-sm:scale-90 max-sm:origin-bottom-right sm:bottom-16 sm:right-2 lg:right-0 lg:translate-x-4"
          />
        </div>
      </div>
    </section>
  );
}
