import { Genre } from "./useGenres";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: { genre: Genre }[];
}

const useGames = (filterGenre: Genre | null, filterPlatform: Platform | null) =>
  useData<Game>("/game", {
    params: {
      genres: filterGenre?.id,
      platforms: filterPlatform?.id,
    },
  });

export default useGames;
