import { useCurrentUser } from "@/hooks/use-current-user";
import { useFavorites } from "@/hooks/use-favorites";
import { Movie } from "@prisma/client";
import axios from "axios";
import { useCallback, useMemo } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface FavoriteButtonProps {
  movieId: Movie["id"];
}

export const FavoriteButton = ({ movieId }: FavoriteButtonProps) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorite = useCallback(async () => {
    let response;
    if (isFavorite) {
      response = await axios.delete("/api/favorite", { data: { movieId } });
    } else {
      response = await axios.post("/api/favorite", { movieId });
    }
    const updatedFavoriteIds = response.data.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds,
    });

    mutateFavorites();
  }, [currentUser, isFavorite, movieId, mutate, mutateFavorites]);

  return (
    <div
      onClick={toggleFavorite}
      className="
      cursor-pointer
      group/item
      w-6 h-6 lg:w-10 lg:h-10
      flex justify-center items-center
      hover:border-neutral-300
    "
    >
      {isFavorite ? (
        <GoHeartFill size={30} fill="red" />
      ) : (
        <GoHeart size={30} fill="white" />
      )}
    </div>
  );
};
