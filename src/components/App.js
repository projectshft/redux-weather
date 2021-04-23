import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewTableRow, accessLocation, setDefault } from '../actions';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default function App() {

  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const tableData = useSelector(state => state.table)
  const locationData = useSelector(state => state.location)
  const defaultData = useSelector(state => state.default)

  useEffect(() => {
    const city = localStorage.getItem('city');
    // if (city){
    //   dispatch(setDefault(city))
    //   dispatch(fetchNewTableRow(city))
    // }
    }, [])

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

  const checkLocal = () =>{
    console.log(defaultData, tableData)
  }



  const defaultClick = (city) => {
    if (city === defaultData) {
      dispatch(setDefault(null))
      return
    }  
    dispatch(setDefault(city))
  }

  const chartRender = (data, stat) =>{
    return (
      <td>
        <Sparklines data={data[stat]} width={300}>
          <SparklinesLine />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </td>
    )
  }

  const renderDefaultButton = (city) => {
    if (city === defaultData) {
      return (
        <>
          <td>
            <button className='btn btn-sm btn-warning' onClick={() => defaultClick(city)}>remove default</button>
          </td>
        </>
      )
    } else {
        return (
          <td>
            <button className='btn btn-sm btn-primary' onClick={() => defaultClick(city)}>set as default</button>
          </td>
        )
      }
  }

  const renderLocation = () => {
    if (!_.isEmpty(locationData)){
      return (
        <tr key={locationData.name}>
            <td><h2>{locationData.name}</h2></td>
            {chartRender(locationData, 'temp')}
            {chartRender(locationData, 'pressure')}
            {chartRender(locationData, 'humidity')}
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
            <td><h2>{row.name}</h2></td>
            {chartRender(row, 'temp')}
            {chartRender(row, 'pressure')}
            {chartRender(row, 'humidity')}
            {renderDefaultButton(row.name)}
          </tr>
        )
      })
    }
  }



  return (
    <div className="App">
      <h1 onClick={checkLocal}>BetterWeather 2</h1>
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