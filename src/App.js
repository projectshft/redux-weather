import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './actions';
import Charts from './components/Charts';

function App() {
  const [city, setCity] = useState("");
  const forecast = useSelector((state) => state.forecast)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setCity(e.target.value);
  }

  const handleChange = (e) => {
    dispatch(fetchWeather(city));
  }

  return (
    <main>
      <div className="row">
        <input 
          type="text"  
          placeholder="Search by city name" 
          onChange={handleSubmit} 
          value={city}>
        </input>
      </div>
      <div className="col">
        <button onClick={handleChange}>Get Weather</button>
      </div>
    
      <div className="row">
        <table>
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Temp</th>
              <th scope="col">Pressure</th>
              <th scope="col">Humidity</th>
            </tr>
          </thead>
        </table>
        <Charts forecast={forecast} />
      </div>
    </main>
  )
}

export default App;