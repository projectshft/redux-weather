import * as actions from "../actions/actionTypes";

const reducer = (state = [{}], action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      const name = action.payload.data.city.name;
      const temp = action.payload.data.list.map((item) => {
        return item.main.temp;
      });
      const pressure = action.payload.data.list.map((item) => {
        return item.main.pressure;
      });
      const humidity = action.payload.data.list.map((item) => {
        return item.main.humidity;
      });
      const data = {
        name,
        temp,
        pressure,
        humidity
      }
      return [...state, data];
    case actions.FETCH:
      return state;
    case actions.REMOVE_ITEM:
      return state;
    default:
      return state;
  }
};

export default reducer;
