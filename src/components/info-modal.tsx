import { useInfoModal } from "@/hooks/use-info-modal";
import { useMovie } from "@/hooks/use-movie";
import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FavoriteButton } from "./favorite-button";
import { PlayButton } from "./play-button";

export const InfoModal = () => {
  const [infoModalData, setInfoModalData] = useInfoModal();
  const { data = {} } = useMovie({ movieId: infoModalData?.movieId || "" });

  const handleClose = useCallback(() => {
    setInfoModalData({ visible: false, movieId: "" });
  }, [setInfoModalData]);

  if (!infoModalData?.visible) return null;

  return (
    <div
      className="
              z-50 transition duration-300
              bg-black bg-opacity-80
              flex justify-center items-center
              overflow-x-hidden overflow-y-auto
              fixed
              inset-0            
            "
    >
      <div
        className="
          relative w-auto mx-auto max-w-3xl 
          rounded-md overflow-hidden
        "
      >
        <div
          className={`${
            infoModalData?.visible ? "scale-100" : "scale-0"
          } transform duration-300 
          relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96 ">
            <video
              src={data?.videoUrl}
              poster={data?.thumbnailUrl}
              autoPlay
              muted
              loop
              className="
                w-full h-full
                brightness-[60%]
                object-cover      
              "
            ></video>
            <button
              onClick={() => {}}
              className="
                cursor-pointer
                absolute
                top-3 right-3 h-10 w-10
                rounded-full bg-black bg-opacity-70
                flex items-center justify-center
              "
            >
              <AiOutlineClose
                className="text-white"
                size={20}
                onClick={handleClose}
              />
            </button>
            <div
              className="
                absolute
                bottom-[10%]
                left-10
              "
            >
              <p className="text-white font-bold text-3xl md:text-4xl lg:text-5l h-full mb-8">
                {data?.title}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>
          <div className="px-12 py-8">
            <p className="text-green-400 font-semibold text-lg">New</p>
            <p className="text-white text-lg">{data?.genre}</p>
            <p className="text-white text-lg">{data?.duration}</p>
            <p className="text-white text-lg">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
