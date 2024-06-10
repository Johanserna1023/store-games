import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { FiltersDate } from "../Filters/FiltersDate";
import { useInfinityQ } from "../../hooks/useInfinity";
import { URL } from "../../config/config";
import { ContainCard } from "../contain/ContainCard";

export const Games = () => {
  const baseUrl = `${URL}/games?`;
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfinityQ(baseUrl, "games", "");

  const games = data?.pages?.flatMap((page) => page.games) ?? [];

  return (
    <>
      <div className="px-4 py-4 w-full mx-auto">
        <div className="flex flex-col justify-between sm:flex-row lg:w-[80%] mx-auto">
          <h1 className="text-4xl w-full font-semibold py-4 sm:w-auto  md:text-6xl">
            All games
          </h1>
          <div className="flex w-full py-3 flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5 ">
            <FiltersOrdering />
            <FiltersDate />
          </div>
        </div>
        <ContainCard
          isLoading={isLoading}
          isFetchingNextPage={isFetchingNextPage}
          isError={isError}
          games={games}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          key={"All games"}
        />
      </div>
    </>
  );
};
