import { createStore, applyMiddleware } from "redux";
import { weatherReducer } from './reducer/weather-reducer';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const WeatherStore = createStore(
  weatherReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default WeatherStore;