import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, setDefaultCity } from "../actions";
import WeatherTD from "./WeatherTD";
import { loadState } from "../localStorage";
import _ from "lodash";

const WeatherData = () => {
  const handleSetDefault = (e, id) => {
    e.preventDefault();
    const defaultCity = cityWeather.cities.filter((city) => {
      return city.id === id;
    });

    const defaultCityName = defaultCity[0].city_name;
    dispatch(setDefaultCity(defaultCityName));
    alert(defaultCityName + " is now your default city.");
  };

  const cityWeather = useSelector((state) => state.cityWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    const defaultCity = loadState();
    if (defaultCity !== null) {
      dispatch(fetchWeather(defaultCity));
    }
  }, []);

  if (!_.isEmpty(cityWeather.cities)) {
    return cityWeather.cities.map((city) => (
      <tr key={city.id}>
        <td>{city.city_name}</td>
        <WeatherTD data={city.temperature} />
        <WeatherTD data={city.pressure} />
        <WeatherTD data={city.humidity} />
        <td className="text-center">
          <button
            type="button"
            className="btn btn-success"
            key={city.id}
            onClick={(e) => {
              handleSetDefault(e, city.id);
            }}
          >
            Set as Default
          </button>
        </td>
      </tr>
    ));
  }
  return (
    <tr>
      <td>No city to show</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default WeatherData;
