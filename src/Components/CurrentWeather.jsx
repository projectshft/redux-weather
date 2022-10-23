import convertKtoF from '../helpers/convertKtoF';

const CurrentWeather = ({ weather }) => {
  const data = weather.list[0];
  return (
    <div className="w-5/6">
      <div className="w-full">Current Weather</div>
      <div className="flex w-full flex-col items-center rounded bg-white p-2">
        <div>{weather.city.name}</div>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather-icon" />
        <div>{Math.round(convertKtoF(data.main.temp))}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
