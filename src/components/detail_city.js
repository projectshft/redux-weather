import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

export default function DetailCity({city}) {
  const dataAverage = function (data) {
    const total = data.reduce((acc, c) => acc + c, 0);
    return Math.round(total / data.length);
  }

  return (
    <tr>
      <td>{city.city}</td>
      <td>
        <Sparklines data={city.temp}>
          <SparklinesLine />
          <SparklinesReferenceLine type="avg" />
        </Sparklines> 
        {dataAverage(city.temp)}
      </td>
      <td>
        <Sparklines data={city.pressure}>
          <SparklinesLine />
          <SparklinesReferenceLine type="avg" />
        </Sparklines> 
        {dataAverage(city.pressure)}
      </td>
      <td>
        <Sparklines data={city.humidity}>
          <SparklinesLine />
          <SparklinesReferenceLine type="avg" />
        </Sparklines> 
        {dataAverage(city.humidity)}
      </td>
    </tr>
  )
}

