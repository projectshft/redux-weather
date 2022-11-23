import { FETCH_COORDINATES, FETCH_WEATHER } from "../actions";

const initialState = { weatherList: [] }

const reducer = function(state = initialState, action) {
    switch (action.type) {
      case FETCH_COORDINATES:
        state.weatherList.push(action.payload)
    };
}

export default reducer