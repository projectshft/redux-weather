import CitySearch from './CitySearch';
import CityWeatherList from './CityWeatherList';

const MainPage = () => {
  return (
    <div className="container-fluid text-center">
      <h1>5 Day Forecasts</h1>
      <CitySearch />
      <CityWeatherList />
    </div>
  )
}

export default MainPage