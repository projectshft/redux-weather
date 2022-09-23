import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SearchBar from './containers/search-bar';
import WeatherDisplay from './containers/weather';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* <div className="row "> */}
      <div className="col-md-5 offset-md-5">
        <SearchBar />
        <WeatherDisplay />
      </div>
    </div>
    // </div>
  );
}

export default App;
