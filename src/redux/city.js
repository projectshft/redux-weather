import axios from "axios";

//action creator
export function updateAPI(cityName) {
  return (dispatch) => {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        dispatch({ type: "GET_CITY", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        alert("Error! Please try again!");
      });
  };
}

// initial state my reducer function will utilize to build weather object.
const initialState = {
  weatherInfo: [],
};

// reducerFunction to update weather details.
export default function citySearchReducer(weather = initialState, action) {
  switch (action.type) {
    case "GET_CITY":
      // console.log(action.payload);
      return {
        weatherInfo: [
          ...weather.weatherInfo,
          {
            city: action.payload.city.name,
            temp: action.payload.list[0].main.temp,
            fiveDayTemp: [
              action.payload.list[0].main.temp,
              action.payload.list[8].main.temp,
              action.payload.list[16].main.temp,
              action.payload.list[24].main.temp,
              action.payload.list[32].main.temp,
            ],
            pressure: action.payload.list[0].main.pressure,
            fiveDayPressure: [
              action.payload.list[0].main.pressure,
              action.payload.list[8].main.pressure,
              action.payload.list[16].main.pressure,
              action.payload.list[24].main.pressure,
              action.payload.list[32].main.pressure,
            ],
            humidity: action.payload.list[0].main.humidity,
            fiveDayHumidity: [
              action.payload.list[0].main.humidity,
              action.payload.list[8].main.humidity,
              action.payload.list[16].main.humidity,
              action.payload.list[24].main.humidity,
              action.payload.list[32].main.humidity,
            ],
          },
        ],
      };
    default:
      return weather;
  }
}
