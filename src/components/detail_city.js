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
          <SparklinesLine style={{stroke: "#F39C6B", fill: "#F6B48E"}} />
          <SparklinesReferenceLine type="avg" style={{stroke: "#2C2C34"}} />
        </Sparklines> 
        {dataAverage(city.temp)}
      </td>
      <td>
        <Sparklines data={city.pressure}>
          <SparklinesLine style={{stroke: "#FF3864", fill: "#FF5C7F"}} />
          <SparklinesReferenceLine type="avg" style={{stroke: "#2C2C34"}} />
        </Sparklines> 
        {dataAverage(city.pressure)}
      </td>
      <td>
        <Sparklines data={city.humidity}>
          <SparklinesLine style={{stroke: "#261447", fill:"#4C288F"}} />
          <SparklinesReferenceLine type="avg" style={{stroke: "#2C2C34"}} />
        </Sparklines> 
        {dataAverage(city.humidity)}
      </td>
    </tr>
  )
}

