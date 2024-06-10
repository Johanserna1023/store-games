import { useQuery } from "@tanstack/react-query";
import { getData } from "../services/getData";

export function useFetch(url, key) {
  const { data, isError, isLoading, error, isFetching, isSuccess } = useQuery({
    queryKey: [`${key}`],
    queryFn: () => getData(url),
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return {
    data,
    isError,
    isLoading,
    error,
    isFetching,
    isSuccess,
  };
}
