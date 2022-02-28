import { FETCH_WEATHER, DELETE_WEATHER } from '../actions';

const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;

const parseApiData = (data) => {
  const parsedData = {
    id: data.city.id.toString(),
    city: data.city.name,
    tempList: [],
    pressureList: [],
    humidityList: [],
    tempAvg: null,
    pressureAvg: null,
    humidityAvg: null,
  };

  for (let i = 7; i < 40; i += 8) {
    const forecast = data.list[i];

    parsedData.tempList.push(forecast.main.temp);
    parsedData.pressureList.push(forecast.main.pressure);
    parsedData.humidityList.push(forecast.main.humidity);
  }

  parsedData.tempAvg = Math.floor(average(parsedData.tempList));
  parsedData.pressureAvg = Math.floor(average(parsedData.pressureList));
  parsedData.humidityAvg = Math.floor(average(parsedData.humidityList));

  return parsedData;
};

const ReducerMain = (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCH_WEATHER:
      return [...state, parseApiData(payload.data)];
    case DELETE_WEATHER:
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};

export default ReducerMain;
