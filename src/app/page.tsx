import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Landmark,
  Check,
  Receipt,
  LineChart,
  Building2,
  AlertTriangle,
  Lightbulb,
  Award,
  Handshake,
  Scale,
  User,
  Users,
  Briefcase,
  Gem,
  FileText,
  Plus,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

/* 2. "How can we help?" — plain-language situations → routed to the right pillar. */
const helpSituations = [
  { icon: Receipt, label: "I need help with my taxes", href: "/tax-compliance" },
  { icon: LineChart, label: "I want to manage my investments better", href: "/investment-wealth" },
  { icon: Building2, label: "I need accounting or business support", href: "/tax-compliance" },
  { icon: AlertTriangle, label: "I've received a tax or GST notice", href: "/tax-compliance" },
  { icon: Lightbulb, label: "I want financial advice", href: "/investment-wealth" },
];

/* 3. Our Services — the two pillars. */
const pillars = [
  {
    icon: Landmark,
    title: "Tax & Compliance",
    href: "/tax-compliance",
    points: [
      "Corporate & Individual Tax Planning",
      "GST Advisory & Returns Filing",
      "Regulatory & ROC Compliances",
      "Auditing & Assurance Services",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment & Wealth",
    href: "/investment-wealth",
    points: [
      "Portfolio Management Services (PMS)",
      "Mutual Funds & Alternative Investments",
      "Retirement & Estate Planning",
      "Wealth Structuring for HNIs",
    ],
  },
];

/* 4. Why Ledger & Legacy — reasons to trust. (Credentials to be confirmed by the firm.) */
const whyUs = [
  {
    icon: Award,
    title: "Qualified & credentialed",
    body: "Experienced professionals with deep domain expertise across tax, compliance and wealth.",
  },
  {
    icon: Handshake,
    title: "Personalised approach",
    body: "Guidance tailored to your situation and goals — never one-size-fits-all advice.",
  },
  {
    icon: Scale,
    title: "Complete transparency",
    body: "Clear scope, honest recommendations and no hidden surprises along the way.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & compliant",
    body: "We work within applicable regulatory standards, so your affairs stay in safe hands.",
  },
];

/* 5. Who we help. */
const audiences = [
  { icon: User, label: "Individuals" },
  { icon: Users, label: "Families" },
  { icon: Briefcase, label: "Professionals" },
  { icon: Building2, label: "Businesses" },
  { icon: Gem, label: "HNIs & Investors" },
];

/* 6. Useful insights — ⚠️ placeholder cards until real content is published via /insights. */
const insights = [
  { type: "Tax Tip", title: "Smart tax-saving moves before the year-end", href: "/insights" },
  { type: "Explainer", title: "How mutual fund taxation actually works", href: "/insights" },
  { type: "Checklist", title: "Starting a business: registration checklist", href: "/insights" },
  { type: "Newsletter", title: "This quarter in tax & markets", href: "/insights" },
];

/* 8. About teaser — the firm's two leads. */
const team = [
  {
    name: "CA Nisha Agarwal",
    role: "Tax & Compliance Head",
    note: "Chartered Accountant · 19 years' experience",
    img: "/images/nisha-agarwal.webp",
  },
  {
    name: "Jitesh Agarwal",
    role: "Wealth & Investment Head",
    note: "MBA, Symbiosis · Markets & wealth",
    img: "/images/jitesh-agarwal.webp",
  },
];

/* 7. Key numbers — ⚠️ placeholder figures; the business must confirm before launch. */
const stats = [
  { value: "₹500Cr+", label: "Assets Advised" },
  { value: "5000+", label: "Tax Filings" },
  { value: "19+", label: "Years Experience" },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden bg-background text-foreground">
        {/* Layer 1 — soft light gradient stand-in (shows only if no photo). */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(120deg, #eef2f9 0%, #dbe4f1 60%, #c7d5e8 100%)",
          }}
        />
        {/* Layer 2 — background photo (optimized WebP), covers the stand-in. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.webp')" }}
        />
        {/* Layer 3 — light panel over the text zone; photo stays clear on the right. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.60) 42%, rgba(255,255,255,0.28) 64%, rgba(255,255,255,0) 85%)",
          }}
        />
        {/* Thin gold hairline at the base for a premium finish. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
        />
        <Container className="relative py-24 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold leading-[1.05] text-navy-900 sm:text-5xl lg:text-[3.75rem]">
              Your taxes, compliance and investments —{" "}
              <span className="text-gold-600">handled with care.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
              Ledger &amp; Legacy helps individuals, families and businesses in Kolkata
              stay compliant and build wealth — with clear, jargon-free advice you can
              actually act on.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation" size="lg" variant="primary">
                Book a Free Consultation <ArrowRight />
              </Button>
              <Button
                href="#services"
                size="lg"
                variant="outline"
                className="border-navy-800/30 bg-white/85 hover:bg-white"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. How can we help you? */}
      <Section spacing="lg" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Start here"
          title="How can we help you?"
          lead="Not sure which service you need? Pick what's on your mind and we'll take you to the right place."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {helpSituations.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                className="group flex h-full flex-col gap-4 rounded-xl border bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-navy-50 text-navy-800 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                  <s.icon className="size-5" />
                </span>
                <span className="text-[0.95rem] font-medium leading-snug text-navy-900">
                  {s.label}
                </span>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-gold-600">
                  Get help{" "}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. Our Services */}
      <Section id="services" spacing="lg" variant="subtle" reveal>
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl">Our Services</h2>
          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-gold-500" />
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.href}
              className="group flex flex-col rounded-xl border bg-card p-8 shadow-soft transition-shadow hover:shadow-lift"
            >
              <div className="flex items-center gap-3.5">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                  <p.icon className="size-6" />
                </span>
                <h3 className="text-xl text-navy-900">{p.title}</h3>
              </div>
              <ul className="mt-7 space-y-4 text-[0.95rem]">
                {p.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-600" />
                    <span className="text-foreground/90">{point}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <Plus className="mt-0.5 size-4 shrink-0 text-gold-600" />
                  <span className="text-muted-foreground">…and more services</span>
                </li>
              </ul>
              <Link
                href={p.href}
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-navy-800 transition-colors hover:text-gold-600"
              >
                Learn more{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Why Ledger & Legacy? */}
      <Section spacing="lg" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Why us"
          title="Why Ledger & Legacy?"
          lead="The reassurance you'd want before trusting someone with your finances."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => (
            <div key={w.title} className="rounded-xl border bg-card p-6 shadow-soft">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                <w.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg text-navy-900">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Who we help */}
      <Section spacing="lg" variant="subtle" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Who we help"
          title="Trusted across every stage of your journey"
          lead="From your first pay-cheque to a growing business or a substantial portfolio — we're here for it."
        />
        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-4">
          {audiences.map((a) => (
            <li
              key={a.label}
              className="flex items-center gap-3 rounded-full border bg-card px-5 py-3 shadow-soft"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-navy-50 text-navy-800">
                <a.icon className="size-4" />
              </span>
              <span className="text-sm font-medium text-navy-900">{a.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 6. Useful insights */}
      <Section spacing="lg" reveal>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Insights"
            title="Useful reads & resources"
            lead="Practical tax tips, plain-English explainers and checklists."
          />
          <Button href="/insights" variant="ghost" className="shrink-0">
            View all <ArrowRight />
          </Button>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {insights.map((post) => (
            <li key={post.title}>
              <Link
                href={post.href}
                className="group flex h-full flex-col rounded-xl border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-navy-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                  <FileText className="size-3" /> {post.type}
                </span>
                <h3 className="mt-4 text-base leading-snug text-navy-900">{post.title}</h3>
                <span className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-medium text-gold-600">
                  Read{" "}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* 7. Key numbers */}
      <Section spacing="md" variant="subtle" reveal>
        <dl className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-8 text-center sm:py-4">
              <dt className="font-display text-4xl font-semibold text-navy-800 sm:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* 8. About us teaser */}
      <Section spacing="lg" reveal>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
              About us
            </p>
            <h2 className="text-3xl sm:text-4xl">The people behind Ledger &amp; Legacy</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We&apos;re a close-knit Kolkata team that pairs a Chartered Accountant&apos;s
              rigour in tax &amp; compliance with seasoned expertise in markets and wealth
              management — so every side of your finances is in capable hands, with advice
              that stays personal and clear.
            </p>
            <Button href="/about" variant="outline" className="mt-8">
              Learn more about us <ArrowRight />
            </Button>
          </div>
          <ul className="mx-auto grid w-full max-w-md grid-cols-2 gap-5 sm:gap-6">
            {team.map((m) => (
              <li key={m.name} className="text-center">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-navy-50 shadow-soft">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 1024px) 45vw, 220px"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug text-navy-900">
                  {m.name}
                </p>
                <p className="text-xs font-medium text-gold-600">{m.role}</p>
                <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{m.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 9. Final CTA */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        {/* Layer 1 — opaque navy stand-in (shows if no photo). */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(120deg, #050f22 0%, #0d2244 55%, #163663 100%)",
          }}
        />
        {/* Layer 2 — background photo (optimized WebP). */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cta.webp')" }}
        />
        {/* Layer 3 — dark tint for depth + card contrast. */}
        <div aria-hidden className="absolute inset-0 bg-navy-950/70" />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <Reveal>
          <div className="mx-auto max-w-xl rounded-2xl bg-card px-8 py-10 text-center shadow-lift sm:px-12 sm:py-12">
            <h2 className="text-3xl text-navy-900 sm:text-4xl">
              Not sure what you need? Talk to us.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Tell us what&apos;s on your mind and we&apos;ll point you to the right
              help — no jargon, no pressure, no obligation.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/consultation" size="lg" variant="primary">
                Book a Free Consultation <ArrowRight />
              </Button>
            </div>
          </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
