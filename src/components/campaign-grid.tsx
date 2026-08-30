import Image from "next/image";
import Link from "next/link";

const CAMPAIGNS = [
  {
    image: "/image/Aware.png",
    alt: "Children raising awareness for a rape-free India on Independence Day",
    overlay: "बलात्कार मुक्त भारत आंदोलन",
    date: "Ongoing 2026",
    location: "India-wide",
    title: "Rape-Free India Movement",
    description:
      "A nationwide movement to raise awareness, break silence and build communities that stand for dignity and safety.",
  },
  {
    image: "/image/Aware2.png",
    alt: "Street awareness drive with Rape Mukt Bharat Foundation volunteers",
    overlay: "जागरूकता रैली — दिल्ली",
    date: "March 2026",
    location: "New Delhi",
    title: "Awareness Rally — Delhi",
    description:
      "500+ participants marched for awareness and justice in the national capital, raising voices against silence.",
  },
  {
    image: "/image/who-we-are-heart.jpg",
    alt: "Hands stacked together in solidarity",
    overlay: "ग्राम जागरूकता अभियान",
    date: "February 2026",
    location: "Rural Maharashtra",
    title: "Village Outreach Drive",
    description:
      "Volunteers reached 12 villages over 3 days, distributing resources and holding community discussions.",
  },
  {
    image: "/image/work/youth.jpg",
    alt: "Students at a college awareness event",
    overlay: "कॉलेज जागरूकता सप्ताह",
    date: "January 2026",
    location: "Mumbai",
    title: "College Awareness Week",
    description:
      "Week-long events across 5 colleges — workshops, seminars and student-led awareness drives.",
  },
  {
    image: "/image/work/safety.jpg",
    alt: "Women gathered for a safety workshop",
    overlay: "महिला सुरक्षा कार्यशाला",
    date: "December 2025",
    location: "Pune",
    title: "Women's Safety Workshop",
    description:
      "Hands-on safety workshops for 200+ women covering legal rights, self-advocacy and support resources.",
  },
  {
    image: "/image/updates/story.jpg",
    alt: "Women sitting together in a community dialogue",
    overlay: "सामुदायिक संवाद श्रृंखला",
    date: "November 2025",
    location: "Pan-India",
    title: "Community Dialogue Series",
    description:
      "Open community dialogues encouraging survivors and community members to share experiences and seek support.",
  },
] as const;

function CalendarIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3 fill-current">
      <path d="M5 1.5a.5.5 0 0 1 .5.5V3h5V2a.5.5 0 0 1 1 0v1h.75A1.75 1.75 0 0 1 14 4.75v8.5A1.75 1.75 0 0 1 12.25 15H3.75A1.75 1.75 0 0 1 2 13.25v-8.5A1.75 1.75 0 0 1 3.75 3H4.5V2a.5.5 0 0 1 .5-.5ZM3.75 4.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-8.5Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3 fill-current">
      <path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.2 4.5 8.5 4.5 8.5s4.5-5.3 4.5-8.5A4.5 4.5 0 0 0 8 1.5Zm0 6.1A1.6 1.6 0 1 1 8 4.4a1.6 1.6 0 0 1 0 3.2Z" />
    </svg>
  );
}

export function CampaignGrid() {
  return (
    <section className="bg-white" aria-labelledby="campaign-grid-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="font-devanagari tracking-normal">सभी अभियान</span>
            {" · "}
            ALL CAMPAIGNS
          </p>
          <h2
            id="campaign-grid-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Our Campaigns
          </h2>
        </div>

        <ul className="mx-auto mt-10 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAMPAIGNS.map((campaign) => (
            <li key={campaign.title} className="w-full">
              <article className="group card-hover card-hover-border flex h-full flex-col overflow-hidden rounded-xl border border-black/[0.04] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.05)]">
                <div className="relative aspect-[5/3]">
                  <Image
                    src={campaign.image}
                    alt={campaign.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover card-hover-image"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/45 to-transparent px-3 pb-2 pt-7">
                    <p className="font-devanagari text-xs font-semibold text-white">
                      {campaign.overlay}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 py-3.5">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-soft px-2 py-0.5 text-xs font-semibold text-brand">
                      <CalendarIcon />
                      <time>{campaign.date}</time>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                      <PinIcon />
                      {campaign.location}
                    </span>
                  </div>

                  <h3 className="mt-2 text-base font-extrabold leading-snug tracking-tight text-ink">
                    {campaign.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-3 text-xs leading-5 text-zinc-500">
                    {campaign.description}
                  </p>

                  <Link
                    href="/get-involved"
                    className="mt-auto pt-3 text-xs font-bold text-brand transition-colors hover:text-brand-dark"
                  >
                    <span className="font-devanagari">शामिल हों</span>
                    <span aria-hidden="true"> · </span>
                    Join Campaign
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
