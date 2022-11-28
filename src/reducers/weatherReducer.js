import * as actions from "../actions/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      const name = action.payload.data.city.name;
      const temp = action.payload.data.list.map((item) => {
        return item.main.temp;
      });
      const sumTemp = temp.reduce((a, b) => a + b, 0);
      const avgTemp = Math.round(sumTemp / temp.length);
      const pressure = action.payload.data.list.map((item) => {
        return item.main.pressure;
      });
      const sumPres = pressure.reduce((a, b) => a + b, 0);
      const avgPres = Math.round(sumPres / pressure.length);
      const humidity = action.payload.data.list.map((item) => {
        return item.main.humidity;
      });
      const sumHum = humidity.reduce((a, b) => a + b, 0);
      const avgHum = Math.round(sumHum / humidity.length);
      const data = {
        name,
        avgTemp,
        temp,
        pressure,
        avgPres,
        humidity,
        avgHum,
      };
      return [...state, data];
    default:
      return state;
  }
};

export default reducer;
