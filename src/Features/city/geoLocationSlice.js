import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGeoLocation = createAsyncThunk('geoLocation/fetchGeoLocation', async () => {
  function getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  const position = await getPosition();

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=371e007761abd9ab85f149c680e677ac`
  )
    .then((res) => res.json())
    .catch((err) => err);
  return response;
});

export const geoLocationSlice = createSlice({
  name: 'geoLocation',
  initialState: {
    cityName: '',
    loading: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGeoLocation.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchGeoLocation.fulfilled, (state, action) => {
      state.cityName = action.payload[0].name;
      state.loading = 'success';
    });
    builder.addCase(fetchGeoLocation.rejected, (state) => {
      state.loading = 'rejected';
    });
  },
});

export default geoLocationSlice.reducer;
