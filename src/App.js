import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { fetchCity } from './actions'


function App() {
  const [cityInput, setCityInput] = useState('');

  const dispatch = useDispatch();

  const cities = useSelector((state) => state)
  
  console.log(cities)
  
  function onClick () {
    const action = fetchCity(cityInput);
    dispatch(action)
  }

  function getTemps(cityList) {
    const temps = [];
    for (let i = 0; i < cityList.length; i++){
      temps.push((cityList[i].main.temp-273.15)*(9/5)+32);
    }      
      return temps;
  };
  
  function getPressure(cityList) {
    const pressure = [];
    for (let i = 0; i < cityList.length; i++){
      pressure.push(cityList[i].main.pressure);
    }   
      return pressure;
  };

  function getHumidity(cityList) {
    const humidity = [];
    for (let i = 0; i < cityList.length; i++){
      humidity.push(cityList[i].main.humidity);
    }      
      return humidity;
  };

  function calculateMean(array){
    let sum = 0
    for (let i =0; i < array.length; i++){
      sum += array[i]
    }
    return (sum/array.length).toFixed(0)
  }

  return (
    <div className="container">           
      
      <div className="row" name="header" >
        <div className="col"></div>
        <div className="col"><h1>Redux Weather</h1></div>
        <div className="col"></div>
      </div> 
      
      <div className="row" name="input">
      <div className="col"></div>
      <div className="col">
          <input 
            type="text" 
            value= {cityInput}
            onChange={e => setCityInput(e.target.value)}
            className="" 
            placeholder="Search for your city...">
          </input>  
          <button 
            type="button" 
            onClick={onClick} 
            className="btn btn-primary">Search
          </button>
        </div>
        <div className="col"></div>
      </div>    
             
    
    {/*Data Table*/}
    <div className="row">
      <table style={{ "width" : "80%", "align" : "center" }}>
        <thead>
          <tr>
            <th scope="col" style={{'textAlign':'center'}}><b>City</b></th>
            <th scope="col" style={{'textAlign':'center'}}><b>Temperature (F)</b></th>
            <th scope="col" style={{'textAlign':'center'}}><b>Pressure (hPa)</b></th>
            <th scope="col" style={{'textAlign':'center'}}><b>Humidity (%)</b></th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city => (
            <tr key={city.name}>
              <td>
                <center><b>{city.city.name}</b></center>
              </td>
              <td>
                <Sparklines data={getTemps(city.list)}>
                  <SparklinesLine color="blue" style={{ fill: "7DA7F5" }}/>
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>
                <center><b>{calculateMean(getTemps(city.list))}(F)</b></center>
              </td>
              <td>
                <Sparklines data={getPressure(city.list)}>
                  <SparklinesLine color="orange" style={{ fill: "E6B36F" }}/>
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>
                <center><b>{calculateMean(getPressure(city.list))}hPa</b></center>
              </td>
              <td>
                <Sparklines data={getHumidity(city.list)}>
                  <SparklinesLine color="green" style={{ fill: "B9F0A3" }}/>
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>
                <center><b>{calculateMean(getHumidity(city.list))}%</b></center>
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>   
  );
}

export default App;
