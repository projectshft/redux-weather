import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { fetchCity } from './actions'


function App() {
  const [cityInput, setCityInput] = useState('');

  const dispatch = useDispatch();

  const cities = useSelector((state) => state)
  
  console.log(cities)
  
  function onClick () {
    const action = fetchCity(cityInput);
    dispatch(action)
  }

  return (
    <div className="container-fluid">
      <div className="row" >
        <div className="col-md-6 offset-md-3">
          <div className="App">
            <h1>Redux Weather</h1>
            <form>
              <div className="form-group">
              <input 
                type="text" 
                value= {cityInput}
                onChange={e => setCityInput(e.target.value)}
                className="form-control" 
                placeholder="Get a five-day forecast in your favorite cities" />
              </div>
            </form>
          </div>
        </div>
        <div className="col">
          <button type="button" onClick={onClick} className="btn btn-primary">Search</button>
        </div>
        <div className="row">
          <table >
            <thead>
              <tr>
                <th scope="col" style={{'textAlign':'center'}}><b>City</b></th>
                <th scope="col" style={{'textAlign':'center'}}><b>Temperature (F)</b></th>
                <th scope="col" style={{'textAlign':'center'}}><b>Pressure (hPa)</b></th>
                <th scope="col" style={{'textAlign':'center'}}><b>Humidity (%)</b></th>
              </tr>
            </thead>
            <tbody>
              {cities.map(city => (
                <tr key={city.name}>
                  <td>{city.city.name}</td>
                  <td>
                    <Sparklines data={city.list[0].main.temp}>
                      <SparklinesLine color="blue" style={{ fill: "none" }}/>
                      <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                  </td>
                  <td>
                    <Sparklines data={[0,100,50,20]}>
                      <SparklinesLine color="orange" style={{ fill: "none" }}/>
                      <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                  </td>
                  <td>
                    <Sparklines data={[0,100,50,20]}>
                      <SparklinesLine color="green" style={{ fill: "none" }}/>
                      <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                  </td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
