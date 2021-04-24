import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewTableRow, setDefault } from '../actions';
import _ from 'lodash';
import SearchBar from '../components/SearchBar'
import Row from '../components/Row'

export default function App() {
  const dispatch = useDispatch();
  const tableData = useSelector(state => state.table)

  useEffect(() => {
    const city = localStorage.getItem('city');
    if (city){
        dispatch(setDefault(city))
        dispatch(fetchNewTableRow(city))
      }
    }, [])

  return (
    <div className="App">
      <h1>BetterWeather 2</h1>
      <SearchBar/>
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
              {!_.isEmpty(tableData) && tableData.map((row) => <Row row={row} key={row.name}/>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}