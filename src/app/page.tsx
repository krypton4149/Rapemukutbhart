import { HomeCampaign } from "@/components/home-campaign";
import { HomeGive } from "@/components/home-give";
import { HomeHero } from "@/components/home-hero";
import { HomeMission } from "@/components/home-mission";
import { HomeStats } from "@/components/home-stats";
import { HomeSupport } from "@/components/home-support";
import { HomeUpdates } from "@/components/home-updates";
import { HomeWhoWeAre } from "@/components/home-who-we-are";
import { HomeWork } from "@/components/home-work";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HomeHero />
      <HomeStats />
      <RevealOnScroll>
        <HomeWhoWeAre />
      </RevealOnScroll>
      <RevealOnScroll delay={80}>
        <HomeMission />
      </RevealOnScroll>
      <RevealOnScroll delay={80}>
        <HomeWork />
      </RevealOnScroll>
      <RevealOnScroll>
        <HomeCampaign />
      </RevealOnScroll>
      <RevealOnScroll delay={80}>
        <HomeSupport />
      </RevealOnScroll>
      <RevealOnScroll delay={80}>
        <HomeUpdates />
      </RevealOnScroll>
      <HomeGive />
    </main>
  );
}
