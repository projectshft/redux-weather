import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';

import Header from './components/header';
import SearchBar from './components/search-bar';
import ForecastList from './components/forecast-list';
import forecastReducer from './reducers/reducer-forecast';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(forecastReducer)}>
    <React.StrictMode>
      <Header>
        <SearchBar />
        <ForecastList />
      
      </Header>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
