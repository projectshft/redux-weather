import 'bootstrap/dist/css/bootstrap.css'

import Header from './components/header'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import CitySearch from './components/cities'
import cityReducer from './reducers/reducer-cities'

const store = createStore(cityReducer)

// then inside citysearch we can call store.dispatch
ReactDOM.render(
    <Provider store={store}>
    <Header>
    <CitySearch /> 
    </Header>
    </Provider>,
  document.getElementById('root')
);