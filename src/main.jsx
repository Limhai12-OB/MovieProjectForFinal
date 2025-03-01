import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { MainLayout } from "./layout/MainLayout.jsx";
import Error from "./page/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./page/Home.jsx";
import Movie from "./page/Movie.jsx";
import Character from "./page/character.jsx";
import LoginPage from "./page/SignIn.jsx";
// import { store } from "./store.js";
import { Provider } from "react-redux";
import { store } from "./store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "character",
        element: <Character />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/sign-in",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
