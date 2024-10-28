"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full text-white">
      <h1>Netflix</h1>
      {session && (
        <div onClick={() => router.push("/profiles")}>
          Logined in by {session.user?.email}
        </div>
      )}

      <div className="flex gap-4 items-center justify-center">
        <button
          className="rounded-md bg-gray-600 p-5"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
