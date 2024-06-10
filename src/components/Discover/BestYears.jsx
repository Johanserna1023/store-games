import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { useInfinityQ } from "../../hooks/useInfinity";
import { URL } from "../../config/config";
import { ContainCard } from "../contain/ContainCard";
export const BestYears = () => {
 
  const baseUrl = `${URL}/games?&dates=2023-01-01,2023-12-31`;
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfinityQ(baseUrl, "bestYears", "");

  const games = data?.pages?.flatMap((page) => page.games) ?? [];

  return (
    <div className="pt-[60px] h-full w-full">
      <div>
        <div className="px-4 md:px-8 py-8">
          <div className="flex flex-col justify-between sm:flex-row lg:w-[80%]  mx-auto py-4">
            <h1 className="text-5xl md:text-5xl font-semibold py-3 capitalize">
              Best of the year
            </h1>
            <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-4 py-2">
              <FiltersOrdering />
            </div>
          </div>
          <ContainCard
            fetchNextPage={fetchNextPage}
            games={games}
            hasNextPage={hasNextPage}
            isError={isError}
            isFetchingNextPage={isFetchingNextPage}
            isLoading={isLoading}
            key={"Best Years"}
          />
        </div>
      </div>
    </div>
  );
};
