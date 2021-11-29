import { ADD_CITY } from '../actions';

const DEFAULT_STATE = {
  cityList: [],
};

const parseCity = (data) => {
  const newCity = {
    name: data.city.name,
    temperature: [],
    avgTemp: '',
    pressure: [],
    avgPressure: '',
    humidity: [],
    avgHumidity: '',
  };
  const average = (array) => array.reduce((a, b) => a + b) / array.length;

  for (let i = 0; i < data.list.length; i += 1) {
    newCity.temperature.push(((data.list[i].main.temp - 273.15) * 9) / 5 + 32);
    newCity.humidity.push(data.list[i].main.humidity);
    newCity.pressure.push(data.list[i].main.pressure);
  }

  newCity.avgTemp = Math.round(average(newCity.temperature));
  newCity.avgHumidity = Math.round(average(newCity.humidity));
  newCity.avgPressure = Math.round(average(newCity.pressure));

  return newCity;
};

const citiesReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_CITY: {
      const cityToAdd = parseCity(action.payload.data);
      return {
        cityList: [cityToAdd, ...state.cityList],
      };
    }
    default:
      return state;
  }
};

export default citiesReducer;
