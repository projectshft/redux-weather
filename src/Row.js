import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";


const Row = ({ data }) => {
  return (
      <tr>
        <th scope="row">
          {data.name}
        </th>
        <td>
          <Sparklines data={data.temp}>
            <SparklinesLine />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={data.pressure}>
            <SparklinesLine />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={data.humidity}>
            <SparklinesLine />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
        </td>
      </tr>
  );
}

export default Row