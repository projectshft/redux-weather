import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
  const city = useSelector(({ weather }) => weather[0]?.city);
  const humidity = useSelector(({ weather }) => weather[0]?.hum);
  const temp = useSelector(({ weather }) => weather[0]?.temp);
  const pressure = useSelector(({ weather }) => weather[0]?.pressure);
  return (
    <div>
      In {city} humidity is {humidity}, temp is {temp}, pressure is {pressure}
    </div>
  );
};

export default WeatherDisplay;
