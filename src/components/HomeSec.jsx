import React from "react";
import { Link } from "react-router";

export default function TopRating() {
  return (
    <>
      <section className="container mx-auto py-8">
        <header className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-2xl uppercase text-white">
            Top Trending Movie
          </h2>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/movie"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              View All
            </Link>
          </div>
        </header>

        <main className="space-y-8">
          {/* Venom Card */}
          <div
            className="bg-center bg-cover rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl"
            style={{
              backgroundImage:
                "url('https://images7.alphacoders.com/136/1364834.png')",
            }}
          >
            <div
              className={`flex flex-col md:flex-row px-6 py-10 md:px-28 backdrop-blur-sm transition-all duration-300 `}
            >
              <div className="relative group">
                <img
                  className="w-64 md:w-72 lg:w-80 rounded-xl shadow-md transform transition-transform duration-300 group-hover:scale-105"
                  src="https://image.tmdb.org/t/p/w500/vGXptEdgZIhPg3cGlc7e8sNPC2e.jpg"
                  alt="Venom: The Last Dance movie poster"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to="https://www.youtube.com/watch?v=__2bjWbetsA"
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Watch Trailer
                  </Link>
                </div>
              </div>
              <div className="ml-0 md:ml-8 max-w-md text-white mt-6 md:mt-0">
                <div className="flex items-center mb-1">
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">
                    NEW
                  </span>
                  <h2 className="font-bold">Release Date</h2>
                </div>
                <p className="text-gray-300">2024-10-22</p>

                <h2 className="font-bold mt-5 text-xl">
                  Venom: The Last Dance
                </h2>
                <div className="flex items-center mt-1 mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">8.7/10</span>
                </div>

                <h2 className="font-bold mt-3">Overview</h2>
                <p className="text-gray-300 mb-4">
                  Eddie and Venom are on the run. Hunted by both of their worlds
                  and with the net closing in, the duo are forced into a
                  devastating decision that will bring the curtains down on
                  Venom and Eddie's last dance.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                    Action
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                    Sci-Fi
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                    Adventure
                  </span>
                </div>

                <h2 className="font-bold">Starring</h2>
                <p className="text-gray-300">
                  Tom Hardy, Chiwetel Ejiofor, Juno Temple, Rhys Ifans, Stephen
                  Graham, Peggy Lu, Clark Backo, Alanna Ubach, Andy Serkis.
                </p>
              </div>
            </div>
          </div>

          {/* The Gorge Card */}
          <div
            className="bg-no-repeat bg-cover rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl"
            style={{
              backgroundImage:
                "url('https://4kwallpapers.com/images/wallpapers/the-gorge-2025-2880x1800-20234.jpg')",
            }}
          >
            <div
              className={`flex flex-col-reverse md:flex-row px-6 py-10 md:px-28 md:justify-end backdrop-blur-sm transition-all duration-300 `}
            >
              <div className="mt-6 md:mt-0 md:mr-8 max-w-md md:text-right text-white">
                <div className="flex md:flex-row-reverse items-center mb-1">
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded ml-0 md:ml-2 mr-2 md:mr-0">
                    COMING SOON
                  </span>
                  <h2 className="font-bold">Release Date</h2>
                </div>
                <p className="text-gray-300">2025-09-15</p>

                <h2 className="font-bold mt-5 text-xl">The Gorge</h2>
                <div className="flex md:flex-row-reverse items-center mt-1 mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <svg
                      className="w-4 h-4 text-gray-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <span className="ml-0 mr-2 md:ml-2 md:mr-0 text-gray-300 text-sm">
                    8.2/10
                  </span>
                </div>

                <h2 className="font-bold mt-3">Overview</h2>
                <p className="text-gray-300 mb-4">
                  Two strangers, trained to become elite government assassins,
                  discover that their true mission is to stop supernatural
                  creatures from entering our world through a gorge hidden in a
                  remote national park.
                </p>

                <div className="flex flex-wrap md:justify-end gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                    Thriller
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                    Sci-Fi
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                    Horror
                  </span>
                </div>

                <h2 className="font-bold">Starring</h2>
                <p className="text-gray-300">
                  Miles Teller, Anya Taylor-Joy, Sigourney Weaver, Jeff
                  Goldblum, Michael Shannon, Cynthia Erivo, Daveed Diggs.
                </p>
              </div>
              <div className="relative group">
                <img
                  className="w-64 md:w-72 lg:w-80 rounded-xl shadow-md transform transition-transform duration-300 group-hover:scale-105"
                  src="https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg"
                  alt="The Gorge movie poster"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to="https://www.youtube.com/watch?v=rUSdnuOLebE"
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Watch Teaser
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors md:hidden">
            View All Movies
          </button>
        </div>
      </section>
    </>
  );
}
