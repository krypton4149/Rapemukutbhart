import Image from "next/image";

export function CampaignHero() {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/image/Aware.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/70" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
          <span className="font-devanagari tracking-normal">अभियान</span>
          {" · "}
          CAMPAIGNS
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Breaking The Silence.
        </h1>
        <p className="mt-4 font-devanagari text-lg font-bold text-brand sm:text-xl">
          चुप्पी तोड़ो, आवाज़ उठाओ।
        </p>
        <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-7 text-zinc-400">
          Awareness drives, community rallies and outreach programmes making a
          real difference across India.
        </p>
      </div>
    </section>
  );
}
