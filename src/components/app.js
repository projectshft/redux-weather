import React from 'react';
import SearchBar from './search_bar';
import WeatherList from './weather_list';

export default function App() {
    return (
      <div>
         <SearchBar />
         <WeatherList/>
      </div>
    );
  }