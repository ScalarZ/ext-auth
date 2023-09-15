import SignIn from "./components/sign-in";
import { getUser } from "@/lib/user";
import Profile from "./components/profile";

export default async function Home() {
  const user = await getUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-4 p-24 bg-slate-900">
      {user ? <Profile user={user} /> : <SignIn />}
    </main>
  );
}
