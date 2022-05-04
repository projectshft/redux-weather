import { FETCH_CITY } from "../actions";
import _ from 'lodash';

//No real advantage to normalizing this data the way it's being used in the app in its current state, but I wanted practice with it and it could be useful if the app was expanded to allow individual pages for each city if desired
const DEFAULT_STATE = {
    // cities: []
    entries: {},
    order: []
}

const citiesReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_CITY:
            let response = action.payload;

            let newCity = undefined;
            if(response) {
                newCity = {
                    // id: response.data.city.id,
                    id: response.data.city._id,
                    name: response.data.city.name,
                    // weather: response.data.list
                    weather: response.data.list.map(item => {
                        return {
                            temp: 1.8 * (item.main.temp - 273) + 32,
                            pressure: item.main.pressure,
                            humidity: item.main.humidity
                        }
                    }),
                    averages: {
                        avgTemp: Math.round(response.data.list.reduce((acc, obj) => acc + obj.main.temp, 0) / response.data.list.length),
                        avgPress: Math.round(response.data.list.reduce((acc, obj) => acc + obj.main.pressure, 0) / response.data.list.length),
                        avgHum: Math.round(response.data.list.reduce((acc, obj) => acc + obj.main.humidity, 0) / response.data.list.length)
                    }
                }
            }
            return {
                // cities: newCity ? _.unionWith([...state.cities], [newCity], _.isEqual) : [...state.cities]
                // entries: newCity ? {...state.entries, [action.payload.data._id]: newCity} : [...state.cities],
                entries: newCity ? {...state.entries, [action.payload.data._id]: newCity} : {...state.entries},
                order: newCity ? _.unionWith([...state.order], [newCity], _.isEqual) : [...state.order]
            }
        default:
            return state;
    }
}

export default citiesReducer;