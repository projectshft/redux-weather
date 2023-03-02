import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTemp, getPres, getHum } from "../helperFunctions";


export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city) => {
  return fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d`).then((res) => res.json().then((data) => data.list))
})

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    temperature: [],
    pressure: [],
    humidity: [],
    status: null,
  },
  extraReducers: {
    [fetchWeather.pending]: (state, action) => {
      state.status = "loading"
    },
    [fetchWeather.fulfilled]: (state, {payload}) => {
      state.status = "success"
      state.temperature = getTemp(payload)
      state.pressure = getPres(payload)
      state.humidity = getHum(payload)
  },
  [fetchWeather.rejected]: (state, action) => {
    state.status = "failed"
  }
}
})

export default weatherSlice.reducer