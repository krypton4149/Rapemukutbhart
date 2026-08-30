const HELPLINES = [
  {
    number: "1091",
    hindi: "महिला हेल्पलाइन",
    title: "Women's Helpline",
    detail: "24/7 · Free · Nationwide",
    buttonClass: "bg-brand hover:bg-brand-dark",
    numberClass: "text-brand",
  },
  {
    number: "112",
    hindi: "आपातकालीन सेवाएं",
    title: "Emergency Services",
    detail: "Police · Ambulance · Fire",
    buttonClass: "bg-[#0d0d0d] hover:bg-black",
    numberClass: "text-ink",
  },
  {
    number: "181",
    hindi: "घरेलू हिंसा",
    title: "Domestic Violence",
    detail: "Women in Distress Helpline",
    buttonClass: "bg-[#9b1c1c] hover:bg-[#861818]",
    numberClass: "text-brand",
  },
  {
    number: "1098",
    hindi: "बाल हेल्पलाइन",
    title: "Child Helpline",
    detail: "Childline India Foundation",
    buttonClass: "bg-brand hover:bg-brand-dark",
    numberClass: "text-brand",
  },
] as const;

export function ResourcesHelplines() {
  return (
    <section
      className="bg-brand text-white"
      aria-labelledby="resources-helplines-heading"
    >
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="resources-helplines-heading"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Emergency Helplines
          </h2>
          <p className="mt-2 font-devanagari text-lg text-white/90 sm:text-xl">
            आपातकालीन हेल्पलाइन
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HELPLINES.map((helpline) => (
            <li key={helpline.number}>
              <article className="card-hover flex h-full flex-col items-center rounded-2xl bg-white px-5 py-6 text-center text-ink shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                <p
                  className={`text-4xl font-extrabold tracking-tight sm:text-[2.75rem] ${helpline.numberClass}`}
                >
                  {helpline.number}
                </p>
                <p className="mt-2 font-devanagari text-sm font-semibold text-brand">
                  {helpline.hindi}
                </p>
                <h3 className="mt-1 text-lg font-extrabold tracking-tight">
                  {helpline.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500">{helpline.detail}</p>
                <a
                  href={`tel:${helpline.number}`}
                  className={`mt-5 inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-bold text-white transition-colors ${helpline.buttonClass}`}
                >
                  <span className="font-devanagari">कॉल करें</span>
                  <span aria-hidden="true"> · </span>
                  Call Now
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
