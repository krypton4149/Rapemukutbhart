import Image from "next/image";
import Link from "next/link";

const PILLARS = [
  {
    title: "हमारा मिशन · Mission",
    body: "To educate, empower and engage communities in building a culture of safety, dignity and justice.",
  },
  {
    title: "हमारा विज़न · Vision",
    body: "A Rape Mukt Bharat — a nation where every individual lives free from fear, with full dignity.",
  },
  {
    title: "मूल्य · Core Values",
    body: "Compassion · Dignity · Justice · Transparency · Inclusivity",
  },
] as const;

export function HomeWhoWeAre() {
  return (
    <section className="bg-[#f8f8f8]" aria-labelledby="who-we-are-heading">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="relative mx-auto w-full max-w-xl pb-10 pt-6 lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/image/who-we-are.jpg"
              alt="People stacking their hands together in a show of unity"
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
            />
          </div>

          <div className="absolute left-1 top-2 z-10 rounded-xl bg-brand px-3.5 py-2.5 text-white shadow-md sm:left-2 sm:top-3">
            <p className="font-devanagari text-sm font-semibold leading-none">
              हम साथ
            </p>
          </div>

          <div className="absolute bottom-2 right-1 z-10 w-[34%] overflow-hidden rounded-2xl border-[5px] border-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:bottom-0 sm:right-0 sm:w-[38%]">
            <div className="relative aspect-square">
              <Image
                src="/image/who-we-are-heart.jpg"
                alt="Hands covered in red paint, coming together"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="font-devanagari tracking-normal">हम कौन हैं</span>
            {" · "}
            WHO WE ARE
          </p>

          <h2
            id="who-we-are-heading"
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl"
          >
            A Foundation Built on{" "}
            <span className="font-devanagari text-brand">करुणा और कर्म</span>
          </h2>

          <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-zinc-500">
            Rape Mukt Bharat Foundation is committed to creating a safer and
            more aware society — standing with survivors, promoting awareness,
            supporting justice, and encouraging rehabilitation and community
            responsibility.
          </p>

          <ul className="mt-8 space-y-5">
            {PILLARS.map((pillar) => (
              <li
                key={pillar.title}
                className="border-l-[3px] border-brand pl-4"
              >
                <p className="font-bold text-ink">
                  <span className="font-devanagari">{pillar.title}</span>
                </p>
                <p className="mt-1 text-sm leading-6 text-zinc-500">
                  {pillar.body}
                </p>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
          >
            <span className="font-devanagari">और जानें</span>
            <span aria-hidden="true">·</span>
            Learn More About Us
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
