import axios from 'axios';

const upperFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

export function displayWeather(query) {
  const c = upperFirstLetter(query);
  const geoCoding = axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=88f3a5b06c7349e901851ad64cc7758c`
  );
  const { lat } = geoCoding;
  const { lon } = geoCoding;

  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=88f3a5b06c7349e901851ad64cc7758c`
  );

  const data = {
    city: c,
    temp: request.main.temp,
    hum: request.main.humidity,
    pressure: request.main.pressure,
  };

  console.log(data);

  return {
    type: 'DISPLAY_WEATHER',
    payload: data,
  };
}
