import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

const Row = ({ data }) => {
  return (
    <tr>
      <th className="align-middle" scope="row">
        {data.name}
      </th>
      <td>
        <Sparklines data={data.temp}>
          <SparklinesLine />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <h5>{`${data.avgTemp}°F`}</h5>
      </td>
      <td>
        <Sparklines data={data.pressure}>
          <SparklinesLine color="green" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <h5>{`${data.avgPres} hPa`}</h5>
      </td>
      <td>
        <Sparklines data={data.humidity}>
          <SparklinesLine color="orange" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <h5>{`${data.avgHum}%`}</h5>
      </td>
    </tr>
  );
};

export default Row;
