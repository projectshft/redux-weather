import axios from "axios";

export const FETCH_FORECAST = "FETCH_FORECAST";
export const FETCH_FORECAST_ERROR = "FETCH_FORECAST_ERROR";
const API_KEY = "9de0841aea702821eece6900aab8d8f1";
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`;

export async function fetchForecast(city) {
  const request = await axios.get(`${API_URL}&q=${city}`);
  
  if (request.data.cod === '404') {
    return {
      type: FETCH_FORECAST_ERROR,
      payload:'No city data found'
    };
  } else {
    return {
      type: FETCH_FORECAST,
      payload: request
  }}; 
}

// technique #4...using try/catch. Invalid search still returns unhandled rejection error. Can't read 'list' in forecast-reducer file
// export function fetchForecast(city) {
//   const request = axios.get(`${API_URL}&q=${city}`);
//   debugger;
//   try {
//     return {
//       type: FETCH_FORECAST,
//       payload: request,
//     };
//   } catch (error) {
//     return {
//       type: FETCH_FORECAST_ERROR,
//       payload: "City name not found",
//     };
//   }
// }

// technique #1...using async/await. Invalid search still returns unhandled rejection error. Can't read 'list' in forecast-reducer file. Modified 'fetchedForecast' but then my page won't render the valid city searches
// export async function fetchForecast(city) {
//   const request = await axios.get(`${API_URL}&q=${city}`);
//     if (request.data === '404') {
//       return {
//         type: FETCH_FORECAST_ERROR,
//         payload:'No city data found'
//       }
//       } else {
//         return {
//           type: FETCH_FORECAST,
//           payload: request
//       }


// technique #5 
// async function fetchForecast(city) {
//   const request = axios.get(`${API_URL}&q=${city}`);
//   return {
//     type: FETCH_FORECAST,
//     payload: request,
//   };
// }

// async function fetchForecastError(error) {
//   return {
//     type: FETCH_FORECAST_ERROR,
//     payload: (error = "Please enter a valid city"),
//   };
// }

// // this code is not even being read by the browser
// try {
//   const response = fetchForecast();
//   fetchForecast();
//   if (response.data.cod === "200") {
//     return fetchForecast();
//   }
// } catch (error) {
//   fetchForecastError();
// }

// export { fetchForecast, fetchForecastError };