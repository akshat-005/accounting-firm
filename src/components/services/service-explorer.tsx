"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Receipt,
  Percent,
  Building2,
  BookOpen,
  Check,
  ChevronRight,
  X,
  type LucideIcon,
} from "lucide-react";
import type { ServiceGroup, ServiceInfo } from "@/lib/services";
import { serviceBySlug } from "@/lib/services";
import { cn } from "@/lib/utils";

const groupIcons: Record<string, LucideIcon> = {
  receipt: Receipt,
  percent: Percent,
  building: Building2,
  book: BookOpen,
};

type ServiceExplorerProps = {
  /** Grouped layout (tax): categories as cards. */
  groups?: ServiceGroup[];
  /** Flat layout (investment): a single grid of services. */
  services?: ServiceInfo[];
  /** Heading used inside the info panel for the docs list. */
  documentsHeading?: string;
};

export function ServiceExplorer({
  groups,
  services,
  documentsHeading = "Documents Needed",
}: ServiceExplorerProps) {
  const [selected, setSelected] = useState<ServiceInfo | null>(null);

  return (
    <>
      {groups ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {groups.map((group) => {
            const Icon = groupIcons[group.icon] ?? Receipt;
            return (
              <div
                key={group.id}
                id={group.id}
                className="service-group flex flex-col rounded-xl border bg-card p-6 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg text-navy-900">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-col gap-1">
                  {group.services.map((service) => (
                    <li key={service.slug}>
                      <ServiceRow
                        service={service}
                        onSelect={() => setSelected(service)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : null}

      {services ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              onSelect={() => setSelected(service)}
            />
          ))}
        </div>
      ) : null}

      <ServiceModal
        service={selected}
        documentsHeading={documentsHeading}
        onClose={() => setSelected(null)}
        onSelectRelated={setSelected}
      />
    </>
  );
}

/** Compact clickable row used inside the grouped (tax) cards. */
function ServiceRow({
  service,
  onSelect,
}: {
  service: ServiceInfo;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-foreground/90 transition-colors hover:bg-navy-50"
    >
      <span className="flex-1 leading-snug">{service.name}</span>
      <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-gold-600" />
    </button>
  );
}

/** Full service card used in the flat (investment) grid. */
function ServiceCard({
  service,
  onSelect,
}: {
  service: ServiceInfo;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group flex h-full flex-col rounded-xl border bg-card p-6 text-left shadow-soft transition-shadow hover:shadow-lift"
    >
      <h3 className="text-2xl font-semibold leading-tight text-navy-900">
        {service.name}
      </h3>
      {service.tagline ? (
        <p className="mt-2 text-sm font-medium text-muted-foreground">
          {service.tagline}
        </p>
      ) : null}
      <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-gold-600">
        View details
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </button>
  );
}

/** The info panel / modal shown when a service is selected. */
function ServiceModal({
  service,
  documentsHeading,
  onClose,
  onSelectRelated,
}: {
  service: ServiceInfo | null;
  documentsHeading: string;
  onClose: () => void;
  onSelectRelated: (service: ServiceInfo) => void;
}) {
  const open = service !== null;

  // Close on Escape + lock body scroll while open.
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = overflow;
    };
  }, [open, handleKey]);

  if (!service) return null;

  const related = service.related
    .map((slug) => serviceBySlug[slug])
    .filter((s): s is ServiceInfo => Boolean(s));

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-navy-950/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-t-2xl bg-card shadow-lift sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5 sm:px-8">
          <h2
            id="service-modal-title"
            className="text-xl leading-snug text-navy-900"
          >
            {service.name}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-navy-50 hover:text-navy-900"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[65vh] overflow-y-auto px-6 py-6 sm:px-8">
          <Field label="Basic Information">
            <p className="text-sm leading-relaxed text-foreground/85">
              {service.basic}
            </p>
          </Field>

          <Field label="Ideal For">
            <ul className="grid gap-2 sm:grid-cols-2">
              {service.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold-600" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </Field>

          <Field label={documentsHeading}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {service.documents.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-navy-300" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </Field>

          {related.length > 0 ? (
            <Field label="Related Services">
              <div className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <button
                    key={r.slug}
                    type="button"
                    onClick={() => onSelectRelated(r)}
                    className="rounded-full border border-navy-800/15 bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-800 transition-colors hover:border-gold-500 hover:bg-gold-50 hover:text-gold-700"
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </Field>
          ) : null}
        </div>

        {/* Footer CTA — attaches the chosen service to the consultation form. */}
        <div className="flex flex-col gap-3 border-t border-border bg-subtle px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm font-medium text-navy-900">Need help with this?</p>
          <Link
            href={`/consultation?service=${service.slug}`}
            className={cn(
              "inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition-colors hover:bg-navy-900",
            )}
          >
            Book a Consultation
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 last:mb-0">
      <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
        {label}
      </p>
      {children}
    </div>
  );
}
