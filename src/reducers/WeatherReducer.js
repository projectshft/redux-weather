import { CHECK_LOCAL, FETCH_WEATHER } from "../actions";

const WeatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
    case CHECK_LOCAL:
      const weatherInfo = action.payload.data.list.map((info) => {
        return {
          temp: info.main.temp,
          pressure: info.main.pressure,
          humidity: info.main.humidity,
        };
      });
      const cityInfo = action.payload.data.city.name;
      let item = {};
      weatherInfo.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          item[key] = (item[key] || []).concat([obj[key]]);
        });
      });
      item["city"] = cityInfo;
      return [item, ...state];

    default:
      return state;
  }
};

export default WeatherReducer;
