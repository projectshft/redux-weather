import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/header'
import WeatherPage from './components/weather-page'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Header>
        <Switch>
          <Route path="/" component={WeatherPage}/>
        </Switch>
      </Header>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)