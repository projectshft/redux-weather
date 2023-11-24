import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import forecastSlice from './reducers/forecastSlice';

const nonSerializedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: { forecasts: forecastSlice },
  initialState: [
    { city: '', forecastData: { temp: [], pressure: [], humidity: [] } },
  ],
  middleware: nonSerializedMiddleware,
});
