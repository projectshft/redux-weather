import config from "../../config";
import axios from "axios";
const key = config.MY_API_KEY

export const CITY_SEARCH = "CITY_SEARCH";

export function searchCity(city) {
  return (dispatch) => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=imperial&appid=${key}`)
      .then((response) => {
        dispatch({
          type: CITY_SEARCH,
          payload: response.data
        });
      })
      .catch((error) => {
        console.error(error)
      });
  };
};