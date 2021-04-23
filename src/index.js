import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { createStore } from 'redux';
import WeatherIndex from './components/WeatherIndex';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <WeatherIndex />
  </Provider>,
  document.getElementById('root')
);
