import { ContactHero } from "@/components/contact-hero";
import { ContactMain } from "@/components/contact-main";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ContactHero />
      <ContactMain />
    </main>
  );
}
