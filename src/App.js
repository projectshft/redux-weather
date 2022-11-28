import './App.css';
import Row from './Row'
import { useSelector } from 'react-redux';
import * as actions from './actions';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';



function App() {
  const cities = useSelector((state) => (state))
  const [city, setCity] = useState('denver')
  const dispatch = useDispatch();
  useEffect(() => dispatch(actions.createItem(city)),[])
    



  return (
    <div className="App" >
      <form className="form-control" action="">
        <input className="form-group" type="text" onChange={e => setCity(e.target.value)} />
        <button className="custom">Search</button>
      </form>
      <div className="flexbox-container mx-auto w-75">
        <table className="table table-hover">
          {cities.length === 0 ? null : (
            <thead>
              <tr>
                <th scope="col">City</th>
                <th scope="col">Temperature (F)</th>
                <th scope="col">Pressure (hPa)</th>
                <th scope="col">Humidity (%)</th>
              </tr>
            </thead>
          )}
          <tbody>
            {cities.map((city, index) => (
              <Row data={city} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
