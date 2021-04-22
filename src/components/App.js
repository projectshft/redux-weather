import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewTableRow, accessLocation } from '../actions';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';




export default function App() {

  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const tableData = useSelector(state => state.table)
  const locationData = useSelector(state => state.location)


  const trackQuery = (e) => {
    setQuery(e.target.value);
  }

  const submitQuery = () => {
    dispatch(fetchNewTableRow(query))
  }

  const submitLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(accessLocation(position.coords.latitude, position.coords.longitude))
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
      }
    )
  }

  const renderLocation = () => {
    if (!_.isEmpty(locationData)){
      return (
        <tr key={locationData.name}>
            <td>{locationData.name}</td>
            <td>
              <Sparklines data={locationData.temp}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
            </td>
            <td>
              <Sparklines data={locationData.pressure}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
            </td>
            <td>
              <Sparklines data={locationData.humidity}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
            </td>
            <td>
              <img src='https://e7.pngegg.com/pngimages/272/94/png-clipart-current-location-logo-microsoft-mappoint-pointer-computer-icons-world-map-location-logo-sign-magenta.png' alt='' title='Your Current Location' width={100}></img>
            </td>
          </tr>
      );}
  }

  const renderRows = () =>{
    if (!_.isEmpty(tableData)){
      return tableData.map((row) =>{
        return(
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>
              <Sparklines data={row.temp}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
            </td>
            <td>
              <Sparklines data={row.pressure}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
            </td>
            <td>
              <Sparklines data={row.humidity}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
            </td>
          </tr>
        )
      })
    }
  }



  return (
    
    <div className="App">
      <h1>BetterWeather 2</h1>
      <div className="row">
        <div className="col-sm-6 offset-md-3">
          <input placeholder="get a five-day forecast in your favorite cities" onChange={trackQuery}></input>
          <button className="btn btn-success btn-sm" onClick={submitQuery}>Submit</button>
          <button className="btn btn-success btn-sm" onClick={submitLocation}>Current Location</button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10 offset-md-1">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">City</th>
                <th scope="col">Temp (F)</th>
                <th scope="col">Pressure (hPa)</th>
                <th scope="col">Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              {renderLocation()}
              {renderRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}