import React from 'react'
import {useSelector} from 'react-redux'

const FiveDayGraph = () => {
  const forecastArray = useSelector((state) => state.forecasts)
  ////
  console.log(`5 day graph--array: ${forecastArray}`)
  // console.log(`5 day graph--id: ${id}`)
//// this weatherForecast object contains id and a forecast array w/ 40 items in it
  
  // const fiveDayArray = forecastArray.map( i => {
    
  //   return (
      
  //     <div>
  //       <h2 key={i}> looook!--- {i.name} -----</h2>
  //       <h2>{i.main.temp}</h2>

  //     </div>
  //   )
  // })

  return (
    <div>
      <h1>This is a 5 day weather row</h1>
      <h2>All data will go here</h2>
      {/* <h2>{fiveDayArray}</h2> */}
      <hr />
    </div>
  )
}

export default FiveDayGraph