import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

/**
 * Full-bleed navy CTA band (shared closing section for the pillar pages).
 * Mirrors the homepage's final CTA treatment for visual continuity.
 */
export function CtaBand({
  title,
  body,
  buttonLabel = "Book a Consultation",
  href = "/consultation",
}: {
  title: React.ReactNode;
  body: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #050f22 0%, #0d2244 55%, #163663 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cta.webp')" }}
      />
      <div aria-hidden className="absolute inset-0 bg-navy-950/70" />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-xl rounded-2xl bg-card px-8 py-10 text-center shadow-lift sm:px-12 sm:py-12">
            <h2 className="text-3xl text-navy-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{body}</p>
            <div className="mt-8 flex justify-center">
              <Button href={href} size="lg" variant="primary">
                {buttonLabel} <ArrowRight />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
