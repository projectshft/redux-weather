import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchWeather } from '../actions';
import WeatherList from './render_weather'

const WeatherIndex = () => {
  const results = useSelector(state => state.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchWeather]);

  console.log(results)

  return <WeatherList/>
  
}

export default WeatherIndex 