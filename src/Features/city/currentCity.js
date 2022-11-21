import { createSlice } from '@reduxjs/toolkit';

const currentCitySlice = createSlice({
  name: 'currentCity',
  initialState: {
    city: 'Austin',
    previousCity: ['Austin'],
  },
  reducers: {
    setCurrentCity: (state, action) => {
      state.city = action.payload;
    },
    addPreviousCity: (state, action) => {
      state.previousCity.unshift(action.payload);
      if (state.previousCity.length > 5) {
        state.previousCity.pop();
      }
    },
  },
});

export const { setCurrentCity, addPreviousCity } = currentCitySlice.actions;

export default currentCitySlice.reducer;
