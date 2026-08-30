import { ResourcesArticles } from "@/components/resources-articles";
import { ResourcesHelplines } from "@/components/resources-helplines";
import { ResourcesHero } from "@/components/resources-hero";
import { ResourcesLegal } from "@/components/resources-legal";
import { ResourcesSupport } from "@/components/resources-support";

export const metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ResourcesHero />
      <ResourcesHelplines />
      <ResourcesSupport />
      <ResourcesLegal />
      <ResourcesArticles />
    </main>
  );
}
