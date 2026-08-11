/**
 * Centralised, typed access to environment variables.
 *
 * We intentionally do NOT throw at module-load time — that would break `next build`
 * before secrets are configured. Instead each accessor validates on first use and
 * throws a clear, actionable error if a required value is missing.
 *
 * On Cloudflare (via @opennextjs/cloudflare) Worker bindings are exposed on
 * `process.env`, so the same accessors work in dev (Node) and production (Workers).
 */

function required(name: string, value: string | undefined): string {
  if (!value || value.trim() === "") {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
        `Add it to your .env.local (dev) or your Cloudflare/Supabase project settings. ` +
        `See .env.example.`,
    );
  }
  return value;
}

/** Browser-safe values (inlined at build; never put secrets here). */
export const publicEnv = {
  supabaseUrl: () => required("NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL),
  supabaseAnonKey: () =>
    required("NEXT_PUBLIC_SUPABASE_ANON_KEY", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  siteUrl: () => process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

/** Server-only secrets. NEVER import into a Client Component. */
export const serverEnv = {
  supabaseServiceRoleKey: () =>
    required("SUPABASE_SERVICE_ROLE_KEY", process.env.SUPABASE_SERVICE_ROLE_KEY),
};
