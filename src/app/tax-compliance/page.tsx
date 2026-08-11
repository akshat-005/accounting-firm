import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Tax & Compliance Services",
  description:
    "ITR filing, tax planning, GST, ROC/MCA compliance, incorporation and audit support from Ledger & Legacy, Kolkata.",
};

export default function TaxCompliancePage() {
  return (
    <PagePlaceholder
      eyebrow="Services"
      title="Tax & Compliance"
      description="ITR filing, tax planning, GST, ROC/MCA compliance, incorporation, MSME & trademark registration, accounting and audit support."
      phase="Phase 2 — Public Website"
    />
  );
}
