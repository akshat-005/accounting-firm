import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Refer a Friend",
  description:
    "Know someone who could use trusted tax or wealth advice? Refer them to Ledger & Legacy.",
};

export default function ReferralPage() {
  return (
    <PagePlaceholder
      eyebrow="Referrals"
      title="Refer a Friend"
      description="How our referral process works, plus a simple form to introduce someone who could benefit from our services."
      phase="Phase 2 — Public Website"
    />
  );
}
