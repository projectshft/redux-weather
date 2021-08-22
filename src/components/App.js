import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {addSearch} from "../actions/actions"
import CityTable from './city-table'

function App() {
  const [city, setCity] = useState("");

  const searches = useSelector((state) => state.searches)
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setCity(e.target.value);
  }

  const clickHandler = () => {
    dispatch(addSearch(city));
  }

  return (
  <div className="container">
    
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <input type="text" className="form-control" id="city-input" placeholder="Get a five-day forecast for your favorite cities" onChange={changeHandler}></input>
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
