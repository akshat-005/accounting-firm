import "server-only";

import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { publicEnv, serverEnv } from "@/lib/env";
import type { Database } from "@/types/database";

/**
 * Privileged Supabase client using the service-role key. BYPASSES Row Level
 * Security — use only in trusted server code (Route Handlers / Server Actions)
 * for operations the public/anon role must not perform (e.g. inserting a lead
 * from a public form while keeping the leads table unreadable to visitors).
 *
 * NEVER import this into a Client Component. The `server-only` guard above
 * turns any such import into a build error.
 */
export function createAdminClient() {
  return createSupabaseClient<Database>(
    publicEnv.supabaseUrl(),
    serverEnv.supabaseServiceRoleKey(),
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
