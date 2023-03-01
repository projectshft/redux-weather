import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city) => {
  const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d");
  return response.data;
});


