import { Link } from "react-router-dom";
export const Genres = ({ genres }) => {
  return (
    <>
      <div className=" relative w-full flex gap-2 overflow-hidden py-1">
        {genres?.map((genre) => (
          <Link
            to={`genres/${genre.slug}`}
            className="hover:underline"
            key={genre.id}
          >
            <p className="py-1">{genre.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};
