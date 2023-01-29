import { useState } from "react";
import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import store from "../store/store";

const WeatherTableData = () => {
  const cityInfo = useSelector((state) => state.forecasts)
  // const tempAverage = cityInfo[temperature] => cityInfo.[temperature].reduce((a, b) => a + b) / cityInfo.temperature.length;
  console.log(cityInfo);

  return (
  <>
    { cityInfo ?
      <tr className="text-center">
        <td className="align-middle">{cityInfo.city}</td>
          <td>
            <Sparklines data={cityInfo.temperature}>
              <SparklinesLine color="orange" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </td>
          <td>
          <Sparklines data={cityInfo.pressure}>
              <SparklinesLine color="blue" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </td>
          <td>
          <Sparklines data={cityInfo.humidity}>
              <SparklinesLine color="blue" />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </td>
      </tr>
      : <tr></tr>
    }
  </>
  )
}

export default WeatherTableData