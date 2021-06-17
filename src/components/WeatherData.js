import React from "react";
import Charts from "./Charts";
//redux
import { useSelector } from "react-redux";
//style
import styled from "styled-components";

const WeatherData = () => {
  const { weatherData } = useSelector((state) => state.weather);
  const { currentWeather, isLoading } = useSelector((state) => state.default);

  const {
    defaultCityTemp,
    defaultCityPressure,
    defaultCityHumidity,
    defaultCity,
  } = useSelector((state) => state.default);

  const icon = () => {
    let iconURL;
    if (!isLoading) {
      iconURL = `http://openweathermap.org/img/wn/${currentWeather.data.weather[0].icon}.png`;
    }
    return iconURL;
  };

  /*
    <StyledWeatherInfo>
        <Charts
          name={defaultCity}
          temp={defaultCityTemp}
          pressure={defaultCityPressure}
          humidity={defaultCityHumidity}
        />
      </StyledWeatherInfo>
*/

  return (
    <StyledWeatherData>
      <>
        {!isLoading && (
          <div
            className="current-default-weather"
            style={defaultCity ? { display: "block" } : { display: "none" }}
          >
            <h3>{defaultCity}</h3>
            <p>{Math.round(currentWeather.data.main.temp)}F</p>
            <img src={icon()} alt="icon"></img>
            <div className="icon"></div>
          </div>
        )}
      </>
      <StyledHeaderText>
        <li>City</li>
        <li>Temperature (F)</li>
        <li>Pressure (hPa)</li>
        <li>Hummidity (%)</li>
      </StyledHeaderText>
      <StyledLine />

      <StyledWeatherInfo>
        {weatherData.map((c) => (
          <Charts
            name={c.city.name}
            temp={c.list.map((t) => {
              return t.main.temp;
            })}
            pressure={c.list.map((p) => {
              return p.main.pressure;
            })}
            humidity={c.list.map((h) => {
              return h.main.humidity;
            })}
            key={c.city.name} //need an actual key
          />
        ))}
      </StyledWeatherInfo>
    </StyledWeatherData>
  );
};

const StyledWeatherData = styled.div`
  margin-top: 3rem;
  padding: 0rem 15rem;
  .current-default-weather {
    text-align: center;
  }
`;

const StyledHeaderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0rem 2rem;
  font-weight: bold;
`;

const StyledLine = styled.hr`
  height: 0.3rem;
  background: #ec6e4c;
  width: 100%;
  margin-top: 0.2rem;
  margin-bottom: 2rem;
  border: none;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
`;

const StyledWeatherInfo = styled.div`
  min-height: 20vh;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 5rem;
`;

export default WeatherData;
