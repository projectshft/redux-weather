import { createSlice } from '@reduxjs/toolkit';

export const addForecastSlice = createSlice({
  name: 'searchForecast',
  initialState: {
    forecast: []
  },
  reducers: {
    add: (state, action) => {
      state.forecast.push(action.payload)
    }
  }
})

export const { add } = addForecastSlice.actions

export default addForecastSlice.reducer
