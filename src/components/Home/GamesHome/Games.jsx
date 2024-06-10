import { Card } from "../../Card/Card";
import { LoaderCard } from "../../Loader/LoaderCard";
import { Slider } from "../Slider/Slider";
import "./index.css";
import { useFetch } from "../../../hooks/useFetch";
import { URL } from "../../../config/config";
export const Games = () => {
  const url = `${URL}/games?`;
  const { data, isError, isLoading } = useFetch(url, "gamesHome");
  const games = data?.games;
  
  return (
    <>
      <Slider />
      <div
        className="relative  w-full m-auto z-30 "
        style={{
          background:
            "linear-gradient( transparent ,  rgb(18, 18, 18) ,  rgb(18, 18, 18) , rgb(18, 18, 18) , rgb(18, 18, 18) , rgb(18, 18, 18) ,  rgb(18, 18, 18) ,  rgb(18, 18, 18),  rgb(18, 18, 18),  rgb(18, 18, 18) ,  rgb(18, 18, 18))",
        }}
      >
        <div className="container_card_home">
          {isLoading && (
            <>
              <LoaderCard />
              <LoaderCard />
              <LoaderCard />
              <LoaderCard />
              <LoaderCard />
            </>
          )}
          {isError && <p>error</p>}
          {games?.map((game) => (
            <Card
              img={game.background_image}
              name={game.name}
              id={game.id}
              genres={game.genres}
              rating={game.rating}
              date={game.released}
              key={game.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
