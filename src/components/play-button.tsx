import { Movie } from "@prisma/client";
import { useRouter } from "next/navigation";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: Movie["id"];
}

export const PlayButton = ({ movieId }: PlayButtonProps) => {
  const router = useRouter();

  const handlerPlay = () => {
    router.push(`/watch/${movieId}`);
  };

  return (
    <button
      onClick={handlerPlay}
      className="
      flex flex-row items-center
     bg-white hover:bg-neutral-300
      rounded-md
      py-1 md:py-2
      px-2 md:px-4
      w-auto
      text-xs lg:text-lg 
      font-semibold
      "
    >
      <BsFillPlayFill size={25} />
      Play
    </button>
  );
};
