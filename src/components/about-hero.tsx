import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/image/BG.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/80 via-[#0d0d0d]/60 to-[#3a0d12]/30" />
        <div className="absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-brand/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <p className="section-eyebrow border-white/20 bg-white/10 text-[#f0a8ad]">
          <span className="font-devanagari tracking-normal">हम कौन हैं</span>
          {" · "}
          WHO WE ARE
        </p>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          About the <span className="gradient-text">Foundation</span>
        </h1>
        <p className="mt-4 font-devanagari text-base text-zinc-300 sm:text-lg lg:text-xl">
          हमारी कहानी, हमारा संकल्प
        </p>
        <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-7 text-zinc-400">
          A movement born from the belief that awareness, community action and
          justice can build a safer India for all.
        </p>
      </div>
    </section>
  );
}
