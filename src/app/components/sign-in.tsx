"use client";
import { useSupabase } from "@/hooks/use-supabase";
import { BiLogoGoogle } from "react-icons/bi";

export default function SignIn() {
  const supabase = useSupabase();

  async function SignInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    console.log(error);
  }
  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <h1 className="text-xl text-center font-semibold">Sign in</h1>
      <button
        className="px-4 py-1.5 flex items-center gap-x-2 bg-blue-600 rounded font-medium"
        onClick={SignInWithGoogle}
      >
        <BiLogoGoogle />
        Google
      </button>
    </div>
  );
}
