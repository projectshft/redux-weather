import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types';
import {createSlice} from '@reduxjs/toolkit';

export const temperatureSlice = createSlice({
  name: 'temperature',
  initialState: {
    temp: 'temperature'
  },
  reducers: {
    addTemperature: (state, action) => {
      //  could possibly be action.payload below
      state.temp = action.temperature;
    }
  } 
});

//  addTemperature is the action you will use.  Need to dispatch the action
export const {addTemperature} = temperatureSlice.actions;
export default temperatureSlice.reducer;