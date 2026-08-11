"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  ArrowRight,
  ArrowUpRight,
  Download,
  Play,
  BookOpen,
  FileText,
  PlayCircle,
  FileBadge,
  ListChecks,
  type LucideIcon,
} from "lucide-react";
import type { Insight, InsightType } from "@/lib/insights";
import { cn } from "@/lib/utils";

const TYPE_META: Record<
  InsightType,
  { label: string; cta: string; Icon: LucideIcon }
> = {
  guide: { label: "Guide", cta: "Read Guide", Icon: BookOpen },
  article: { label: "Article", cta: "Read Article", Icon: FileText },
  video: { label: "Video", cta: "Watch Now", Icon: PlayCircle },
  whitepaper: { label: "Whitepaper", cta: "Download", Icon: FileBadge },
  checklist: { label: "Checklist", cta: "Download", Icon: ListChecks },
};

const FILTERS: { key: InsightType | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "guide", label: "Guides" },
  { key: "article", label: "Articles" },
  { key: "video", label: "Videos" },
  { key: "whitepaper", label: "Whitepapers" },
  { key: "checklist", label: "Checklists" },
];

const PAGE_SIZE = 6;

export function InsightsExplorer({ items }: { items: Insight[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<InsightType | "all">("all");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesFilter = filter === "all" || item.type === filter;
      const matchesQuery =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        TYPE_META[item.type].label.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [items, query, filter]);

  // Reset the visible count whenever the result set changes.
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query, filter]);

  const shown = filtered.slice(0, visible);

  if (items.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        Resources are on the way — check back soon.
      </p>
    );
  }

  return (
    <div>
      {/* Search + filters */}
      <div className="flex flex-col gap-5">
        <div className="relative mx-auto w-full max-w-2xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search insights, topics or keywords…"
            aria-label="Search insights"
            className="h-13 w-full rounded-full border bg-card pl-12 pr-4 text-sm shadow-soft outline-none transition-colors placeholder:text-muted-foreground focus:border-navy-400"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => {
            const active = f.key === filter;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={active}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-navy-800 bg-navy-800 text-white"
                    : "border-navy-800/15 bg-card text-navy-800 hover:bg-navy-50",
                )}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      {shown.length === 0 ? (
        <p className="mt-14 text-center text-muted-foreground">
          No resources match your search. Try a different keyword or filter.
        </p>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item) => (
            <InsightCard key={item.id} item={item} />
          ))}
        </ul>
      )}

      {/* Load more */}
      {visible < filtered.length ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex h-11 items-center gap-2 rounded-md border border-navy-800/25 bg-transparent px-6 text-sm font-medium text-navy-800 transition-colors hover:bg-navy-50"
          >
            Load more resources
          </button>
        </div>
      ) : null}
    </div>
  );
}

function InsightCard({ item }: { item: Insight }) {
  const { label, cta, Icon } = TYPE_META[item.type];
  const isVideo = item.type === "video";
  const isDownload = item.type === "whitepaper" || item.type === "checklist";
  const subLabel = item.meta ?? item.source;

  return (
    <li>
      <a
        href={item.url}
        target={item.newTab ? "_blank" : undefined}
        rel={item.newTab ? "noopener noreferrer" : undefined}
        className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-soft transition-shadow hover:shadow-lift"
      >
        {/* Cover */}
        <div className="relative isolate aspect-[16/9] overflow-hidden bg-navy-900">
          {item.image ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div aria-hidden className="absolute inset-0 bg-navy-950/10" />
            </>
          ) : (
            <>
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #0d2244 0%, #091a35 60%, #050f22 100%)",
                }}
              />
              <Icon
                aria-hidden
                className="absolute -bottom-4 -right-3 size-28 text-white/[0.06]"
              />
            </>
          )}
          {/* gold hairline */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
          />
          {/* type badge */}
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-navy-950/55 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            <Icon className="size-3" /> {label}
          </span>
          {/* external-link affordance */}
          {item.external && !isVideo ? (
            <span className="absolute right-4 top-4 inline-flex size-7 items-center justify-center rounded-full bg-navy-950/55 text-white backdrop-blur-sm">
              <ArrowUpRight className="size-4" />
            </span>
          ) : null}
          {/* video play affordance */}
          {isVideo ? (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition-transform group-hover:scale-105">
                <Play className="size-6 translate-x-0.5 fill-current" />
              </span>
            </span>
          ) : null}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="text-gold-600">{item.category}</span>
            {subLabel ? (
              <>
                <span aria-hidden>·</span>
                <span>{subLabel}</span>
              </>
            ) : null}
          </div>
          <h3 className="mt-3 text-lg leading-snug text-navy-900">{item.title}</h3>
          {item.description ? (
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          ) : null}
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-navy-800 transition-colors group-hover:text-gold-600">
            {cta}
            {isDownload ? (
              <Download className="size-4" />
            ) : item.external ? (
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            ) : (
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </span>
        </div>
      </a>
    </li>
  );
}
