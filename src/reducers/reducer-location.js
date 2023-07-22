//Reducers are functions that take the current state and an action as arguments, and return a new state result.
//In other words, (state, action) => newState.
//A Redux app really only has one reducer function: the "root reducer" function that you will pass
//to createStore later on. That one root reducer function is responsible for handling all of the actions
//that are dispatched, and calculating what the entire new state result should be every time.
import { FETCH_FORECAST } from '../actions/actions'

const locationReducer = function (state = [], action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case FETCH_FORECAST:
            //Set the location name and make the arrays that will hold the 5 day forecast
            let locationName = action.payload.data.city.name
            const temp = []
            const pressure = []
            const humidity = []

            //Loop through the data from the API and push the correct data to each array..
            //because its a 3 hour forecast and I only need a 5 day daily forects I dont want to use .map
            // Start on the 8th item of the array (24 hours from current time) and then increment by 24 hours.
            for (var i = 7; i < action.payload.data.list.length; i += 8) {
                let forecastDayData = action.payload.data.list[i]
                temp.push(forecastDayData.main.temp)
                pressure.push(forecastDayData.main.pressure)
                humidity.push(forecastDayData.main.humidity)
            }

            //Return the new location data that was searched and add below it
            //all the other location data that was searched previously
            return [
                {
                    locationName,
                    temp,
                    pressure,
                    humidity,
                },
                ...state,
            ]
        default:
            return state // need this default state so it doesnt throw an error when the app loads and theres no data yet
    }
}

export default locationReducer
