import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Sprout,
  TrendingUp,
  Compass,
  Umbrella,
  Wallet,
  Search,
  Handshake,
  Hourglass,
  Repeat,
  Shield,
  PieChart,
  Layers,
  Target,
  Flame,
  Brain,
  Percent,
  AlertTriangle,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ServiceExplorer } from "@/components/services/service-explorer";
import { ProcessSteps } from "@/components/services/process-steps";
import { Faq } from "@/components/services/faq";
import { CtaBand } from "@/components/services/cta-band";
import { CompoundingCalculator } from "@/components/services/compounding-calculator";
import { investmentServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Investment & Wealth Advisory in Kolkata",
  description:
    "Investment advisory, financial planning, wealth management, PMS, mutual fund and asset management services from Ledger & Legacy, Kolkata. Invest with clarity.",
};

/* Goal-oriented entry points → jump to the services grid. */
const goals = [
  { icon: Sprout, label: "I want to start investing" },
  { icon: TrendingUp, label: "I want to grow my wealth" },
  { icon: Compass, label: "I need a financial plan" },
  { icon: Umbrella, label: "I want to plan for retirement" },
  { icon: Wallet, label: "I want to manage my existing wealth" },
  { icon: Search, label: "I want someone to review my investments" },
  { icon: Handshake, label: "I want professional investment advice" },
];

/* What actually drives wealth growth (beyond just "returns"). */
const factors = [
  { icon: Hourglass, title: "Time", body: "The longer you stay invested, the more compounding works in your favour." },
  { icon: Percent, title: "Compounding", body: "Returns earning returns is what quietly builds wealth over the years." },
  { icon: Shield, title: "Risk", body: "Every investment carries some — the goal is the right amount for you." },
  { icon: PieChart, title: "Diversification", body: "Spreading across assets softens the impact of any single one falling." },
  { icon: Repeat, title: "Consistency", body: "Regular, disciplined investing beats trying to time the market." },
  { icon: Layers, title: "Asset allocation", body: "How you split across asset types shapes most of your long-term outcome." },
  { icon: Target, title: "Goals", body: "What you're investing for should decide how you invest." },
  { icon: Flame, title: "Inflation", body: "Staying ahead of rising costs is half the reason to invest at all." },
  { icon: Brain, title: "Investor behaviour", body: "Staying calm through the ups and downs matters as much as the plan." },
];

/* Risks & important considerations (final disclosures to be reviewed by the firm). */
const risks = [
  "All investments carry some degree of risk.",
  "Returns are not guaranteed.",
  "Market values fluctuate — they can fall as well as rise.",
  "Past performance does not guarantee future results.",
  "Different investments suit different risk profiles.",
  "Decisions should consider your goals and timeframe.",
];

/* Our approach — investment-specific process. */
const approach = [
  { title: "Understand You", body: "Your goals, finances, timeframe and personal circumstances." },
  { title: "Assess", body: "Your risk tolerance, existing investments and requirements." },
  { title: "Build a Strategy", body: "An approach aligned with your objectives — not a template." },
  { title: "Review & Adapt", body: "Circumstances and markets change; your strategy can change with them." },
];

const faqs = [
  {
    q: "How much money do I need to start investing?",
    a: "Less than most people think — you can begin a mutual fund SIP with as little as ₹500 a month. What matters more than the amount is starting early and staying consistent. Some services, like PMS, do have higher minimums (₹50 lakh, as set by SEBI).",
  },
  {
    q: "Do I need a financial advisor?",
    a: "Not necessarily for simple, single decisions. An advisor becomes valuable when you have multiple goals, a growing portfolio, or you simply want an objective, informed second opinion rather than guesswork.",
  },
  {
    q: "What's the difference between financial planning and investment advisory?",
    a: "Financial planning looks at your whole financial picture — goals, savings, protection and cash flow — and builds a roadmap. Investment advisory focuses specifically on where and how to invest. They work well together.",
  },
  {
    q: "What is PMS?",
    a: "Portfolio Management Services are professionally managed portfolios run by SEBI-registered portfolio managers, aimed at larger investors. SEBI sets a minimum investment of ₹50 lakh per client, and PMS is subject to market risk.",
  },
  {
    q: "How do mutual funds work?",
    a: "A mutual fund pools money from many investors and invests it across a basket of securities managed by a professional fund manager. You can invest a lump sum or via a monthly SIP. Mutual fund investments are subject to market risk.",
  },
  {
    q: "Can you review my existing investments?",
    a: "Yes. We can look at what you currently hold, assess how it fits your goals and risk profile, and suggest whether anything needs rebalancing or attention.",
  },
  {
    q: "How do I know how much risk I should take?",
    a: "It depends on your goals, your timeframe and how comfortable you are with short-term ups and downs. We help you work this out before recommending anything — it's the starting point, not an afterthought.",
  },
  {
    q: "Can you help me plan for retirement?",
    a: "Yes — retirement is one of the most common goals we plan for, working out how much to invest now and how to structure it so your money lasts.",
  },
];

export default function InvestmentWealthPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate flex min-h-[480px] items-center overflow-hidden border-b border-border bg-background lg:min-h-[560px]">
        {/* Layer 1 — soft light gradient stand-in (shows only if no photo). */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(120deg, #f5f7fb 0%, #eef2f9 55%, #dbe4f1 100%)",
          }}
        />
        {/* Layer 2 — background photo (optimized WebP), covers the stand-in. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/investment-hero.webp')" }}
        />
        {/* Layer 3 — light panel over the text zone; photo stays clear on the right. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.64) 42%, rgba(255,255,255,0.30) 64%, rgba(255,255,255,0) 88%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
        />
        <Container className="relative py-12">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
              Investment &amp; Wealth
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] text-navy-900 sm:text-5xl">
              Invest with clarity. Plan with purpose.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/75">
              We help individuals and families across Kolkata make informed
              investment and financial decisions — building a plan around your goals,
              your timeframe and your comfort with risk.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation" size="lg" variant="primary">
                Talk to a Wealth Advisor <ArrowRight />
              </Button>
              <Button
                href="#services"
                size="lg"
                variant="outline"
                className="bg-white/70 hover:bg-white"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. What are you looking to achieve? */}
      <Section spacing="md" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Start here"
          title="Where are you in your financial journey?"
          lead="Wherever you're starting from, there's a way forward. Pick what fits and explore the services below."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((g) => (
            <li key={g.label}>
              <Link
                href="#services"
                className="group flex h-full items-center gap-4 rounded-xl border bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-800 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                  <g.icon className="size-5" />
                </span>
                <span className="text-[0.95rem] font-medium leading-snug text-navy-900">
                  {g.label}
                </span>
                <ArrowRight className="ml-auto size-4 shrink-0 text-gold-600 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. Our services (flat cards + info modal) */}
      <Section id="services" spacing="md" variant="subtle" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="What we do"
          title="Our Investment & Wealth Services"
          lead="Tap any service to see what it involves, who it's for and what's needed."
        />
        <div className="mt-10">
          <ServiceExplorer
            services={investmentServices}
            documentsHeading="Information Needed"
          />
        </div>
      </Section>

      {/* 4. Why invest? — the power of long-term investing */}
      <Section spacing="md" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Why invest"
          title="The power of long-term investing"
          lead="The earlier you start, the more time your money has to grow. See how a steady monthly investment could add up over time."
        />
        <div className="mx-auto mt-10 max-w-4xl">
          <CompoundingCalculator />
        </div>
      </Section>

      {/* 5. Wealth growth isn't about returns alone */}
      <Section spacing="md" variant="subtle" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="The bigger picture"
          title="Wealth growth isn't about returns alone"
          lead="The right investment isn't simply the one with the highest potential return — it's the one that fits your goals, timeframe and ability to handle risk."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((f) => (
            <li key={f.title} className="rounded-xl border bg-card p-6 shadow-soft">
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base text-navy-900">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 6. Our approach */}
      <ProcessSteps
        spacing="md"
        eyebrow="How we work"
        title="Our approach"
        steps={approach}
        cta={{ label: "Want to discuss your situation?", href: "/consultation" }}
      />

      {/* 7. Risks & important considerations */}
      <Section spacing="md" variant="subtle" reveal>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
              Please note
            </p>
            <h2 className="text-3xl sm:text-4xl">Risks &amp; important considerations</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We believe good advice is honest advice. Investing can help you build
              wealth over time, but it&apos;s important to understand what it involves
              before you begin.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Detailed, product-specific risk disclosures are shared with you before
              any investment decision.
            </p>
          </div>
          <ul className="grid gap-3">
            {risks.map((risk) => (
              <li
                key={risk}
                className="flex items-start gap-3 rounded-lg border bg-card p-4 shadow-soft"
              >
                <AlertTriangle className="mt-0.5 size-4 shrink-0 text-gold-600" />
                <span className="text-sm leading-snug text-foreground/90">{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 8. FAQ */}
      <Faq items={faqs} spacing="md" />

      {/* 9. Final CTA */}
      <CtaBand
        title="Your financial goals deserve a plan."
        body="Not sure where to start? Start with a conversation — we'll help you understand your options, with no jargon and no obligation."
        buttonLabel="Book a Consultation"
      />
    </>
  );
}
