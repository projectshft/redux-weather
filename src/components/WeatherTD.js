import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";
import _ from "lodash";

const WeatherTD = ({ data }) => {
  return (
    <td className="text-center">
      <Sparklines data={data}>
        <SparklinesLine />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      Avg. {_.round(_.mean(data), 0)} °F
    </td>
  );
};
export default WeatherTD;
