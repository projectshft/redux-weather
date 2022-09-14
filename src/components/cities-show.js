import { useSelector } from "react-redux";
import React from "react";
import  {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const CitiesShow = () => {

  const forecasts = useSelector((state) => state.forecasts);
 
  
  
  

  

  //map each forecast to its own array that holds key-value pairs
  // forecasts.map ((forecast) => {
  //   let forecastArray = Object.entries(forecast); 
  //   console.log(forecastArray);
  
  //   return forecastArray;
  // });
   


// another thought...const mapEachCity = forecasts.map((forecast) => {
    //to do: map the 1st order filter to the 2nd order filter right here. Then, push the 2nd order filter to empty eachCity object. Then, return eachCity object.
     

// originally what I had...this block of code pushes all city values into one array, all temperature values into another array, all pressure values into another array, and all humidity values into another array...
  

  const city = [];
  

  

  forecasts.reduce((acc, f) => {
    if (acc.indexOf(f.city) === -1) {
      acc.push(f.city);
    }
    return acc;
  }, city);

  console.log(forecasts);

  let contents = city.map(c => {
    //debugger;
    const temp = [];
    const pressure = [];
    const humidity = [];

    //filter forecast by the city using 'c' 
    let filteredForecast = forecasts.filter(f => {
      let include = f.city === c;
    // debugger;
      return include;
    });
    filteredForecast.forEach((f) => {
      temp.push(f.temperature);
      pressure.push(f.pressure);
      humidity.push(f.humidity);
  });

    return (
      <tr>
                <td>{city}</td>
                <td>
                  <Sparklines data={temp} height={110} width={180} 
                  >
                    <SparklinesLine color="red" />
                    <SparklinesReferenceLine type="avg" />
                  </Sparklines>
                </td>
                <td>
                  <Sparklines data={pressure} height={120} width={180}>
                    <SparklinesLine color="green" />
                    <SparklinesReferenceLine type="avg" />
                  </Sparklines>
                </td>
                <td>
                  <Sparklines data={humidity} height={120} width={180}>
                    <SparklinesLine color="blue" />
                    <SparklinesReferenceLine type="avg" />
                  </Sparklines>
                </td>
              </tr>
  )})
  

  return (

    <div>
     
      <table className="table table-hover" id="display">
        <thead>
          <tr key= {city}>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {contents}
        </tbody> 
      </table>
    </div>
  );
} 

export default CitiesShow;

