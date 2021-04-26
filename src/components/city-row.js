import {  useSelector } from "react-redux"
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash'

// component to render city and sparklines
export const CityRow = (props) => {
  // grabbing the data from the store for entries and the city name
  const data = useSelector(state => Object.entries(state.reducer.entries))
  let cityData = useSelector(state => state.reducer.cityName )
  

  // mapping through the data to get only numbers so we can calculate averages
  const temp = data.map(elem => elem[1].main.temp);
  const pressure = data.map(elem => elem[1].main.pressure);
  const humidity = data.map(elem => elem[1].main.humidity)
  
  // nameing variables outside so they can be accessible in the renders
  let cityName
  let aveTemp;
  let avePressure;
  let aveHumidity;
  
  //checking if the store has empty values using lodash syntax
  if(!_.isEmpty(data) && !_.isEmpty(cityData)){

    // upercase the city name
    cityName = cityData.toUpperCase()

    // function to get the averages
    let average = (array) => array.reduce((a, b) => a + b) / array.length;
    
    //passing the data to the average function to get the values
    aveTemp = Math.floor(average(temp)) + '°'
    avePressure = Math.floor(average(pressure)) + 'kPa'
    aveHumidity = Math.floor(average(humidity)) + '%'
    
  }
     
  // function to render the city name
  const renderCityName = () => {
    return(
      <div className="col">
        <h5 className="p-3 mb-2 bg-info text-white">City Name</h5>
        <h3 className="p-3 mb-2 bg-light text-dark">{cityName}</h3>
      </div>
    )
  }

  // function to render the Temperature
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

  // function to render the Pressure
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

  //function to render the humidity
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
  // renders the above 
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

