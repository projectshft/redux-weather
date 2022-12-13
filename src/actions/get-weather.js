import axios from "axios";
import { API_KEY } from '../Api';
import { useDispatch } from "react-redux";

// export const GET_WEATHER = {
//     PENDING: "GET_WEATHER_PENDING",
//     SUCCESS: "GET_WEATHER_SUCCESS",
//     REJECTED: "GET_WEATHER_REJECTED"
//   };

export const GET_WEATHER = 'GET_WEATHER';

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`;

// export const getWeather = (location) => async dispatch => {
//     dispatch ({type: GET_WEATHER.PENDING});
//     axios
//     .get(BASE_URL, {
//       params: {
//         q: location,
//       }
//     })
//     .then(response => 
//       dispatch({ type: GET_WEATHER.SUCCESS, payload: response.data })
      
//     )
//     .catch(err => {
//       console.log(err.reponse, err);
//       dispatch({ type: GET_WEATHER.REJECTED, payload: err.response })
//     });
// };



export const getWeather = (location) => {
  const url = `${BASE_URL}&q=${location}`;
  // const request = axios.get(url);

  const request = axios.get(url).then(function(response) {

  console.log(url);
  console.log(response.data);

  return {
    type: GET_WEATHER,
    payload: response.data
  }
}
)}











// export const getWeather = (location) =>  {
//     axios
//     .get(BASE_URL, {
//       params: {
//         q: location,
//       }
//     })

//     .then(response => {
//       console.log(response.data);
//       return { 
//         type: GET_WEATHER, 
//         payload: response.data 
//       }
//     })

//     .catch(err => {
//       console.log(err.reponse, err);
//     });
// };


