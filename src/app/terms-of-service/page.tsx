import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the Ledger & Legacy website.",
};

export default function TermsOfServicePage() {
  return (
    <PagePlaceholder
      eyebrow="Legal"
      title="Terms of Service"
      description="The terms governing use of this website. Final wording to be reviewed by the firm's legal/compliance professional."
      phase="Phase 2 — Public Website"
    />
  );
}
