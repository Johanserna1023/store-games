import { Genres } from "./Genres";
import { BackgroundHome } from "./BackgroundHome";
import { Platforms } from "./Platforms";
import { Date } from "./Date";
import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
import { ScoreColor } from "../../../helpers/ScoreColor";
import { LoaderBackground } from "../../Loader/LoaderBackground";
import { useFetch } from "../../../hooks/useFetch";
import { URL } from "../../../config/config";
export function Slider() {
  const url = `${URL}/games?`;

  const { data, isError, isLoading } = useFetch(url, "gamesHome");

  const games = data?.games;
  const num = Math.floor(Math.random() * 19)
  return (
    <>
      {isError && <div className="text-4xl">error en obtner los datos</div>}
      <div className="relative top-[60px] h-screen w-full flex  snap-mandatory overflow-hidden">
        {isLoading && (
          <div className="h-screen w-full flex justify-center items-center">
            <LoaderBackground />
          </div>
        )}
        {games?.slice(num, 20).map((game) => (
          <div key={game.id} className="relative min-w-full snap-x">
            <BackgroundHome background={game.background_image} />
            <div className="flex">
              <div className="relative pt-10 w-[90%] h-full m-auto z-30 ">
                <p className="text-2xl md:text-4xl font-semibold text-white">
                  {game.name}
                </p>
                <Date released={game.released} />
                <div className="text-xl">
                  <div className="flex items-center gap-2 pt-1">
                    <i className="text-xl text-yellow-400">
                      <HiStar />
                    </i>
                    <p>{game.rating}</p>
                  </div>
                </div>
                <Genres genres={game.genres} />
                <Platforms platforms={game.parent_platforms} />
                <div>
                  <p className="text-lg">Metascore</p>
                  <div className="py-1 flex flex-col justify-center items-start">
                    <span
                      className={`text-xl py-1 px-1 border-2 rounded-lg font-semibold`}
                      style={{
                        color: `${ScoreColor(game?.metacritic)}`,
                        border: `2px solid ${ScoreColor(game?.metacritic)}`,
                      }}
                    >
                      {game.metacritic}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to={`/games/${game.id}`}>
                    <span className="bg-red-500 rounded-sm py-2 px-4">See</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
