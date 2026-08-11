import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Request a free, no-obligation consultation with Ledger & Legacy for tax, compliance or wealth advisory.",
};

export default function ConsultationPage() {
  return (
    <PagePlaceholder
      eyebrow="Free consultation"
      title="Book a Consultation"
      description="A low-friction request form — tell us your name, contact, service interest and a preferred time, and we'll reach out."
      phase="Phase 2 & 3 — Public Website & Forms"
    />
  );
}
