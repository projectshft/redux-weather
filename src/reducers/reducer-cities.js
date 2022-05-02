import { FETCH_CITY } from "../actions";
import _ from 'lodash';

const DEFAULT_STATE = {
    cities: []
}

const citiesReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_CITY:
            let response = action.payload;

            let newCity = undefined;
            if(response) {
                newCity = {
                    id: response.data.city.id,
                    name: response.data.city.name,
                    weather: response.data.list
                }
            }
            return {
                cities: newCity ? _.union([...state.cities], [newCity]) : [...state.cities]
            }
        default:
            return state;
    }
}

export default citiesReducer;