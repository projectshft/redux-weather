import axios from 'axios';

const API_KEY = 'a4105833f7852b16b55b0723a6b147e5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export async function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}&units=imperial`;
  const request = await axios.get(url).then(function(response){

    const mappedData = () => {
      const avgTemp = [];
      const avgPressure = [];
      const avgHumidity = [];
      const avgData = {
        avgTemp: avgTemp,
        avgPressure: avgPressure,
        avgHumidity: avgHumidity,
      };
      response.data.list.map((item) => {
        console.log('item' , item);
  
        avgData.avgTemp = avgTemp.push(item);
        avgData.avgPressure = avgPressure.push(item);
        avgData.avgHumidity = avgHumidity.push(item);
        return avgData;
      });
      // avgTemp = avgTemp;
      // avgPressure = avgPressure/40;
      // avgHumidity = avgHumidity/40; 
      return avgData;
    }
    const weatherInfo = {
      name: response.data.city.name,
      temp: response.data.list[0].main.temp,
      pressure: response.data.list[0].main.pressure,
      humidity: response.data.list[0].main.humidity,
      avgTemp: mappedData().avgTemp,
      avgPressure: mappedData().avgPressure,
      avgHumidity: mappedData().avgHumidity,
      chartPressure: [
        response.data.list[0].main.pressure,
        response.data.list[8].main.pressure,
        response.data.list[16].main.pressure,
        response.data.list[24].main.pressure,
        response.data.list[32].main.pressure
      ],
      chartTemperature: [
        response.data.list[0].main.temp,
        response.data.list[8].main.temp,
        response.data.list[16].main.temp,
        response.data.list[24].main.temp,
        response.data.list[32].main.temp
      ],
      chartHumidity: [
        response.data.list[0].main.humidity,
        response.data.list[8].main.humidity,
        response.data.list[16].main.humidity,
        response.data.list[24].main.humidity,
        response.data.list[32].main.humidity
      ]
    }
    //add .list to access 40arrays
      // city: 
      
      // temp: response.data.list,
      // pressure: response.data.list,
      // humidity: response.data.list
    console.log('weatherInfo', weatherInfo);
    return weatherInfo;
  });

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}