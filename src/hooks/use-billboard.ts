import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export const useBillboard = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/random", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { data, error, isLoading, mutate };
};
