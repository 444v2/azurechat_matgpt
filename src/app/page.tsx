import { LogIn } from "@/components/login/login";
import { useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import { userSession } from "@/features/auth/helpers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Home() {
    useEffect(() => {
        signIn("azure-ad");
    }, []);

    // Optionally, you can render a loading message or similar
    return (
        <Card className="h-full flex-1 overflow-hidden relative items-center justify-center flex">
            <p>Redirecting to sign-in...</p>
        </Card>
    );
}

//export default async function Home() {
//  const user = await userSession();
//  if (user) {
//    redirect("/chat");
//  }
//  return (
//    <Card className="h-full flex-1 overflow-hidden relative items-center justify-center flex">
//      <LogIn />
//    </Card>
//  );
//}
