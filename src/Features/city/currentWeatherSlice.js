import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCurrentWeatherByCity = createAsyncThunk('currentWeather/fetchByCity', async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=371e007761abd9ab85f149c680e677ac&units=imperial`
  )
    .then((res) => res.json())
    .then((err) => err);
  return response;
});

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState: {
    currentCityData: null,
    previousCities: [],
  },
  reducers: {
    addCity: (state, action) => {
      state.currentCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentWeatherByCity.fulfilled, (state, action) => {
      state.currentCityData = action.payload;
      state.previousCities.push(action.meta.arg);
    });
  },
});

export default currentWeatherSlice.reducer;
