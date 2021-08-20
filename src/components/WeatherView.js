import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchCity } from "../actions";

const WeatherView = () => {
  const reports = useSelector(state => state.reports);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCity());
  }, )//move into the renderCity function so that the request happens on click?


  function renderCity() {
    //display search data as new row in table
  }


  return (
    <div className="container-fluid">
      <div className="col-md-6 offset-md-3">
      <div className="input-group">
          <input type="text" id="query" className="form-control rounded" placeholder="Enter City">
        </input>
        <button type="button" className="btn btn-primary search">
          <span>Search</span>
        </button>
      </div>
     <table className="table ">
       <thead className="thead-dark">
         <tr>
           <th>City</th>
           <th>Temp</th>
           <th>Pressure</th>
           <th>Humidity</th>
         </tr>
       </thead>
       <tbody className="cities">
        {renderCity()}
       </tbody>
     </table>
      </div>
    </div>
  )
};

export default WeatherView;