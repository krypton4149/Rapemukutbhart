import { GetInvolvedDonateForm } from "@/components/get-involved-donate-form";
import { PaymentMethodsList } from "@/components/payment-methods-list";

export function GetInvolvedDonate() {
  return (
    <section
      id="donate"
      className="bg-white"
      aria-labelledby="involved-donate-heading"
    >
      <div className="mx-auto grid max-w-[1440px] items-start gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 lg:px-8 lg:py-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="font-devanagari tracking-normal">दान करें</span>
            {" · "}
            DONATE
          </p>
          <h2
            id="involved-donate-heading"
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]"
          >
            Your Support Can Help Build A Safer Tomorrow.
          </h2>
          <p className="mt-4 font-devanagari text-lg text-zinc-500">
            आपका एक कदम बड़ा बदलाव ला सकता है।
          </p>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-zinc-600">
            Every contribution helps us reach more communities, spread awareness
            and support meaningful change across India.
          </p>

          <PaymentMethodsList />
        </div>

        <div className="w-full max-w-md justify-self-center lg:max-w-[360px] lg:justify-self-end">
          <GetInvolvedDonateForm />
        </div>
      </div>
    </section>
  );
}
