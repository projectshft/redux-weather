import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_AVERAGE = "FETCH_AVERAGE";

export function fetchWeather(city) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=40a22fcb01995614a7b68804376359eb`);
      dispatch({
        type: FETCH_WEATHER,
        payload: response.data
      });
    } catch (error) {
      // Handle error here
      console.log(error);
    }
  };
}

export function fetchAvg(math) {
  return {
    type: FETCH_AVERAGE,
    payload: math
  };
}