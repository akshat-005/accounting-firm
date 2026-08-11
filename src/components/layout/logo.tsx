import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

/**
 * Wordmark for Ledger & Legacy. `tone="light"` for dark backgrounds
 * (footer), `tone="dark"` (default) for light backgrounds (header).
 */
export function Logo({
  tone = "dark",
  className,
  withMark = true,
}: {
  tone?: "dark" | "light";
  className?: string;
  withMark?: boolean;
}) {
  const text = tone === "light" ? "text-primary-foreground" : "text-navy-900";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      {withMark ? (
        <span
          aria-hidden
          className={cn(
            "grid h-9 w-9 place-items-center rounded-md border font-display text-base font-semibold transition-colors",
            tone === "light"
              ? "border-gold-400/50 text-gold-300"
              : "border-gold-500/40 text-gold-600",
          )}
        >
          L
        </span>
      ) : null}
      <span className={cn("font-display text-lg font-semibold tracking-tight", text)}>
        Ledger <span className="text-gold-500">&amp;</span> Legacy
      </span>
    </Link>
  );
}
