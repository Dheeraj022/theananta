import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Checking if keys are present (will fallback to local mock database in db.ts if missing)
// We temporarily disable Supabase in local development so local storage edits can persist and display without RLS blocking them.
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey) && process.env.NODE_ENV === 'production';

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
