import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export function Logout() {
  const logout = () => {
    dispatch(logout());
    Navigate("/sign-in");
  };
  return (
    <>
      <ul className="pt-4 pb-2 space-y-1 text-sm">
        <li>
          <Link
            rel="noopener noreferrer"
            onClick={logout}
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current text-white dark:text-gray-600"
            >
              <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
              <rect width="32" height="64" x="256" y="232"></rect>
            </svg>
            <span className="text-white">Logout</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default function SideBar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <section className="flex sticky top-0 z-50">
        <div className="lg:hidden p-3 ">
          <button onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        {/* Sidebar (Shown on larger screens, conditionally shown on smaller screens) */}
        <div
          className={`p-3 space-y-2 w-60 flex flex-col h-screen lg:flex ${
            isMobileMenuOpen ? "block" : "hidden" // Show/hide on mobile
          } lg:block`} // Added background color
        >
          <div className="flex items-center p-2 space-x-4"></div>
          <div>
            <Link to="/" className="text-[4rem] font-bold text-red-600 ">
              TVC
              <p className="text-2xl  text-gray-300">Entertainment</p>
            </Link>
          </div>
          <div className="divide-y divide-white dark:divide-gray-300 flex-grow overflow-y-auto mt-20">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {/* ... Your list items (Dashboard, Search, etc.) ... */}
              <li className="dark:bg-gray-100 dark:text-gray-900">
                <Link
                  to="/"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-white dark:text-gray-600"
                  >
                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                  </svg>
                  <span className="text-white dark:text-black">Home</span>
                </Link>
              </li>
              <li className="dark:bg-gray-100 dark:text-gray-900">
                <Link
                  to="/movie"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-white dark:text-gray-600"
                  >
                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                  </svg>
                  <span className="text-white dark:text-black">Movie</span>
                </Link>
              </li>
              <li className="dark:bg-gray-100 dark:text-gray-900">
                <Link
                  to="/contactus"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-white   dark:text-gray-600"
                  >
                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                  </svg>
                  <span className="text-white dark:text-black">Contact Us</span>
                </Link>
              </li>
            </ul>
            {isAuthenticated && isAuthenticated ? <Logout /> : <p></p>}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-200 h-screen w-[0.5px] m-5 lg:block hidden"></div>{" "}
      </section>
    </>
  );
}
