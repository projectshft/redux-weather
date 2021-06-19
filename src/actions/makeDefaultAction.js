import axios from "axios";
//variables
export const MAKE_DEFAULT = "MAKE_DEFAULT";
export const FETCH_DEFAULT_FORECAST = "FETCH_DEFAULT_FORECAST";
export const FETCH_CURRENT_WEATHER = "FETCH_CURRENT_WEATHER";
export const LOADING_DEFAULT = "LOADING_DEFAULT";

//action creators
export const makeDefaultCity = () => {
  return {
    type: MAKE_DEFAULT,
    payload: localStorage.getItem("city"),
  };
};

export const loadDefaultCityForecast = async (city) => {
  const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

  const request = await axios.get(
    `${ROOT_URL}${city}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHER_API}`
  );

  return {
    type: FETCH_DEFAULT_FORECAST,
    payload: request,
  };
};

export const loadDefaultCityCurrent = async (city) => {
  const ROOT_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

  const request = await axios.get(
    `${ROOT_URL}${city}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHER_API}`
  );

  return {
    type: FETCH_CURRENT_WEATHER,
    payload: request,
  };
};

export const loadIsLoading = () => {
  return {
    type: LOADING_DEFAULT,
  };
};
