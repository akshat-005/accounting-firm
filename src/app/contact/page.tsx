import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Ledger & Legacy by phone, email or WhatsApp, or send us a message. Kolkata, West Bengal.",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="Get in touch"
      title="Contact Us"
      description="Contact form, phone, email, WhatsApp, office address, map and business hours."
      phase="Phase 2 & 3 — Public Website & Forms"
    />
  );
}
