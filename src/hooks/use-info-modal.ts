import { Movie } from "@prisma/client";
import { atom, useAtom } from "jotai";

export interface InfoModalProps {
  visible: boolean;
  movieId: Movie["id"];
}

const modalState = atom({} as InfoModalProps);

export const useInfoModal = () => {
  return useAtom(modalState);
};
