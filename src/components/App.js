import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {addSearch, fetchSearches} from "../actions/actions"
import CityTable from './city-table'

function App() {
  const searches = useSelector((state) => state.searches)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearches());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSearches]);
  

  const clickHandler = () => {
    console.log('click!');
    dispatch(addSearch({
      city: 'Smithfield',
      temp: [69, 234, 52, 52, 90],
      pressure: [100, 101, 96, 90, 81],
      humidity: [420, 500, 300, 660, 666]
    })
    );
  }

  return (
  <div className="container">
    
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <input type="text" className="form-control" id="city-input" placeholder="Get a five-day forecast in your favorite cities"></input>
      </div>
      <div className="col">
        <button type="button" className="btn btn-primary" onClick={clickHandler}>Search</button>
      </div>
      <hr></hr>
    </div>
    
    <div className="row">
      <table className="table">
        <thead className="table-light text-center">
          <tr>
            <th scope="col" className="city-header">City</th>
            <th scope="col" className="temp-header">Temperature (F)</th>
            <th scope="col" className="pressure-header">Pressure (hPa)</th>
            <th scope="col" className="humidity-header">Humidity (%)</th>
          </tr>
        </thead>
        </table>
      <CityTable searches={searches} />
    </div>

  </div>
  )
}

export default App;
