import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { getProfile } from "../auth/authAction";

const AvatarMenue = ({ avatar }) => {
  const profileRef = useRef();
  return (
    <div className="relative border-t lg:border-none">
      <div className="">
        <button
          ref={profileRef}
          className="hidden w-10 h-10 outline-none rounded-full ring-offset-2   lg:focus:ring-2 lg:block"
        >
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default function Header() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const profile = useSelector((state) => state.auth.profile);

  useEffect(() => {
    console.log("testing");
    dispatch(getProfile(accessToken));
  }, [isAuthenticated]);

  return (
    <div className=" py-6 px-4 md:px-8 sticky top-0 z-50 md:col-span-2 ">
      <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 md:p-6  ">
        <div className="flex items-center justify-between ">
          <div>
            <h3 className="text-3xl  font-bold text-gray-800 dark:text-white">
              TVC - Welcome to the world of Movies
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Explore the latest releases and classic favorites.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated && isAuthenticated ? (
              <AvatarMenue avatar={profile && profile.avatar} />
            ) : (
              <Link
                to={"/sign-in"}
                className="bg-blue-800 font-bold px-4 py-2 rounded-xl"
              >
                Log in
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
