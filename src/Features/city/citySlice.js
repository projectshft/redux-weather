import { createSlice } from '@reduxjs/toolkit';

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    currentCity: 'austin',
    previousCities: ['Austin'],
  },
  reducers: {
    addCity: (state, action) => {
      state.previousCities.push(action.payload);
      if (state.previousCities.length > 5) {
        state.previousCities.shift();
      }
    },
  },
});

export const { addCity } = citiesSlice.actions;

export default citiesSlice.reducer;
