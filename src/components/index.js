import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, setDefaultCity } from "../actions";
import React, { useEffect } from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";
import _ from "lodash";
import { loadState } from "../localStorage";

const CityWeatherData = () => {
  const cityWeather = useSelector((state) => state.cityWeather);
  const dispatch = useDispatch();

  const handleSetDefault = (e, id) => {
    const defaultCity = cityWeather.cities.filter((city) => {
      return city.id === id;
    });

    const defaultCityName = defaultCity[0].city_name;
    e.preventDefault();
    dispatch(setDefaultCity(defaultCityName));
    alert(defaultCityName + " is now your default city.");
  };

  useEffect(() => {
    const defaultCity = loadState();
    if (defaultCity !== null) {
      dispatch(fetchWeather(defaultCity));
    }
  }, []);

  function renderWeatherData() {
    if (!_.isEmpty(cityWeather.cities)) {
      return cityWeather.cities.map((city) => (
        <tr key={city.id}>
          <td>{city.city_name}</td>
          <td className="text-center">
            <Sparklines data={city.temperature}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            Avg. {_.round(_.mean(city.temperature), 0)} °F
          </td>
          <td className="text-center">
            <Sparklines data={city.pressure}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            Avg. {_.round(_.mean(city.pressure), 0)} hPa
          </td>
          <td className="text-center">
            <Sparklines data={city.humidity}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            Avg. {_.round(_.mean(city.humidity), 0)} %
          </td>
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
  }

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
        <tbody>{renderWeatherData()}</tbody>
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
