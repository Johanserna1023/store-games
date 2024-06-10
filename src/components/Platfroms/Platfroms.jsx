import { useEffect } from "react";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { FiltersDate } from "../Filters/FiltersDate";
import { useParams } from "react-router-dom";
import { useInfinityQ } from "../../hooks/useInfinity";
import { URL } from "../../config/config";
import { ContainCard } from "../contain/ContainCard";

export const Platfroms = () => {
  const { id, name } = useParams();

  const baseUrl = `${URL}/games?&platforms=${id}`;

  const {
    data,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isError,
  } = useInfinityQ(`${baseUrl}`, `plataforms`, `${id}`);

  const games = data?.pages?.flatMap((page) => page?.games) ?? [];

  useEffect(() => {
    scrollTo(0, 0);
  }, [id]);
  return (
    <>
      <div className="px-2 pt-[60px] w-full mx-auto ">
        <div className="flex flex-col justify-between sm:flex-row lg:w-[80%] mx-auto py-8">
          <h1 className="py-3 text-5xl font-bold ">Games of {name}</h1>
          <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5 py-3 ">
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
          key={"Plataforms"}
        />
      </div>
    </>
  );
};
