import React from "react";

import { Sparklines, SparklinesLine } from "react-sparklines";
import styled from "styled-components";

const Charts = ({ name, temp, pressure, humidity }) => {
  return (
    <StyledRow>
      <h3>{name}</h3>

      <StyledCharts>
        <Sparklines data={temp} width={100} height={60}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </StyledCharts>

      <StyledCharts>
        <Sparklines data={pressure} width={100} height={60}>
          <SparklinesLine color="green" />
        </Sparklines>
      </StyledCharts>

      <StyledCharts>
        <Sparklines data={humidity} width={100} height={60}>
          <SparklinesLine color="gray" />
        </Sparklines>
      </StyledCharts>
    </StyledRow>
  );
};

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-weight: lighter;
  }
`;

const StyledCharts = styled.div`
  width: 20%;
  height: 50%;
`;

export default Charts;
