import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux;'
import { store } from './store'

const Searchbar = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  // const dispatch = useDispatch();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=75e7ccabdef5725374998f0c3f3798b2`;
 
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      fetch(url)
       .then(response => response.json())
       .then(data => {
        console.log(data)
        setWeather(data);
        setCity('');
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city"
        />
      </form>
    </div>
  )
}

export default Searchbar

