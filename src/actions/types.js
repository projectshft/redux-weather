export const FETCH_WEATHER_DATA = "FETCH_WEATHER_DATA";
export const FETCH_WEATHER_DATA_SUCCESS = "FETCH_WEATHER_DATA_SUCCESS";
export const FETCH_WEATHER_DATA_FAILURE = "FETCH_WEATHER_DATA_FAILURE";

export function fetchWeatherData(data) {
    return {
        type: FETCH_WEATHER_DATA,
        data
    }
}
