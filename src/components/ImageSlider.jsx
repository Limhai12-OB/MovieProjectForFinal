import React, { useState, useEffect, useRef } from "react";

export default function MovieSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000; // 5 seconds per slide

  const movies = [
    {
      id: 1,
      title: "Venom: The Last Dance",
      posterUrl:
        "https://image.tmdb.org/t/p/w500/vGXptEdgZIhPg3cGlc7e8sNPC2e.jpg",
      rating: 8.7,
      year: 2024,
      genres: ["Action", "Sci-Fi", "Adventure"],
    },
    {
      id: 2,
      title: "The Gorge",
      posterUrl:
        "https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
      rating: 8.2,
      year: 2025,
      genres: ["Thriller", "Sci-Fi", "Horror"],
    },
    {
      id: 3,
      title: "Dune: Part Two",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: 9.1,
      year: 2024,
      genres: ["Sci-Fi", "Adventure", "Drama"],
    },
    {
      id: 4,
      title: "Inside Out 2",
      posterUrl:
        "https://static.thcdn.com/images/large/original//productimg/1600/1600/15511403-2035170660884132.jpg",
      rating: 8.5,
      year: 2024,
      genres: ["Animation", "Adventure", "Comedy"],
    },
    {
      id: 5,
      title: "Deadpool & Wolverine",
      posterUrl:
        "https://i0.wp.com/thsindex.org/wp-content/uploads/2024/08/Deadpool-Wolverine-Marvel-Studios.jpg?fit=691%2C1024&ssl=1",
      rating: 8.9,
      year: 2024,
      genres: ["Action", "Comedy", "Adventure"],
    },
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, movies.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-96 md:h-[32rem] lg:h-[40rem] overflow-hidden rounded-xl shadow-2xl bg-gray-900">
      {/* Main slider */}
      <div
        className="h-full w-full flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="min-w-full h-full relative flex-shrink-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${movie.posterUrl})`,
                filter: "blur(10px)",
                opacity: 0.3,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

            <div className="relative h-full flex flex-col md:flex-row items-center justify-center md:justify-start p-6 md:p-16">
              <div className="w-48 md:w-64 lg:w-80 flex-shrink-0 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <img
                  src={movie.posterUrl}
                  alt={`${movie.title} poster`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6 md:mt-0 md:ml-12 text-white text-center md:text-left">
                <div className="text-sm font-semibold mb-2 text-red-500">{`#${
                  index + 1
                } TRENDING`}</div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
                  {movie.title}
                </h2>

                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(movie.rating / 2)
                            ? "text-yellow-400"
                            : "text-gray-500"
                        } fill-current`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-300">{movie.rating}/10</span>
                  <span className="ml-4 text-gray-400">{movie.year}</span>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 justify-center md:justify-start">
                  <button className="px-6 py-2 bg-red-600 rounded-md hover:bg-red-700 transition-colors flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Watch Trailer
                  </button>
                  <button className="px-6 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-red-600"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
