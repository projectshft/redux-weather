import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchBar from './components/SearchBar'
import WeatherTable from './components/WeatherTable'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <SearchBar />
    <WeatherTable />
  </React.StrictMode>,
  document.getElementById('root')
);


