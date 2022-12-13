import { createStore } from "redux";
import  rootReducer  from './reducer/weather-reducer';
// import { weatherReducer } from "./reducer/weather-reducer";

// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

// const WeatherStore = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );


const WeatherStore = createStore(rootReducer);

export default WeatherStore;