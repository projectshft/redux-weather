import { useGetWeatherQuery } from '../Features/api/apiSlice';
import CurrentWeather from './CurrentWeather';
import PreviousCities from './PreviousCities';
import SearchCities from './SearchCities';

const Sidebar = () => {
  const { data: weather, isLoading, isSuccess, isError, error } = useGetWeatherQuery();

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = <CurrentWeather weather={weather} />;
  } else if (isError) {
    content = <div>error</div>;
  }

  return (
    <div className="flex w-96 grow-0 flex-col items-center rounded-r-3xl bg-blue-400">
      <SearchCities />
      {content}
      <PreviousCities />
    </div>
  );
};

export default Sidebar;
