// page.tsx
use client; // This directive marks the component as a Client Component

import { useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { Card } from "@/components/ui/card";

export default function Home() {
    useEffect(() => {
        signIn("azure-ad");
    }, []);

    return (
        <Card className="h-full flex-1 overflow-hidden relative items-center justify-center flex">
            <p>Redirecting to sign-in...</p>
        </Card>
    );
}


//import { LogIn } from "@/components/login/login";
//import { Card } from "@/components/ui/card";
//import { userSession } from "@/features/auth/helpers";
//import { redirect } from "next/navigation";

//export const dynamic = "force-dynamic";

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
