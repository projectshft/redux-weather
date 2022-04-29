import { FETCH_CITY } from "../actions";
import _ from 'lodash';

const DEFAULT_STATE = {
    cities: []
}

const citiesReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_CITY:
            // console.log('in city reducer');
            let response = action.payload;
            let newCity = {
                id: response.data.city.id,
                name: response.data.city.name,
                weather: response.data.list
            }
            console.dir(newCity);
            console.dir(state.cities);
            return {
                cities: _.union([...state.cities], [newCity])
                // cities: [...state.cities, newCity]
            }
        default:
            return state;
    }
}

export default citiesReducer;