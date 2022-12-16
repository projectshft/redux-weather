import { combineReducers } from "redux";
import { GET_WEATHER } from "../actions/get-weather";


// const initialWeatherState = [];
const initialWeatherState = {
    success: false,
    data: {
        main: {}
    }
};



const weatherReducer = (state = initialWeatherState, action) => {
    console.log(action.payload);

    switch (action.type) {

        case GET_WEATHER.PENDING:
            return {
                ...state
            };

        case GET_WEATHER.SUCCESS:
            return {
                ...state,
                data: action.payload,
                success: true
            }

        default: 
            return state;
    }
}

// export const rootReducer = combineReducers({
//     weather: weatherReducer
// });

export const rootReducer = combineReducers({
    weatherReducer
});

export default weatherReducer;











// const weatherReducer = (state = initialWeatherState, action) => {
//     // debugger;
//     switch (action.type) {
//         case GET_WEATHER:
//             console.log(action.payload);
//             return [action.payload, ...state];

//         default: 
//             return state;
//     }
// }







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