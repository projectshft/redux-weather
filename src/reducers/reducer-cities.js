import { FETCH_CITY } from "../actions";
import _ from 'lodash';

const DEFAULT_STATE = {
    cities: []
}

const citiesReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_CITY:
            let newCity;
            return _.union([...state.cities], newCity)
        default:
            return state;
    }
}

export default citiesReducer;