import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { fetchFiveDay, fetchLocation, fetchOneDay } from '../actions'

const longLat = [35.801011001660314, -78.61440264232716]

const SearchBar = (props) => {
  const dispatch = useDispatch();
  // const forecast = useSelector(({forecasts})=>{
  //   return forecasts.state
  // })
  const oneDayForecast = (locationData) => {
    
  }

  const fiveDayForecast = () => {
    //
  }

  const handleOneDayClick = () => {
    
    // dispatch(
    //   fetchOneDay(longLat, () => {
    //     console.log(props)
    //   })

    // )
    console.log('one day')

    }
  
  const handleFiveDayClick = () => {
    
    dispatch(
      
      fetchFiveDay(longLat, () => {
        console.log(props)
      })
      )
      console.log('five day')
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