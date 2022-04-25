import { createSlice } from '@reduxjs/toolkit';

export const addForecastSlice = createSlice({
  name: 'searchForecast',
  initialState: {
    forecast: []
  },
  reducers: {
    add: (state, action) => {
      state.forecast.push(action.payload)
    }
  }
})

export const { add } = addForecastSlice.actions

export default addForecastSlice.reducer


// const initialState = {
//   forecast: []
// }

// export function addCity () {
//   const data = {
//     city: 'Dallas',
//     temp: 99,
//     humidity: 22,
//     pressure: 47
//   }


//   return {
//     type: 'search/add-city',
//     payload: data
//   }
// }

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'search/add-city':
//       let newState = {...state};
//       newState.forecast.push(action.payload);
//       return newState
     
//     default:
      
//       return {...state}
//   }
// }

// export default rootReducer;


// const dummyData = {
//   "cod": "200",
//   "message": 0,
//   "cnt": 40,
//   "list": [
//   {
//   "dt": 1650844800,
//   "main": {
//   "temp": 291.4,
//   "feels_like": 291.58,
//   "temp_min": 291.4,
//   "temp_max": 293.11,
//   "pressure": 1014,
//   "sea_level": 1014,
//   "grnd_level": 987,
//   "humidity": 88,
//   "temp_kf": -1.71
//   },
//   "weather": [
//   {
//   "id": 802,
//   "main": "Clouds",
//   "description": "scattered clouds",
//   "icon": "03d"
//   }
//   ],
//   "clouds": {
//   "all": 44
//   },
//   "wind": {
//   "speed": 0.38,
//   "deg": 347,
//   "gust": 0.72
//   },
//   "visibility": 10000,
//   "pop": 0,
//   "sys": {
//   "pod": "d"
//   },
//   "dt_txt": "2022-04-25 00:00:00"
//   }
// ]
// }