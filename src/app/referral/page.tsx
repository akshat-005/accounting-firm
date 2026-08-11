import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ReferralForm } from "@/components/forms/referral-form";

export const metadata: Metadata = {
  title: "Refer a Friend",
  description:
    "Know someone who could use help with their tax, compliance or investments? Introduce them to Ledger & Legacy.",
};

const steps = [
  {
    title: "Share their details",
    body: "Tell us who to reach out to and what they might need help with.",
  },
  {
    title: "We reach out respectfully",
    body: "We'll get in touch with a friendly, no-pressure introduction.",
  },
  {
    title: "They get a free first consultation",
    body: "Just like you, their first conversation with us is free and without obligation.",
  },
];

export default function ReferralPage() {
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
        <Container className="relative py-14 text-center sm:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
            Refer a friend
          </p>
          <h1 className="mx-auto max-w-2xl text-4xl font-semibold leading-[1.08] text-navy-900 sm:text-5xl">
            Know someone we can help?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-foreground/75">
            If a friend, family member or colleague could use a hand with their taxes,
            compliance or investments, we&apos;d be glad to help. Introduce them below.
          </p>
        </Container>
      </section>

      {/* Form + how it works */}
      <Section spacing="lg">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <ReferralForm />
          </div>
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border bg-subtle p-6 shadow-soft">
              <h2 className="text-lg text-navy-900">How it works</h2>
              <ol className="mt-5 space-y-5">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-3.5">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-navy-800 font-display text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{s.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
                Please only share someone&apos;s details with their permission. We&apos;ll
                treat them with the same care and privacy as our own clients.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
