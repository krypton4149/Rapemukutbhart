import { CampaignFeatured } from "@/components/campaign-featured";
import { CampaignGallery } from "@/components/campaign-gallery";
import { CampaignGrid } from "@/components/campaign-grid";
import { CampaignHero } from "@/components/campaign-hero";
import { CampaignOrganise } from "@/components/campaign-organise";

export const metadata = {
  title: "Campaigns",
};

export default function CampaignsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <CampaignHero />
      <CampaignFeatured />
      <CampaignGrid />
      <CampaignGallery />
      <CampaignOrganise />
    </main>
  );
}
