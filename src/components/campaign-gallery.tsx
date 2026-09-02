import Image from "next/image";

const GALLERY_COLUMNS = [
  [
    {
      src: "/image/1.png",
      alt: "Foundation volunteer conducting community outreach with children in a village",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/image/Aware1.png",
      alt: "Community members holding Rape Mukt Bharat Foundation awareness signs",
      aspect: "aspect-[3/4]",
    },
  ],
  [
    {
      src: "/image/2.png",
      alt: "Foundation team providing care and support to a survivor",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/image/work/safety.jpg",
      alt: "Women standing together at a community gathering",
      aspect: "aspect-[4/3]",
    },
  ],
  [
    {
      src: "/image/3.png",
      alt: "Field interview and community conversation as part of an awareness program",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/image/who-we-are-heart.jpg",
      alt: "Hands coming together in solidarity",
      aspect: "aspect-square",
    },
  ],
  [
    {
      src: "/image/4.png",
      alt: "Foundation volunteer raising awareness and advocating for survivor support",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/image/work/support.jpg",
      alt: "A woman sitting outside a village home",
      aspect: "aspect-[4/3]",
    },
  ],
] as const;

export function CampaignGallery() {
  return (
    <section className="bg-white" aria-labelledby="campaign-gallery-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="font-devanagari tracking-normal">गैलरी</span>
            {" · "}
            GALLERY
          </p>
          <h2
            id="campaign-gallery-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Moments of <span className="text-brand">Change</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_COLUMNS.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {column.map((item) => (
                <div
                  key={item.src}
                  className={`group card-hover relative overflow-hidden rounded-2xl ${item.aspect}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover card-hover-image"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
