import React, { useState } from 'react-router-dom'
//const API_KEY = process.env.REDUX_APP_WEATHER_API_KEY
//const axios = require('axios')

const SearchBar = () => {
  const [city, setCity] = useState('')
  
  return (
    <div className='search-bar'>
      <input 
        value={city}
        onChange={event => setCity(event.target.value)}
      />
    </div>
  )
}

export default SearchBar