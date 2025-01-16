'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthButton() {
    const { data: session, status } = useSession();
    const router = useRouter();

    // Redirect ke home jika sudah login
    useEffect(() => {
        if (session) {
            router.push('/');
        }
    }, [session, router]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "authenticated") {
        return (
            <div className="flex flex-col items-center gap-2">
                <p>Welcome, {session.user?.name}</p>
                <button
                    onClick={() => signOut()}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Sign Out
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={() => signIn("google")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
        >
            Sign in with Google
        </button>
    );
}