import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { fetchCity } from "../actions";
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";


const WeatherView = () => {
  const [query, setQuery] = useState('');
  const reports = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() =>{
    renderReports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderReports() {
    if (!_.isEmpty(reports)) {
      
      
      return reports.map((report) => (
        
        <tr>
          <td>{report.city.name}</td>
          <td>
            <Sparklines data={report.list.map(r => r.main.temp)}>
              <SparklinesLine color="red" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            {Math.round((report.list.reduce((acc, r) => acc + r.main.temp, 0)) / 40)} F
            </td> 
            
          <td>
          <Sparklines data={report.list.map(r=> r.main.pressure)}>
              <SparklinesLine color="blue" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            {Math.round((report.list.reduce((acc, r) => acc + r.main.pressure, 0)) / 40)}
          </td>
          <td>
          <Sparklines data={report.list.map(r => r.main.humidity)}>
              <SparklinesLine color="green" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            {Math.round((report.list.reduce((acc, r) => acc + r.main.humidity, 0)) / 40)} %          
          </td>
        </tr>
      ))
    }
  }

  function handleSearchClick() {    
    dispatch(fetchCity(query));  
  }

  return (
    <div className="container-fluid">
      <div className="col-md-6 offset-md-3">
      <div className="input-group">
          <input type="text" id="query" className="form-control rounded" placeholder="Enter City" onChange={(e) => setQuery(e.target.value)} >
        </input>
        <button type="button" className="btn btn-primary search" onClick={handleSearchClick}>
          <span>Search</span>
        </button>
      </div>
     <table className="table ">
       <thead className="thead-dark">
         <tr>
           <th>City</th>
           <th>Temperature (F)</th>
           <th>Pressure (hPa)</th>
           <th>Humidity (%)</th>
         </tr>
       </thead>
       <tbody className="cities">
        {renderReports()}
       </tbody>
     </table>
      </div>
    </div>
  )
};

export default WeatherView;