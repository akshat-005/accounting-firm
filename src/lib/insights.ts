/**
 * Insights & Resources — content loader (temporary, pre-CMS).
 *
 * Auto-discovers everything an admin drops into `public/content/`:
 *   • `resources`   — a plain text file: a section header line ("articles:",
 *                     "youtube:", …) followed by one URL per line.
 *   • `*.pdf`       — any PDF in `public/content/` or `public/content/files/`
 *                     becomes a downloadable card.
 *   • `insights.json` (optional) — structured entries (the shape a future CMS
 *                     form will export).
 *
 * For every external link we fetch title / description / cover at BUILD time
 * (YouTube via oEmbed, everything else via OpenGraph tags). The Insights page
 * is statically prerendered, so this runs during `next build`, never on the
 * Cloudflare edge. Fetches are cached, time-boxed and fully fault-tolerant —
 * a slow or blocked site just falls back to sensible defaults.
 *
 * Later this whole file is replaced by a Supabase query returning `Insight[]`;
 * nothing downstream (page, cards, filters) changes.
 */

import fs from "node:fs";
import path from "node:path";

export type InsightType =
  | "guide"
  | "article"
  | "video"
  | "whitepaper"
  | "checklist";

export type Insight = {
  id: string;
  type: InsightType;
  category: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  meta?: string;
  date?: string;
  external: boolean;
  /** Open in a new tab (external links + PDFs). */
  newTab: boolean;
  source?: string;
};

const CONTENT_DIR = path.join(process.cwd(), "public", "content");
const VALID_TYPES = new Set<InsightType>([
  "guide",
  "article",
  "video",
  "whitepaper",
  "checklist",
]);

/* ----------------------------- small helpers ----------------------------- */

const isHttp = (url: string) => /^https?:\/\//i.test(url);
const isPdf = (url: string) => /\.pdf(?:$|[?#])/i.test(url);

function youTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return u.pathname.slice(1).split("/")[0] || null;
    if (host.endsWith("youtube.com")) {
      if (u.searchParams.get("v")) return u.searchParams.get("v");
      const m = u.pathname.match(/\/(embed|shorts)\/([^/?]+)/);
      if (m) return m[2];
    }
    return null;
  } catch {
    return null;
  }
}

function sourceLabel(url: string): string | undefined {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    if (host === "youtu.be" || host.endsWith("youtube.com")) return "YouTube";
    if (host.endsWith("substack.com")) return "Substack";
    if (host.endsWith("medium.com")) return "Medium";
    return host;
  } catch {
    return undefined;
  }
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&#x27;|&apos;/gi, "'")
    .replace(/&#8217;|&rsquo;/gi, "’")
    .replace(/&#8211;|&ndash;/gi, "–")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .trim();
}

function metaContent(html: string, key: string): string | undefined {
  const k = key.replace(/[:]/g, "\\:");
  const patterns = [
    new RegExp(
      `<meta[^>]+(?:property|name)=["']${k}["'][^>]*content=["']([^"']*)["']`,
      "i",
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']*)["'][^>]*(?:property|name)=["']${k}["']`,
      "i",
    ),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m?.[1]) return decodeEntities(m[1]);
  }
  return undefined;
}

/** Human-readable fallback title from a URL slug. */
function titleFromUrl(url: string): string {
  try {
    const u = new URL(url);
    const seg =
      u.pathname
        .split("/")
        .filter(Boolean)
        .reverse()
        .find((s) => /[a-z]{3,}/i.test(s)) ?? "";
    const cleaned = decodeURIComponent(seg)
      .replace(/\.[a-z0-9]+$/i, "") // extension
      .replace(/-[0-9a-f]{8,}$/i, "") // medium trailing id
      .replace(/[-_]+/g, " ")
      .trim();
    if (cleaned.length >= 4) {
      return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    }
  } catch {
    /* ignore */
  }
  return sourceLabel(url) ?? "Resource";
}

/** Prettify a PDF filename into a title. */
function titleFromFilename(file: string): string {
  return file
    .replace(/\.pdf$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function inferCategory(text: string): string {
  if (/\b(tax|gst|itr|tds|roc|compliance|audit)\b/i.test(text))
    return "Tax & Compliance";
  if (/\b(invest|wealth|portfolio|mutual|fund|market|pms|equity)\b/i.test(text))
    return "Investment & Wealth";
  return "Resources";
}

function pdfType(file: string): InsightType {
  if (/checklist/i.test(file)) return "checklist";
  if (/white.?paper/i.test(file)) return "whitepaper";
  return "guide";
}

/* --------------------------- build-time fetching -------------------------- */

async function fetchText(url: string, timeoutMs = 7000): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        // Twitterbot reliably receives OpenGraph tags from Medium/Substack/etc.
        // (many sites serve richer preview metadata to known link-preview bots).
        "user-agent": "Twitterbot/1.0",
        accept: "text/html,application/json",
      },
      // Cache across dev reloads and build; this is public, non-sensitive content.
      cache: "force-cache",
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

type Meta = { title?: string; description?: string; image?: string };

async function fetchMeta(url: string, type: InsightType): Promise<Meta> {
  // YouTube: oEmbed gives a clean title; thumbnail is derived separately.
  if (type === "video") {
    const raw = await fetchText(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`,
    );
    if (raw) {
      try {
        const j = JSON.parse(raw) as { title?: string };
        if (j.title) return { title: j.title };
      } catch {
        /* ignore */
      }
    }
    return {};
  }

  const html = await fetchText(url);
  if (!html) return {};
  const title =
    metaContent(html, "og:title") ??
    metaContent(html, "twitter:title") ??
    html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim();
  let description =
    metaContent(html, "og:description") ??
    metaContent(html, "twitter:description") ??
    metaContent(html, "description");
  if (description && description.length > 180) {
    description = description.slice(0, 177).trimEnd() + "…";
  }
  const image =
    metaContent(html, "og:image") ?? metaContent(html, "twitter:image");
  return {
    title: title ? decodeEntities(title) : undefined,
    description,
    image,
  };
}

/* ------------------------------- collectors ------------------------------- */

type Raw = {
  type: InsightType;
  url: string;
  category?: string;
  title?: string;
  description?: string;
  image?: string;
  meta?: string;
  date?: string;
};

/** Parse the freeform `resources` text file into raw link entries. */
function collectFromResources(): Raw[] {
  const file = path.join(CONTENT_DIR, "resources");
  if (!fs.existsSync(file)) return [];

  const sectionType: Record<string, InsightType> = {
    article: "article",
    articles: "article",
    blog: "article",
    blogs: "article",
    youtube: "video",
    video: "video",
    videos: "video",
    guide: "guide",
    guides: "guide",
    checklist: "checklist",
    checklists: "checklist",
    whitepaper: "whitepaper",
    whitepapers: "whitepaper",
  };

  const out: Raw[] = [];
  let current: InsightType = "article";
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^https?:\/\//i.test(trimmed)) {
      out.push({ type: current, url: trimmed });
      continue;
    }
    // Header line, e.g. "articles:-" or "youtube:"
    const header = trimmed.replace(/[:\-\s]+$/g, "").toLowerCase();
    if (sectionType[header]) current = sectionType[header];
  }
  return out;
}

/** Every PDF in the content dir (and its files/ subfolder) → a download entry. */
function collectFromPdfs(): Raw[] {
  const out: Raw[] = [];
  const scan = (dir: string, urlPrefix: string) => {
    if (!fs.existsSync(dir)) return;
    for (const name of fs.readdirSync(dir)) {
      if (!/\.pdf$/i.test(name)) continue;
      const title = titleFromFilename(name);
      out.push({
        type: pdfType(name),
        url: `${urlPrefix}/${encodeURIComponent(name)}`,
        title,
        category: inferCategory(title),
        meta: "PDF",
      });
    }
  };
  scan(CONTENT_DIR, "/content");
  scan(path.join(CONTENT_DIR, "files"), "/content/files");
  return out;
}

/** Optional structured entries (future CMS export format). */
function collectFromJson(): Raw[] {
  const file = path.join(CONTENT_DIR, "insights.json");
  if (!fs.existsSync(file)) return [];
  try {
    const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((e) => e && e.title && e.url)
      .map((e) => ({
        type: VALID_TYPES.has(e.type) ? e.type : "article",
        url: String(e.url).trim(),
        category: e.category,
        title: e.title,
        description: e.description,
        image: e.image,
        meta: e.meta,
        date: e.date,
      }));
  } catch {
    return [];
  }
}

/* -------------------------------- assemble -------------------------------- */

async function toInsight(raw: Raw, index: number): Promise<Insight> {
  const external = isHttp(raw.url);

  // Fetch metadata only when we're missing something and it's an external link.
  let meta: Meta = {};
  if (external && (!raw.title || !raw.description || !raw.image)) {
    meta = await fetchMeta(raw.url, raw.type);
  }

  let image = raw.image ?? meta.image;
  if (!image && raw.type === "video") {
    const yt = youTubeId(raw.url);
    if (yt) image = `https://img.youtube.com/vi/${yt}/hqdefault.jpg`;
  }

  const title = raw.title ?? meta.title ?? titleFromUrl(raw.url);
  const description = raw.description ?? meta.description ?? "";
  const category = raw.category ?? inferCategory(`${title} ${description}`);

  return {
    id: `${index}-${raw.url}`,
    type: raw.type,
    category,
    title,
    description,
    url: raw.url,
    image,
    meta: raw.meta,
    date: raw.date,
    external,
    newTab: external || isPdf(raw.url),
    source: external ? sourceLabel(raw.url) : undefined,
  };
}

/** Load, de-duplicate and normalise everything in public/content/. */
export async function getInsights(): Promise<Insight[]> {
  const raws = [
    ...collectFromResources(),
    ...collectFromPdfs(),
    ...collectFromJson(),
  ];

  // De-duplicate by URL (keep first occurrence).
  const seen = new Set<string>();
  const unique = raws.filter((r) => {
    const key = r.url.replace(/[?#].*$/, "");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const items = await Promise.all(unique.map(toInsight));

  // Newest first when dates exist; otherwise preserve discovery order.
  return items.sort((a, b) => {
    const ta = a.date ? Date.parse(a.date) : NaN;
    const tb = b.date ? Date.parse(b.date) : NaN;
    if (Number.isNaN(ta) && Number.isNaN(tb)) return 0;
    if (Number.isNaN(ta)) return 1;
    if (Number.isNaN(tb)) return -1;
    return tb - ta;
  });
}
