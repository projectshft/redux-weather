import React from 'react';
import { Provider } from 'react-redux';
import Forecast from './Components/Forecast';
import { createStore } from 'redux';

const initialState = {
  forecast: [],
  myAPIkey: '1502126fb8fbfbaeaeef67feb3bcbedc'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FORECAST':
      return {
        ...state,
        forecast: action.payload
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Forecast />
  </Provider>
);

export default App;