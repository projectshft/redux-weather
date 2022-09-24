/* eslint-disable no-undef */
import axios from 'axios';

const upperFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

export async function fetchWeather(query) {
  const c = upperFirstLetter(query);
  const latLon = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=88f3a5b06c7349e901851ad64cc7758c`
  );

  const { lat } = latLon.data[0];
  const { lon } = latLon.data[0];

  const request = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=88f3a5b06c7349e901851ad64cc7758c`
  );

  const dataW = {
    city: c,
    temp: request.data.main.temp,
    hum: request.data.main.humidity,
    pressure: request.data.main.pressure,
  };

  console.log(dataW);

  return {
    type: 'FETCH_WEATHER',
    payload: dataW,
  };
}
