import { useEffect } from "react";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { FiltersDate } from "../Filters/FiltersDate";
import { useParams } from "react-router-dom";

import { useInfinityQ } from "../../hooks/useInfinity";
import { URL } from "../../config/config";
import { ContainCard } from "../contain/ContainCard";
export const Genres = () => {
  const { name } = useParams();

  const baseUrl = `${URL}/games?&genres=${name}`;
  const {
    data,
    isError,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfinityQ(baseUrl, "Genres", name);

  useEffect(() => {
    scrollTo(0, 0);
  }, [name]);

  const games = data?.pages?.flatMap((page) => page.games) ?? [];

  return (
    <>
      <div className="px-4 pt-[60px]">
        <div className="flex flex-col justify-between sm:flex-row lg:w-[80%] mx-auto">
          <h1 className="text-4xl w-full font-semibold py-4 sm:w-auto  md:text-6xl">
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
    </>
  );
};
