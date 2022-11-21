import CurrentWeather from './CurrentWeather';
import PreviousCities from './PreviousCities';
import SearchCities from './SearchCities';

const Sidebar = () => (
  <div className=" mr-5 flex w-80 grow-0 flex-col items-center justify-start overflow-hidden bg-blue-500 shadow-md">
    <SearchCities />
    <CurrentWeather />
    <PreviousCities />
  </div>
);

export default Sidebar;
