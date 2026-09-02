import { AboutHero } from "@/components/about-hero";
import { AboutJoin } from "@/components/about-join";
import { AboutJourney } from "@/components/about-journey";
import { AboutMission } from "@/components/about-mission";
import { AboutValues } from "@/components/about-values";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutJourney />
      <AboutJoin />
    </main>
  );
}
