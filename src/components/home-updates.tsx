import Image from "next/image";
import Link from "next/link";

const POSTS = [
  {
    href: "/resources",
    image: "/image/1.png",
    tag: "जागरूकता",
    date: "August 12, 2026",
    title: "Understanding Consent: समझें अपने अधिकार",
    body: "A community guide on consent, safety and rights — समुदाय के लिए एक सरल मार्गदर्शिका।",
    alt: "Foundation volunteer conducting community outreach with children in a village",
  },
  {
    href: "/campaigns",
    image: "/image/4.png",
    tag: "अभियान",
    date: "July 28, 2026",
    title: "Awareness Drive Reaches 500 Families — 500 परिवार",
    body: "Volunteers reached twelve villages. बारह गाँव तक पहुँची जागरूकता यात्रा।",
    alt: "Foundation volunteer raising awareness and advocating for survivor support",
  },
  {
    href: "/resources",
    image: "/image/3.png",
    tag: "कहानी",
    date: "July 5, 2026",
    title: "Breaking the Silence — चुप्पी तोड़ना",
    body: "How one woman's courage sparked a community conversation — एक साहसी कदम।",
    alt: "Field interview and community conversation as part of an awareness program",
  },
] as const;

export function HomeUpdates() {
  return (
    <section className="bg-white" aria-labelledby="updates-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="font-devanagari tracking-normal">अपडेट</span>
              {" · "}
              UPDATES
            </p>
            <h2
              id="updates-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              Stories, Updates &{" "}
              <span className="font-devanagari">जागरूकता</span>
            </h2>
          </div>
          <Link
            href="/resources"
            className="self-start text-sm font-bold text-brand transition-colors hover:text-brand-dark sm:self-auto sm:shrink-0"
          >
            View All
            <span aria-hidden="true"> →</span>
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <li key={post.title}>
              <article className="group card-hover card-hover-border flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover card-hover-image"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 py-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full bg-brand-soft px-2.5 py-0.5 font-devanagari text-xs font-semibold text-brand">
                      {post.tag}
                    </span>
                    <time className="text-xs text-zinc-400">{post.date}</time>
                  </div>
                  <h3 className="mt-3 text-lg font-extrabold leading-snug tracking-tight text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {post.body}
                  </p>
                  <Link
                    href={post.href}
                    className="mt-auto pt-4 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
                  >
                    Read More
                    <span aria-hidden="true"> →</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
