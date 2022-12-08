import React, { useState } from 'react'
//const API_KEY = process.env.REDUX_APP_WEATHER_API_KEY
//const axios = require('axios')

const SearchBar = () => {
  const [city, setCity] = useState('')
  
  const handleSearchBarClick = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <div className="input-group">
      <input value={city} onChange={(e)=>setCity(e.target.value)} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
      <button value={city} type="button" className="btn btn-outline-primary" onClick={handleSearchBarClick}>search</button>
    </div>
  )
}

export default SearchBar