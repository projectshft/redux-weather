import React from 'react'
import { useDispatch } from 'react-redux'
import { addCity, setCurrentCity, fetchCoordinates, fetchForecast, addWeather, addErrorMessage } from './reducer/weatherSlice'
import { useState } from 'react'
import { CitiesList } from './cities-list'

export function WeatherView() {
  const dispatch = useDispatch()

  // using react state instead of redux to hold temporary state in handleFormChange function 
  const [cityName, setCityName] = useState(null)
  const handleFormChange = (event) => {
    setCityName(event.target.value);
  }

  // 2 API calls: one to get the coordinates of the city, and another to get the weather (using those coordinates)
  const getForecast = async () => { 
      dispatch(setCurrentCity(cityName));
      try {
        // First API call
        const coordinatesResponse = await dispatch(fetchCoordinates());
       dispatch(addCity({name: coordinatesResponse.payload.name, lon: coordinatesResponse.payload.lon, lat: coordinatesResponse.payload.lat}));
       dispatch(setCurrentCity(coordinatesResponse.payload.name));
      
        // Second API call
        const forecastResponse = await dispatch(fetchForecast());
        dispatch(addWeather({[coordinatesResponse.payload.name]: forecastResponse.payload}));
        dispatch(addErrorMessage(""))
      }
      catch {
        // If either call fails, this error message will be added to state.error
          dispatch(addErrorMessage("No results found. Please check spelling and try again"))
      }

  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getForecast();
    // Resetting value of the form input
    document.getElementById('input').value = '';
  }
  
  return (
    <div className = "container">
      <h3 className = "mt-3 text-center col-md-6 offset-3">Redux Weather</h3>
      <div className = "row justify-content-center">
     <form className = 'col-md-6 mt-5'onSubmit={handleFormSubmit}>
      <span className = 'input-group justify-content-center'>
        <input  id = 'input' className = '' onChange = {handleFormChange} type = "text" placeholder = "City Name"></input>
       <button className='ms-3 py-1 btn btn-primary'>5-day Weather</button>
      </span>
     </form>
     <CitiesList/>
     </div>
    </div>
  )
}