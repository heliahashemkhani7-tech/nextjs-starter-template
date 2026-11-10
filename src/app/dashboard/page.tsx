import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/shared/sign-out-button";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="text-muted-foreground">
        Welcome, {session.user.name || session.user.email}!
      </p>

      <SignOutButton />
    </main>
  );
}
