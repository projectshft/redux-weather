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
      <h1>Redux Weather App</h1>
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
    
        <Charts forecast={forecast} />
    </main>
  )
}

export default App;