import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

export default function PlanSection() {
  return (
    <section className="px-4 py-16 mx-auto max-w-7xl">
      <div className="max-w-3xl mx-auto mb-30">
        <h2 className="font-bold text-center text-3xl md:text-4xl">
          Choose your plan
        </h2>
        <p className="text-gray-400 text-center mt-3">
          Get your Premium account to explore with more features
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-5 ">
        {/* Silver Plan */}
        <div className="bg-gray-900 p-5 text-center rounded-4xl border border-gray-400 transition duration-300 hover:scale-105">
          <h2 className="font-bold text-3xl mt-8">Silver Plan</h2>
          <p className="text-gray-300 text-2xl mt-3">
            $4.99 <span className="text-sm">/month</span>
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
          <div className="lg:mt-30 mt-10">
            <Link
              to="/payment"
              className="bg-amber-500 text-black font-bold px-10 py-2 rounded-lg inline-block"
            >
              Subscribe Now
            </Link>
          </div>
        </div>

        {/* Gold Plan */}
        <div className="bg-gray-900 p-5 text-center lg:-mt-12 border border-amber-500 relative rounded-4xl transition duration-300 hover:scale-105">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 px-4 py-1 bg-amber-500 text-black rounded-full text-sm font-bold whitespace-nowrap">
            Most Popular
          </div>
          <h2 className="font-bold text-3xl mt-8 text-amber-400">Gold Plan</h2>
          <p className="text-gray-300 text-2xl mt-3">
            $14.99 <span className="text-sm">/month</span>
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
                Watch on 2 devices at a time
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Full movie library access
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
          <div className="lg:mt-25 mt-10">
            <Link
              to="/payment"
              className="bg-amber-500 text-black font-bold px-10 py-2 rounded-lg inline-block"
            >
              Subscribe Now
            </Link>
          </div>
        </div>

        {/* Platinum Plan */}
        <div className="bg-gray-900 p-5 text-center rounded-4xl border border-blue-500 transition duration-300 hover:scale-105">
          <h2 className="font-bold text-3xl mt-8 text-blue-500">
            Platinum Plan
          </h2>
          <p className="text-gray-300 text-2xl mt-3">
            $24.99 <span className="text-sm">/month</span>
          </p>
          <div className="mt-5 text-start ml-10">
            <ul className="space-y-5">
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                4K Ultra HD + HDR streaming
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Watch on 4 devices at a time
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faCheckDouble}
                />{" "}
                Full movie & exclusive content access
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
                Unlimited downloads for offline viewing
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
          <div className="mt-10">
            <Link
              to="/payment"
              className="bg-amber-500 text-black font-bold px-10 py-2 rounded-lg inline-block"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
