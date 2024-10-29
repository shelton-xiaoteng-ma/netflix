import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export const useMovieList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { data, error, isLoading, mutate };
};
