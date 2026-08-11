import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, ShieldCheck, MessageSquare, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Request a free, no-obligation consultation with Ledger & Legacy for tax, compliance or wealth advisory. Share your details and we'll reach out.",
};

const reassure = [
  { icon: ShieldCheck, title: "Free & no obligation", body: "Your first conversation is on us — no pressure to proceed." },
  { icon: Clock, title: "Quick response", body: "We aim to get back to you within one working day." },
  { icon: MessageSquare, title: "Plain-language advice", body: "We'll help you understand your options, jargon-free." },
];

export default function ConsultationPage() {
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
            Free consultation
          </p>
          <h1 className="mx-auto max-w-2xl text-4xl font-semibold leading-[1.08] text-navy-900 sm:text-5xl">
            Book a free consultation
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-foreground/75">
            Tell us a little about what you need. We&apos;ll get back to you and help
            you figure out the right next step — no cost, no obligation.
          </p>
        </Container>
      </section>

      {/* Form + reassurance */}
      <Section spacing="lg">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <Suspense
              fallback={
                <div className="h-96 rounded-2xl border bg-card shadow-soft" />
              }
            >
              <ConsultationForm />
            </Suspense>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl border bg-subtle p-6 shadow-soft">
              <h2 className="text-lg text-navy-900">What to expect</h2>
              <ul className="mt-5 space-y-5">
                {reassure.map((r) => (
                  <li key={r.title} className="flex gap-3.5">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                      <r.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{r.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {r.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-border pt-6">
                <p className="text-sm font-medium text-navy-900">Prefer to talk now?</p>
                <div className="mt-3 flex flex-col gap-2.5">
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-navy-800/25 px-4 text-sm font-medium text-navy-800 transition-colors hover:bg-navy-50"
                  >
                    <Phone className="size-4" /> {siteConfig.contact.phone}
                  </a>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    <MessageSquare className="size-4" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
