"use client";
import { useMovie } from "@/hooks/use-movie";
import { useParams, useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

const WatchPage = () => {
  const router = useRouter();
  const params = useParams();
  const movieId = params?.movieId as string;
  const { data: movie, isLoading } = useMovie({ movieId: movieId as string });

  return (
    <div className="h-screen w-screen bg-black">
      <nav
        className="
        fixed w-full p-4 z-10
        flex flex-row items-center gap-8
        bg-black bg-opacity-70
      "
      >
        <AiOutlineArrowLeft
          onClick={() => router.back()}
          size={40}
          className="text-white cursor-pointer"
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching: </span>
          {movie?.title}
        </p>
      </nav>
      <video
        src={movie?.videoUrl}
        autoPlay
        controls
        className="h-full w-full "
      ></video>
    </div>
  );
};

export default WatchPage;
