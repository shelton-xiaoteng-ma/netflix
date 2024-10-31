import { fetcher } from "@/lib/fetcher";
import { Movie } from "@prisma/client";
import useSWR from "swr";

interface useMovieProps {
  movieId: Movie["id"];
}

export const useMovie = ({ movieId }: useMovieProps) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/movies/${movieId}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { data, error, isLoading, mutate };
};
