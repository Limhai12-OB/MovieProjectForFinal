import { Link } from "react-router";

export default function ReasonPlan() {
  return (
    <>
      <section className="container mx-auto px-4">
        <main>
          <div className="py-6">
            <h1 className="font-bold text-2xl md:text-3xl uppercase">
              Why join with Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10">
            <div className="bg-white/10 backdrop-blur-xl p-4 md:p-5 rounded-xl h-full duration-500 scale-105 hover:scale-95">
              <h2 className="text-xl font-bold mb-2">
                Premium Viewing Quality
              </h2>
              <p className="text-gray-400">
                Experience movies in stunning clarity. Our membership unlocks
                access to high-definition (HD) and 4K streaming, delivering a
                cinematic experience in the comfort of your own home.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-4 md:p-5 rounded-xl h-full duration-500 scale-105 hover:scale-95">
              <h2 className="text-xl font-bold mb-2">
                Early Access to New Releases
              </h2>
              <p className="text-gray-400">
                Be the first to watch highly anticipated films before they're
                available to the general public. Our members enjoy exclusive
                early access to a curated selection of new releases.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-4 md:p-5 rounded-xl h-full duration-500 scale-105 hover:scale-95">
              <h2 className="text-xl font-bold mb-2">Ad-Free Streaming</h2>
              <p className="text-gray-400">
                Enjoy uninterrupted movie nights. Our membership provides a
                completely ad-free streaming experience, so you can immerse
                yourself in the story without distractions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-4 md:p-5 rounded-xl h-full duration-500 scale-105 hover:scale-95">
              <h2 className="text-xl font-bold mb-2">
                Personalized Recommendations
              </h2>
              <p className="text-gray-400">
                Discover your next favorite film. Our advanced recommendation
                engine learns your preferences and suggests movies tailored to
                your taste, saving you time and effort.
              </p>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-4">
              <Link to="/payment">
                <div className="bg-white/20 hover:bg-white/30 backdrop-blur-xl text-center p-4 md:p-5 rounded-xl transition-colors duration-300">
                  <p className="font-bold px-6 py-2">Join Us</p>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
