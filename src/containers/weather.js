import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
  const city = useSelector((state) => state.city);
  const humidity = useSelector((state) => state.hum);
  const temp = useSelector((state) => state.temp);
  const pressure = useSelector((state) => state.pressure);
  return (
    <div>
      In {city} humidity is {humidity}, temp is {temp}, pressure is {pressure}
    </div>
  );
};

export default WeatherDisplay;
