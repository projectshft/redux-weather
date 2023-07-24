//Actions are plain JavaScript objects that have a type field.
//You can think of an action as an event that describes something that happened in the application.
//We normally put any extra data needed to describe what's happening into the action.payload field.
//    This could be a number, a string, or an object with multiple fields inside.

import axios from 'axios'

export const FETCH_FORECAST = 'FETCH_FORECAST'

export const fetchForecast = (city) => {
    const API_KEY = process.env.REACT_APP_API_KEY
    return async (dispatch) => {
        await axios
            .get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`
            )
            .then(function (response) {
                // handle success
                dispatch({ type: FETCH_FORECAST, payload: response })
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    alert(
                        `Error Code: ${error.response.status}\nError Message: ${error.response.data.message}`
                    )
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log('Request: ' + error.request)
                    alert(
                        'There was an error with the weather server. Please try again later'
                    )
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message)
                }
                // console.log(error.config)
            })
    }
}
