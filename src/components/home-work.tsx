import Image from "next/image";
import Link from "next/link";

const WORK_ITEMS = [
  {
    href: "/our-work",
    image: "/image/Aware1.png",
    badge: "जागरूकता",
    title: "Community Awareness Drives",
    alt: "Community members holding Rape Mukt Bharat Foundation awareness signs at an outreach drive",
  },
  {
    href: "/our-work",
    image: "/image/4.png",
    badge: "सुरक्षा",
    title: "Women & Child Safety",
    alt: "Foundation volunteer raising awareness and advocating for survivor support",
  },
  {
    href: "/our-work",
    image: "/image/2.png",
    badge: "सहयोग",
    title: "Survivor Support",
    alt: "Foundation team providing care and support to a survivor",
  },
  {
    href: "/our-work",
    image: "/image/Aware2.png",
    badge: "युवा",
    title: "Youth Awareness Programs",
    alt: "Street awareness drive with Rape Mukt Bharat Foundation volunteers and participants",
  },
] as const;

export function HomeWork() {
  return (
    <section className="bg-[#f8f8f8]" aria-labelledby="our-work-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
              <span className="font-devanagari tracking-normal">हम क्या करते हैं</span>
              {" · "}
              WHAT WE DO
            </p>
            <h2
              id="our-work-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              Our Work
            </h2>
          </div>
          <Link
            href="/our-work"
            className="self-start text-sm font-bold text-brand transition-colors hover:text-brand-dark sm:self-auto sm:shrink-0"
          >
            <span className="font-devanagari">सभी देखें</span>
            {" · "}
            View All
            <span aria-hidden="true"> →</span>
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORK_ITEMS.map((item) => (
            <li key={item.title}>
              <article className="group premium-card card-hover card-hover-border overflow-hidden">
                <div className="relative aspect-[16/11]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover card-hover-image"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-brand px-2.5 py-1 font-devanagari text-xs font-semibold text-white">
                    {item.badge}
                  </span>
                </div>
                <div className="px-5 py-4">
                  <h3 className="text-base font-extrabold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <Link
                    href={item.href}
                    className="mt-3 inline-flex items-center text-sm font-bold text-brand transition-colors hover:text-brand-dark"
                  >
                    Learn More
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
