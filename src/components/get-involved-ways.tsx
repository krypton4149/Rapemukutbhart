import Image from "next/image";
import Link from "next/link";

const WAYS = [
  {
    href: "#donate",
    image: "/image/who-we-are-heart.jpg",
    alt: "Hands painted red coming together in solidarity",
    icon: "💛",
    hindi: "दान करें",
    title: "Donate",
    description:
      "Your contribution — big or small — directly supports awareness, outreach and survivor support programmes.",
    featured: true,
  },
  {
    href: "/contact",
    image: "/image/who-we-are.jpg",
    alt: "Hands stacked together in unity",
    icon: "🤝",
    hindi: "स्वयंसेवी बनें",
    title: "Volunteer",
    description:
      "Use your time, skills and passion to support awareness drives and community initiatives across India.",
    featured: false,
  },
  {
    href: "/contact",
    image: "/image/Aware.png",
    alt: "Children raising awareness for a rape-free India",
    icon: "🌍",
    hindi: "साझेदार बनें",
    title: "Partner With Us",
    description:
      "Collaborate as an organisation, school, college or business to create safer and more aware communities.",
    featured: false,
  },
] as const;

export function GetInvolvedWays() {
  return (
    <section className="bg-white" aria-labelledby="involved-ways-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WAYS.map((way) => (
            <li key={way.title}>
              <Link
                href={way.href}
                className={`group card-hover flex h-full flex-col overflow-hidden rounded-2xl ${
                  way.featured
                    ? "border-2 border-brand bg-[#0d0d0d] text-white hover:shadow-[0_16px_40px_rgba(225,29,46,0.2)]"
                    : "card-hover-border border border-black/[0.04] bg-[#f4f4f4] text-ink shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                }`}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={way.image}
                    alt={way.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover card-hover-image"
                  />
                </div>

                <div className="flex flex-1 flex-col px-6 py-6">
                  <span aria-hidden="true" className="text-xl">
                    {way.icon}
                  </span>
                  <p
                    className={`mt-3 font-devanagari text-sm font-semibold ${
                      way.featured ? "text-brand" : "text-brand"
                    }`}
                  >
                    {way.hindi}
                  </p>
                  <h2
                    id={way.featured ? "involved-ways-heading" : undefined}
                    className={`mt-1 text-2xl font-extrabold tracking-tight ${
                      way.featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {way.title}
                  </h2>
                  <p
                    className={`mt-3 text-sm leading-6 ${
                      way.featured ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {way.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
