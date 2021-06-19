import React from "react";
//redux
import { useSelector } from "react-redux";
//style
import styled from "styled-components";

import { findAverage } from "../util";

const DefaultCity = () => {
  //redux
  const {
    defaultCity,
    currentWeather,
    isLoading,
    defaultForecastTemp,
    defaultForecastPressure,
    defaultForecastHumidity,
  } = useSelector((state) => state.default);

  //function to get icon url for default city
  const icon = () => {
    let iconURL;
    if (!isLoading) {
      iconURL = `http://openweathermap.org/img/wn/${currentWeather}.png`;
    }
    return iconURL;
  };

  return (
    <StyledDefaultCity>
      {!isLoading && (
        <StyledCurrentWeather>
          <div className="weather-details">
            <h3>{defaultCity}</h3>
            <p>{findAverage(defaultForecastTemp)}F</p>
            <p>{findAverage(defaultForecastPressure)}hPa</p>
            <p>{findAverage(defaultForecastHumidity)}%</p>
          </div>
          <div className="weather-icon">
            <img src={icon()} alt="icon"></img>
          </div>
        </StyledCurrentWeather>
      )}
    </StyledDefaultCity>
  );
};

//styling
const StyledDefaultCity = styled.div`
  width: 50%;
  padding: 0 25%;
`;
const StyledCurrentWeather = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 2rem 0rem;
  padding-right: 2rem;
  h3 {
    padding-bottom: 0.5rem;
  }
  p {
    font-size: 0.9rem;
  }
`;

export default DefaultCity;
