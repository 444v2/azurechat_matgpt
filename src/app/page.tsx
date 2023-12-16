import { LogIn } from "@/components/login/login";
import { Card } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import { userSession } from "@/features/auth/helpers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await userSession();
  if (user) {
    redirect("/chat");
  }
    return (
        signIn("azure-ad")
  );
}
