const STATS = [
  { value: "100+", hindi: "लोग", english: "People Reached" },
  { value: "12+", hindi: "जिले", english: "Districts Covered" },
  { value: "25+", hindi: "अभियान", english: "Awareness Events" },
  { value: "8+", hindi: "कार्यक्रम", english: "Active Programs" },
] as const;

export function WorkStats() {
  return (
    <section aria-label="Work impact" className="bg-brand text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-y-8 px-4 py-10 min-[400px]:grid-cols-2 min-[400px]:gap-y-10 sm:px-6 md:grid-cols-4 md:gap-8 lg:px-8 lg:py-12">
        {STATS.map((stat) => (
          <div key={stat.english} className="flex flex-col items-center text-center">
            <p className="text-3xl font-extrabold tracking-tight min-[400px]:text-4xl sm:text-[2.75rem]">
              {stat.value}
            </p>
            <p className="mt-2 font-devanagari text-sm font-medium sm:text-base">
              {stat.hindi}
            </p>
            <p className="mt-1 text-sm text-white/85">{stat.english}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
