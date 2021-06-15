import { SET_DEFAULT_CITY } from "../actions";

export const defaultCityReducer = function (
  state = localStorage.getItem("defaultCity"),
  action
) {
  switch (action.type) {
    case SET_DEFAULT_CITY:
      localStorage.setItem("defaultCity", action.payload);
      return action.payload;
    default:
      return state;
  }
};
