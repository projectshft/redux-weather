import {  useSelector } from "react-redux"
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash'

export const CityRow = (props) => {
  const data = useSelector(state => Object.entries(state.reducer.entries))
  let cityData = useSelector(state => state.reducer.cityName )
  


  const temp = data.map(elem => elem[1].main.temp);
  const pressure = data.map(elem => elem[1].main.pressure);
  const humidity = data.map(elem => elem[1].main.humidity)
  
  let cityName
  let aveTemp;
  let avePressure;
  let aveHumidity;
  
  if(!_.isEmpty(data) && !_.isEmpty(cityData)){
    cityName = cityData.toUpperCase()
    let average = (array) => array.reduce((a, b) => a + b) / array.length;
    
    aveTemp = Math.floor(average(temp)) + '°'
    avePressure = Math.floor(average(pressure)) + 'kPa'
    aveHumidity = Math.floor(average(humidity)) + '%'
    
  }
     
  
  const renderCityName = () => {
    return(

      <div className="col">
        <h5 className="p-3 mb-2 bg-info text-white">City Name</h5>
        <h3 className="p-3 mb-2 bg-light text-dark">{cityName}</h3>
        </div>
    )

  }

  const renderTemp = () => {
    return (
      <div className="col">
        <h5 className="p-3 mb-2 bg-info text-white" >Temperature</h5>
        <Sparklines data={temp} limit={40}>
          <SparklinesLine color="red"/>
          <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <h6>{aveTemp}</h6>
      </div>
    )
  }

  const renderPressure = () => {
    return (
      <div className="col">
        <h5 className="p-3 mb-2 bg-info text-white">Pressure</h5>
        <Sparklines data={pressure} limit={40}>
          <SparklinesLine color="grey"/>
          <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <h6>{avePressure}</h6>
      </div>
    )
  }

  const renderHumidity = () => {
    return (
      <div className="col">
        <h5 className="p-3 mb-2 bg-info text-white">Humidity</h5>
        <Sparklines data={humidity} limit={40}>
          <SparklinesLine color="green"/>
          <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <h6>{aveHumidity}</h6>
      </div>
    )
  }
    

  return (
 <div className="container-fluid">
    <div className="row">
          {renderCityName()}
          {renderTemp()}
          {renderPressure()}
          {renderHumidity()}   
    </div>
 </div>
  )
}

