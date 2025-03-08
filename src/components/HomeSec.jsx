export default function TopRating() {
  return (
    <>
      <section className="container mx-auto">
        <main>
          <div className="mb-4">
            <h2 className="font-bold text-2xl uppercase">Top Rating Movies</h2>
          </div>
          <div
            className="bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images7.alphacoders.com/136/1364834.png')",
            }}
          >
            <div className="flex flex-col md:flex-row px-6 py-10 md:px-28  backdrop-blur-sm">
              <div>
                <img
                  className="w-64 md:w-72 lg:w-80 rounded-xl"
                  src="https://image.tmdb.org/t/p/w500/vGXptEdgZIhPg3cGlc7e8sNPC2e.jpg"
                  alt="Venom: The Last Dance movie poster"
                />
              </div>
              <div className="ml-5 max-w-md ">
                <h2 className="font-bold">Release Date</h2>
                <p>2024-10-22</p>
                <h2 className="font-bold mt-5">Movie Name</h2>
                <p>Venom: The Last Dance</p>
                <h2 className="font-bold mt-5">Overview</h2>
                <p>
                  Eddie and Venom are on the run. Hunted by both of their worlds
                  and with the net closing in, the duo are forced into a
                  devastating decision that will bring the curtains down on
                  Venom and Eddie's last dance.
                </p>
                <h2 className="font-bold mt-5">Actors</h2>
                <p>
                  Tom Hardy, Chiwetel Ejiofor, Juno Temple, Rhys Ifans, Stephen
                  Graham, Peggy Lu, Clark Backo, Alanna Ubach, Andy Serkis.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white mt-5"></div>
          <div
            className="bg-no-repeat bg-cover mt-5"
            style={{
              backgroundImage:
                "url('https://4kwallpapers.com/images/wallpapers/the-gorge-2025-2880x1800-20234.jpg')",
            }}
          >
            <div className="flex flex-col-reverse md:flex-row px-6 py-10 md:px-28 md:justify-end backdrop-blur-sm">
              <div className="mt-5 md:mt-0 md:mr-5 max-w-md md:text-right">
                <h2 className="font-bold">Release Date</h2>
                <p>2025-09-15</p>
                <h2 className="font-bold mt-5">Movie Name</h2>
                <p>The Gorge</p>
                <h2 className="font-bold mt-5">Overview</h2>
                <p>
                  Two strangers, trained to become elite government assassins,
                  discover that their true mission is to stop supernatural
                  creatures from entering our world through a gorge hidden in a
                  remote national park.
                </p>
                <h2 className="font-bold mt-5">Actors</h2>
                <p>
                  Miles Teller, Anya Taylor-Joy, Sigourney Weaver, Jeff
                  Goldblum, Michael Shannon, Cynthia Erivo, Daveed Diggs.
                </p>
              </div>
              <div>
                <img
                  className="w-64 md:w-72 lg:w-80 rounded-xl"
                  src="https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg"
                  alt="The Gorge movie poster"
                />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
