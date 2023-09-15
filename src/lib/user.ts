import { createServerClient } from "./supabase";

export async function getUser() {
  const supabase = createServerClient();
  return (await supabase.auth.getUser()).data.user;
}

export async function getUserId() {
  return (await getUser())?.id;
}
