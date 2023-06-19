import { useEffect, useState } from "react";
import apiClient from "../services/ApiClient";
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
  }
  
  export interface FetchGenresResponse {
    count: number;
    results: Genre[];
  }

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controler = new AbortController();
    setIsLoading(true)

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controler.signal })
      .then((res) => {
        setGenres(res.data.results)
        setIsLoading(false)
    })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false)
      });

    return () => controler.abort();
  }, []);

  return { genres, error, isLoading };
}

export default useGenres;