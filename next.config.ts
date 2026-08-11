import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer modern formats for smaller payloads (Core Web Vitals / LCP).
    formats: ["image/avif", "image/webp"],
  },
  // Fail production builds on type errors — quality gate.
  // (Next 16 dropped built-in `next lint`; ESLint runs via the `lint` script.)
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;

// Populate Cloudflare bindings (env vars, KV, R2, etc.) on `process.env`
// during `next dev` so local dev matches the Workers runtime.
// No-op in production builds.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
void initOpenNextCloudflareForDev();
