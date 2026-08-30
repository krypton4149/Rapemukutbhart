import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";

export function ContactMain() {
  return (
    <section className="bg-white" aria-label="Contact form and information">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="order-2 lg:order-1">
          <ContactForm />
        </div>
        <div className="order-1 lg:order-2">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
