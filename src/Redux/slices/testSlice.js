import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTemp, getPres, getHum } from "../helperFunctions";


export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city) => {
  return city && fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d`).then((res) => res.json().then((data) => data))
})




const rainSlice = createSlice({
  name: "weatherTwo",
  initialState: {
    value: [],
    temperature: [],
    status: null,
  },
  reducers: {
    // Action add
    temp: (state, action) => {
      state.temperature.push(getTemp(action.payload))
    },
    pressure: (state, action) => {
      state.value.push(getPres(action.payload))
    },
    humidity: (state, action) => {
      state.value.push(getHum(action.payload))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });
  }
});

export const {temp, pressure, humidity} = rainSlice.actions;

export default rainSlice.reducer