import { FETCH_CITY } from "../actions";
import _ from 'lodash';

const DEFAULT_STATE = {
  entries: {},
  order: []
};

const cityReducer = function(state = [], action) {

  switch (action.type) {
    case FETCH_CITY:
      const forecast = action.payload.data;
      // return forecast.list.map(function (p) {
      //   return {
      //     temperature: p.main.temp,
      //     pressure: p.main.pressure,
      //     humidity: p.main.humidity
      //   };
      // });
      const cityForecast = {
        city: forecast.city.name,
        forecast: forecast.list,
        temperature: forecast.list.map(function (p) {
          return p.main.temp
        }),
        pressure: forecast.list.map(function (p) {
          return p.main.pressure
        }),
        humidity: forecast.list.map(function (p) {
          return p.main.humidity
        })
      }

      console.log([cityForecast, ...state]);

      // return {
      //   entries: { ...state.entries, [action.payload.data._id]: forecast },
      //   order: _.union([...state.order], forecast)
      // };

      return [cityForecast, ...state];



    default: return state;
  }
};

export default cityReducer;