//Actions are plain JavaScript objects that have a type field.
//You can think of an action as an event that describes something that happened in the application.
//We normally put any extra data needed to describe what's happening into the action.payload field.
//    This could be a number, a string, or an object with multiple fields inside.

import axios from 'axios'

export const FETCH_FORECAST = 'FETCH_FORECAST'

//this
export function fetchForecast(location) {
    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

    const request = axios.get(
        `api.openweathermap.org/data/2.5/forecast?q=${location}&appid=0eb7282867c9f6a908734d94070fdac1`
    )

    return {
        type: FETCH_FORECAST,
        payload: request,
    }
}
