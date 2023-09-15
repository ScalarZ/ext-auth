import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useMemo } from "react";

export function useSupabase() {
  return useMemo(() => createClientComponentClient(), []);
}
