import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from "react-redux";

import CitySearch from './components/city-search';
import WeatherTable from './components/weather-table';




ReactDOM.render(
  <Provider store={store}>
    <Container className="md-4">
      <CitySearch />
      <WeatherTable />
    </Container>
  </Provider>,
  document.getElementById('root')
);


