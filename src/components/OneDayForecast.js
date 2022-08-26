import React from 'react'
import {useSelector} from 'react-redux'

const OneDayForecast = () => {
  const weatherForecast = useSelector((state) => state.forecasts.oneDayForecast)
  console.log(weatherForecast)
  return (
    <div>
      <h1>Current Forecast</h1>
      {/* <h2>Temp: {weatherForecast.temp}</h2> */}
      {/* <h2>What?: {weatherForecast.description}</h2> */}
    </div>
  )
}

export default OneDayForecast