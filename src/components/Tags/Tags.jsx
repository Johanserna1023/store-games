import { useParams } from "react-router-dom";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { FiltersDate } from "../Filters/FiltersDate";
import { useEffect } from "react";
import { useInfinityQ } from "../../hooks/useInfinity";
import { URL } from "../../config/config";
import { ContainCard } from "../contain/ContainCard";
export const Tags = () => {
  const { name } = useParams();
  const baseUrl = `${URL}/games?&tags=${name}`;
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isError,
  } = useInfinityQ(`${baseUrl}`, `Tags`, `${name}`);

  const games = data?.pages?.flatMap((page) => page?.games) ?? [];

  useEffect(() => {
    scrollTo(0, 0);
  }, [name]);
  return (
    <div className="pt-[60px] px-4 md:px-8">
      <div className="flex flex-col justify-between sm:flex-row lg:w-[80%] mx-auto py-8">
        <h1 className="text-2xl w-full font-semibold py-4 sm:w-auto  md:text-6xl">
          Games {name.replace(/-/g, " ")}
        </h1>
        <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5">
          <FiltersOrdering />
          <FiltersDate />
        </div>
      </div>
      <ContainCard
        fetchNextPage={fetchNextPage}
        games={games}
        hasNextPage={hasNextPage}
        isError={isError}
        isFetchingNextPage={isFetchingNextPage}
        isLoading={isLoading}
        key={"Genres"}
      />
    </div>
  );
};
