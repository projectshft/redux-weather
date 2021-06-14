import React from "react";
import { useSelector } from "react-redux";
import WeatherData from "./WeatherData";

const CityWeatherData = () => {
  const cityWeather = useSelector((state) => state.cityWeather);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col" className="text-center">
              Temperature (F)
            </th>
            <th scope="col" className="text-center">
              Pressure (hPa)
            </th>
            <th scope="col" className="text-center">
              Humidity (%)
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <WeatherData />
        </tbody>
      </table>
      <div className="text-center">
        <iframe
          title={cityWeather.city_name}
          width="550"
          height="400"
          loading="lazy"
          allowFullScreen
          src={cityWeather.mapURL}
        ></iframe>
      </div>
    </div>
  );
};

export default CityWeatherData;
