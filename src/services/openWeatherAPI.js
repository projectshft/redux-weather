import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const APIKey = "c44eb17ad7f8bb0d37f00beae955a5fb";

export const openWeatherAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: ROOT_URL,
  }),
  endpoints: builder => ({
    getForecastData: builder.query({
      query: (city) => `${city}&appId=${APIKey}` 
    })
  })
})

export const { UseGetForecastData } = openWeatherAPI;
