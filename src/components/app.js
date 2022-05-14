import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

function App() {
    return (
      <div>
        <h2>Five Day Weather Average</h2>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }

  export default App;