import React from 'react'
import { useDispatch } from 'react-redux'
import { addCity, setCurrentCity, fetchCoordinates, fetchForecast, addWeather, addErrorMessage } from './reducer/weatherSlice'
import { useState } from 'react'
import { CitiesList } from './cities-list'
export function WeatherView() {
  const dispatch = useDispatch()
  const [cityName, setCityName] = useState(null)
  const handleFormChange = (event) => {
    setCityName(event.target.value);
  }

  
  const getForecast = async () => { 
      dispatch(setCurrentCity(cityName));
      try {const coordinatesResponse = await dispatch(fetchCoordinates());
       dispatch(addCity({name: coordinatesResponse.payload.name, lon: coordinatesResponse.payload.lon, lat: coordinatesResponse.payload.lat}));
       dispatch(setCurrentCity(coordinatesResponse.payload.name));
      
        const forecastResponse = await dispatch(fetchForecast());
        dispatch(addWeather({[coordinatesResponse.payload.name]: forecastResponse.payload}));
        dispatch(addErrorMessage(""))
      }
      catch {
          dispatch(addErrorMessage("No results found. Please check spelling and try again"))
      }

  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getForecast();
  }
  
  return (
    <div className = "container text-center">
      <h3 className = "text-center col-md-6 offset-3">Redux Weather</h3>
      <div className = "row justify-content-center">
     <form className = 'col-md-6 mt-5'onSubmit={handleFormSubmit}>
      <span className = 'input-group justify-content-center'>
        <input  className = '' onChange = {handleFormChange} type = "text" placeholder = "City Name"></input>
       <button className='ms-3 py-1 btn btn-primary'>5-day Weather</button>
      </span>
      <CitiesList/>
     </form>
     </div>
    </div>
  )
}