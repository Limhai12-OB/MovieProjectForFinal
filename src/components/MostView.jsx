import { useState } from "react";
import { Link } from "react-router";
export default function PopularM() {
  const movies = [
    {
      id: 1,
      title: "The Gorge",
      image: "https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
      rating: "8.5",
      description: "A story about revolution and sportswear.",
      year: "2024",
      duration: "124 min",
      genres: ["action", "drama"],
    },
    {
      id: 2,
      title: "Panda Plan",
      image: "https://image.tmdb.org/t/p/w500/xVS9XiO9upp2SnWx6KpBYb79hLR.jpg",
      rating: "7.9",
      description: "An adventure with a strategic panda.",
      year: "2024",
      duration: "118 min",
      genres: ["animation", "adventure"],
    },
    {
      id: 3,
      title: "Companion",
      image: "https://image.tmdb.org/t/p/w500/oCoTgC3UyWGfyQ9thE10ulWR7bn.jpg",
      rating: "8.2",
      description: "A journey of friendship and loyalty.",
      year: "2023",
      duration: "135 min",
      genres: ["drama", "sci-fi"],
    },
    {
      id: 4,
      title: "My Fault: London",
      image: "https://image.tmdb.org/t/p/w500/ttN5D6GKOwKWHmCzDGctAvaNMAi.jpg",
      rating: "7.6",
      description: "A story of mistakes and redemption in London.",
      year: "2024",
      duration: "112 min",
      genres: ["romance", "drama"],
    },
    {
      id: 5,
      title: "Venom: The Last Dance",
      image: "https://image.tmdb.org/t/p/w500/vGXptEdgZIhPg3cGlc7e8sNPC2e.jpg",
      rating: "8.8",
      description: "The final chapter in the symbiote saga.",
      year: "2024",
      duration: "140 min",
      genres: ["action", "sci-fi"],
    },
    {
      id: 6,
      title: "Gladiator II",
      image: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
      rating: "9.1",
      description: "The epic sequel to the legendary tale of revenge.",
      year: "2024",
      duration: "158 min",
      genres: ["action", "drama", "history"],
    },
    {
      id: 7,
      title: "Flight Risk",
      image: "https://image.tmdb.org/t/p/w500/4cR3hImKd78dSs652PAkSAyJ5Cx.jpg",
      rating: "7.3",
      description: "A high-stakes thriller in the skies.",
      year: "2023",
      duration: "105 min",
      genres: ["thriller", "suspense"],
    },
    {
      id: 8,
      title: "Moana 2",
      image: "https://image.tmdb.org/t/p/w500/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
      rating: "8.7",
      description: "Continue the adventure beyond the reef.",
      year: "2024",
      duration: "110 min",
      genres: ["animation", "adventure", "family"],
    },
  ];

  return (
    <>
      <section className="flex items-center justify-center">
        <main className="w-full max-w-6xl ">
          <h2 className="font-bold text-3xl md:ml-0 sm:ml-4 ml-6 text-white">
            Now Showing
          </h2>
          <div className="bg-blue-700 h-1 mt-3 md:ml-0 sm:ml-4 ml-6 w-[110px] mb-10"></div>
          <Link>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-6 p-5">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </Link>
        </main>
      </section>
    </>
  );
}

function MovieCard({ movie }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="rounded overflow-hidden shadow-lg bg-white relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative  duration-400 hover:scale-105">
        <img
          src={movie.image}
          alt={`${movie.title} poster`}
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-0 right-0 bg-yellow-500 text-xs font-bold px-2 py-1 m-2 rounded">
          {movie.rating}
        </div>
        <div
          className={`absolute bottom-0 left-0 right-0 bg-black  p-4 text-white transition-opacity duration-500 ${
            isHovering ? "opacity-85" : "opacity-0"
          }`}
        >
          <div className="font-bold text-xl mb-2 truncate">{movie.title}</div>
          <p className="text-gray-300 text-sm mb-2 line-clamp-2">
            {movie.description}
          </p>

          <div className="flex flex-wrap mb-2">
            {movie.genres.map((genre, index) => (
              <span
                key={index}
                className="inline-block bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold text-gray-300 mr-2 mb-2"
              >
                #{genre}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-400">
              {movie.year} • {movie.duration}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
