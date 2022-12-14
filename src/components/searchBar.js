import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getWeather } from '../actions'

// export const GET_WEATHER = 'GET_WEATHER';

function SearchBar () {
  const [city, setCity] = useState('')
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(getWeather(city));
  }

  return(
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="searchbar">
          <input 
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Search by city'
          />
          <button 
            type='submit'
            // value={city}
            onClick={handleFormSubmit}
          > Search </button>
        </div>
      </form>
    </div>
    )
  }

export default SearchBar