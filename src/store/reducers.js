import { FETCH_WEATHER} from "../actions/actions";

const cityReducer = function (state = [], action) {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case FETCH_WEATHER:
      let temperature = [];
      let humidity = [];
      let pressure = [];
      let cityName = '';
      action.payload.data.list.map((section, index) => {
        temperature.push(section.main.temp)
        humidity.pudh(section.main.humidity)
        pressure.push(section.main.pressure)
        cityName = action.payload.data.cityName  
      });

      temperature = temperature.map((day) => Math.round(((day) - 273 * (9/5) + 32)))
      humidity = humidity.map((day) => Math.round(((day))) )
      pressure = pressure.map((day) => Math.round(((day))) )

      return [{
        cityName, temperature, humidity, pressure

      }, state]

      default:
      return state;
  };
};

export default cityReducer;