import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieAction";

const initialState = {
  data: {},
  status: "",
  error: {},
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
      });
  },
});

export default MovieSlice.reducer;
