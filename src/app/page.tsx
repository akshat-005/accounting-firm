import Link from "next/link";
import { ArrowRight, ShieldCheck, TrendingUp, Landmark, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const pillars = [
  {
    icon: Landmark,
    title: "Tax & Compliance",
    href: "/tax-compliance",
    blurb:
      "ITR filing, tax planning, GST, ROC/MCA compliance, incorporation and audit support — handled end to end.",
    points: ["Income tax & ITR filing", "GST registration & returns", "Company / LLP incorporation"],
  },
  {
    icon: TrendingUp,
    title: "Investment & Wealth",
    href: "/investment-wealth",
    blurb:
      "Financial planning, wealth management and portfolio advisory aligned to your goals and life stage.",
    points: ["Goal-based financial planning", "Portfolio & wealth advisory", "Mutual fund guidance"],
  },
];

const trust = [
  { stat: "Kolkata", label: "Rooted locally, serving nationally" },
  { stat: "Two pillars", label: "Tax & compliance + wealth advisory" },
  { stat: "Free", label: "Initial consultation, no obligation" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden bg-navy-950 text-white">
        {/* Background photo (optimized WebP). */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.webp')" }}
        />
        {/* Rich navy gradient stand-in + warm brass glow (also enriches the photo). */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(70rem 45rem at 82% -15%, rgba(193,146,59,0.20), transparent 55%), linear-gradient(120deg, #050f22 0%, #0d2244 48%, #163663 100%)",
          }}
        />
        {/* Left-weighted legibility overlay. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-950/70 to-navy-950/25"
        />
        {/* Thin gold hairline at the base for a premium finish. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
        />
        <Container className="relative py-24 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-gold-300 backdrop-blur-sm">
              <ShieldCheck className="size-3.5" /> Kolkata · Trusted financial partner
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[3.75rem]">
              Tax, Compliance &amp; Wealth Advisory{" "}
              <span className="text-gold-400">Under One Roof.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
              Comprehensive financial solutions tailored for individuals, professionals,
              and enterprises seeking stability and growth.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation" size="lg" variant="accent">
                Book a Free Consultation <ArrowRight />
              </Button>
              <Button
                href="/tax-compliance"
                size="lg"
                variant="outline"
                className="border-white/25 text-white hover:bg-white/10"
              >
                Explore our services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <div className="border-b bg-subtle">
        <Container>
          <dl className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {trust.map((t) => (
              <div key={t.label} className="px-2 py-6 text-center sm:py-8">
                <dt className="font-display text-2xl font-semibold text-navy-900">
                  {t.stat}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{t.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* Two pillars */}
      <Section spacing="lg">
        <SectionHeading
          align="center"
          eyebrow="What we do"
          title="Two pillars, one trusted partner"
          lead="Whether you need compliance handled or wealth planned, we bring the same care and rigour to both."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {pillars.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col rounded-xl border bg-card p-8 shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                <p.icon className="size-6" />
              </span>
              <h3 className="mt-6 text-2xl text-navy-900">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.blurb}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <Check className="size-4 shrink-0 text-gold-600" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-flex items-center gap-1.5 font-medium text-navy-800 group-hover:text-gold-600">
                Learn more{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="navy" spacing="md" className="text-center">
        <SectionHeading
          align="center"
          className="mx-auto"
          title={
            <span className="text-primary-foreground">
              Not sure where to start? Let&apos;s talk.
            </span>
          }
          lead={
            <span className="text-navy-100">
              A short, no-obligation conversation to understand your needs and how we
              can help.
            </span>
          }
        />
        <div className="mt-8 flex justify-center">
          <Button href="/consultation" size="lg" variant="accent">
            Book a Free Consultation <ArrowRight />
          </Button>
        </div>
      </Section>
    </>
  );
}
