import { useEffect, useState } from "react";
import apiClient from "../services/ApiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controler = new AbortController();
    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controler.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controler.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useData;
