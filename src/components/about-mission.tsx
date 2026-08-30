import Image from "next/image";

export function AboutMission() {
  return (
    <section className="bg-white" aria-labelledby="about-mission-heading">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="font-devanagari tracking-normal">हमारा मिशन</span>
            {" · "}
            OUR MISSION
          </p>
          <h2
            id="about-mission-heading"
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl"
          >
            Building <span className="text-brand">Awareness,</span> Creating
            Change
          </h2>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-zinc-600">
            Rape Mukt Bharat Foundation is committed to creating a safer and
            more aware society by standing with survivors, promoting awareness,
            supporting access to justice, and encouraging rehabilitation and
            community responsibility.
          </p>
          <p className="mt-4 max-w-xl font-devanagari text-[0.95rem] leading-7 text-zinc-500">
            हम एक ऐसे भारत का सपना देखते हैं जहाँ हर व्यक्ति सम्मान, सुरक्षा और
            स्वतंत्रता के साथ जी सके।
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card-hover rounded-2xl bg-zinc-100 px-5 py-5">
              <p className="text-sm font-bold text-brand">
                <span className="font-devanagari">मिशन</span>
                {" · "}
                Mission
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Educate, empower and engage communities in building a culture of
                safety and justice.
              </p>
            </div>
            <div className="card-hover rounded-2xl bg-zinc-100 px-5 py-5">
              <p className="text-sm font-bold text-brand">
                <span className="font-devanagari">विजन</span>
                {" · "}
                Vision
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                A Rape Mukt Bharat — a nation where fear has no place and
                dignity is guaranteed.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl pb-10 pt-2 sm:px-0 lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/image/who-we-are.jpg"
              alt="People stacking their hands together in a show of unity"
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-1 z-10 w-[34%] overflow-hidden rounded-2xl border-[5px] border-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:bottom-0 sm:right-0 sm:w-[36%]">
            <div className="relative aspect-square">
              <Image
                src="/image/who-we-are-heart.jpg"
                alt="Hands covered in red paint, coming together"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
