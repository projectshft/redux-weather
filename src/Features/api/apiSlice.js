import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';
import { addCity } from '../city/citySlice';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5' }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: () => ({
        url: 'forecast?q=atlanta&appid=371e007761abd9ab85f149c680e677ac',
      }),
    }),
  }),
});

export const { useGetWeatherQuery } = apiSlice;

// https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=371e007761abd9ab85f149c680e677ac
