import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axiosInstance";
import API_ENDPOINTS from "../api/apiEndpoints";



export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (category) => {
    const response = await axios.get(API_ENDPOINTS[category]);
    return { category, data: response.data.results };
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    trending: [],
    airingToday: [],
    onTheAir: [],
    popular: [],
    topRated: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload.category === "TRENDING") {
          state.trending = action.payload.data;
        }
        if (action.payload.category === "AIRING_TODAY") {
          state.airingToday = action.payload.data;
        } else if (action.payload.category === "ON_THE_AIR") {
          state.onTheAir = action.payload.data;
        } else if (action.payload.category === "POPULAR") {
          state.popular = action.payload.data;
        } else if (action.payload.category === "TOP_RATED") {
          state.topRated = action.payload.data;
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
