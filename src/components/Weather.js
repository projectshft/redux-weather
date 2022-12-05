import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import { useSelector } from 'react'

const Weather = () => {
  const forecast = useSelector((state) => state.forecast);
  const error = useSelector((state) => state.forecasts.error);
  const city = [];

const weatherData = () => {
  forecast.map((data) => (
    <div className="row">
      <div className="city">{data.city.name}</div>      
    </div>
  ))
}

  return (
    <div>   
      <Sparklines 
        data={data.list.map((item) => item.main.humidity)}
        width={100} 
        height={120}>
      <SparklinesReferenceLine type="avg" />
      <SparklinesLine color="blue"/>
      </Sparklines>

      <Sparklines 
        data={data.list.map((item) => item.main.pressure)}
        width={100} 
        height={120}>
      <SparklinesReferenceLine type="avg" />
      <SparklinesLine color="blue"/>
      </Sparklines>

      <Sparklines 
        data={data.list.map((item) => item.main.temp)}
        width={100} 
        height={120}>
      <SparklinesReferenceLine type="avg" />
      <SparklinesLine color="blue"/>
      </Sparklines>


    </div>
  )
}

export default Weather