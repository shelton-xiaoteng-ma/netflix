"use client";

import { Billboard } from "@/components/billboard";
import { InfoModal } from "@/components/info-modal";
import { MovieList } from "@/components/movie-list";
import { Navbar } from "@/components/navbar";
import { useFavorites } from "@/hooks/use-favorites";
import { useMovieList } from "@/hooks/use-movie-list";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <InfoModal />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
}
