"use client";
import { useSupabase } from "@/hooks/use-supabase";
import { User } from "@supabase/supabase-js";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function Profile({ user }: { user: User }) {
  const supabase = useSupabase();
  const { refresh } = useRouter();
  async function handleSingOut() {
    await supabase.auth.signOut();
    refresh();
  }
  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <h1 className="text-xl text-center font-semibold">My profile</h1>
      <span>{user.email}</span>
      <span>{user.user_metadata?.name}</span>
      <button
        className="px-4 py-1.5 flex items-center gap-x-2 bg-red-600 rounded font-medium"
        onClick={handleSingOut}
      >
        <BiLogOut />
        Google
      </button>
    </div>
  );
}
