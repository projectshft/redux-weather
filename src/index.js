import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';

import Header from './components/header'
import WeatherPage from './components/weather-page'




ReactDOM.render(
    <BrowserRouter>
      <Header>
        <Switch>
          <Route path="/" component={WeatherPage}/>
        </Switch>
      </Header>
    </BrowserRouter>,
  document.getElementById('root')
)