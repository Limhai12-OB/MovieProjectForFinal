import React from "react";
import { Link } from "react-router";

export default function Error() {
  return (
    <>
      <section class="bg-no-repeat relative w-screen bg-cover bg-[url('https://pub-f354ec240bea480db7320bd0e29d972e.r2.dev/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png')]">
        <div className="bg-black/80 inset-0 absolute"></div>
        <div class="container flex items-center min-h-screen px-6 py-12 mx-auto ">
          <div class="flex flex-col items-center max-w-sm mx-auto text-center bg-white/10 rounded-2xl backdrop-blur-sm p-10">
            <p class="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">
              The page you are looking for doesn't exist. Here are some helpful
              links:
            </p>

            <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <Link to="/">Go back</Link>
              </button>

              <Link
                to="/"
                class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
              >
                Take me home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
