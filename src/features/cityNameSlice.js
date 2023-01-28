import { createSlice } from "@reduxjs/toolkit";

const cityNameSlice = createSlice({
  name: 'cityName',
  initialState: {},
  reducer: {
    declareCityName: (state, action) => {
      return state.splice(0, 1, action.payload);
    }
  }
})

export const { declareCityName } = cityNameSlice.actions
export default cityNameSlice.reducer