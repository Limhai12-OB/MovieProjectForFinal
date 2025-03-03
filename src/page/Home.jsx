import ComingSoon from "../components/comingSoon";

import PopularM from "../components/MostView";

export default function HomePage() {
  return (
    <>
      <section className="relative  bg-no-repeat mt-10 m-18 rounded-3xl bg-cover bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')] px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="absolute inset-0 rounded-3xl  bg-black/70"></div>
        <div className="space-y-5 max-w-4xl mx-auto text-center relative">
          <h1 className="text-sm text-white font-medium">
            Enjoy your freetime here
          </h1>
          <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
            Welcome to the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              TVC Entertainment family. Your home for movies.
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Explore, connect, and enjoy. TVC Entertainment is your all-in-one
            destination for movie discovery, community, and effortless browsing.
          </p>
        </div>
      </section>
      <PopularM />
      <ComingSoon />
    </>
  );
}
