import { Movie } from "@prisma/client";
import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import { FavoriteButton } from "./favorite-button";

interface MovieCardProps {
  data: Movie;
}

export const MovieCard = ({ data }: MovieCardProps) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <Image
        src={data.thumbnailUrl}
        alt="Thumbnail"
        width={1000}
        height={0}
        className="cursor-pointer object-cover 
        transition duration delay-300
        shadow-xl rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        w-full
        h-[12vw]
        "
      />
      <div
        className="
        absolute top-0 z-10
        opacity-0
        transition delay-300 duration-200
        invisible
        sm:visible
        w-full
        h-[12vw]
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
        "
      >
        <Image
          src={data.thumbnailUrl}
          alt="Thumbnail"
          width={1000}
          height={0}
          className="
            cursor-pointer 
            object-cover transition duration 
            shadow-xl rounded-t-md 
            w-full h-[12vw]
          "
        />
        <div
          className="
          z-10
          bg-zinc-800
          p-2 lg:p-4
          absolute
          w-full
          transition
          shadow-md
          round-b-md
        "
        >
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => {}}
              className="
                cursor-pointer 
                w-6 h-6 lg:w-10 lg:h-10 
                bg-white rounded-full 
                flex items-center justify-center
                hover:bg-neutral-300
                "
            >
              <BsFillPlayFill className="size-4 md:size-8" />
            </div>
            <FavoriteButton movieId={data.id} />
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white ">2024</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
