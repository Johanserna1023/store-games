import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { useInfinityQ } from "../../hooks/useInfinity";
import { last30Days } from "../../helpers/last30Days";
import { URL } from "../../config/config";
import { ContainCard } from "../contain/ContainCard";
export const Last30Days = () => {

  const baseUrl = `${URL}/games?&dates=${last30Days()}`; //url fetch

  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isError,
  } = useInfinityQ(baseUrl, "last30days", "");

  const games = data?.pages?.flatMap((page) => page?.games) ?? [];

  return (
    <div className="pt-[60px] h-full w-full">
      <div>
        <div className="px-4 md:px-8 pt-5">
          <div className="flex flex-col justify-between sm:flex-row items-cente lg:w-[80%] mx-auto py-5">
            <h1 className="text-5xl font-semibold py-3">Last 30 days</h1>
            <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5 py-2">
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
            key={"Last30Days"}
          />
        </div>
      </div>
    </div>
  );
};
