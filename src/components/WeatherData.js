import React from "react";
import Charts from "./Charts";
//redux
import { useSelector } from "react-redux";
//style
import styled from "styled-components";

const WeatherData = () => {
  const { weatherData } = useSelector((state) => state.weather);

  return (
    <StyledWeatherData>
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
            key={c.city.name}
          />
        ))}
      </StyledWeatherInfo>
    </StyledWeatherData>
  );
};

const StyledWeatherData = styled.div`
  margin-top: 3rem;
  padding: 0rem 15rem;
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
