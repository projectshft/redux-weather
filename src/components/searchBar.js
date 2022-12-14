import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export const GET_WEATHER = 'GET_WEATHER';

function searchBar (city) {
  const req = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=75e7ccabdef5725374998f0c3f3798b2`);
  return {
    type: GET_WEATHER,
    payload: req
  }



  // const [city, setCity] = useState('')
  // const [data, setData] = useState('')

  
  const search = (e) => {
    if (e.key === 'Enter') {
      searchFiveDay();
      fetch(url)
        .then(response => response.json())
        .then(result => {
          console.log('search', result)
          setWeather(result);
          setCity('');
      })
    }
  }


  return (
    <div>Get Weather</div>
  )
}

export default searchBar