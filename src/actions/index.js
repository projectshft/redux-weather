import axios from 'axios';

const upperFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

const tempHumPrAverageAndArray = (obj) => {
  const temp = obj.data.list.reduce(
    (acc, a) => {
      const t = a.main.temp;
      acc.tempAver = t + acc.tempAver;
      acc.tempArr.push(t);
      return acc;
    },
    {
      tempAver: 0,
      tempArr: [],
    }
  );
  temp.tempAver = Math.round(temp.tempAver / 40);

  const pressure = obj.data.list.reduce(
    (acc, a) => {
      const pr = a.main.pressure;
      acc.prAver = pr + acc.prAver;
      acc.prArr.push(pr);
      return acc;
    },
    {
      prAver: 0,
      prArr: [],
    }
  );
  pressure.prAver = Math.round(pressure.prAver / 40);

  const humidity = obj.data.list.reduce(
    (acc, a) => {
      const hum = a.main.humidity;
      acc.humAver = hum + acc.humAver;
      acc.humArr.push(hum);
      return acc;
    },
    {
      humAver: 0,
      humArr: [],
    }
  );
  humidity.humAver = Math.round(humidity.humAver / 40);

  return { temp, pressure, humidity };
};

const generateId = () => Math.round(Math.random() * 100000000);

export async function fetchWeather(query) {
  const cityUppercase = upperFirstLetter(query);
  const latLon = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=88f3a5b06c7349e901851ad64cc7758c`
  );
  const { lat } = latLon.data[0];
  const { lon } = latLon.data[0];

  const requestObj = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=88f3a5b06c7349e901851ad64cc7758c&units=imperial`
  );

  const dataWeather = {
    id: generateId(),
    city: cityUppercase,
    ...tempHumPrAverageAndArray(requestObj),
  };

  return {
    type: 'FETCH_WEATHER',
    payload: dataWeather,
  };
}
