const PILLARS = [
  {
    emoji: "💡",
    hindi: "जागरूकता",
    english: "Awareness",
    body: "Educating communities about safety, consent, rights and prevention.",
  },
  {
    emoji: "🤝",
    hindi: "सहयोग",
    english: "Support",
    body: "Standing with survivors and connecting them with support systems.",
  },
  {
    emoji: "⚖️",
    hindi: "न्याय",
    english: "Justice",
    body: "Promoting legal rights and encouraging access to justice.",
  },
  {
    emoji: "🌱",
    hindi: "पुनर्वास",
    english: "Rehabilitation",
    body: "Supporting dignity, recovery and rebuilding lives.",
  },
] as const;

export function HomeMission() {
  return (
    <section className="bg-white" aria-labelledby="mission-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">
            <span className="font-devanagari tracking-normal">हमारा मिशन</span>
            {" · "}
            OUR MISSION
          </p>
          <h2 id="mission-heading" className="section-title mt-4">
            <span className="font-devanagari">चार स्तंभ,</span>{" "}
            <span className="gradient-text font-devanagari">एक संकल्प</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-500 sm:text-base">
            Four Pillars of Change{" "}
            <span aria-hidden="true">·</span>{" "}
            <span className="font-devanagari">परिवर्तन के चार आधार</span>
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PILLARS.map((pillar) => (
            <li
              key={pillar.english}
              className="premium-card card-hover card-hover-border p-6"
            >
              <span className="block text-[1.75rem] leading-none" aria-hidden="true">
                {pillar.emoji}
              </span>
              <p className="mt-4 font-devanagari text-sm font-bold text-brand">
                {pillar.hindi}
              </p>
              <h3 className="mt-0.5 text-lg font-extrabold tracking-tight text-ink">
                {pillar.english}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{pillar.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
