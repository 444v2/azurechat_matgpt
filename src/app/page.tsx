"use client";
import { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import { Card } from "@/components/ui/card";
import { redirect } from "next/navigation";

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(typeof window !== 'undefined');
    }, []);

    useEffect(() => {
        if (isClient) {
            signIn("azure-ad");
            redirect("/chat");
        }
    }, [isClient]);

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
//    const user = await userSession();
//    if (user) {
//        redirect("/chat");
//    }
//    return (
//        <Card className="h-full flex-1 overflow-hidden relative items-center justify-center flex">
//            <LogIn />
//        </Card>
//    );
//}
