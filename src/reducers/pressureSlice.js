//  code this just like temperatureSlice
import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types';
import {createSlice} from '@reduxjs/toolkit';

export const pressureSlice = createSlice({
  name: 'pressure',
  initialState: {
    press: 'pressure'
  },
  reducers: {
    addPressure: (state, action) => {
      //  could possibly be action.payload below
      state.press = action.pressure;
    }
  } 
});

//  addTemperature is the action you will use.  Need to dispatch the action
export const {addPressure} = pressureSlice.actions;
export default pressureSlice.reducer;