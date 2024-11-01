import { useBillboard } from "@/hooks/use-billboard";

import { useInfoModal } from "@/hooks/use-info-modal";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PlayButton } from "./play-button";

export const Billboard = () => {
  const { data } = useBillboard();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [infoModalData, setInfoModalData] = useInfoModal();

  const handleInfoModal = () => {
    setInfoModalData({ visible: true, movieId: data?.id });
  };

  return (
    <div
      className="
        relative
        h-[56.25vw]
      "
    >
      <video
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        autoPlay
        muted
        loop
        className="
          w-full
          h-[56.23vw]
          object-cover
          brightness-[60%]
        "
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16 ">
        <p
          className="
          text-white 
          text-1xl md:text-5xl lg:text-6xl 
          font-bold drop-shadow-xl
          h-full w-[50%] 
          "
        >
          {data?.title}
        </p>
        <p
          className="
            mt-3 md:mt-8 
            text-white 
            text-[8px] md:text-lg 
            w-[90%] md:w-[80%] lg:w-[50%] 
            drop-shadow-xl
          "
        >
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={data?.id} />
          <button
            onClick={handleInfoModal}
            className="
              bg-white bg-opacity-30 rounded-md 
              text-white text-xs lg:text-lg font-semibold 
              py-1 md:py-2 px-2 md:px-4 w-auto 
              flex flex-row items-center gap-1
              hover:bg-opacity-20
              transition
            "
          >
            <AiOutlineInfoCircle size={25} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
