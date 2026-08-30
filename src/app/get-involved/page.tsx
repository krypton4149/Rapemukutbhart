import { GetInvolvedDonate } from "@/components/get-involved-donate";
import { GetInvolvedHero } from "@/components/get-involved-hero";
import { GetInvolvedShare } from "@/components/get-involved-share";
import { GetInvolvedWays } from "@/components/get-involved-ways";

export const metadata = {
  title: "Get Involved",
};

export default function GetInvolvedPage() {
  return (
    <main className="flex flex-1 flex-col">
      <GetInvolvedHero />
      <GetInvolvedWays />
      <GetInvolvedDonate />
      <GetInvolvedShare />
    </main>
  );
}
