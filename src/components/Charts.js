import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";
import styled from "styled-components";
//redux
import { useSelector, useDispatch } from "react-redux";
import { makeDefaultCity } from "../actions/makeDefaultAction";

const Charts = ({ name, temp, pressure, humidity }) => {
  const dispatch = useDispatch();

  const { defaultCity, defaultCityData } = useSelector(
    (state) => state.default
  );

  const handleDefaultButton = () => {
    localStorage.setItem("city", name);

    dispatch(makeDefaultCity());
  };

  return (
    <StyledRow>
      <h3 className="city-name">{name}</h3>
      <button
        onClick={handleDefaultButton}
        style={defaultCity ? { display: "none" } : { display: "block" }}
      >
        Set as Default
      </button>

      <StyledCharts>
        <Sparklines data={temp} width={100} height={60}>
          <SparklinesLine color="#48484A" />
          <SparklinesReferenceLine type="median" />
        </Sparklines>
        <p>{Math.round(temp[20])}F</p>
      </StyledCharts>

      <StyledCharts>
        <Sparklines data={pressure} width={100} height={60}>
          <SparklinesLine color="#48484A" />
          <SparklinesReferenceLine type="median" />
        </Sparklines>
        <p>{pressure[20]}hPa</p>
      </StyledCharts>

      <StyledCharts>
        <Sparklines data={humidity} width={100} height={60}>
          <SparklinesLine color="#48484A" />
          <SparklinesReferenceLine type="median" />
        </Sparklines>
        <p>{humidity[20]}%</p>
      </StyledCharts>
    </StyledRow>
  );
};

const StyledRow = styled.div`
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-weight: lighter;
    padding-top: 5rem;
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
