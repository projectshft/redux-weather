import CitySearch from './CitySearch';
import CityWeatherList from './CityWeatherList';
import DefaultCityUI from './DefaultCityUI';

const MainPage = () => {
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