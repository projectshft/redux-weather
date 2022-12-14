import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getWeather } from '../actions'

// export const GET_WEATHER = 'GET_WEATHER';

function SearchBar () {
  const [city, setCity] = useState('')
  const dispatch = useDispatch();

  const search = (e) => {
    e.preventDefault();
    dispatch(getWeather(e.target.value));
  }

  return(
    <div className="search-bar">
      <input 
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type='search'
        placeholder='Search by city'
      />
      <button 
        value={city}
        type="button"
        onClick={search}
      > Search </button>
    </div>
    )
  }

export default SearchBar