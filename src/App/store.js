import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../Features/api/apiSlice';
import citiesReducer from '../Features/city/citySlice';

export default configureStore({
  reducer: {
    cities: citiesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
