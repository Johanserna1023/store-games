import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../services/getData";
import { buildUrl } from "../helpers/builUrl";

export function useInfinityQ(baseUrl, key, params) {
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams[0]);
  const [date, setDate] = useState(newParams.get("date"));
  const [ordering, setOrdering] = useState(newParams.get("ordering"));

  // Actualizar date cuando cambien los parámetros de búsqueda
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams[0]);
    setDate(newParams.get("date"));
    setOrdering(newParams.get("ordering"));
  }, [searchParams]);

  const url = buildUrl(baseUrl, ordering, date);
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteQuery(
    [`${key}`, `${date}`, `${ordering}`, `${params}`],
    ({ pageParam = 1 }) => getData(`${url}&page=${pageParam}`),
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: false,
    }
  );

  return {
    data,
    error,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isError,
  };
}
