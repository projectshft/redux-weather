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

//// STORE
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//// ACTIONS
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(searchQuery) {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&units=imperial&appid=73d02479adb6279b02fdb623c43367cb`);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}

//// REDUCERS
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
            temperature: dataList.map((d) => d.main.temp),
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
//// UI

function Main() {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  
  const items = useSelector((state) => {
    return state.weatherData.items; 
  });

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
              type="text"
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
      <div className="col-md-6 offset-md-3">
      <table className="table">
        <thead>  
          <tr>
          <th scope="col">City</th>
          <th scope="col">Temperature (F)</th>
          <th scope="col">Pressure (hPa)</th>
          <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="city-name" scope="row"><h5 className="text-muted">{searchQuery}</h5></th>
              <td>
              <Sparklines data={items.temperature}>
                <SparklinesLine color="#253e56" style={{ fill: "#fdfd96" }} />
                <SparklinesReferenceLine type="avg" />
              </Sparklines> 
              </td>
              <td>
              <Sparklines data={items.pressure}>
                <SparklinesLine color="#253e56" style={{ fill: "#64cc94" }} />
                <SparklinesReferenceLine type="avg" />
              </Sparklines> 
              </td>
              <td>
              <Sparklines data={items.humidity}>
                <SparklinesLine color="#253e56" style={{ fill: "#aaaaaa" }} />
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
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
