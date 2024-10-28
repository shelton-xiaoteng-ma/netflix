"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const router = useRouter();
  const { status } = useSession();
  const { data: user } = useCurrentUser();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [status, router]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col ">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div
            className="flex-col items-center justify-center"
            onClick={() => router.push("/")}
          >
            <div className="group flex flex-col mx-auto">
              <div className="w-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <Image
                  src="/default-blue.png"
                  width={1000}
                  height={1000}
                  style={{ width: "100%", height: "auto" }}
                  alt="Profile"
                />
              </div>
              <div className="text-gray-400 text-center text-2xl mt-4 group-hover:text-white">
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
