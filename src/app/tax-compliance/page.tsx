import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Receipt,
  AlertTriangle,
  Building2,
  BookOpen,
  ClipboardCheck,
  Lightbulb,
  Check,
  ShieldCheck,
  MapPin,
  Layers,
  Scale,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ServiceExplorer } from "@/components/services/service-explorer";
import { ProcessSteps } from "@/components/services/process-steps";
import { Faq } from "@/components/services/faq";
import { CtaBand } from "@/components/services/cta-band";
import { taxGroups } from "@/lib/services";

export const metadata: Metadata = {
  title: "Tax & Compliance Services in Kolkata",
  description:
    "ITR filing, tax planning, GST, ROC/MCA compliance, incorporation, MSME & trademark registration, accounting and audit support from Ledger & Legacy, Kolkata.",
  keywords: [
    "Income Tax Consultant Kolkata",
    "Income Tax Appeal Consultant Kolkata",
    "TDS Return Filing Kolkata",
    "GST Return Filing Kolkata",
    "ROC Compliance Kolkata",
    "Accounting Services Kolkata",
  ],
};

/* Problem-oriented entry points → jump to the matching service category. */
const problems = [
  { icon: Receipt, label: "I need help with my income tax", href: "#income-tax" },
  { icon: AlertTriangle, label: "I received a tax or GST notice", href: "#income-tax" },
  { icon: Building2, label: "I need help with my business", href: "#business-setup" },
  { icon: BookOpen, label: "I need accounting or bookkeeping support", href: "#accounting" },
  { icon: ClipboardCheck, label: "I need help with compliance", href: "#gst" },
  { icon: Lightbulb, label: "I want tax planning or advice", href: "#income-tax" },
];

/* When professional help becomes valuable (tone: supportive, not pushy). */
const proValue = [
  "Reduce avoidable filing errors",
  "Understand the deductions and provisions that apply to you",
  "Stay updated as tax rules change",
  "Save time and effort",
  "Get help with more complex situations",
  "Get support when a notice or assessment arises",
  "Plan your taxes instead of only filing them",
];

/* Why Ledger & Legacy (tax-specific, concise). */
const whyUs = [
  {
    icon: ShieldCheck,
    title: "CA-led expertise",
    body: "Your tax and compliance work is led by a practising Chartered Accountant with deep, hands-on experience.",
  },
  {
    icon: MapPin,
    title: "Local to Kolkata",
    body: "On-the-ground familiarity with local requirements, authorities and how things actually get done here.",
  },
  {
    icon: Layers,
    title: "End-to-end",
    body: "From filing to audits, notices and company law — one team across every side of your compliance.",
  },
  {
    icon: Scale,
    title: "Clear & transparent",
    body: "Plain-English advice, an honest scope of work and no jargon or hidden surprises.",
  },
];

const process = [
  {
    title: "Tell Us Your Requirement",
    body: "Share what you need help with — a filing, a notice, a registration or a question.",
  },
  {
    title: "We Understand Your Situation",
    body: "Our team reviews your requirements and documents to get the full picture.",
  },
  {
    title: "We Recommend the Right Approach",
    body: "You get a clear view of what needs to be done and why.",
  },
  {
    title: "We Handle It With You",
    body: "The required filing, compliance, advisory or support is carried out end to end.",
  },
];

const faqs = [
  {
    q: "Do I need a tax professional if my income is straightforward?",
    a: "Not always — a simple salaried return can be filed on your own. Professional help becomes valuable when you have multiple income sources, capital gains, business income, a notice to respond to, or you want to plan ahead rather than only file. When in doubt, a short consultation will tell you either way.",
  },
  {
    q: "What documents do I need for ITR filing?",
    a: "Typically your PAN, Form 16 or salary details, bank interest and investment statements, proof of tax-saving investments, and last year's return if available. We'll tell you exactly what applies to your case.",
  },
  {
    q: "Can you help with an income tax notice?",
    a: "Yes. We help you understand the notice, prepare an appropriate response, and represent your case through assessment and appeal where needed.",
  },
  {
    q: "Can you help with GST compliance?",
    a: "Yes — registration, periodic return filing, and handling GST notices, mismatches, assessments and appeals.",
  },
  {
    q: "Can you help businesses with accounting?",
    a: "Yes. We handle day-to-day bookkeeping and periodic financial statements using tools like Tally, Zoho Books and QuickBooks, and support statutory, tax and internal audits.",
  },
  {
    q: "Can I consult you before deciding what service I need?",
    a: "Absolutely — that's the best place to start. Tell us what's going on and we'll help you understand your options before anything is decided.",
  },
];

export default function TaxCompliancePage() {
  return (
    <>
      {/* 1. Hero (compact) */}
      <section className="relative isolate overflow-hidden border-b border-border bg-background">
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
          style={{ backgroundImage: "url('/images/tax-hero.webp')" }}
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
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
              Tax &amp; Compliance
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] text-navy-900 sm:text-5xl">
              Tax &amp; compliance, without the confusion.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/75">
              From income tax and GST to accounting, audits and company law — we
              handle your filings and compliance accurately and on time, and explain
              everything in plain language.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation" size="lg" variant="primary">
                Book a Consultation <ArrowRight />
              </Button>
              <Button
                href="#services"
                size="lg"
                variant="outline"
                className="bg-white/70 hover:bg-white"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. What do you need help with? */}
      <Section spacing="lg" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Start here"
          title="What brings you here?"
          lead="Pick what's on your mind and we'll take you straight to the services that fit."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <li key={p.label}>
              <Link
                href={p.href}
                className="group flex h-full items-center gap-4 rounded-xl border bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-800 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                  <p.icon className="size-5" />
                </span>
                <span className="text-[0.95rem] font-medium leading-snug text-navy-900">
                  {p.label}
                </span>
                <ArrowRight className="ml-auto size-4 shrink-0 text-gold-600 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. Our services (grouped cards + info modal) */}
      <Section id="services" spacing="lg" variant="subtle" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="What we do"
          title="Our Tax & Compliance Services"
          lead="Tap any service to see what it involves, who it's for and what's needed."
        />
        <div className="mt-12">
          <ServiceExplorer groups={taxGroups} />
        </div>
      </Section>

      {/* 4. Why work with a tax professional? */}
      <Section spacing="lg" reveal>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
              When it helps
            </p>
            <h2 className="text-3xl sm:text-4xl">Why work with a tax professional?</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              You can absolutely do it yourself. But there are moments where a
              professional saves you time, stress and costly mistakes — here&apos;s
              when that help becomes worth it.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {proValue.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-lg border bg-card p-4 shadow-soft"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-gold-600" />
                <span className="text-sm leading-snug text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 5. How it works */}
      <ProcessSteps
        variant="subtle"
        eyebrow="How it works"
        title="A simple, four-step process"
        steps={process}
        cta={{ label: "Have a tax or compliance question?", href: "/consultation" }}
      />

      {/* 6. Why Ledger & Legacy? */}
      <Section spacing="lg" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Why us"
          title="Why Ledger & Legacy?"
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

      {/* 7. FAQ */}
      <Faq items={faqs} />

      {/* 8. Final CTA */}
      <CtaBand
        title="Not sure what you need?"
        body="Tell us what's going on and we'll help you understand your options — no jargon, no pressure, no obligation."
      />
    </>
  );
}
