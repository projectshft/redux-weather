import * as actions from "./actionTypes";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

export const createItem = (city) => {
  const request = axios.get(
    `${ROOT_URL}${city}&units=imperial&appid=${API_KEY}`
  );

  return {
    type: actions.ADD_ITEM,
    payload: request,
  };
};
