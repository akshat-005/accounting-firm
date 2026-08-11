import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * OpenNext → Cloudflare Workers adapter config.
 *
 * Defaults are sufficient for V1 (SSR + static assets). When we add
 * incremental cache (ISR) or tag revalidation later, wire an R2/KV-backed
 * incrementalCache here. See https://opennext.js.org/cloudflare
 */
export default defineCloudflareConfig();
