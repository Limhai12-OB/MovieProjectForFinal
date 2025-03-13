export default function ContactUs() {
  return (
    <>
      <section className="flex justify-center items-center min-h-screen  py-12">
        <main>
          <div className="text-center">
            <h1 className=" text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
              Get in Touch
            </h1>
            <p>Have feedback or need some help? We'd love to hear from you</p>
          </div>
          <div className="bg-white/10 p-10 border border-white/30 rounded-2xl shadow-2xl mt-10 backdrop-blur-xl">
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6">
              <div className="GP">
                <label htmlFor="">E-MAIL</label>
                <div className="mt-2">
                  <input
                    type="email"
                    placeholder="your@gmail.com"
                    className="w-full px-25 py-3 bg-blue-900/40 p-3 rounded-lg border border-blue-700"
                  />
                </div>
              </div>
              <div className="GP">
                <label htmlFor="">NAME</label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-blue-900/40 p-3 rounded-lg border border-blue-700"
                  />
                </div>
              </div>
              <div className="GP">
                <label htmlFor="">PHONE</label>
                <div className="mt-2">
                  <input
                    type="number"
                    placeholder="123456789"
                    className="w-full px-4 py-3  bg-blue-900/40 p-3 rounded-lg border border-blue-700"
                  />
                </div>
              </div>
              <div className="GP">
                <label htmlFor="">TOPIC</label>
                <div className="mt-2">
                  <select className="w-full px-4 py-3 rounded-lg bg-blue-900/40 border border-blue-700/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option disabled selected className="bg-blue-900">
                      Select a topic
                    </option>
                    <option value="support" className="bg-blue-900">
                      Technical Support
                    </option>
                    <option value="sales" className="bg-blue-900">
                      Sales Inquiry
                    </option>
                    <option value="feedback" className="bg-blue-900">
                      Product Feedback
                    </option>
                    <option value="other" className="bg-blue-900">
                      Other
                    </option>
                  </select>
                </div>
              </div>
              <div className="GP col-span-2">
                <label className="">MESSAGE</label>
                <div className="mt-2">
                  <textarea
                    type="email"
                    placeholder="Tell us how can we help you..."
                    className="w-full px-2 py-2 bg-blue-900/40  rounded-lg border border-blue-700"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-blue-700 to-purple-700 px-6 py-2 font-bold rounded-xl ">
                Send Message
              </button>
              <p className="text-gray-300 mt-2">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <div className="text-blue-300 hover:text-white transition-colors cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="text-blue-300 hover:text-white transition-colors cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="text-blue-300 hover:text-white transition-colors cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
