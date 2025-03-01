export default function ComingSoon() {
  const moviesoon = [
    {
      title: "Alarum",
      despcrition:
        "Two married spies caught in the crosshairs of an international intelligence network will stop at nothing to obtain a critical asset.",
      img: "https://image.tmdb.org/t/p/w500/v313aUGmMNj6yNveaiQXysBmjVS.jpg",
    },
    {
      title: "The Brutalist",
      despcrition:
        "Escaping post-war Europe, visionary architect László Toth arrives in America to rebuild his life, his work, and his marriage to his wife Erzsébet",
      img: "https://image.tmdb.org/t/p/w500/kItauiQa3jYG4qPLt2yWx6STDGh.jpg",
    },
    {
      title: "Gladiator II",
      despcrition:
        "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum ...",
      img: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    },
    {
      title: "Sniper: The Last Stand",
      despcrition:
        "To stop an arms dealer from unleashing a deadly superweapon, Ace sniper Brandon Beckett and Agent Zero are deployed to Costa Verde to lead a group of elite...",
      img: "https://image.tmdb.org/t/p/w500/TVvIyCsFCmLk9MRLbAZi4X8f32.jpg",
    },
  ];
  return (
    <>
      <section className="flex items-center justify-center">
        <main>
          <div>
            <h2 className="text-3xl font-bold dark:text-white text-black">
              Coming Soon
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
            {moviesoon.map((moviesoon) => (
              <div className="mt-10 bg-gray-700/30 w-80 rounded-lg ">
                <div className="p-3 ">
                  <img
                    src={moviesoon.img}
                    alt="poster"
                    className="w-80 object-cover rounded-lg"
                  />
                  <div className="flex items-center justify-between ">
                    <h2 className="font-bold text-2xl mt-5">
                      {moviesoon.title}
                    </h2>
                    <p className="bg-blue-800 px-5 py-2 mt-4 rounded-lg">Add</p>
                  </div>
                  <p className="mt-5">{moviesoon.despcrition}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
}
