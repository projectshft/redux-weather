import axios from "axios";

//variables
export const MAKE_DEFAULT = "MAKE_DEFAULT";
export const FETCH_DEFAULT = "FETCH_DEFAULT";

//action creators
export const makeDefaultCity = () => {
  return {
    type: MAKE_DEFAULT,
    payload: localStorage.getItem("city"),
  };
};

export const loadDefaultCity = (city) => {
  const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

  const request = axios.get(
    `${ROOT_URL}${city}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHER_API}`
  );

  return {
    type: FETCH_DEFAULT,
    payload: request,
  };
};
