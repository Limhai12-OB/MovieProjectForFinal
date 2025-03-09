import { useEffect, useRef, useState } from "react";

export default function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 6000;
  const movies = [
    {
      id: 1,
      title: "Venom: The Last Dance",
      posterUrl: "https://4kwallpapers.com/images/walls/thumbs_3t/16995.jpg",
      rating: 8.7,
      year: 2024,
      genres: ["Action", "Sci-Fi", "Adventure"],
    },
    {
      id: 2,
      title: "The Gorge",
      posterUrl: "https://4kwallpapers.com/images/walls/thumbs_3t/20234.jpg",
      rating: 8.2,
      year: 2025,
      genres: ["Thriller", "Sci-Fi", "Horror"],
    },
    {
      id: 3,
      title: "Dune: Part Two",
      posterUrl:
        "https://4kwallpapers.com/images/wallpapers/dune-part-two-8k-5120x2880-15003.jpg",
      rating: 9.1,
      year: 2024,
      genres: ["Sci-Fi", "Adventure", "Drama"],
    },
    {
      id: 4,
      title: "Inside Out 2",
      posterUrl: "https://4kwallpapers.com/images/walls/thumbs_3t/17087.jpg",
      rating: 8.5,
      year: 2024,
      genres: ["Animation", "Adventure", "Comedy"],
    },
    {
      id: 5,
      title: "Deadpool & Wolverine",
      posterUrl: "https://4kwallpapers.com/images/walls/thumbs_3t/17821.jpg",
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
    resetTimeout.current = setTimeout(() => {
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
    <>
      <div className="relative md:w-[1230px] container mx-auto h-auto md:h[32rem] lg:h-[40rem] overflow-hidden rounded-xl shadow-2xl bg-gray-900">
        <div
          className="h-ful w-full flex transition-transform duration-1000 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="min-w-full h-full relative flex-shrink-0"
            >
              <div
                className="absolute inset-0 bg-contain bg-no-repeat h-[700px]"
                style={{
                  backgroundImage: `url(${movie.posterUrl})`,
                }}
              />
              <div className="relative h-full flex flex-col md:flex-row items-center justify-center md:justify-start p-6 md:p-16">
                <div className="mt-6 md:mt-0 md:ml-12 text-white text-center md:text-left">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
                    {movie.title}
                  </h2>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    {movie.genres.map((genres) => (
                      <span
                        key={genres}
                        className="bg-gray-800 rounded-full px-3 py-1 text-sm"
                      >
                        {genres}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center"
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

        {/* dot */}
        <div className="absolute flex justify-center items-center left-0 right-0 bottom-6 space-x-2">
          {movies.map((_, index) => (
            <button
              onClick={() => goToSlide(index)}
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-red-500" : "bg-gray-500 "
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
