// eslint-disable-next-line import/no-extraneous-dependencies
import {
  combineReducers,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'e762b32d14efd802e7f067526402633f';

const initialState = {
  forecasts: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchFiveDayForecast = createAsyncThunk(
  'reducers/fetchFiveDayForecast',
  async (city, thunkApi) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
      );
      return response;
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return thunkApi.rejectWithValue({ err: 'Error with forecast query' });
    }
  }
);

const forecastSlice = createSlice({
  name: 'forecasts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiveDayForecast.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFiveDayForecast.fulfilled, (state, action) => {
        const tempArray = action.payload.data.list.map(
          (item) => item.main.temp
        );
        const pressureArray = action.payload.data.list.map(
          (item) => item.main.pressure
        );
        const humidityArray = action.payload.data.list.map(
          (item) => item.main.humidity
        );
        const searchReturnData = {
          city: action.payload.data.city,
          temp: tempArray,
          pressure: pressureArray,
          humidity: humidityArray,
        };
        state.forecasts = [searchReturnData];
        state.succeeded = true;
        state.error = undefined;
      })
      .addCase(fetchFiveDayForecast.rejected, (state, action) => {
        state.data = undefined;
        state.failed = true;
        state.error = action?.payload;
      });
  },
});

export default forecastSlice.reducer;
