import { Link } from "react-router-dom";
import { useGamesDetails } from "../../hooks/useGamesDetails";

export const Genres = () => {
  const { data } = useGamesDetails();

  const genres = data.details.genres;
  return (
    <>
      {genres && (
        <div className="flex gap-3 md:max-w-[50%] flex-wrap">
          {genres.map((genre) => (
            <Link to={`/genres/${genre.slug}`} key={genre.id}>
              <span className="hover:underline">{genre.name}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
