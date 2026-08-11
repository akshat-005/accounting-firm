import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Reveal } from "./reveal";

type SectionProps = React.ComponentProps<"section"> & {
  /** Background band. */
  variant?: "default" | "subtle" | "muted" | "navy";
  /** Vertical rhythm. */
  spacing?: "sm" | "md" | "lg";
  /** Wrap children in a Container automatically. */
  contained?: boolean;
  /** Fade/rise the content in when it scrolls into view. */
  reveal?: boolean;
};

const bands: Record<NonNullable<SectionProps["variant"]>, string> = {
  default: "bg-background text-foreground",
  subtle: "bg-subtle text-foreground",
  muted: "bg-muted text-foreground",
  navy: "bg-navy-900 text-primary-foreground",
};

const rhythm: Record<NonNullable<SectionProps["spacing"]>, string> = {
  sm: "py-10 sm:py-12",
  md: "py-12 sm:py-14 lg:py-16",
  lg: "py-14 sm:py-16 lg:py-20",
};

/** Full-bleed section band with consistent vertical rhythm. */
export function Section({
  className,
  variant = "default",
  spacing = "md",
  contained = true,
  reveal = false,
  children,
  ...props
}: SectionProps) {
  const inner = contained ? <Container>{children}</Container> : children;
  return (
    <section className={cn(bands[variant], rhythm[spacing], className)} {...props}>
      {reveal ? <Reveal>{inner}</Reveal> : inner}
    </section>
  );
}

/** Standardised section heading (eyebrow + title + optional lead). */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-tight sm:text-4xl">{title}</h2>
      {lead ? (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{lead}</p>
      ) : null}
    </div>
  );
}
