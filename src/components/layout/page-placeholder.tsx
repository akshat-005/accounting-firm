import { Construction, ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

/**
 * Temporary stub for routes not yet built out. Keeps the site fully
 * navigable during the phased build. Replace with the real page in later phases.
 */
export function PagePlaceholder({
  eyebrow,
  title,
  description,
  phase,
}: {
  eyebrow: string;
  title: string;
  description: string;
  phase: string;
}) {
  return (
    <Section spacing="lg" className="text-center">
      <div className="mx-auto max-w-2xl">
        <span className="inline-flex size-14 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
          <Construction className="size-7" />
        </span>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
        <p className="mt-4 text-sm text-muted-foreground/80">
          This page is part of <strong>{phase}</strong> and will be built out next.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="outline">
            <ArrowLeft /> Back home
          </Button>
          <Button href="/consultation" variant="primary">
            Book a Consultation
          </Button>
        </div>
      </div>
    </Section>
  );
}
