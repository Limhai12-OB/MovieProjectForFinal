import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { fetchMovies } from "../movie/movieAction";

export default function Movie() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <Link className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.results &&
            data.results.map((movie) => (
              <div
                key={movie.id}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <Link href={`/movie/${movie.id}`}>
                  <div className="relative">
                    <img
                      className="w-full h-64 object-cover"
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt={`${movie.original_title} poster`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-95"></div>

                    <div className="absolute top-0 right-0 m-2">
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h2 className="font-bold text-lg mb-1 truncate">
                        {movie.original_title}
                      </h2>

                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-yellow-400 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="font-bold">{movie.vote_average}</span>
                        <span className="text-gray-300 text-sm ml-1">/10</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </Link>
      </section>
    </>
  );
}
