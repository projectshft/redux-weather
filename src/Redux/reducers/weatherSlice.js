import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../actions/apiCall";

const initialState = {
  weather: null
}

export const weatherSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather = action.payload;
    })
  }
})

