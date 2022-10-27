import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchFiveDayWeatherByCity } from '../../Features/city/fiveDayWeatherSlice';
import HourSnippet from './HourSnippet';

const HourlyForecast = () => {
  const weatherData = useSelector((state) => state.fiveDayWeather.fiveDayData);
  const currentCity = useSelector((state) => state.currentCity.city);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFiveDayWeatherByCity(currentCity));
  }, [currentCity]);

  let content;

  if (weatherData.length === 0) {
    content = <div>No Data</div>;
  } else {
    content = weatherData.list.map((weather, idx) => <HourSnippet key={idx} weather={weather} />);
  }

  return (
    <div className="flex w-full flex-col">
      <div className=" mb-4 text-2xl">Three Hour Forecast</div>
      <div className="scrollbar mb-3 flex overflow-x-auto rounded-lg bg-gray-100 px-3 shadow-md">{content}</div>
    </div>
  );
};

export default HourlyForecast;
