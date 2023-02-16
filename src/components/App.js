import React, {useState} from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import {fetchWeather} from './actions/fetchWeather';
import 'bootstrap/dist/css/bootstrap. min. css'


function App() {

  const [city, setCity] = useState('');

  const weatherSelector = useSelector((state) => state)
  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));
  


  const getWeatherInfo = (e) => {
    e.preventDefault();
    if(city === ''){
      console.log('please input a city')
    }else{
      getWeatherInfoAction(city);
      console.log(weatherSelector.weatherinfo)
  }
}

let weatherReport = () => {
if(weatherSelector.weatherinfo && weatherSelector.weatherinfo.hasOwnProperty('location')){
            <div className='details'>
              <h4>Weather Report</h4>
              <p>
                {weatherSelector.weatherinfo.location.name}
                <span>
                  {weatherSelector.weatherinfo.location.country}
                </span>
              </p>

              <p>
                {weatherSelector.weatherinfo.current.temp_f}F</p>
                <img alt='icon' src={weatherSelector.weatherinfo.current.condition.icon} />
                <p>
                  {weatherSelector.weatherinfo.current.condition.text}
                </p>
              
  </div>
}else{
   console.log('please type a city');
             
}


  return (
    <React.Fragment>
     <div className="App">
        <header>
         <h1>Weather</h1>
        </header>
      </div>

      <main>
        <form onSubmit={getWeatherInfo}>
          <div className='control'>
            <input type='text' name='name' placeholder='City' 
             onChange={e => setCity(e.target.value)}/>
          </div>

          <input type='submit' value='Check Weather' />
        </form>
      </main>
    </React.Fragment>
  );
}
}
export default App;
