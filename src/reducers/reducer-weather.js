import { FETCH_WEATHER} from "../actions";

const weatherReducer = function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:

      const targetArray = action.payload.data.list;
      
      const tempCollection = [];
      const humityCollection = [];
      const pressureCollection = [];

      const KelToFahConversion = (temp) => {
        const fTemp = (1.8 * (temp - 273)) + 32;
        return Math.round(fTemp * 100) / 100;
      }

      targetArray.forEach(timeInterval => {
        tempCollection.push(KelToFahConversion(timeInterval.main.temp));
        humityCollection.push(timeInterval.main.humidity);
        pressureCollection.push(timeInterval.main.pressure);
      });

      const cityName = action.payload.data.city.name;

      const average = (array) => Math.round(array.reduce((a,b) => a + b) / array.length);

      console.log(action.payload)
      return [...state, {
        city: cityName, 
        tempArray: tempCollection,
        humidityArray: humityCollection,
        pressureArray: pressureCollection,
        avgTemp: average(tempCollection) + ' F',
        avgHumidity: average(humityCollection) + '%',
        avgPressure: average(pressureCollection) + 'hPa'
      }];
    default:
      return state;
  }


};

export default weatherReducer;