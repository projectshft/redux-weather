import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise';
import './index.css';

import Header from './components/header';
import CitySearch from './components/city-search';
import cityReducer from './reducers/reducer-cities';

const store = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store(cityReducer)}>
    <Header>
      <CitySearch />
    </Header>
  </Provider>,
  document.getElementById('root')
);
