import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentWeatherByCity } from '../../Features/city/currentWeatherSlice';

const CurrentWeather = () => {
  const weatherData = useSelector((state) => state.currentWeather.currentCityData);
  const currentCity = useSelector((state) => state.currentCity.city);
  const loadingState = useSelector((state) => state.currentWeather.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeatherByCity(currentCity));
  }, [currentCity]);

  let content;

  switch (loadingState) {
    case 'pending':
      content = <div className="">Loading...</div>;
      break;
    case 'success':
      content = (
        <>
          <div className="text-2xl">{weatherData.name}</div>
          <img
            className="object-scale-down"
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
            alt="weather-icon"
          />
          <div className="text-lg font-light text-gray-700">{weatherData.weather[0].main}</div>
          <div className="text-5xl font-semibold">{`${Math.round(weatherData.main.temp)}\xB0`}</div>
        </>
      );
      break;
    case 'error':
      content = <div>Error...</div>;
      break;
    case 'not-found':
      content = <div className="">Not Found...</div>;
      break;
    default:
      content = null;
  }

  return (
    <div className="w-5/6">
      <div className="flex h-80 w-full flex-col items-center rounded-lg bg-white p-2 shadow-md">{content}</div>
    </div>
  );
};

export default CurrentWeather;
