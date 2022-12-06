import axios from "axios";

//action creator
export function updateAPI(cityName) {
  return (dispatch) => {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        // console.log(response.data);
        // console.log("the pressure is:", response.data.list[0].main.pressure);
        // console.log("the humidity is:", response.data.list[0].main.humidity);
        // console.log("the 5 day forecast is:");
        // console.log(response.data.list[0].main.temp);
        // console.log(response.data.list[8].main.temp);
        // console.log(response.data.list[16].main.temp);
        // console.log(response.data.list[24].main.temp);
        // console.log(response.data.list[32].main.temp);

        dispatch({ type: "GET_CITY", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        alert("Please try again!");
      });
  };
}

const otherInitialState = {
  weatherInfo: [
    // {
    //   city: "Sandusky",
    //   temp: 45,
    //   pressure: 87,
    //   humidity: 40,
    // },
  ],
};

// state
// const initialState = {
//   weatherInfo: [testObj, testObj1],
// };

//previous set up for reducer state to concatenate weather data.
// city: weather.city.concat([action.payload])

// weatherInfo: [...weather.weatherInfo, action.payload],

// reducerFunction to update weather details.

export default function citySearchReducer(weather = otherInitialState, action) {
  switch (action.type) {
    case "GET_CITY":
      // console.log(action.payload);
      return {
        // ...weather,
        weatherInfo: [
          ...weather.weatherInfo,
          {
            city: action.payload.city.name,
            temp: action.payload.list[0].main.temp,
            pressure: action.payload.list[0].main.pressure,
            humidity: action.payload.list[0].main.humidity,
          },
        ],
      };
    default:
      return weather;
  }
}
