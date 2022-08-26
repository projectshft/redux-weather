import _ from 'lodash';
import { FETCH_FORECAST, FETCH_LOCATION } from '../actions';

const DEFAULT_STATE = {
  entries: {},
  order: [],
};

// eslint-disable-next-line default-param-last
const WeatherReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_FORECAST:
      return {
        entries: {
          ...state.entries,
          [action.payload.data.city.id]: action.payload.data,
        },
        order: _.union([...state.order, action.payload.data.city.id]),
      };
    default:
      return state;
  }
};

// eslint-disable-next-line default-param-last
const LocationReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        lat: action.payload.data.length > 0 ? action.payload.data[0].lat : null,
        lon: action.payload.data.length > 0 ? action.payload.data[0].lon : null,
        city: action.payload.data.length > 0 ? action.payload.data[0].name : '',
      };
    default:
      return state;
  }
};
export { WeatherReducer, LocationReducer };
