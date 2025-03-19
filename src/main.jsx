import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainLayout } from "./layout/MainLayout.jsx";
import Error from "./page/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./page/Home.jsx";
import Movie from "./page/Movie.jsx";
import LoginPage from "./page/SignIn.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import MovieDetail from "./page/MovieDetails.jsx";
import ContactUs from "./page/contactus.jsx";
import PaymentSec from "./page/Payment.jsx";
import SettingPage from "./page/Setting.jsx";

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
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/payment",
        element: <PaymentSec />,
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
