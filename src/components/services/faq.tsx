import { Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

export type FaqItem = { q: string; a: string };

/**
 * FAQ accordion built on native <details>/<summary> — accessible and fully
 * functional without JS. The icon rotates via the `group-open` variant.
 */
export function Faq({
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  items,
}: {
  eyebrow?: string;
  title?: string;
  items: FaqItem[];
}) {
  return (
    <Section spacing="lg" variant="subtle" reveal>
      <SectionHeading align="center" className="mx-auto" eyebrow={eyebrow} title={title} />
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-border overflow-hidden rounded-xl border bg-card shadow-soft">
        {items.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-medium text-navy-900 transition-colors hover:bg-navy-50/60 [&::-webkit-details-marker]:hidden">
              <span className="leading-snug">{item.q}</span>
              <Plus className="size-5 shrink-0 text-gold-600 transition-transform duration-200 group-open:rotate-45" />
            </summary>
            <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
