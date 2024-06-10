import { useInView } from "react-intersection-observer";
import { Card } from "../Card/Card";
import { ErrorFeching } from "../Errors/ErrorFeching";
import { Footer } from "../Footer/Footer";
import { NoResults } from "../Games/NoResults";
import { LoaderCard } from "../Loader/LoaderCard";
import { LoaderFeching } from "../Loader/loaderFeching";
import { useEffect } from "react";
import PropTypes from "prop-types";
export const ContainCard = ({
  games,
  isError,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);
  return (
    <>
      {isError && <ErrorFeching />}
      {games.length <= 0 && isLoading === false && <NoResults />}
      <div className="container_card" id="mas">
        {isLoading && (
          <>
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
          </>
        )}
        {games?.map((game) => (
          <Card
            img={game.background_image}
            date={game.released}
            genres={game.genres}
            id={game.id}
            name={game.name}
            rating={game.rating}
            key={game.id}
          />
        ))}
      </div>
      {hasNextPage && (
        <div className="flex w-full justify-center items-center " ref={ref}>
          {isFetchingNextPage && <LoaderFeching />}
        </div>
      )}

      {hasNextPage === false && (
        <div className="w-full flex justify-center items-center">
          <span className="mx-auto text-lg font-semibold">
            no hay mas resultados
          </span>
        </div>
      )}
      <Footer />
    </>
  );
};
ContainCard.propTypes = {
  games: PropTypes.array.isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFetchingNextPage: PropTypes.bool.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  fetchNextPage: PropTypes.func.isRequired,
};
