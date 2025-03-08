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
    <div className="w-full py-6 px-4 md:px-8 sticky top-0 z-50">
      <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <Link
              to="/"
              className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white"
            >
              TVC - Welcome to the world of Movies
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Explore the latest releases and classic favorites.
            </p>
          </div>
          <div className="flex justify-end  items-center">
            {isAuthenticated ? (
              <AvatarMenue avatar={profile?.avatar} />
            ) : (
              <Link
                to="/sign-in"
                className="bg-blue-800 text-white font-bold px-4 py-2 rounded-xl"
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
