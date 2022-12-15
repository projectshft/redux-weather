import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
// import WeatherStore from './Store';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducer/weather-reducer';
import promise from 'redux-promise';
import thunk from 'redux-thunk';





// ReactDOM.render(
//   <Provider store={WeatherStore}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );



// // const WeatherStore = createStore(
// //   rootReducer,
// //   composeWithDevTools(applyMiddleware(thunk))
// // );

const middleware = applyMiddleware(thunk);

const WeatherStore = createStore(rootReducer, middleware);



// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(rootReducer)}>
  <Provider store={WeatherStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

