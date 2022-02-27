import { FETCH_WEATHER, DELETE_WEATHER } from '../actions';

const parseApiData = (data) => {
  const parsedData = {
    id: data.city.id,
    city: data.city.name,
    tempList: [],
    pressureList: [],
    humidityList: [],
  };

  for (let i = 7; i < 40; i += 8) {
    const forecast = data.list[i];

    parsedData.tempList.push(forecast.main.temp);
    parsedData.pressureList.push(forecast.main.pressure);
    parsedData.humidityList.push(forecast.main.humidity);
  }
  return parsedData;
};

const ReducerMain = (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCH_WEATHER:
      return [...state, parseApiData(payload.data)];
    case DELETE_WEATHER:
      return state;
    default:
      return state;
  }
};

export default ReducerMain;
