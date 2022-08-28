import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Sparklines } from 'react-sparklines'

const FiveDayGraph = () => {
  const forecastArray = useSelector((state) => state.forecastState)
  
  // const FiveDaySparklinesGraph = () => {
    if(forecastArray.order.length > 0){
      // console.log(forecastArray.order)
      
      forecastArray.order.forEach(fc => {
        const forecastElement = forecastArray.entries[fc]
        const name = forecastElement.name
        const temp = forecastElement.temp
        const humidity = forecastElement.humidity
        const pressure = forecastElement.pressure
        
        return (
          <div>
            <h2>{name}</h2>
            <Sparklines data={temp}></Sparklines>
            <Sparklines data={humidity}></Sparklines>
            <Sparklines data={pressure}></Sparklines>
          </div>
      )
    })
    }
    else {
      return <h2>booo</h2>
    }
  // }


  // return (
  //   <div>
  //     <h1>This is a 5 day weather row</h1>
  //     <h2>All data will go here</h2>
  //      <FiveDaySparklinesGraph></FiveDaySparklinesGraph>
  //     <hr />
  //   </div>
  // )
}

export default FiveDayGraph