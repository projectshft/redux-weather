import convertKtoF from '../helpers/convertKtoF';
import convertUTCtoHour from '../helpers/convertUTCtoHour';

const HourSnippet = ({ hour }) => (
  <div className="m-2 flex h-auto basis-1  flex-col items-center justify-evenly rounded bg-white px-4 py-2 shadow-md">
    <div className="flex">{convertUTCtoHour(hour.dt)}</div>
    <img className="flex" src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt="" />
    <div className="flex">{Math.round(convertKtoF(hour.main.temp))}</div>
  </div>
);

export default HourSnippet;
