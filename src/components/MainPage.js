import { useDispatch } from 'react-redux';
import { changeDefaultCity, fetchForecast } from '../actions';
import CitySearch from './CitySearch';
import CityWeatherList from './CityWeatherList';
import DefaultCityUI from './DefaultCityUI';

const MainPage = () => {
  const dispatch = useDispatch();

  const loadDefaultCityInfo = () => {
    if(localStorage.getItem('defaultCity')) {
      dispatch(fetchForecast(localStorage.getItem('defaultCity')))
      dispatch(changeDefaultCity(localStorage.getItem('defaultCity')))
    }
  }

  loadDefaultCityInfo();

  return (
    <div className="container-fluid text-center">
      <h1>5 Day Forecasts</h1>
      <CitySearch />
      <DefaultCityUI />
      <CityWeatherList />
    </div>
  )
}

export default MainPage