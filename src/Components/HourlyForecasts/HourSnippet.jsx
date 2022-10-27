import moment from 'moment';

const HourSnippet = ({ weather }) => (
  <div className="my-5 mr-3 flex h-36 w-28 shrink-0 flex-col items-center justify-evenly rounded bg-white p-4 text-sm shadow-md">
    <div className="flex text-center">{moment.unix(weather.dt).format('ddd')}</div>
    <div className="flex text-center">{moment.unix(weather.dt).format('h:mm:A')}</div>
    <img className="flex h-16 w-16" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
    <div className="flex">{Math.round(weather.main.temp)}</div>
  </div>
);

export default HourSnippet;
