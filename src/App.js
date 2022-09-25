import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SearchBar from './containers/search-bar';
import DisplayWeather from './containers/display-weather';
import './App.css';

function App() {
  return (
    <div className="container">
      <SearchBar />
      <DisplayWeather />
    </div>
  );
}

export default App;
