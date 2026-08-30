const MILESTONES = [
  {
    year: "20",
    hindi: "शुरुआत",
    body: "Foundation established with a small group of dedicated volunteers.",
    side: "left",
  },
  {
    year: "21",
    hindi: "विकास",
    body: "First awareness drive conducted across 5 districts.",
    side: "right",
  },
  {
    year: "22",
    hindi: "विस्तार",
    body: "Expanded to 3 states; launched survivor support helpline.",
    side: "left",
  },
  {
    year: "23",
    hindi: "साझेदारी",
    body: "Partnered with legal aid organizations and colleges.",
    side: "right",
  },
  {
    year: "24",
    hindi: "अभियान",
    body: "National campaign launched; 50+ volunteers joined.",
    side: "left",
  },
  {
    year: "26",
    hindi: "आज",
    body: "100+ lives touched. Growing stronger every day.",
    side: "right",
  },
] as const;

export function AboutJourney() {
  return (
    <section className="bg-white" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="font-devanagari tracking-normal">हमारी यात्रा</span>
            {" · "}
            OUR JOURNEY
          </p>
          <h2
            id="journey-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            From Vision to Impact
          </h2>
        </div>

        <ol className="relative mx-auto mt-14 max-w-4xl lg:mt-16">
          <div
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-[1.375rem] w-px bg-brand lg:left-1/2 lg:-translate-x-1/2"
          />

          {MILESTONES.map((item) => {
            const isLeft = item.side === "left";

            return (
              <li
                key={item.year}
                className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-x-3 py-4 sm:gap-x-6 lg:grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)] lg:gap-x-10 lg:py-5"
              >
                <div className="relative z-10 col-start-1 row-start-1 flex size-11 items-center justify-center rounded-full bg-brand text-sm font-bold text-white lg:col-start-2">
                  {item.year}
                </div>

                <article
                  className={`card-hover rounded-2xl bg-zinc-100 px-4 py-4 max-lg:col-start-2 max-lg:row-start-1 sm:px-7 sm:py-6 ${
                    isLeft
                      ? "lg:col-start-1 lg:text-right"
                      : "lg:col-start-3 lg:text-left"
                  }`}
                >
                  <h3 className="font-devanagari text-base font-bold text-brand sm:text-lg">
                    {item.hindi}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    {item.body}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
