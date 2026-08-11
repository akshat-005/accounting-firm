import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Insights & Resources",
  description:
    "Articles, newsletters, guides, checklists and curated external resources on tax, compliance, investment and wealth.",
};

export default function InsightsPage() {
  return (
    <PagePlaceholder
      eyebrow="Insights"
      title="Insights & Resources"
      description="Articles, newsletters, guides, checklists and curated external resources — filterable by content type, service pillar and category."
      phase="Phase 2 — Public Website"
    />
  );
}
