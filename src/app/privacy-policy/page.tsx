import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Ledger & Legacy collects, uses and protects the information you share.",
};

export default function PrivacyPolicyPage() {
  return (
    <PagePlaceholder
      eyebrow="Legal"
      title="Privacy Policy"
      description="How enquiry data is collected, used and protected. Final wording to be reviewed by the firm's legal/compliance professional."
      phase="Phase 2 — Public Website"
    />
  );
}
