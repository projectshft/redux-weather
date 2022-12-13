import { combineReducers } from "redux";
import { GET_WEATHER } from "../actions/get-weather";

// const initialWeatherState = {
//     loading: false,
//     error: false,
//     success: false,
//     data: {}
// };


// const weatherReducer = (state = initialWeatherState, action) => {

//     switch (action.type) {
//         case GET_WEATHER.PENDING:
//             return {
//               ...state,
//               loading: true
//             };
//         case GET_WEATHER.SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 success: true,
//                 data: action.payload
//             };
//         case GET_WEATHER.REJECTED:
//             return {
//                 ...state,
//                 error: true
//             };
//         default:
//             return state;
//     }
// };


const initialWeatherState = [];

const weatherReducer = (state = initialWeatherState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            console.log(action.payload);
            return [action.payload, ...state];

        default: 
            return state;
    }
}

export const rootReducer = combineReducers({
    weather: weatherReducer
});

export default weatherReducer;
