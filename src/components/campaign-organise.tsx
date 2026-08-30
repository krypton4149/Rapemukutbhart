import Link from "next/link";

export function CampaignOrganise() {
  return (
    <section
      className="bg-brand text-white"
      aria-labelledby="campaign-organise-heading"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-20">
        <h2
          id="campaign-organise-heading"
          className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem]"
        >
          Want to Organise a Campaign?
        </h2>
        <p className="mt-4 font-devanagari text-lg text-white/90 sm:text-xl">
          क्या आप अभियान आयोजित करना चाहते हैं?
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-7 text-sm font-bold text-brand transition-colors hover:bg-zinc-100"
        >
          <span className="font-devanagari">संपर्क करें</span>
          <span aria-hidden="true" className="mx-1.5">
            ·
          </span>
          Contact Us
          <span aria-hidden="true" className="ml-2 text-base leading-none">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
