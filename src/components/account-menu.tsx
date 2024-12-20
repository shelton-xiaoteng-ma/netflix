import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface AccountMenuProps {
  visible: boolean;
}

export const AccountMenu = ({ visible }: AccountMenuProps) => {
  const { data: currentUser } = useCurrentUser();
  if (!visible) {
    return null;
  }
  return (
    <div
      className="
      bg-black text-white w-56 
        absolute top-14 right-0
        py-5 flex flex-col border-2 border-gray-800
      "
    >
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            src="/default-blue.png"
            alt="profiles"
            width={100}
            height={0}
            className="w-8 rounded-md"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {currentUser?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Netflicks
        </div>
      </div>
    </div>
  );
};
