import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { fetchMoviesDetail } from "../movie/movieAction";
import Movie from "./Movie";

export default function MovieDetail() {
  const params = useParams();
  const disptach = useDispatch();
  const { detail } = useSelector((state) => state.movie);
  useEffect(() => {
    disptach(fetchMoviesDetail(params.id));
  }, []);

  return (
    <section className="container mx-auto relative">
      <main>
        <div
          className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 lg:h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        <div className="bg-gray-900 md:h-[1400px] sm:h-[1900px] h-[2100px] lg:h-[900px] relative">
          <div className="absolute top-0 transform -translate-y-1/4 md:-translate-y-1/3 lg:-translate-y-1/2 w-full px-4 md:px-8 lg:px-16">
            <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 2xl:grid-cols-4">
              <div className="md:col-span-1 flex justify-center md:justify-start">
                <div className="w-full md:w-[250px] lg:w-[300px]">
                  <img
                    className="w-full rounded-sm shadow-lg duration-300 hover:scale-105 "
                    src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
                    alt="Movie poster"
                  />
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Watch Trailer
                    </button>

                    <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded-lg text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                      Add to Watchlist
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 mt-6 md:mt-0 text-center md:text-left">
                <div className="text-white">
                  <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                    {detail.title}
                  </h2>
                  <div className="flex flex-wrap justify-center md:justify-start items-center mt-2 text-gray-300 text-sm md:text-base">
                    <span>Release Date {detail.release_date}</span>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start items-center mt-4 gap-4">
                    <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="ml-1 text-white font-bold">
                        {detail.vote_average}
                      </span>
                      <span className="mx-1 text-gray-400">/</span>
                      <span className="text-gray-400">10</span>
                    </div>

                    <div className="text-white font-bold items-center bg-gray-800 px-3 py-2 rounded-lg">
                      <span>{`${detail.vote_count} Votes`}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300 text-sm md:text-base max-w-3xl mx-auto md:mx-0 bg-gray-700/50 p-3 rounded-lg">
                    <span className="font-bold text-white ">Overview :</span>{" "}
                    {detail.overview}
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-5">
                  <div className="bg-gray-700/50 p-3 mt-3 col-span-2 rounded-xl">
                    <div className="mt-2">
                      <h2 className="text-xl text-white font-bold">
                        Movie Details
                      </h2>
                    </div>
                    <div className="mt-6 text-gray-400">
                      <p>
                        Original Title:{" "}
                        <span className="text-white">
                          {" "}
                          {detail.original_title}
                        </span>
                      </p>
                      <p>
                        Original Language:{" "}
                        <span className="text-white">
                          {detail.original_language}
                        </span>
                      </p>
                      <p>
                        Popularity:{" "}
                        <span className="text-white">{detail.popularity}</span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-700/50 text-white p-3 mt-3 col-span-2 rounded-xl">
                    <div className="mt-2">
                      <h2 className="text-xl font-bold">Coming Soon</h2>
                    </div>
                    <div className="mt-6 ">
                      <p>Some more information will coming soon...!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link
                to="/movie"
                className="text-xl text-white font-bold bg-blue-700 px-7 py-2 rounded-lg hover:bg-blue-800 duration-300"
              >
                Back{" "}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
