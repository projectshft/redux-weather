import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { fetchWeather } from './actions';
import Charts from './components/Charts';

function App() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setCity(e.target.value);
  }

  const handleChange = (e) => {
    dispatch(fetchWeather(city));
  }

  return (
    <main>
      <h1 style={{ 'display': 'flex', 'justifyContent' : 'center'}} >
        Redux Weather App </h1>
      <div className="row"
        style={{ 'display': 'flex', 'justifyContent' : 'center'}} >
        <input 
          type="text"  
          placeholder="Search by city name" 
          onChange={handleSubmit} 
          value={city}
          style={{'width':'300px', 'height' :'40px', 'marginBottom': '50px'}}
          >
        </input>
        <button 
          style={{'width':'100px', 'height' :'45px', 'fontSize':'14px'}}
          onClick={handleChange}>
          Get Weather
        </button>
      </div>
    
      <Charts/>

    </main>
  )
}

export default App;