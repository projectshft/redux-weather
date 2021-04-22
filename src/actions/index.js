export const FETCH_FORECAST = "FETCH_FORECAST";

const sampleData = {
  city: "Durham",
  temperatures: [5, 10, 5, 20, 2, 20, 15, 10],
  pressures: [5, 10, 5, 20, 2, 20, 15, 10],
  humidityPoints: [5, 10, 5, 20, 2, 20, 15, 10]
}

export const fetchForecast = () => {
  return {
    type: FETCH_FORECAST,
    payload: sampleData
  }
}