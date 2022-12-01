import axios from "axios";
import { API_KEY } from '../Api';

const GET_WEATHER = {
    PENDING: "GET_WEATHER_PENDING",
    SUCCESS: "GET_WEATHER_SUCCESS",
    REJECTED: "GET_WEATHER_REJECTED"
  };

const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const getWeather = (location = "pittsburgh") => async dispatch => {
    dispatch ({type: GET_WEATHER.PENDING});
    axios
    .get(BASE_URL, {
      params: {
        q: location,
      }
    })
    .then(response => 
      dispatch({ type: GET_WEATHER.SUCCESS, payload: response.data })
    )
    .catch(err => {
      console.log(err.reponse, err);
      dispatch({ type: GET_WEATHER.REJECTED, payload: err.response })
    });
};

export default getWeather;