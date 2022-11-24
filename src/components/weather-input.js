import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {fetchWeather} from '../actions'



const WeatherInput = () => {
    const [city, setCity] = useState('')
    const dispatch = useDispatch();
    const handleClick = (city) => { 
        dispatch(fetchWeather(city))
    }

    return(
        <div>
            <h5> Get weather data by city: </h5>
        <input className="form-group" onChange={(e) => setCity(e.target.value)}></input>
        <button className="btn btn-primary form-group" type="button" onClick={() => handleClick(city)}>Submit</button>
        </div>
    )
}

export default WeatherInput;