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
                cities: newCity ? _.union([...state.cities], [newCity]) : [...state.cities]
            }
        default:
            return state;
    }
}

export default citiesReducer;