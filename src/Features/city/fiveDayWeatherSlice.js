import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchFiveDayWeatherByCity = createAsyncThunk('fiveDayWeather/fetchByCity', async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=371e007761abd9ab85f149c680e677ac&units=imperial`
  )
    .then((res) => res.json())
    .catch((err) => err);
  return response;
});

export const fiveDayWeatherSlice = createSlice({
  name: 'fiveDayWeather',
  initialState: {
    fiveDayData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFiveDayWeatherByCity.fulfilled, (state, action) => {
      state.fiveDayData = action.payload;
    });
  },
});

export default fiveDayWeatherSlice.reducer;
