import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, fetchMoviesDetail } from "./movieAction";

const initialState = {
  data: {},
  status: "",
  error: {},
  detail: {},
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        //
        state.status = "PENDING";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        //
        state.status = "SUCCEED";
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        //
        state.status = "ERROR";
        state.error = action.error;
      })
      .addCase(fetchMoviesDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.status = "SUCCEDD";
      });
  },
});

export default MovieSlice.reducer;
