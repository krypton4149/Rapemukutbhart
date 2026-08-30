import { WorkCollaborate } from "@/components/work-collaborate";
import { WorkHero } from "@/components/work-hero";
import { WorkPrograms } from "@/components/work-programs";
import { WorkStats } from "@/components/work-stats";

export const metadata = {
  title: "Our Work",
};

export default function OurWorkPage() {
  return (
    <main className="flex flex-1 flex-col">
      <WorkHero />
      <WorkStats />
      <WorkPrograms />
      <WorkCollaborate />
    </main>
  );
}
