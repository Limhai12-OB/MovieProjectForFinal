import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <section className="w-screen backdrop-blur-3xl ">
        <main className="grid lg:grid-cols-3 md:col-span-2 sm:col-span-1 mt-5 container mx-auto p-10  ">
          <div className="w-[280px]">
            <h2 className="font-bold text-2xl">TVC - Entertainment</h2>
            <p className="mt-6">
              Your ultimate destination for movies, reviews, and entertainment
              news. Discover the magic of cinema with us!
            </p>
          </div>
          <div>
            <h2 className="font-bold text-2xl">Explore</h2>
            <div className="mt-5">
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
                <p className="bg-gray-600 px-5 rounded-xl py-1">Action</p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">Action</p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">Action</p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">Action</p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">Action</p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">Action</p>
                <p className="bg-gray-600 px-5 rounded-xl py-1">Action</p>
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
