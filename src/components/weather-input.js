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
        <input onChange={(e) => setCity(e.target.value)}></input>
        <button type="button" onClick={() => handleClick(city)}>Submit</button>
        </div>
    )
}

export default WeatherInput;