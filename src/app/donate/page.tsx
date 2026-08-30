import { GetInvolvedDonate } from "@/components/get-involved-donate";
import Link from "next/link";

export const metadata = {
  title: "Donate",
  description:
    "Support Rape Mukt Bharat Foundation — your donation funds awareness campaigns, survivor support, and community programs across India.",
};

export default function DonatePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="bg-[#0d0d0d] text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-20">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="font-devanagari tracking-normal">दान करें</span>
            {" · "}
            DONATE
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Every Contribution Builds a Safer India
          </h1>
          <p className="mt-4 font-devanagari text-base text-zinc-400 sm:text-lg">
            आपका सहयोग जागरूकता और सुरक्षा को मजबूत करता है।
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400">
            Your gift helps us reach more communities, support survivors, and run
            awareness campaigns nationwide.
          </p>
          <Link
            href="#donate"
            className="btn-cta mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand px-7 text-sm font-bold text-white"
          >
            <span className="font-devanagari">अभी दान करें</span>
            <span aria-hidden="true"> · </span>
            Donate Now
          </Link>
        </div>
      </section>
      <GetInvolvedDonate />
    </main>
  );
}
