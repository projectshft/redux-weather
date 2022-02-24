import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../actions";

function WeatherRow() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("Paris"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const weather = useSelector((state) => state.weather);
  console.log(weather);

  //   renderWeather(weather) {
  //     const city = weather.weatherInfo.city.name;;
  //     const temp = cityData.list.map(weather => weather.main.temp);
  //     const humidity = cityData.list.map(weather => weather.main.humidity);
  //     const pressure = cityData.list.map(weather => weather.main.pressure);

  //     return (
  //         <tr key={city}>
  //            <th scope="col">{city}</th>
  //             <td>
  //                 <Chart height={120} width={170} data={temps} color='red' units='Celsius' />
  //             </td>
  //             <td>
  //                 <Chart height={120} width={170} data={humidities} color='blue' units='%' />
  //             </td>
  //             <td>
  //                 <Chart height={120} width={170} data={pressures} color='green' units='hPa' />
  //             </td>
  //         </tr>
  //     )
  // }

  // const city = weather.weatherInfo.city.name;
  // console.log("city", city);

  // function renderWeather() {
  //   if (!_.isEmpty(weather)) {
  //     return weather;
  //   }

  //   return <div>There is no weather to show for that city</div>;
  // }

  return (
    <tr>
      <th scope="col">city</th>
      <td>temp graph</td>
      <td>pressure</td>
      <td>humidity</td>
    </tr>
  );
}

export default WeatherRow;
