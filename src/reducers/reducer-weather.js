import { FETCH_WEATHER } from "../actions";

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
      return {
        tempArray: tempCollection,
        humityArray: humityCollection,
        pressureArray: pressureCollection
      };
    default:
      return state;
  }
};

export default weatherReducer;