import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCurrentWeatherByCity = createAsyncThunk('currentWeather/fetchByCity', async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=371e007761abd9ab85f149c680e677ac&units=imperial`
  )
    .then((res) => res.json())
    .catch((err) => err);
  return response;
});

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState: {
    currentCityData: null,
    previousCities: [],
    loading: 'idle',
  },
  reducers: {
    addCity: (state, action) => {
      state.currentCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentWeatherByCity.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchCurrentWeatherByCity.fulfilled, (state, action) => {
      if (action.payload.cod === '404') {
        state.loading = 'not-found';
      } else {
        state.currentCityData = action.payload;
        state.previousCities.push(action.meta.arg);
        state.loading = 'success';
      }
    });
    builder.addCase(fetchCurrentWeatherByCity.rejected, (state) => {
      state.loading = 'rejected';
    });
  },
});

export default currentWeatherSlice.reducer;
