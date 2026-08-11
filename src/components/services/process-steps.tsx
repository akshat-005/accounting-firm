import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

export type ProcessStep = { title: string; body: string };

/**
 * Numbered "how it works / our approach" band. Four (or fewer) steps with a
 * connecting rule on desktop, plus an optional closing CTA line.
 */
export function ProcessSteps({
  eyebrow,
  title,
  lead,
  steps,
  cta,
  variant = "default",
  spacing = "lg",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  steps: ProcessStep[];
  cta?: { label: string; href: string };
  variant?: "default" | "subtle";
  spacing?: "md" | "lg";
}) {
  return (
    <Section spacing={spacing} variant={variant} reveal>
      <SectionHeading
        align="center"
        className="mx-auto"
        eyebrow={eyebrow}
        title={title}
        lead={lead}
      />
      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-800 font-display text-lg font-semibold text-white">
                {i + 1}
              </span>
              {i < steps.length - 1 ? (
                <span
                  aria-hidden
                  className="hidden h-px flex-1 bg-gradient-to-r from-gold-400/60 to-transparent lg:block"
                />
              ) : null}
            </div>
            <h3 className="mt-5 text-lg text-navy-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
      {cta ? (
        <p className="mt-12 text-center text-lg text-navy-900">
          {cta.label}{" "}
          <Link
            href={cta.href}
            className="inline-flex items-center gap-1 font-medium text-gold-600 underline-offset-4 hover:underline"
          >
            Talk to us
            <ArrowRight className="size-4" />
          </Link>
        </p>
      ) : null}
    </Section>
  );
}
