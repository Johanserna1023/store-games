import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { URL } from "../../config/config";

export const Genres = () => {
  const url = `${URL}/genres?`;
  const { data } = useFetch(url, "genres");
  const genres = data?.games;
  return (
    <div className="relative z-10 bg-[#121212]">
      <div className="px-4 md:px-8">
        <h2 className="text-4xl font-semibold ">Genres</h2>
        <ul className="container_genres_home">
          {genres?.map((genre) => (
            <li className="w-full" key={genre.id}>
              <Link to={`/genres/${genre.slug}`}>
                <div className="relative w-full max-w-[200px] h-[115px] hover:scale-110 transition-transform duration-300">
                  <img
                    src={genre.image_background?.replace(
                      "media/",
                      `media/resize/420/-/`
                    )}
                    alt={genre.name}
                    loading="lazy"
                    className="w-full h-full object-cover min-w-full min-h-full "
                  />
                  <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center bg-black/30">
                    <span className="text-2xl font-semibold text-center">
                      {genre.name}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
