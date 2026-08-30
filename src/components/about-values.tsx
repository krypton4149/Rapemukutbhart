const VALUES = [
  {
    hindi: "करुणा",
    english: "Compassion",
    body: "We approach every interaction with empathy, dignity and care.",
  },
  {
    hindi: "न्याय",
    english: "Justice",
    body: "Every survivor deserves access to justice, support and truth.",
  },
  {
    hindi: "पारदर्शिता",
    english: "Transparency",
    body: "We operate with openness, accountability and integrity.",
  },
  {
    hindi: "समुदाय",
    english: "Community",
    body: "Change happens when communities come together as one.",
  },
  {
    hindi: "साहस",
    english: "Courage",
    body: "We speak up, stand up and act — even when it is difficult.",
  },
  {
    hindi: "सम्मान",
    english: "Dignity",
    body: "Every individual deserves to live with full dignity and respect.",
  },
] as const;

export function AboutValues() {
  return (
    <section className="bg-[#f8f8f8]" aria-labelledby="values-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="font-devanagari tracking-normal">मूल्य</span>
            {" · "}
            VALUES
          </p>
          <h2
            id="values-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            <span className="font-devanagari">हमारे मूल मूल्य</span>
            {" · "}
            Core Values
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {VALUES.map((value) => (
            <li
              key={value.english}
              className="card-hover rounded-2xl bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            >
              <p className="font-devanagari text-sm font-bold text-brand">
                {value.hindi}
              </p>
              <h3 className="mt-1 text-lg font-extrabold tracking-tight text-ink">
                {value.english}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{value.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
