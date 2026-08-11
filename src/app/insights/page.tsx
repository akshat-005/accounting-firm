import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { InsightsExplorer } from "@/components/insights/insights-explorer";
import { NewsletterSignup } from "@/components/insights/newsletter-signup";
import { getInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights & Resources",
  description:
    "Expert analysis, practical guides and market updates on tax, compliance, investment and wealth — from Ledger & Legacy, Kolkata.",
};

export default async function InsightsPage() {
  const insights = await getInsights();
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border bg-background">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(120deg, #f5f7fb 0%, #eef2f9 55%, #dbe4f1 100%)",
          }}
        />
        {/* subtle grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(13,34,68,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,34,68,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
        />
        <Container className="relative py-16 text-center sm:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
            Insights
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] text-navy-900 sm:text-5xl">
            Insights &amp; Resources Hub
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
            Expert analysis, practical guides and market updates to help you
            navigate tax, compliance, investment and wealth with confidence.
          </p>
        </Container>
      </section>

      {/* Explorer */}
      <Section spacing="lg">
        <InsightsExplorer items={insights} />
      </Section>

      {/* Stay informed */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(120deg, #050f22 0%, #0d2244 55%, #163663 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
        />
        <Container className="relative py-16 text-center sm:py-20">
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-white/10 text-gold-300 ring-1 ring-white/15">
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
          <h2 className="mt-6 text-3xl text-white sm:text-4xl">Stay informed</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-navy-100">
            Subscribe to our monthly digest for practical insights, regulatory
            updates and perspectives — delivered straight to your inbox.
          </p>
          <div className="mt-8">
            <NewsletterSignup />
          </div>
          <p className="mt-4 text-xs text-navy-200">
            No spam. Unsubscribe anytime.
          </p>
        </Container>
      </section>
    </>
  );
}
