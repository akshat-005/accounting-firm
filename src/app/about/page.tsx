import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Handshake,
  Scale,
  HeartHandshake,
  GraduationCap,
  Award,
  MapPin,
  Clock,
  Phone,
  Mail,
  Quote,
  Check,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/services/cta-band";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Ledger & Legacy — a Kolkata firm pairing a Chartered Accountant's rigour in tax & compliance with seasoned investment and wealth expertise.",
};

/* Firm values. */
const values = [
  {
    icon: ShieldCheck,
    title: "Integrity first",
    body: "High standards of ethics and professional integrity in everything we handle.",
  },
  {
    icon: HeartHandshake,
    title: "Advice that's personal",
    body: "Guidance shaped around your situation and goals — never one-size-fits-all.",
  },
  {
    icon: Scale,
    title: "Complete transparency",
    body: "A clear scope, honest recommendations and plain-English explanations.",
  },
  {
    icon: Handshake,
    title: "In it for the long term",
    body: "We build lasting relationships, not one-off transactions.",
  },
];

/* The firm's two leads — details drawn from public/details. */
const team = [
  {
    name: "CA Nisha Agarwal",
    role: "Tax & Compliance Head",
    img: "/images/nisha-agarwal.webp",
    credential: "Chartered Accountant (ICAI) · Proprietor, Nisha & Associates",
    bio: [
      "Nisha is a Chartered Accountant with 19 years of post-qualification experience across audit, taxation, regulatory compliance and business advisory. She founded Nisha & Associates in 2007 and has since advised manufacturing, trading, stock-broking, partnership and corporate clients.",
      "Her work spans statutory, tax, internal and bank-branch audits, income tax and GST, ROC and company-law matters, and financial planning — delivered with the practical, ethical, on-time approach her clients rely on.",
    ],
    expertise: [
      "Statutory & Tax Audit",
      "Bank Branch Audit",
      "Direct & Indirect Tax",
      "GST Advisory & Compliance",
      "ROC & Corporate Law",
      "Internal Audit & Risk",
      "Financial Planning",
      "MIS Reporting",
    ],
    tools: ["Tally Prime", "Zoho Books", "QuickBooks", "Advanced Excel"],
  },
  {
    name: "Jitesh Agarwal",
    role: "Wealth & Investment Head",
    img: "/images/jitesh-agarwal.webp",
    credential: "MBA, Symbiosis",
    bio: [
      "Jitesh holds an MBA from Symbiosis and brings many years of experience across the stock market, investing, financial markets and wealth management. He works with individuals and families to plan and grow their wealth with a long-term, goal-driven approach.",
      "He's also a passionate financial educator — making markets and investing understandable for everyday investors, so the people he advises always know the 'why' behind a decision, not just the 'what'.",
    ],
    expertise: [
      "Investment Advisory",
      "Wealth Management",
      "Equity & Financial Markets",
      "Portfolio Strategy",
      "Financial Planning",
      "Investor Education",
    ],
    tools: [],
  },
];

/* Quick credential facts. */
const credentials = [
  { icon: GraduationCap, label: "Chartered Accountant (ICAI)" },
  { icon: Award, label: "19+ years' experience" },
  { icon: ShieldCheck, label: "Nisha & Associates, est. 2007" },
  { icon: GraduationCap, label: "MBA, Symbiosis" },
];

/* ⚠️ PLACEHOLDER testimonials — must be replaced with real, consented client
   quotes (with permission) before launch. Kept generic and unattributed to
   avoid fabricating named endorsements. */
const testimonials = [
  {
    quote:
      "They made my tax filing genuinely stress-free and explained every step in plain language.",
    who: "Salaried professional, Kolkata",
  },
  {
    quote:
      "Clear, honest investment guidance that finally helped us plan for the long term.",
    who: "Family client",
  },
  {
    quote:
      "Reliable with our company's GST and ROC compliance, year after year.",
    who: "Business owner",
  },
];

export default function AboutPage() {
  const { contact } = siteConfig;
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
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
        />
        <Container className="relative py-16 text-center sm:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
            About us
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] text-navy-900 sm:text-5xl">
            The people behind Ledger &amp; Legacy
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">
            We&apos;re a close-knit Kolkata team that pairs a Chartered
            Accountant&apos;s rigour in tax &amp; compliance with seasoned expertise
            in markets and wealth — so every side of your finances is in capable
            hands, with advice that stays personal and clear.
          </p>
        </Container>
      </section>

      {/* Our story */}
      <Section spacing="lg" reveal>
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
            Our story
          </p>
          <h2 className="text-3xl sm:text-4xl">
            Two disciplines, one dependable team
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Ledger &amp; Legacy brings together two sides of your financial life
              that are usually handled by two different people in two different
              offices. On one side, a practising Chartered Accountant who has spent
              nearly two decades keeping businesses and individuals compliant. On the
              other, a seasoned markets and wealth specialist focused on helping
              people invest with clarity and plan for the long term.
            </p>
            <p>
              The result is advice that looks at the whole picture — your taxes, your
              compliance and your investments — without the jargon, the pressure or
              the run-around. Whether you&apos;re an individual, a family, a
              professional or a growing business, you get a team that treats your
              affairs with genuine care.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section spacing="lg" variant="subtle" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="What we stand for"
          title="The principles we work by"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border bg-card p-6 shadow-soft">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                <v.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg text-navy-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Meet the team */}
      <Section spacing="lg" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Meet the team"
          title="The experience behind your advice"
          lead="Two leads, each at the top of their field — working together on your behalf."
        />
        <div className="mt-14 space-y-16 lg:space-y-20">
          {team.map((m, i) => (
            <div
              key={m.name}
              className="grid items-center gap-8 lg:grid-cols-5 lg:gap-12"
            >
              <div
                className={
                  i % 2 === 1
                    ? "flex justify-center lg:order-last lg:col-span-2"
                    : "flex justify-center lg:col-span-2"
                }
              >
                <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl bg-navy-50 shadow-lift">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 1024px) 80vw, 320px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-semibold text-navy-900">{m.name}</h3>
                <p className="mt-1 font-medium text-gold-600">{m.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.credential}</p>
                <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                  {m.bio.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-navy-700">
                  Areas of expertise
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {m.expertise.map((e) => (
                    <li
                      key={e}
                      className="inline-flex items-center gap-1.5 rounded-full border border-navy-800/12 bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-800"
                    >
                      <Check className="size-3 text-gold-600" />
                      {e}
                    </li>
                  ))}
                </ul>
                {m.tools.length > 0 ? (
                  <p className="mt-4 text-xs text-muted-foreground">
                    <span className="font-medium text-navy-700">Tools:</span>{" "}
                    {m.tools.join(" · ")}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Credentials strip */}
        <ul className="mt-16 flex flex-wrap justify-center gap-3">
          {credentials.map((c) => (
            <li
              key={c.label}
              className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium text-navy-800 shadow-soft"
            >
              <c.icon className="size-4 text-gold-600" />
              {c.label}
            </li>
          ))}
        </ul>
      </Section>

      {/* Testimonials */}
      <Section spacing="lg" variant="subtle" reveal>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Kind words"
          title="What our clients say"
        />
        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.who}
              className="flex flex-col rounded-xl border bg-card p-6 shadow-soft"
            >
              <Quote className="size-7 text-gold-400" />
              <p className="mt-4 flex-1 leading-relaxed text-foreground/85">
                “{t.quote}”
              </p>
              <p className="mt-5 text-sm font-medium text-navy-900">— {t.who}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Visit us */}
      <Section id="contact" spacing="lg" reveal className="scroll-mt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl">Visit our Kolkata office</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Based in Lake Town, we work with clients across the city and beyond.
              Reach out any time — your first consultation is always free and without
              obligation.
            </p>
            <Button href="/consultation" variant="primary" className="mt-8">
              Book a Consultation <ArrowRight />
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl border bg-card shadow-lift">
            <ul className="divide-y divide-border">
              <ContactRow icon={MapPin} title="Address">
                {contact.address.line1}, {contact.address.line2}, {contact.address.city} — {contact.address.postalCode}
              </ContactRow>
              <ContactRow icon={Clock} title="Office hours">
                {contact.hours}
              </ContactRow>
              <ContactRow icon={Phone} title="Phone">
                <a href={contact.phoneHref} className="transition-colors hover:text-gold-600">
                  {contact.phone}
                </a>
              </ContactRow>
              <ContactRow icon={Mail} title="Email">
                <a href={contact.emailHref} className="break-all transition-colors hover:text-gold-600">
                  {contact.email}
                </a>
              </ContactRow>
            </ul>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <CtaBand
        title="Let's get your finances in capable hands."
        body="Tell us what's on your mind — we'll help you understand your options, with no jargon and no pressure."
      />
    </>
  );
}

function ContactRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 p-5 sm:px-6">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
          {title}
        </p>
        <p className="mt-1 leading-relaxed text-foreground/90">{children}</p>
      </div>
    </li>
  );
}
