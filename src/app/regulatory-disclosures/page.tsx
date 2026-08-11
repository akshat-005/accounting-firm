import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Regulatory Disclosures",
  description:
    "Registration numbers, regulatory information and mandatory disclosures for Ledger & Legacy.",
};

export default function RegulatoryDisclosuresPage() {
  return (
    <PagePlaceholder
      eyebrow="Compliance"
      title="Regulatory Disclosures"
      description="SEBI / AMFI / ICAI information, registration numbers, mandatory disclosures and disclaimers. All regulatory wording must be supplied and reviewed by the firm's compliance/legal professional."
      phase="Phase 2 — Public Website"
    />
  );
}
