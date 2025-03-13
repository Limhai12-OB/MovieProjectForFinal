import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <section className="w-screen backdrop-blur-3xl ">
        <main className="grid lg:grid-cols-3 md:col-span-2 sm:col-span-1 mt-5 container mx-auto p-10  ">
          <div className="w-[280px]">
            <h2 className="font-bold text-2xl text-white">
              TVC - Entertainment
            </h2>
            <p className="mt-6 text-white">
              Your ultimate destination for movies, reviews, and entertainment
              news. Discover the magic of cinema with us!
            </p>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-white">Explore</h2>
            <div className="mt-5 text-white">
              <p>Movies</p>
              <p>TV Shows</p>
              <p>New Releases</p>
              <p>Top Rated</p>
              <p>Coming Soon</p>
              <p>Film Festival</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-white">Categories</h2>
            <div className="mt-5">
              <div className="grid grid-cols-2 gap-2 text-white">
                <p className="bg-gray-600 px-5 rounded-xl py-1">Action</p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">Genres</p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">
                  Popular Movies/Trending
                </p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">Top Rated</p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">Trailers</p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">Reviews</p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">Movie News</p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">Site Map</p>
              </div>
            </div>
          </div>
        </main>
        <div className="mt-12 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} TVC Entertainment. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
