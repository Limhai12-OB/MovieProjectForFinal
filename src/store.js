import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movie/movieSlice";
import authReducer from "./auth/authSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
  },
});
