import { useEffect, useState } from "react";
import apiClient from "../services/ApiClient";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  background_image: string;
  description: string;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controler = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controler.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controler.abort();
  }, []);

  return { games, error };
};

export default useGames;
