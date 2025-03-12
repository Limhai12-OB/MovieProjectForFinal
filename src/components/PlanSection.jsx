import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

export default function PlanSection() {
  return (
    <section className="px-4 py-16 mx-auto max-w-7xl">
      <div className="max-w-3xl mx-auto mb-25">
        <h2 className="font-bold text-center text-3xl md:text-4xl">
          Choose your plan
        </h2>
        <p className="text-gray-400 text-center mt-3">
          Get your Premium account to explore with more differences
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-5">
        <div className="bg-gray-900 2xl:h-[480px] lg:h-[550px] md:h-[500px] h-[480px] text-center rounded-4xl border-5 border-gray-400  duration-400 hover:scale-105">
          <h2 className="font-bold text-3xl mt-8">Silver Plan</h2>
          <p className="text-gray-300 text-2xl mt-3">
            {" "}
            $4.99 <span className="text-sm">/month </span>
          </p>
          <div className="mt-5 text-start ml-10">
            <ul className="space-y-5">
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                HD streaming (720p)
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Watch on 1 device at a time
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Access to basic movie library
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Limited new releases
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Ad-supported streaming
              </li>
            </ul>
          </div>
          <button className="bg-amber-500 text-black font-bold px-10 cursor-pointer py-2 rounded-2xl mt-13">
            {" "}
            Subscribe Now
          </button>
        </div>
        <div className="bg-gray-900 2xl:h-[533px] lg:h-[600px] md:h-[570px] sm:h-[500px] h-[520px]  text-center lg:-mt-12 md:-mt-0 -mt-0 border-5 border-amber-500  relative rounded-4xl  duration-400 hover:scale-105">
          <div className="absolute ml-35 -mt-4  px-4 py-1 bg-amber-500 text-black rounded-full text-sm font-bold">
            Most Popular
          </div>
          <h2 className="font-bold text-3xl mt-8 text-amber-400">Gold Plan</h2>
          <p className="text-gray-300 text-2xl mt-3">
            {" "}
            $14.99 <span className="text-sm">/month </span>
          </p>
          <div className="mt-10 text-start ml-10">
            <ul className="space-y-5">
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Full HD streaming (1080p)
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Watch on 2 devices at a time time
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Full movie library access library
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Same-day new releases
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Ad-free streaming
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Download movies for offline viewing
              </li>
            </ul>
          </div>
          <button className="bg-amber-500 text-black font-bold px-10 cursor-pointer py-2 rounded-2xl mt-10  ">
            {" "}
            Subscribe Now
          </button>
        </div>
        <div className="bg-gray-900 2xl:h-[480px] lg:h-[550px] md:h-[500px] h-[520px] text-center  rounded-4xl border-5 border-blue-500  duration-400 hover:scale-105">
          <h2 className="font-bold text-3xl mt-2 text-blue-700">
            Platinum Plan
          </h2>
          <p className="text-gray-300 text-2xl mt-3">
            {" "}
            $24.99 <span className="text-sm">/month </span>
          </p>
          <div className="mt-2 text-start ml-10">
            <ul className="space-y-4">
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                4K Ultra HD + HDR streaming (1080p)
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Watch on 4 devices at a time time time
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Full movie & exclusive content access access library
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Early access to premieres
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Ad-free streaming
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Unlimited downloads offline viewing
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Access to virtual movie premieres
              </li>
            </ul>
          </div>
          <button className="bg-amber-500 text-black font-bold px-10 cursor-pointer py-2 rounded-2xl mt-3">
            {" "}
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}
