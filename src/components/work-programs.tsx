import Image from "next/image";
import Link from "next/link";

const PROGRAMS = [
  {
    image: "/image/1.png",
    alt: "Foundation volunteer conducting community outreach with children in a village",
    badge: "जागरूकता",
    hindi: "सामुदायिक जागरूकता अभियान",
    title: "Community Awareness Drives",
    english:
      "Door-to-door drives and public awareness sessions across villages and urban communities to spread knowledge about safety, rights and prevention.",
    hindiBody: "हम घर-घर जाकर जागरूकता फैलाते हैं।",
  },
  {
    image: "/image/work/safety.jpg",
    alt: "Women standing together in a community gathering",
    badge: "सुरक्षा",
    hindi: "महिला और बाल सुरक्षा जागरूकता",
    title: "Women & Child Safety Awareness",
    english:
      "Dedicated programmes focused on safety, rights and well-being of women and children across India.",
    hindiBody: "महिलाओं और बच्चों की सुरक्षा हमारी प्राथमिकता है।",
  },
  {
    image: "/image/2.png",
    alt: "Foundation team providing care and support to a survivor",
    badge: "सहयोग",
    hindi: "उत्तरजीवी सहायता",
    title: "Survivor Support",
    english:
      "Confidential, compassionate support connecting survivors with resources, counselling and care systems.",
    hindiBody: "हर पीड़िता को सम्मान और सहयोग मिलना चाहिए।",
  },
  {
    image: "/image/Legal.png",
    alt: "Legal awareness session educating communities about rights and access to justice",
    badge: "कानून",
    hindi: "कानूनी जागरूकता",
    title: "Legal Awareness",
    english:
      "Educating communities about legal rights, POCSO, IPC provisions and access to justice.",
    hindiBody: "आपको अपने अधिकार जानने चाहिए।",
  },
  {
    image: "/image/work/youth.jpg",
    alt: "A library aisle representing learning and education",
    badge: "शिक्षा",
    hindi: "शैक्षिक कार्यक्रम",
    title: "Educational Programs",
    english:
      "Workshops and seminars in schools and colleges promoting safety education, consent awareness and critical thinking.",
    hindiBody: "शिक्षा से ही बदलाव आएगा।",
  },
  {
    image: "/image/3.png",
    alt: "Field interview and community conversation as part of an awareness program",
    badge: "समुदाय",
    hindi: "सामुदायिक आउटरीच",
    title: "Community Outreach",
    english:
      "Reaching marginalised communities — rural villages, slums and tribal areas — with awareness and resources.",
    hindiBody: "कोई भी पीछे न रह जाए।",
  },
  {
    image: "/image/who-we-are.jpg",
    alt: "Hands stacked together in a show of solidarity",
    badge: "पुनर्वास",
    hindi: "पुनर्वास सहायता",
    title: "Rehabilitation Support",
    english:
      "Supporting survivors in rebuilding their lives through skill development, counselling and community reintegration.",
    hindiBody: "जीवन फिर से शुरू होता है।",
  },
  {
    image: "/image/4.png",
    alt: "Foundation volunteer raising awareness and advocating for survivor support",
    badge: "युवा",
    hindi: "युवा जागरूकता कार्यक्रम",
    title: "Youth Awareness Programs",
    english:
      "Engaging young people as agents of change through leadership, awareness drives and peer education initiatives.",
    hindiBody: "युवा ही असली बदलाव लाएंगे।",
  },
] as const;

export function WorkPrograms() {
  return (
    <section className="bg-[#f8f8f8]" aria-labelledby="programs-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="font-devanagari tracking-normal">कार्यक्रम</span>
            {" · "}
            PROGRAMS
          </p>
          <h2
            id="programs-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Our <span className="text-brand">8 Active</span> Programs
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program) => (
            <li key={program.title}>
              <article className="group card-hover card-hover-border flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.04] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                <div className="relative aspect-[16/11]">
                  <Image
                    src={program.image}
                    alt={program.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover card-hover-image"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-brand px-2.5 py-1 font-devanagari text-xs font-semibold text-white">
                    {program.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-5 py-5">
                  <p className="font-devanagari text-sm font-semibold text-brand">
                    {program.hindi}
                  </p>
                  <h3 className="mt-1 text-base font-extrabold tracking-tight text-ink sm:text-lg">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {program.english}{" "}
                    <span className="font-devanagari">{program.hindiBody}</span>
                  </p>
                  <Link
                    href="/get-involved"
                    className="mt-auto pt-4 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
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
