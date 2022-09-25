/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from 'axios';

const upperFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

const averDataPerEachDay = (obj) => {
  let sumTemp1 = 0;
  for (let i = 0; i < 8; i++) {
    const hourly = obj.data.list[i].main.temp;
    sumTemp1 = hourly + sumTemp1;
  }

  let sumTemp2 = 0;
  for (let i = 8; i > 7 && i < 16; i++) {
    const hourly = obj.data.list[i].main.temp;
    sumTemp2 = hourly + sumTemp2;
  }

  let sumTemp3 = 0;
  for (let i = 16; i > 15 && i < 24; i++) {
    const hourly = obj.data.list[i].main.temp;
    sumTemp3 = hourly + sumTemp3;
  }

  let sumTemp4 = 0;
  for (let i = 24; i > 23 && i < 32; i++) {
    const hourly = obj.data.list[i].main.temp;
    sumTemp4 = hourly + sumTemp4;
  }

  let sumTemp5 = 0;
  for (let i = 32; i > 31 && i < 40; i++) {
    const hourly = obj.data.list[i].main.temp;
    sumTemp5 = hourly + sumTemp5;
  }

  let sumPr1 = 0;
  for (let i = 0; i < 8; i++) {
    const hourly = obj.data.list[i].main.pressure;
    sumPr1 = hourly + sumPr1;
  }

  let sumPr2 = 0;
  for (let i = 8; i > 7 && i < 16; i++) {
    const hourly = obj.data.list[i].main.pressure;
    sumPr2 = hourly + sumPr2;
  }

  let sumPr3 = 0;
  for (let i = 16; i > 15 && i < 24; i++) {
    const hourly = obj.data.list[i].main.pressure;
    sumPr3 = hourly + sumPr3;
  }

  let sumPr4 = 0;
  for (let i = 24; i > 23 && i < 32; i++) {
    const hourly = obj.data.list[i].main.pressure;
    sumPr4 = hourly + sumPr4;
  }

  let sumPr5 = 0;
  for (let i = 32; i > 31 && i < 40; i++) {
    const hourly = obj.data.list[i].main.pressure;
    sumPr5 = hourly + sumPr5;
  }

  let sumHum1 = 0;
  for (let i = 0; i < 8; i++) {
    const hourly = obj.data.list[i].main.humidity;
    sumHum1 = hourly + sumHum1;
  }

  let sumHum2 = 0;
  for (let i = 8; i > 7 && i < 16; i++) {
    const hourly = obj.data.list[i].main.humidity;
    sumHum2 = hourly + sumHum2;
  }

  let sumHum3 = 0;
  for (let i = 16; i > 15 && i < 24; i++) {
    const hourly = obj.data.list[i].main.humidity;
    sumHum3 = hourly + sumHum3;
  }

  let sumHum4 = 0;
  for (let i = 24; i > 23 && i < 32; i++) {
    const hourly = obj.data.list[i].main.humidity;
    sumHum4 = hourly + sumHum4;
  }

  let sumHum5 = 0;
  for (let i = 32; i > 31 && i < 40; i++) {
    const hourly = obj.data.list[i].main.humidity;
    sumHum5 = hourly + sumHum5;
  }
  return {
    temp: [
      Math.round(sumTemp1 / 8),
      Math.round(sumTemp2 / 8),
      Math.round(sumTemp3 / 8),
      Math.round(sumTemp4 / 8),
      Math.round(sumTemp5 / 8),
    ],
    pressure: [sumPr1 / 8, sumPr2 / 8, sumPr3 / 8, sumPr4, sumPr5],
    humidity: [sumHum1 / 8, sumHum2 / 8, sumHum3 / 8, sumHum4 / 8, sumHum5 / 8],
  };
};

export async function fetchWeather(query) {
  const cityUppercase = upperFirstLetter(query);
  const latLon = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=88f3a5b06c7349e901851ad64cc7758c`
  );

  const { lat } = latLon.data[0];
  const { lon } = latLon.data[0];
  const request = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=88f3a5b06c7349e901851ad64cc7758c&units=imperial`
  );

  const newData = averDataPerEachDay(request);
  const dataWeather = {
    city: cityUppercase,
    ...newData,
  };
  console.log(dataWeather);
  return {
    type: 'FETCH_WEATHER',
    payload: dataWeather,
  };
}
