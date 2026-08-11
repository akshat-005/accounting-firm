/**
 * Supabase database types.
 *
 * This is a PLACEHOLDER. Once the schema exists (Phase 3), generate the real
 * types and replace this file:
 *
 *   npx supabase gen types typescript --project-id <ref> > src/types/database.ts
 *
 * Keeping the `Database` shape here lets the typed Supabase clients compile
 * today without pinning us to a schema that isn't built yet.
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
