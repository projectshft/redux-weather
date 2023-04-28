// import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import WeatherReducer from './Reducer'; 
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";


// //higher order function, takes a function as an argument
// const WeatherStore = configureStore(WeatherReducer,composeWithDevTools(applyMiddleware(thunk))
// ); 

// export default WeatherStore;  

import { configureStore } from '@reduxjs/toolkit';
import WeatherReducer from './Reducer';
import thunk from 'redux-thunk';

const WeatherStore = configureStore({
  reducer: {
    weather: WeatherReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});
export default WeatherStore;
