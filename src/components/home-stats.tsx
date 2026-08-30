const STATS = [
  { value: "100+", hindi: "लोग", english: "People Reached" },
  { value: "25+", hindi: "अभियान", english: "Awareness Initiatives" },
  { value: "50+", hindi: "स्वयंसेवी", english: "Community Volunteers" },
  { value: "10+", hindi: "कार्यक्रम", english: "Community Programs" },
] as const;

export function HomeStats() {
  return (
    <section aria-label="Impact" className="premium-dark relative overflow-hidden text-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 top-1/2 size-56 -translate-y-1/2 rounded-full bg-brand/15 blur-[80px]"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-y-8 px-4 py-14 min-[400px]:grid-cols-2 min-[400px]:gap-y-10 sm:px-6 md:grid-cols-4 md:gap-8 lg:px-8 lg:py-16">
        {STATS.map((stat) => (
          <div
            key={stat.english}
            className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <p className="text-3xl font-extrabold tracking-tight min-[400px]:text-4xl sm:text-[2.75rem]">
              {stat.value}
            </p>
            <p className="mt-2 font-devanagari text-sm font-medium text-brand sm:text-base">
              {stat.hindi}
            </p>
            <span
              aria-hidden="true"
              className="mt-2 block h-px w-9 bg-gradient-to-r from-transparent via-brand to-transparent"
            />
            <p className="mt-2 text-sm text-zinc-400">{stat.english}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
