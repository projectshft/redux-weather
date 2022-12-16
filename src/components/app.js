import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './search_bar';
import WeatherList from './weather_list';

export default function App() {
  const weatherInfo = useSelector((state)=> state.weather)
  console.log(weatherInfo, 'app')
    return (
      <div>
         <SearchBar />
         <WeatherList weatherInfo='weatherrender'/>
      </div>
    );
  }