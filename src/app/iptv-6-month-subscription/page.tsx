import type { Metadata } from "next";
import { PlanDetailPage } from "@/components/sections/PlanDetailPage";
import { planPagesData } from "@/lib/site-data/plan-pages-data";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

const plan = planPagesData["6-months"];

export function generateMetadata(): Metadata {
  return {
    ...generatePageMetadata({
      title: plan.metaTitle,
      description: plan.metaDescription,
      canonical: `/${plan.slug}`,
    }),
    title: {
      absolute: plan.metaTitle,
    },
  };
}

export default function IPTV6MonthsPage() {
  return <PlanDetailPage data={plan} />;
}
