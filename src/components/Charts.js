import React from "react";
//sparklines
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";
import styled from "styled-components";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  makeDefaultCity,
  loadDefaultCityForecast,
  loadDefaultCityCurrent,
} from "../actions/makeDefaultAction";
import { findAverage } from "../util";

const Charts = ({ name, temp, pressure, humidity }) => {
  //redux
  const dispatch = useDispatch();
  const { defaultCity } = useSelector((state) => state.default);

  //event handlers
  const handleDefaultButton = () => {
    localStorage.setItem("city", name);

    dispatch(makeDefaultCity());
    dispatch(loadDefaultCityForecast(localStorage.getItem("city")));
    dispatch(loadDefaultCityCurrent(localStorage.getItem("city")));
  };

  return (
    <StyledRow>
      <button
        onClick={handleDefaultButton}
        style={defaultCity ? { display: "none" } : { display: "block" }}
      >
        Default
      </button>

      <h3 className="city-name">{name}</h3>

      <StyledCharts>
        <Sparklines data={temp} width={100} height={60}>
          <SparklinesLine color="#48484A" />
          <SparklinesReferenceLine type="median" />
        </Sparklines>
        <p>{findAverage(temp)}F</p>
      </StyledCharts>

      <StyledCharts>
        <Sparklines data={pressure} width={100} height={60}>
          <SparklinesLine color="#48484A" />
          <SparklinesReferenceLine type="median" />
        </Sparklines>
        <p>{findAverage(pressure)}hPa</p>
      </StyledCharts>

      <StyledCharts>
        <Sparklines data={humidity} width={100} height={60}>
          <SparklinesLine color="#48484A" />
          <SparklinesReferenceLine type="median" />
        </Sparklines>
        <p>{findAverage(humidity)}%</p>
      </StyledCharts>
    </StyledRow>
  );
};

//styling
const StyledRow = styled.div`
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-weight: lighter;
    padding-top: 5rem;
  }
  button {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    margin-top: 5rem;
    border: 2px solid #48484a;
    background: transparent;
    color: white;
    background-color: #48484a;
    transition: all 0.3s ease;
    &:hover {
      background-color: #ec6e4c;
      color: white;
    }
  }
`;

const StyledCharts = styled.div`
  width: 20%;
  height: 40%;
  p {
    text-align: center;
  }
`;

export default Charts;
