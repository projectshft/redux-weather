import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import React, {useState} from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import promise from "redux-promise";
import { combineReducers } from "redux";
import axios from "axios";

import { SparklinesLine } from 'react-sparklines';
import { Sparklines } from 'react-sparklines'
import { SparklinesReferenceLine } from 'react-sparklines';

// Create redux store w/middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// Create action FETCH_WEATHER with axios get request based on search query
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(searchQuery) {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&units=imperial&appid=73d02479adb6279b02fdb623c43367cb`);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}

// Create weatherData reducer
const reducers = combineReducers({
  weatherData: function (
    state = {
      items: {
        temperature: [],
        pressure: [],
        humidity: []
      },
    },
    action
  ) {
    switch (action.type) {
      case FETCH_WEATHER:
        const dataList = action.payload.data.list;

        for (let i = 0; i < dataList.length; i += 8) {
          const items = {
            temperature: dataList.map((d) => Math.round(d.main.temp)),
            pressure: dataList.map((d) => d.main.pressure),
            humidity: dataList.map((d) => d.main.humidity)
        };
        return {
          items,
        }  
      };
      break;

      default:
        return state;
    }
  },
});

// Create main user interface component
function Main() {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  
  const items = useSelector((state) => {
    return state.weatherData.items;     
  }); 

  const avgTemp = Math.round(items.temperature.reduce((a,b) => a + b, 0) / items.temperature.length);
  const avgPressure = Math.round(items.pressure.reduce((a,b) => a + b, 0) / items.pressure.length);
  const avgHumidity = Math.round(items.humidity.reduce((a,b) => a + b, 0) / items.humidity.length);

  //const handleInputChange = (e) => {
    //setSearchQuery(e.target.value)
 //}

  //const handleSubmit = () => {
    //dispatch(fetchWeather(searchQuery));
  //}
    
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
            <h1>
              Redux Weather
            </h1>
          </div>
        </div>
      </div>

      <div className="bar row">
        <div className="col-md-6 offset-md-3 p-2">
          <form>
          <div className='form-group'>
            <input
              type="text" required={true}
              placeholder="Enter City Name"
              autoFocus={true}

              onChange={(e) => {
                setSearchQuery(e.target.value)
                dispatch(fetchWeather(searchQuery));
              }}
              className='form-control'
            ></input>
          </div>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div> 
      <div className="col-md-8 offset-md-2">
      <table className="table">
        <thead className="thead-light">  
          <tr>
          <th scope="col">City</th>
          <th scope="col">Temperature (F)</th>
          <th scope="col">Pressure (hPa)</th>
          <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="city-name" scope="row"><h5 className="align-middle text-muted">{searchQuery}</h5></th>
              <td className="align-middle">
              <Sparklines data={items.temperature}>
                <SparklinesLine color="#253e56" style={{ fill: "#fdfd96" }} />
                <SparklinesReferenceLine type="avg" />
              </Sparklines> 
              <p className="text-center">{avgTemp}°</p>
              </td>
              <td className="align-middle">
              <Sparklines data={items.pressure}>
                <SparklinesLine color="#253e56" style={{ fill: "#64cc94" }} />
                <SparklinesReferenceLine type="avg" />
              </Sparklines> 
              <p className="text-center">{avgPressure}hPA</p>
              </td>
              <td className="align-middle">
              <Sparklines data={items.humidity}>
                <SparklinesLine color="#253e56" style={{ fill: "#aaaaaa" }} />
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
              <p className="text-center">{avgHumidity}%</p>
              </td>
          </tr>
        </tbody>  
      </table>   
      </div>
    </div> 
  );
}

//// MAIN
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
