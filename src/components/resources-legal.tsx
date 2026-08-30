const LEGAL_RIGHTS = [
  {
    hindi: "धारा 375 और 376",
    title: "IPC Section 375 & 376",
    description:
      "Definition of rape and punishment under Indian Penal Code. Punishable by minimum 7 years to life imprisonment.",
  },
  {
    hindi: "पॉक्सो एक्ट 2012",
    title: "POCSO Act 2012",
    description:
      "Protection of Children from Sexual Offences — protects children under 18 from sexual assault, harassment and exploitation.",
  },
  {
    hindi: "आपराधिक कानून संशोधन 2013",
    title: "Criminal Law Amendment 2013",
    description:
      "Significantly expanded definitions of sexual crimes and increased punishments following public outcry.",
  },
  {
    hindi: "मुफ्त कानूनी सहायता का अधिकार",
    title: "Right to Free Legal Aid",
    description:
      "Every survivor has the right to free legal aid under Article 39A of the Constitution of India.",
  },
] as const;

export function ResourcesLegal() {
  return (
    <section className="bg-[#f8f8f8]" aria-labelledby="resources-legal-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="font-devanagari tracking-normal">कानून</span>
            {" · "}
            LEGAL INFO
          </p>
          <h2
            id="resources-legal-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Know Your <span className="text-brand">Legal Rights</span>
          </h2>
          <p className="mt-3 font-devanagari text-lg text-zinc-500">
            अपने अधिकार जानें
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {LEGAL_RIGHTS.map((item) => (
            <li key={item.title}>
              <article className="card-hover card-hover-border h-full rounded-2xl border border-black/[0.04] bg-white px-6 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:px-8 sm:py-7">
                <p className="font-devanagari text-sm font-semibold text-brand">
                  {item.hindi}
                </p>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
