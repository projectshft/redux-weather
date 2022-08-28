import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { fetchFiveDay } from '../actions'

const SearchBar = () => {
  const forecastObj = useSelector((state) => state.forecastState)
  const dispatch = useDispatch();

  const handleOneDayClick = () => {
    const locationQuery = "Raleigh"
    dispatch(fetchFiveDay(locationQuery, () => {
      console.log('one day click callback')
      console.log(forecastObj)
    }))
    }
  
  const handleFiveDayClick = (data) => {
    data = forecastObj
    const fiveDayLocationToSearch = "chicago"
    dispatch(
      fetchFiveDay(fiveDayLocationToSearch, () => {
        console.log('callback')
        console.log(data)
      })
      )
    }

  return (
    <div>
      <h2>Search Bar</h2>
      <button onClick={handleOneDayClick} className="one-day-btn" >Fetch One Day</button>
      <button onClick={handleFiveDayClick} className="five-day-btn">Fetch Five Day</button>
    </div>
  )
}

export default SearchBar