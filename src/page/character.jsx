export default function Character() {
  return (
    <>
      <section className="container mx-auto relative">
        <main>
          {/* Hero image with gradient overlay */}
          <div className="relative">
            <img
              className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover object-top"
              src="https://4kwallpapers.com/images/walls/thumbs_3t/21484.jpg"
              alt=""
            />
            {/* Dark overlay on the entire hero image */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Gradient overlay that fades from gray-800 to transparent at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 lg:h-32 bg-gradient-to-t from-gray-800 to-transparent"></div>
          </div>

          {/* Content section */}
          <div className="bg-black min-h-[800px] lg:h-[1000px] relative">
            {/* Movie poster and details */}
            <div className="absolute top-0 transform -translate-y-1/4 md:-translate-y-1/3 lg:-translate-y-1/2 w-full px-4 md:px-8 lg:px-16">
              <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 2xl:grid-cols-4">
                {/* Movie poster */}
                <div className="md:col-span-1 flex justify-center md:justify-start">
                  <div className="w-[200px] md:w-[250px] lg:w-[300px]">
                    <img
                      className="w-full rounded shadow-lg"
                      src="https://image.tmdb.org/t/p/w500/xVS9XiO9upp2SnWx6KpBYb79hLR.jpg"
                      alt="Movie poster"
                    />

                    {/* Action buttons */}
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
                    <div className="">
                      <img
                        className="h-[100px] mt-2 w-full object-cover"
                        src="https://4kwallpapers.com/images/walls/thumbs_3t/3794.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                {/* Movie details */}
                <div className="md:col-span-3 mt-6 md:mt-0 text-center md:text-left">
                  <div className="text-white">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                      Panda Plan
                    </h2>
                    <div className="flex flex-wrap justify-center md:justify-start items-center mt-2 text-gray-300 text-sm md:text-base">
                      <span>2024</span>
                      <span className="mx-2">|</span>
                      <span>1h 20min</span>
                      <span className="mx-2">|</span>
                      <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
                        PG-13
                      </span>
                      <span className="mx-2">|</span>
                      <span>Animation, Adventure</span>
                    </div>

                    {/* Rating */}
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
                        <span className="ml-1 text-white font-bold">8.5</span>
                        <span className="mx-1 text-gray-400">/</span>
                        <span className="text-gray-400">10</span>
                      </div>

                      <div className="text-gray-300 text-sm">
                        <span>167.5K votes</span>
                      </div>
                    </div>

                    {/* Short description */}
                    <p className="mt-4 text-gray-300 text-sm md:text-base max-w-3xl mx-auto md:mx-0">
                      <span className="font-bold text-white ">Overview :</span>{" "}
                      Two highly trained operatives grow close from a distance
                      after being sent to guard opposite sides of a mysterious
                      gorge. When an evil below emerges, they must work together
                      to survive what lies within.
                    </p>
                    <div className="mt-5">
                      <h3 className="text-2xl font-bold uppercase">
                        In this Movie
                      </h3>
                      <div className="">
                        <div className="mt-2 grid grid-cols-4 gap-5">
                          <img
                            className="w-full rounded-xl"
                            src="https://image.tmdb.org/t/p/w500/xVS9XiO9upp2SnWx6KpBYb79hLR.jpg"
                            alt=""
                          />
                          <img
                            className="w-full rounded-xl"
                            src="https://image.tmdb.org/t/p/w500/xVS9XiO9upp2SnWx6KpBYb79hLR.jpg"
                            alt=""
                          />
                          <img
                            className="w-full rounded-xl"
                            src="https://image.tmdb.org/t/p/w500/xVS9XiO9upp2SnWx6KpBYb79hLR.jpg"
                            alt=""
                          />
                          <img
                            className="w-full rounded-xl"
                            src="https://image.tmdb.org/t/p/w500/xVS9XiO9upp2SnWx6KpBYb79hLR.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
