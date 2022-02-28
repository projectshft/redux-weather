import FETCH_WEATHER from './actions'


const weatherReducer = function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return 'I fetch weather';
    default:
      return state;
  }
};