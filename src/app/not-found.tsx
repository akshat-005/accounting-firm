import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Section spacing="lg" className="text-center">
      <div className="mx-auto max-w-xl">
        <p className="font-display text-6xl font-semibold text-gold-500">404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl">This page could not be found</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The page you&apos;re looking for may have moved or no longer exists.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="primary">
            Back home
          </Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </div>
    </Section>
  );
}
