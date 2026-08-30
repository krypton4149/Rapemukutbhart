import Image from "next/image";

export function GetInvolvedHero() {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/image/BG.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/60" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 z-10 w-1 bg-brand"
      />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
          <span className="font-devanagari tracking-normal">शामिल हों</span>
          {" · "}
          GET INVOLVED
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Be Part of the Change
        </h1>
        <p className="mt-4 font-devanagari text-lg text-zinc-300 sm:text-xl">
          बदलाव का हिस्सा बनें
        </p>
        <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-7 text-zinc-400">
          Every action — big or small — contributes to building a safer, more
          aware and just India.
        </p>
      </div>
    </section>
  );
}
