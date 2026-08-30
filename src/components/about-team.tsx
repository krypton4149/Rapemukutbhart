import Image from "next/image";

const TEAM = [
  {
    hindi: "प्रिया शर्मा",
    name: "Priya Sharma",
    title: "Founder & Director",
    image: "/image/updates/consent.jpg",
    object: "object-[center_20%]",
  },
  {
    hindi: "अनिता राव",
    name: "Anita Rao",
    title: "Head of Outreach",
    image: "/image/work/support.jpg",
    object: "object-[center_15%]",
  },
  {
    hindi: "कविता सिंह",
    name: "Kavita Singh",
    title: "Legal Coordinator",
    image: "/image/Aware1.png",
    object: "object-center",
  },
  {
    hindi: "सुनीता मेहता",
    name: "Sunita Mehta",
    title: "Community Lead",
    image: "/image/work/safety.jpg",
    object: "object-[center_30%]",
  },
] as const;

export function AboutTeam() {
  return (
    <section className="bg-[#f8f8f8]" aria-labelledby="team-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="font-devanagari tracking-normal">हमारी टीम</span>
            {" · "}
            OUR TEAM
          </p>
          <h2
            id="team-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            The People Behind the Mission
          </h2>
        </div>

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-x-6 gap-y-12 min-[400px]:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-8">
          {TEAM.map((member) => (
            <li key={member.name} className="card-hover group flex flex-col items-center text-center">
              <div className="relative size-32 overflow-hidden rounded-full border-[3px] border-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition-transform duration-300 group-hover:scale-105 min-[400px]:size-36 sm:size-40 lg:size-44">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.title}`}
                  fill
                  sizes="176px"
                  className={`object-cover ${member.object}`}
                />
              </div>
              <p className="mt-5 font-devanagari text-sm font-semibold text-brand">
                {member.hindi}
              </p>
              <h3 className="mt-0.5 text-sm font-extrabold tracking-tight text-ink min-[400px]:text-base sm:text-lg">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">{member.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
