import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewTableRow } from '../actions';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';




function App() {

  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const appData = useSelector(state => state)


  const trackQuery = (e) => {
    setQuery(e.target.value);
  }

  const submitQuery = () => {
    dispatch(fetchNewTableRow(query))
  }

  const rowShow = () => {
    console.log(appData);
  }

  const renderRows = () =>{
    if (!_.isEmpty(appData)){
      return appData.table.map((row) =>{
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
      <h1 onClick={rowShow}>BetterWeather 2</h1>
      <div className="row">
        <div className="col-sm-6 offset-md-3">
          <input placeholder="get a five-day forecast in your favorite cities" onChange={trackQuery}></input>
          <button className="btn btn-success btn-sm" onClick={submitQuery}>Submit</button>
          <button className="btn btn-success btn-sm" onClick={submitQuery}>Current Location</button>
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
              {renderRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
