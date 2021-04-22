import axios from "axios";
export const FETCH_FORECAST = "FETCH_FORECAST";

const sampleData = {
  name: "Durham",
  temperatures: [5, 10, 5, 20, 2, 20, 15, 10],
  pressures: [5, 10, 5, 20, 2, 20, 15, 10],
  humidityPoints: [5, 10, 5, 20, 2, 20, 15, 10]
}

export const fetchForecast = () => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=durham&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  const request = axios.get(url)

  return {
    type: FETCH_FORECAST,
    payload: request
  }
}