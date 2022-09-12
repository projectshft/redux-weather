import { FETCH_WEATHER } from "../actions";

const WeatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      const citiesData = action.payload.data.list.map((info) => {
        return {
          temp: info.main.temp,
          pressure: info.main.pressure,
          humidity: info.main.humidity,
        };
      });
      const cityName = action.payload.data.city.name;
      let cityCurrent = {};
      citiesData.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          cityCurrent[key] = (cityCurrent[key] || []).concat([obj[key]]);
        });
      });
      cityCurrent["city"] = cityName;
      return [cityCurrent, ...state];

    default:
      return state;
  }
};

export default WeatherReducer;