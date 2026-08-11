import * as React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

/** Shared shell for the legal / policy pages: hero + narrow prose column. */
export function LegalPage({
  eyebrow = "Legal",
  title,
  updated,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  updated: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
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
        <Container className="relative py-14 sm:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] text-navy-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
          {intro ? (
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              {intro}
            </p>
          ) : null}
        </Container>
      </section>

      <Section spacing="lg">
        <div className="mx-auto max-w-3xl space-y-10">{children}</div>
      </Section>
    </>
  );
}

/** A titled block of policy prose with consistent list / link styling. */
export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl text-navy-900 sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-navy-800 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gold-600 [&_li]:marker:text-gold-500 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_strong]:text-navy-900">
        {children}
      </div>
    </section>
  );
}

/** Muted callout for placeholders the firm must confirm before launch. */
export function LegalNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gold-300/60 bg-gold-50 px-4 py-3 text-sm leading-relaxed text-gold-900">
      {children}
    </div>
  );
}
