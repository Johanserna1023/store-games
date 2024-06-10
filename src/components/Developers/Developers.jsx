import { useParams } from "react-router-dom";
import { useInfinityQ } from "../../hooks/useInfinity";
import { URL } from "../../config/config";
import { ContainCard } from "../contain/ContainCard";
import { useEffect } from "react";
export const Developers = () => {
  const { name } = useParams(); // parametro

  const baseUrl = `${URL}/games?&developers=${name}`; //url de el fetch

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useInfinityQ(baseUrl, "developers", name);

  const games = data?.pages?.flatMap((page) => page.games) ?? [];
  
  useEffect(() => {
    scrollTo(0, 0);
  }, [name]);
  return (
    <>
      <div className="pt-[60px] px-8 py-5">
        <div className="lg:w-[80%] mx-auto py-5">
          <h1 className="text-2xl md:text-5xl font-semibold capitalize pt-7">
            Developed by {name.replace(/-/g, " ")}
          </h1>
        </div>
        <ContainCard
          fetchNextPage={fetchNextPage}
          games={games}
          hasNextPage={hasNextPage}
          isError={isError}
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};
