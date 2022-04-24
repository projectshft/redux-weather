import { FETCH_CITIES } from '../actions';

const defaultState = [
  {
    cityName: 'Chetek',
    temps: [
      54,
      53,
      59,
      60,
      62,
      58,
      40
    ],
    pressure: [
      44,
      43,
      22,
      65,
      34,
      37,
      30
    ],
    humidity: [
      5,
      3,
      6,
      20,
      34,
      40,
      32
    ],
    averageTemp: 50
  },
  {
    cityName: 'Moscow',
    temps: [43,43,43,4,323,243,543],
    pressure: 39,
    humidity: 20,
    averageTemp: 89
  }
]

const CitiesReducer = function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_CITIES:
      debugger;
      return state;
    default:
      return state;

  }
}

export default CitiesReducer;