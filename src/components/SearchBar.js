import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { fetchFiveDay } from '../actions'

const SearchBar = (props) => {
  const forecastObj = useSelector((state) => state.forecastState)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    const locationQuery = e.target[0].value
    dispatch(fetchFiveDay(locationQuery))
    e.target[0].value = ""
    }
  
return (
    <div className='search-bar-element'>
      <h2 className='search-bar-text'>Search Bar</h2>
      <form onSubmit={handleSubmit} className="searchbar form-group">
      <label>Enter the city you want to search

      <input 
        type="text"
        className='form-control'
        name='city' 
        required="true" 
        placeholder='Raleigh' 
        />
        </label>
      <button value="submit" type='submit' className="one-day-btn" >Click!</button>
      </form>
      
    </div>
  )
}

export default SearchBar