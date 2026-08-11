import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "The story, team, qualifications and credentials behind Ledger & Legacy, a Kolkata-based financial services firm.",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="Our firm"
      title="About Ledger & Legacy"
      description="Our story, team, qualifications, credentials, experience, philosophy and client testimonials."
      phase="Phase 2 — Public Website"
    />
  );
}
