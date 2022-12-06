import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import { useSelector } from 'react-redux'

const getSparklines = (chartData) => {
  const forecast = useSelector((state) => state.forecast)

  function showCharts()  {
    let temp = forecast.main.temp;
    let humidity = forecast.main.humidity;
    let pressure = forecast.main.pressure;
  }

  return (
    <div className="sparklines-container">   
      <p className="city">{forecast.name}</p>
      <Sparklines 
        data={forecast.list.map((item) => item.main.humidity)}
        width={100} 
        height={120}>
        <SparklinesReferenceLine type="avg" />
        <SparklinesLine color="blue"/>
      </Sparklines>

      <Sparklines 
        data={forecast.list.map((item) => item.main.pressure)}
        width={100} 
        height={120}>
        <SparklinesReferenceLine type="avg" />
        <SparklinesLine color="blue"/>
      </Sparklines>

      <Sparklines 
        data={forecast.list.map((item) => item.main.temp)}
        width={100} 
        height={120}>
        <SparklinesReferenceLine type="avg" />
        <SparklinesLine color="blue"/>
      </Sparklines>

    </div>
  )
}

export default getSparklines


