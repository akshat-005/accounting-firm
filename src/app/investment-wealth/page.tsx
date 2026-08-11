import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Investment & Wealth Advisory",
  description:
    "Financial planning, wealth management and portfolio advisory tailored to your goals from Ledger & Legacy, Kolkata.",
};

export default function InvestmentWealthPage() {
  return (
    <PagePlaceholder
      eyebrow="Services"
      title="Investment & Wealth"
      description="Goal-based financial planning, wealth management, portfolio advisory and mutual fund guidance for individuals, families and businesses."
      phase="Phase 2 — Public Website"
    />
  );
}
