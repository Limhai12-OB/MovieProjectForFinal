import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("/movie/fetch", async () => {
  try {
    let response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=aacdbe83dedab8fc913bd72adf3fdbad"
    );
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
});
export const fetchMoviesDetail = createAsyncThunk(
  "/movie/fetchdetail",
  async (movieId) => {
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=aacdbe83dedab8fc913bd72adf3fdbad`
      );
      return await response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
